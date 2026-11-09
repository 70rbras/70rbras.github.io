#!/usr/bin/env python3
"""Gera data/programacao.json além de data/resumos-trabalhos.json a partir da planilha.

Duas fontes são aceitas:

  --csv fontes.json   lê as abas publicadas na web em CSV (uso normal, na GitHub Action)
  --xlsx arquivo.xlsx lê a planilha baixada (uso local, exige openpyxl)

O script valida os dados antes de escrever. Quando encontra erro, não grava nada
e termina com código 1, de modo que o site nunca publica uma programação quebrada.

Uso:
    python3 scripts/build_programacao.py --csv scripts/fontes.json -o data/programacao.json
    python3 scripts/build_programacao.py --xlsx planilha.xlsx -o data/programacao.json

São dois arquivos de saída. O primeiro leva a programação inteira, com o resumo
das atividades além do resumo das apresentações que aparecem nela. O segundo leva
o resumo dos pôsteres, consumido apenas pela busca, de modo que o pacote que o
service worker pré-carrega não cresça com centenas de textos longos.
"""
import argparse
import csv
import io
import json
import os
import re
import sys
import unicodedata
import urllib.request
from datetime import datetime, timezone, timedelta

# A aba pessoas_cadastro e a ficha unica, compartilhada com as paginas do site:
# scripts/build_cadastro.mjs gera data/pessoas.js da mesma aba. A aba pessoas
# antiga saiu de cena em 07/11/2026, quando a coluna pessoas_ids terminou de
# migrar para os identificadores longos.
ABAS = ['atividades', 'trabalhos', 'locais', 'pessoas_cadastro', 'config', 'resumos']

# A aba resumos guarda o texto longo de atividade e de apresentacao numa fonte
# so, encontrado pela coluna ref. Ela e opcional: planilha baixada antes de
# 09/11/2026 nao a tem, e a ausencia dela nao impede a geracao.
ABAS_OPCIONAIS = {'resumos'}

# Modalidades cujo resumo sai num arquivo proprio, carregado so pela busca. Os
# posteres sao 360, portanto embuti-los na programacao levaria o arquivo que o
# service worker pre-carrega de algo proximo de 150 KB para mais de 600 KB, o
# que pesaria na instalacao do aplicativo sem servir a escolha de sessao.
MODALIDADES_FORA = {'poster'}

# Limite de caracteres da coluna descricao, que e exibida dentro do cartao da
# programacao. Texto mais longo que isso pertence a coluna resumo, que so
# aparece no dialogo de detalhes. Passar do limite gera aviso, nao erro.
LIMITE_DESCRICAO = 140

DIAS_SEMANA = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira',
               'Sexta-feira', 'Sábado', 'Domingo']
DIAS_CURTO = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom']
MESES = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho',
         'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']


def norm(s):
    if s is None:
        return ''
    return str(s).strip()


def slug(s):
    s = unicodedata.normalize('NFKD', norm(s)).encode('ascii', 'ignore').decode()
    return re.sub(r'[^a-z0-9]+', '-', s.lower()).strip('-')


def hora(v):
    """Aceita 08:00, 8:00, 08:00:00 ou fração de dia e devolve HH:MM."""
    v = norm(v)
    if not v:
        return ''
    m = re.match(r'^(\d{1,2}):(\d{2})', v)
    if m:
        return '%02d:%02d' % (int(m.group(1)), int(m.group(2)))
    try:
        f = float(v.replace(',', '.'))
    except ValueError:
        return v
    if 0 <= f < 1:
        total = round(f * 1440)
        return '%02d:%02d' % (total // 60, total % 60)
    return v


def data_iso(v):
    v = norm(v)
    if re.fullmatch(r'\d{4}-\d{2}-\d{2}', v):
        return v
    m = re.fullmatch(r'(\d{2})/(\d{2})/(\d{4})', v)
    if m:
        return '%s-%s-%s' % (m.group(3), m.group(2), m.group(1))
    m = re.match(r'(\d{4}-\d{2}-\d{2})[T ]', v)
    if m:
        return m.group(1)
    return v


def minutos(h):
    m = re.fullmatch(r'(\d{2}):(\d{2})', h or '')
    return int(m.group(1)) * 60 + int(m.group(2)) if m else 10 ** 6


def sim(v):
    return norm(v).upper() in ('SIM', 'S', 'TRUE', 'VERDADEIRO', 'X', '1')


def rotulos(iso):
    try:
        d = datetime.strptime(iso, '%Y-%m-%d')
    except ValueError:
        return iso, iso
    i = d.weekday()
    return ('%s, %d de %s de %d' % (DIAS_SEMANA[i], d.day, MESES[d.month - 1], d.year),
            '%s %02d/%02d' % (DIAS_CURTO[i], d.day, d.month))


# --------------------------------------------------------------------------- fontes
def ler_csv_url(url):
    req = urllib.request.Request(url, headers={'User-Agent': '70rbras-build'})
    with urllib.request.urlopen(req, timeout=60) as r:
        texto = r.read().decode('utf-8-sig')
    linhas = list(csv.reader(io.StringIO(texto)))
    if not linhas:
        return []
    cab = [norm(c) for c in linhas[0]]
    return [dict(zip(cab, [norm(c) for c in linha])) for linha in linhas[1:]]


def ler_de_csv(caminho_fontes):
    with open(caminho_fontes, encoding='utf-8') as f:
        fontes = json.load(f)
    faltando = [a for a in ABAS if a not in fontes and a not in ABAS_OPCIONAIS]
    if faltando:
        sys.exit('fontes.json não traz as abas: %s' % ', '.join(faltando))
    return {aba: ler_csv_url(fontes[aba]) for aba in ABAS if aba in fontes}


def ler_de_xlsx(caminho):
    import openpyxl
    wb = openpyxl.load_workbook(caminho, data_only=True)
    dados = {}
    for aba in ABAS:
        if aba not in wb.sheetnames:
            if aba in ABAS_OPCIONAIS:
                continue
            sys.exit('a planilha não traz a aba %s' % aba)
        ws = wb[aba]
        cab = [norm(c.value) for c in ws[1]]
        linhas = []
        for row in ws.iter_rows(min_row=2, max_col=len(cab)):
            vals = [norm(c.value) for c in row]
            if not any(vals):
                continue
            linhas.append(dict(zip(cab, vals)))
        dados[aba] = linhas
    return dados


# --------------------------------------------------------------------------- build
def construir(dados):
    erros, avisos = [], []

    locais = {}
    for r in dados['locais']:
        lid = norm(r.get('local_id'))
        if not lid:
            continue
        locais[lid] = {
            'id': lid,
            'predio': norm(r.get('predio')),
            'sala': norm(r.get('sala')),
            'nome': norm(r.get('nome_exibicao')) or norm(r.get('sala')) or lid,
            'como_chegar': norm(r.get('como_chegar')),
            'mapa_url': norm(r.get('mapa_url')),
        }
        mapa = locais[lid]['mapa_url']
        if mapa and not mapa.startswith('https://'):
            avisos.append('local %s tem mapa_url fora do padrão https, '
                          'portanto o link não será exibido' % lid)

    # Ficha unica, compartilhada com as paginas do site. A instituicao exibida no
    # cartao e a forma curta, pois a coluna e estreita; sem ela vale a longa.
    cadastro = {}
    for r in dados['pessoas_cadastro']:
        pid = norm(r.get('pessoa_id'))
        if not pid:
            continue
        cadastro[pid] = {'id': pid, 'nome': norm(r.get('nome')),
                         'instituicao': (norm(r.get('instituicao_curta'))
                                         or norm(r.get('instituicao')))}

    config = {}
    for r in dados['config']:
        c = norm(r.get('chave'))
        if c:
            config[c] = norm(r.get('valor'))

    # Aba resumos: uma linha por texto longo, encontrada pela coluna ref, que
    # aceita identificador de atividade ou de apresentacao. Manter o texto numa
    # fonte so evita que a mesma informacao passe a viver em dois lugares.
    resumos = {}
    for r in dados.get('resumos', []):
        ref = norm(r.get('ref'))
        if not ref:
            continue
        if ref in resumos:
            erros.append('aba resumos tem mais de uma linha com ref %s' % ref)
        resumos[ref] = norm(r.get('resumo'))

    atividades = []
    for r in dados['atividades']:
        aid = norm(r.get('id'))
        if not aid or not sim(r.get('publicar')):
            continue
        ini, fim = hora(r.get('inicio')), hora(r.get('fim'))
        dia = data_iso(r.get('data'))
        lid = norm(r.get('local_id'))
        titulo = norm(r.get('titulo'))
        if not titulo:
            erros.append('atividade %s publicada sem título' % aid)
        if not dia:
            erros.append('atividade %s publicada sem data' % aid)
        if ini and fim and minutos(fim) <= minutos(ini):
            erros.append('atividade %s com horário final anterior ao inicial' % aid)
        if lid and lid not in locais:
            erros.append('atividade %s aponta para o local inexistente %s' % (aid, lid))
        if lid == 'A-DEFINIR':
            avisos.append('atividade %s ainda sem local definido' % aid)
        ids_pessoas = [p.strip() for p in norm(r.get('pessoas_ids')).split(';') if p.strip()]
        fichas = []
        for p in ids_pessoas:
            if p in cadastro:
                fichas.append(cadastro[p])
            else:
                avisos.append('atividade %s cita a pessoa desconhecida %s' % (aid, p))
        descricao = norm(r.get('descricao'))
        resumo = resumos.get(aid, '')
        # Transicao: enquanto houver texto na coluna resumo da aba atividades,
        # ele segue valendo, com aviso. A coluna sai da planilha quando a
        # ultima celula tiver migrado para a aba resumos.
        resumo_antigo = norm(r.get('resumo'))
        if resumo_antigo and not resumo:
            resumo = resumo_antigo
            avisos.append('atividade %s ainda guarda o resumo na aba atividades; '
                          'mover a célula para a aba resumos' % aid)
        elif resumo_antigo and resumo_antigo != resumo:
            avisos.append('atividade %s tem resumo nas duas abas, com textos diferentes; '
                          'vale o da aba resumos' % aid)
        elif resumo_antigo:
            avisos.append('atividade %s tem o mesmo resumo nas duas abas; a célula da aba '
                          'atividades pode ser apagada' % aid)
        if len(descricao) > LIMITE_DESCRICAO:
            avisos.append('atividade %s tem descrição de %d caracteres, acima dos %d que o '
                          'cartão comporta; texto longo pertence à coluna resumo'
                          % (aid, len(descricao), LIMITE_DESCRICAO))
        atividades.append({
            'id': aid, 'data': dia, 'inicio': ini, 'fim': fim,
            'tipo': norm(r.get('tipo')), 'tipo_slug': slug(r.get('tipo')),
            'titulo': titulo, 'subtitulo': norm(r.get('subtitulo')),
            'local': locais.get(lid, {'id': lid, 'predio': '', 'sala': '', 'nome': lid}),
            'pessoas': fichas,
            'grupo': norm(r.get('grupo')), 'descricao': descricao, 'resumo': resumo,
            'destaque': sim(r.get('destaque')),
        })

    # conflito de sala
    for i, a in enumerate(atividades):
        for b in atividades[i + 1:]:
            if a['data'] != b['data'] or a['local']['id'] != b['local']['id']:
                continue
            if a['tipo'] in ('Intervalo', 'Refeição') or b['tipo'] in ('Intervalo', 'Refeição'):
                continue
            if not (a['inicio'] and a['fim'] and b['inicio'] and b['fim']):
                continue
            if minutos(a['inicio']) < minutos(b['fim']) and minutos(b['inicio']) < minutos(a['fim']):
                erros.append('conflito de sala entre %s e %s em %s' % (a['id'], b['id'], a['local']['id']))

    ordem_tipo = ['conferencia', 'mini-conferencia', 'sessao-tematica', 'comunicacao-oral',
                  'minicurso', 'sessao-especial', 'poster', 'institucional', 'social',
                  'intervalo', 'refeicao']

    def posicao(a):
        t = a['tipo_slug']
        return ordem_tipo.index(t) if t in ordem_tipo else len(ordem_tipo)

    atividades.sort(key=lambda a: (a['data'], minutos(a['inicio']), posicao(a), a['id']))

    ids_atividades = {a['id'] for a in atividades}
    resumos_fora = {}
    trabalhos = []
    for r in dados['trabalhos']:
        tid = norm(r.get('id_trabalho'))
        if not tid or not sim(r.get('publicar')):
            continue
        sessao = norm(r.get('sessao_id'))
        if sessao and sessao not in ids_atividades:
            erros.append('trabalho %s aponta para a sessão inexistente %s' % (tid, sessao))
        if not sessao:
            avisos.append('trabalho %s publicado sem sessão' % tid)
        # Linha criada para reservar lugar na sessao, publicada antes de o
        # conteudo chegar, produz item vazio na lista do dialogo.
        if not norm(r.get('titulo')):
            avisos.append('trabalho %s publicado sem título' % tid)
        modalidade = norm(r.get('modalidade'))
        # A ordem de fala nao e a ordem de submissao, portanto ela vem da coluna
        # ordem. Valor ausente ou nao numerico deixa o trabalho no fim da lista,
        # onde o desempate pelo numero mantem a sequencia estavel.
        ordem = norm(r.get('ordem'))
        if ordem and not re.fullmatch(r'\d+', ordem):
            avisos.append('trabalho %s tem ordem %r, que nao e numero inteiro, '
                          'portanto foi ignorada' % (tid, ordem))
            ordem = ''
        # Apresentador convidado costuma ter ficha, portanto nome e instituicao
        # saem dela, como manda a regra do cadastro unico. Autor de trabalho
        # submetido segue em texto livre, pois nenhum dos 360 tem ficha.
        pid = norm(r.get('pessoa_id'))
        autor = norm(r.get('autor_apresentador'))
        instituicao = ''
        if pid:
            if pid in cadastro:
                if autor and autor != cadastro[pid]['nome']:
                    avisos.append('trabalho %s traz nome diferente do da ficha %s; '
                                  'vale o da ficha' % (tid, pid))
                autor = cadastro[pid]['nome']
                instituicao = cadastro[pid]['instituicao']
            elif autor:
                avisos.append('trabalho %s cita a pessoa desconhecida %s; vale o nome '
                              'escrito na coluna autor_apresentador' % (tid, pid))
            else:
                # Sem ficha e sem texto livre a apresentacao sairia publicada sem
                # apresentador nenhum, que e falha visivel na lista da sessao.
                erros.append('trabalho %s cita a pessoa desconhecida %s e nao traz '
                             'autor_apresentador, portanto sairia sem apresentador'
                             % (tid, pid))
        resumo_trabalho = resumos.get(tid, '')
        fora = slug(modalidade) in MODALIDADES_FORA
        if resumo_trabalho and fora:
            resumos_fora[tid] = resumo_trabalho
        trabalhos.append({
            'id': tid, 'modalidade': modalidade, 'sessao': sessao,
            'painel': norm(r.get('painel')), 'autor': autor,
            'instituicao': instituicao, 'ordem': int(ordem) if ordem else 0,
            'titulo': norm(r.get('titulo')), 'area': norm(r.get('area_tematica')),
            # O resumo do poster vive no arquivo proprio, portanto aqui fica so a
            # marca de que ele existe: ela permite a busca oferecer o botao sem
            # baixar o arquivo grande.
            'resumo': '' if fora else resumo_trabalho,
            'tem_resumo': bool(resumo_trabalho),
        })

    def chave_num(t):
        try:
            return (0, int(t['id']))
        except ValueError:
            return (1, 0)

    trabalhos.sort(key=chave_num)

    # Duas apresentacoes da mesma sessao disputando o mesmo lugar na sequencia
    # deixam a ordem a cargo do desempate pelo numero do trabalho, que e
    # deterministico. Por isso avisa, em vez de recusar a publicacao inteira.
    por_sessao = {}
    for t in trabalhos:
        if t['sessao'] and t['ordem']:
            por_sessao.setdefault(t['sessao'], {}).setdefault(t['ordem'], []).append(t['id'])
    for sessao in sorted(por_sessao):
        for pos in sorted(por_sessao[sessao]):
            iguais = por_sessao[sessao][pos]
            if len(iguais) > 1:
                avisos.append('sessao %s tem %d apresentacoes com ordem %d: %s'
                              % (sessao, len(iguais), pos, ', '.join(iguais)))

    # Um ref sem destino e erro, pois costuma ser erro de digitacao que deixaria
    # o resumo invisivel sem ninguem perceber. Ref apontando para linha que
    # existe na planilha porem nao esta publicada apenas avisa.
    ids_trabalhos = {t['id'] for t in trabalhos}
    todos_atividades = {norm(r.get('id')) for r in dados['atividades']}
    todos_trabalhos = {norm(r.get('id_trabalho')) for r in dados['trabalhos']}
    for ref in sorted(resumos):
        if ref in ids_atividades or ref in ids_trabalhos:
            continue
        if ref in todos_atividades or ref in todos_trabalhos:
            avisos.append('aba resumos traz %s, que existe na planilha porém não '
                          'está publicado' % ref)
        else:
            erros.append('aba resumos aponta para %s, que não é atividade nem '
                         'apresentação' % ref)

    dias = []
    for d in sorted({a['data'] for a in atividades if a['data']}):
        longo, curto = rotulos(d)
        dias.append({'data': d, 'rotulo': longo, 'rotulo_curto': curto})

    agora = datetime.now(timezone(timedelta(hours=-3)))
    versao = int(agora.strftime('%Y%m%d%H%M'))
    saida = {
        'gerado_em': agora.strftime('%Y-%m-%dT%H:%M:%S%z'),
        'gerado_em_texto': agora.strftime('%d/%m/%Y às %H:%M'),
        # Versão dos dados no formato AAAAMMDDHHMM, derivada do carimbo acima.
        # Serve ao service worker: comparar um inteiro diz se o JSON vindo da
        # rede difere do guardado no aparelho, sem baixar e comparar o
        # documento inteiro. Cresce sozinho a cada geração, portanto não exige
        # ler a saída anterior para saber onde parou.
        'versao_dados': versao,
        'config': config,
        'dias': dias,
        'atividades': atividades,
        'trabalhos': trabalhos,
        'locais': list(locais.values()),
    }
    # Arquivo proprio dos resumos que ficam fora da programacao. Ele carrega a
    # mesma versao do outro, de modo que o aparelho saiba se a copia guardada
    # corresponde a programacao em exibicao.
    resumos_trabalhos = {
        'gerado_em': agora.strftime('%Y-%m-%dT%H:%M:%S%z'),
        'versao_dados': versao,
        'resumos': resumos_fora,
    }
    return saida, resumos_trabalhos, erros, avisos


def resumo_sem_sessao(trabalhos):
    """Linhas de resumo das pendências de alocação, uma por modalidade.

    A validação já recusa trabalho apontando para sessão inexistente, além de
    avisar um a um sobre os que seguem sem sessão. Com centenas de trabalhos
    essa lista não informa o tamanho da pendência, que é o número que a
    comissão acompanha até a véspera. Tarefa D1.4 do plano de fontes únicas.
    """
    contagem = {}
    for t in trabalhos:
        if (t.get('sessao') or '').strip():
            continue
        chave = (t.get('modalidade') or '').strip() or 'sem modalidade'
        contagem[chave] = contagem.get(chave, 0) + 1

    total = sum(contagem.values())
    if not total:
        return ['trabalhos sem sessão alocada: nenhum']

    plural = 'trabalho' if total == 1 else 'trabalhos'
    linhas = ['%d %s sem sessão alocada:' % (total, plural)]
    for modalidade, n in sorted(contagem.items()):
        linhas.append('  %s: %d' % (modalidade, n))
    return linhas


def main():
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    fonte = ap.add_mutually_exclusive_group(required=True)
    fonte.add_argument('--csv', metavar='fontes.json', help='arquivo com as URLs das abas publicadas')
    fonte.add_argument('--xlsx', metavar='arquivo.xlsx', help='planilha baixada do Google Drive')
    ap.add_argument('-o', '--saida', default='data/programacao.json')
    ap.add_argument('--saida-resumos', default='data/resumos-trabalhos.json',
                    metavar='arquivo.json',
                    help='resumos que ficam fora da programação, lidos pela busca')
    ap.add_argument('--permitir-erros', action='store_true',
                    help='grava o arquivo mesmo com erros (use apenas em teste local)')
    args = ap.parse_args()

    dados = ler_de_csv(args.csv) if args.csv else ler_de_xlsx(args.xlsx)
    saida, resumos_trabalhos, erros, avisos = construir(dados)

    for a in avisos:
        print('aviso: %s' % a)
    for linha in resumo_sem_sessao(saida['trabalhos']):
        print(linha)
    for e in erros:
        print('ERRO: %s' % e, file=sys.stderr)

    print('atividades publicadas: %d | trabalhos publicados: %d | dias: %d'
          % (len(saida['atividades']), len(saida['trabalhos']), len(saida['dias'])))
    print('resumos: %d de atividade | %d de apresentação, dos quais %d em arquivo próprio'
          % (len([a for a in saida['atividades'] if a['resumo']]),
             len([t for t in saida['trabalhos'] if t['tem_resumo']]),
             len(resumos_trabalhos['resumos'])))

    if erros and not args.permitir_erros:
        print('\n%d erro(s): nada foi gravado. Corrija a planilha e rode de novo.' % len(erros),
              file=sys.stderr)
        return 1

    os.makedirs(os.path.dirname(args.saida) or '.', exist_ok=True)
    with open(args.saida, 'w', encoding='utf-8') as f:
        json.dump(saida, f, ensure_ascii=False, indent=1)
    print('gravado: %s' % args.saida)

    os.makedirs(os.path.dirname(args.saida_resumos) or '.', exist_ok=True)
    with open(args.saida_resumos, 'w', encoding='utf-8') as f:
        json.dump(resumos_trabalhos, f, ensure_ascii=False, indent=1)
    print('gravado: %s' % args.saida_resumos)
    return 0


if __name__ == '__main__':
    sys.exit(main())
