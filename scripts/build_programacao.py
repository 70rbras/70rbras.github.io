#!/usr/bin/env python3
"""Gera data/programacao.json a partir da planilha da programação da 70ª RBras.

Duas fontes são aceitas:

  --csv fontes.json   lê as abas publicadas na web em CSV (uso normal, na GitHub Action)
  --xlsx arquivo.xlsx lê a planilha baixada (uso local, exige openpyxl)

O script valida os dados antes de escrever. Quando encontra erro, não grava nada
e termina com código 1, de modo que o site nunca publica uma programação quebrada.

Uso:
    python3 scripts/build_programacao.py --csv scripts/fontes.json -o data/programacao.json
    python3 scripts/build_programacao.py --xlsx planilha.xlsx -o data/programacao.json
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

ABAS = ['atividades', 'trabalhos', 'locais', 'pessoas', 'config']

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
    faltando = [a for a in ABAS if a not in fontes]
    if faltando:
        sys.exit('fontes.json não traz as abas: %s' % ', '.join(faltando))
    return {aba: ler_csv_url(fontes[aba]) for aba in ABAS}


def ler_de_xlsx(caminho):
    import openpyxl
    wb = openpyxl.load_workbook(caminho, data_only=True)
    dados = {}
    for aba in ABAS:
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

    pessoas = {}
    for r in dados['pessoas']:
        pid = norm(r.get('pessoa_id'))
        if not pid:
            continue
        pessoas[pid] = {'id': pid, 'nome': norm(r.get('nome')),
                        'instituicao': norm(r.get('instituicao')),
                        'papel': norm(r.get('papel'))}

    config = {}
    for r in dados['config']:
        c = norm(r.get('chave'))
        if c:
            config[c] = norm(r.get('valor'))

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
        for p in ids_pessoas:
            if p not in pessoas:
                avisos.append('atividade %s cita a pessoa desconhecida %s' % (aid, p))
        atividades.append({
            'id': aid, 'data': dia, 'inicio': ini, 'fim': fim,
            'tipo': norm(r.get('tipo')), 'tipo_slug': slug(r.get('tipo')),
            'titulo': titulo, 'subtitulo': norm(r.get('subtitulo')),
            'local': locais.get(lid, {'id': lid, 'predio': '', 'sala': '', 'nome': lid}),
            'pessoas': [pessoas[p] for p in ids_pessoas if p in pessoas],
            'grupo': norm(r.get('grupo')), 'descricao': norm(r.get('descricao')),
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
        trabalhos.append({
            'id': tid, 'modalidade': norm(r.get('modalidade')), 'sessao': sessao,
            'painel': norm(r.get('painel')), 'autor': norm(r.get('autor_apresentador')),
            'titulo': norm(r.get('titulo')), 'area': norm(r.get('area_tematica')),
        })

    def chave_num(t):
        try:
            return (0, int(t['id']))
        except ValueError:
            return (1, 0)

    trabalhos.sort(key=chave_num)

    dias = []
    for d in sorted({a['data'] for a in atividades if a['data']}):
        longo, curto = rotulos(d)
        dias.append({'data': d, 'rotulo': longo, 'rotulo_curto': curto})

    agora = datetime.now(timezone(timedelta(hours=-3)))
    return {
        'gerado_em': agora.strftime('%Y-%m-%dT%H:%M:%S%z'),
        'gerado_em_texto': agora.strftime('%d/%m/%Y às %H:%M'),
        # Versão dos dados no formato AAAAMMDDHHMM, derivada do carimbo acima.
        # Serve ao service worker: comparar um inteiro diz se o JSON vindo da
        # rede difere do guardado no aparelho, sem baixar e comparar o
        # documento inteiro. Cresce sozinho a cada geração, portanto não exige
        # ler a saída anterior para saber onde parou.
        'versao_dados': int(agora.strftime('%Y%m%d%H%M')),
        'config': config,
        'dias': dias,
        'atividades': atividades,
        'trabalhos': trabalhos,
        'locais': list(locais.values()),
    }, erros, avisos


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
    ap.add_argument('--permitir-erros', action='store_true',
                    help='grava o arquivo mesmo com erros (use apenas em teste local)')
    args = ap.parse_args()

    dados = ler_de_csv(args.csv) if args.csv else ler_de_xlsx(args.xlsx)
    saida, erros, avisos = construir(dados)

    for a in avisos:
        print('aviso: %s' % a)
    for linha in resumo_sem_sessao(saida['trabalhos']):
        print(linha)
    for e in erros:
        print('ERRO: %s' % e, file=sys.stderr)

    print('atividades publicadas: %d | trabalhos publicados: %d | dias: %d'
          % (len(saida['atividades']), len(saida['trabalhos']), len(saida['dias'])))

    if erros and not args.permitir_erros:
        print('\n%d erro(s): nada foi gravado. Corrija a planilha e rode de novo.' % len(erros),
              file=sys.stderr)
        return 1

    os.makedirs(os.path.dirname(args.saida) or '.', exist_ok=True)
    with open(args.saida, 'w', encoding='utf-8') as f:
        json.dump(saida, f, ensure_ascii=False, indent=1)
    print('gravado: %s' % args.saida)
    return 0


if __name__ == '__main__':
    sys.exit(main())
