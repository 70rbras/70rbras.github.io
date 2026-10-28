#!/usr/bin/env node
/* Gerador do bloco de metadados do site da 70ª RBras.
 *
 * O robô que monta a prévia de um link no WhatsApp, no LinkedIn ou no buscador
 * não executa o JavaScript da página, portanto título, descrição além de imagem
 * precisam estar escritos no HTML entregue pelo servidor. Essa é a única
 * duplicidade que a arquitetura do site não elimina. A saída é gerar o trecho a
 * partir dos arquivos de dados, em vez de mantê-lo à mão.
 *
 * Cada página delimita o trecho com os comentários abaixo. Tudo que estiver
 * entre eles é descartado e reescrito a cada execução, portanto nenhum texto do
 * bloco pode ser editado na página: edite os arquivos de data/ ou o mapa
 * PAGINAS deste script.
 *
 *   <!-- meta:inicio -->
 *   <!-- meta:fim -->
 *
 * Uso:
 *   node scripts/gerar_meta.mjs              reescreve o bloco de cada página
 *   node scripts/gerar_meta.mjs --verificar  compara sem gravar; sai com 1 se diferir
 *
 * Plano: claude/plano-fontes-unicas-70rbras.md, tarefa D5.1.
 */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import process from 'node:process';

const RAIZ = process.argv.find(a => a.startsWith('--raiz='))?.slice(7) || process.cwd();
const MODO_VERIFICAR = process.argv.includes('--verificar');

const INICIO = '<!-- meta:inicio -->';
const FIM = '<!-- meta:fim -->';
const RECUO = '  ';

/* O logotipo de compartilhamento é um caminho de arquivo, não um fato do
   evento, portanto vive aqui e não em data/. */
const IMAGEM_PADRAO = 'assets/logos/70rbras_logo_positivo_cor.png';
const ICONE = 'assets/logos/70rbras_logo_positivo_cor.png';

/* ------------------------------------------------------------------ apoio */

function ler(rel) {
  return fs.readFileSync(path.join(RAIZ, rel), 'utf8');
}

function existe(rel) {
  return fs.existsSync(path.join(RAIZ, rel));
}

function listar(dir, filtro) {
  const base = path.join(RAIZ, dir);
  if (!fs.existsSync(base)) return [];
  return fs.readdirSync(base).filter(filtro).map(n => path.posix.join(dir, n)).sort();
}

function escapar(valor) {
  return String(valor)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* "R$ 3.000", a partir do número guardado em data/fundo.js. */
function emReais(n) {
  return 'R$ ' + Number(n).toLocaleString('pt-BR');
}

/* "Universidade Federal de Santa Catarina (UFSC)" devolve "UFSC". Sem
   parênteses, devolve a instituição inteira. */
function sigla(instituicao) {
  const m = String(instituicao || '').match(/\(([^)]+)\)\s*$/);
  return m ? m[1] : String(instituicao || '');
}

/* "Prêmio Destaque RBras, Melhor Tese de Doutorado e Melhor Trabalho de IC" */
function listaPorExtenso(itens) {
  if (itens.length <= 1) return itens.join('');
  return itens.slice(0, -1).join(', ') + ' e ' + itens[itens.length - 1];
}

/* ------------------------------------------------- carga dos dados do site */

/* Mesma estratégia de scripts/checar_fontes.mjs: os arquivos de data/*.js
   declaram constantes no escopo léxico do módulo, portanto não aparecem como
   propriedade do contexto e precisam de captura explícita. */
function carregarDados() {
  const contexto = vm.createContext({ console, window: {}, document: {} });
  const valores = {};
  for (const rel of listar('data', n => n.endsWith('.js'))) {
    const fonte = ler(rel);
    const nomes = [...fonte.matchAll(/^(?:const|let|var)\s+([A-Za-z_$][\w$]*)/gm)].map(m => m[1]);
    const captura = `globalThis.__captura = {${nomes.map(n => `${n}: typeof ${n} !== 'undefined' ? ${n} : undefined`).join(', ')}};`;
    vm.runInContext(fonte + '\n' + captura, contexto, { filename: rel });
    Object.assign(valores, vm.runInContext('globalThis.__captura', contexto));
  }
  return valores;
}

/* O domínio não é fato do evento guardado em data/: ele é a configuração de
   publicação, que já vive no arquivo CNAME lido pelo GitHub Pages. */
function dominio() {
  if (!existe('CNAME')) {
    throw new Error('CNAME não encontrado: o endereço canônico sai desse arquivo.');
  }
  return 'https://' + ler('CNAME').trim();
}

/* --------------------------------------------------- campos substituíveis */

function montarCampos(dados) {
  const cfg = dados.CONFIG?.evento || {};
  const prazo = id => (dados.DATES || []).find(d => d.id === id) || null;
  const porExtenso = dados.dataPorExtenso || (iso => String(iso || ''));
  const destaque = (dados.PREMIOS || []).find(p => p?.premiado?.nome) || null;
  const fundo = dados.FUNDO?.montantes || {};
  const wasa = dados.wasaInfo || {};

  return {
    edicao: cfg.edicao || '',
    nome: cfg.nome || '',
    tema: cfg.tema || '',
    datas: cfg.datas_exibicao || '',
    cidade: cfg.cidade || '',
    ano: String(cfg.inicio || '').slice(0, 4),

    premio_titulo: destaque?.titulo || '',
    premiado: destaque?.premiado?.nome || '',
    premiado_sigla: sigla(destaque?.premiado?.instituicao),
    premiado_foto: destaque?.premiado?.foto || '',
    premios_lista: listaPorExtenso((dados.PREMIOS || []).map(p => p.titulo)),

    fundo_individual: fundo.individual != null ? emReais(fundo.individual) : '',
    fundo_coletivo: fundo.coletivo != null ? emReais(fundo.coletivo) : '',
    fundo_prazo: porExtenso(prazo(dados.FUNDO?.prazo_id)?.fim),

    wasa_nome: wasa.nome || '',
    wasa_sigla: wasa.sigla || '',
    wasa_data: porExtenso(prazo(wasa.prazo_id)?.inicio)
  };
}

/* ------------------------------------------------------- mapa das páginas */

/* Cada entrada declara apenas a prosa própria da página. Todo fato do evento
   entra por {chave}, resolvida nos campos acima, que vêm dos arquivos de dados.
 *
 *   url       → caminho publicado; '' é a raiz do site
 *   titulo    → <title> além de og:title, quando este não for declarado
 *   descricao → meta description além de og:description, quando este não for
 *               declarado
 *   imagem    → caminho da imagem de compartilhamento; ausente usa o logotipo
 *   cartao    → tipo do cartão do Twitter; ausente usa summary_large_image
 *   redireciona → página de destino; marca a página como redirecionamento, que
 *               recebe apenas título, canônico da página de destino além de
 *               robots noindex
 */
const PAGINAS = {
  'index.html': {
    url: '',
    titulo: '{edicao} {ano} - {tema}',
    descricao: '{nome} - {tema}. {datas}, IMECC, {cidade}.',
    og_descricao: '{nome} · {datas} · {cidade}'
  },

  'palestrantes.html': {
    url: 'palestrantes.html',
    titulo: 'Convidados - {edicao} {ano}',
    descricao: 'Conheça os palestrantes convidados da {edicao} {ano} - pesquisadores de referência em biometria e estatística.'
  },

  'programacao.html': {
    url: 'programacao.html',
    titulo: 'Programação - {edicao} {ano}',
    descricao: 'Programação científica da {edicao} {ano} - conferências, sessões temáticas, minicursos e pôsteres. {datas}, IMECC, {cidade}.',
    /* A prévia do link dispensa a data, que já sai na descrição do buscador:
       repeti-la só aumenta a contagem do verificador sem informar ninguém. */
    og_descricao: 'Conferências, sessões temáticas, minicursos e pôsteres da {edicao} {ano}, no IMECC.'
  },

  'inscricoes.html': {
    url: 'inscricoes.html',
    titulo: 'Inscrições - {edicao} {ano}',
    descricao: 'Inscrições para a {edicao} {ano} - valores por categoria e lote, formas de pagamento e informações para sócios.'
  },

  'apresentadores.html': {
    url: 'apresentadores.html',
    titulo: 'Apresentadores - {edicao} {ano}',
    descricao: 'Instruções para quem apresenta na {edicao} {ano}: modelos oficiais de pôster (A0), sessões de pôsteres e comunicações orais.',
    og_descricao: 'Modelos oficiais de pôster, formato A0, horários das sessões e instruções para comunicações orais.'
  },

  'comissoes.html': {
    url: 'comissoes.html',
    titulo: 'Comissões - {edicao} {ano}',
    descricao: 'Comissões organizadora, científica e avaliadoras da {edicao} {ano}.'
  },

  'logistica.html': {
    url: 'logistica.html',
    titulo: 'Logística - {edicao} {ano}',
    descricao: 'Local da {edicao} {ano}: IMECC, {cidade}. Como chegar, aeroportos, hospedagem e gráficas.'
  },

  'faq.html': {
    url: 'faq.html',
    titulo: 'Perguntas Frequentes - {edicao} {ano}',
    descricao: 'Respostas às dúvidas mais frequentes sobre inscrições, submissão de trabalhos e demais aspectos da {edicao} {ano}.'
  },

  /* Enquanto nenhum prêmio tiver vencedor anunciado, os campos de premiado
     saem vazios: a página cai nos textos gerais além do logotipo. */
  'premios.html': {
    url: 'premios.html',
    titulo: 'Prêmios RBras {ano} - {edicao} {ano}',
    descricao: campos => campos.premiado
      ? `Prêmios RBras ${campos.ano}: ${campos.premios_lista}. ${campos.premiado} recebe o ${campos.premio_titulo} ${campos.ano}.`
      : `Prêmios RBras ${campos.ano}: ${campos.premios_lista}.`,
    og_titulo: campos => campos.premiado
      ? `${campos.premio_titulo} ${campos.ano}: ${campos.premiado}`
      : `Prêmios RBras ${campos.ano} - ${campos.edicao} ${campos.ano}`,
    /* A frase não carrega marca de gênero, pois o nome vem do cadastro: ela
       precisa servir a qualquer pessoa premiada nesta edição ou nas próximas. */
    og_descricao: campos => campos.premiado
      ? `A RBras anuncia quem recebe o ${campos.premio_titulo} ${campos.ano}: ${campos.premiado} (${campos.premiado_sigla}). Conheça todos os prêmios da ${campos.edicao}.`
      : `Conheça todos os prêmios da ${campos.edicao}.`,
    imagem: campos => campos.premiado_foto || IMAGEM_PADRAO,
    cartao: campos => (campos.premiado_foto ? 'summary' : 'summary_large_image')
  },

  'fundo-estudante.html': {
    url: 'fundo-estudante.html',
    titulo: 'Fundo de Financiamento para Estudantes - {edicao} {ano}',
    descricao: 'Fundo de Financiamento da RBras para participação de estudantes associados na {edicao} {ano}. Auxílios individuais (até {fundo_individual}) e coletivos (até {fundo_coletivo}). Inscrições encerradas em {fundo_prazo}.',
    og_descricao: 'Auxílios individuais e coletivos da RBras para participação de estudantes associados na {edicao}. Inscrições encerradas em {fundo_prazo}.'
  },

  'wasa.html': {
    url: 'wasa.html',
    titulo: '{wasa_sigla} - {wasa_nome} · {edicao} {ano}',
    descricao: '{wasa_nome}. {wasa_data}, IMECC, {cidade}.',
    og_titulo: '{wasa_sigla} - {wasa_nome}',
    og_descricao: 'Workshop satélite da {edicao}. {wasa_data}. {cidade}.'
  },

  /* Páginas que apenas redirecionam links antigos. Não entram em buscador nem
     em rede social, portanto recebem só título, canônico além de noindex. */
  'cientifico.html': {
    titulo: '{edicao} {ano}',
    redireciona: 'apresentadores.html'
  },

  'local.html': {
    titulo: 'Logística - {edicao} {ano}',
    redireciona: 'logistica.html'
  },

  'premio.html': {
    titulo: 'Prêmios RBras - {edicao} {ano}',
    redireciona: 'premios.html'
  }
};

/* ------------------------------------------------------ montagem do bloco */

function resolver(valor, campos) {
  if (typeof valor === 'function') return String(valor(campos));
  return String(valor ?? '').replace(/\{(\w+)\}/g, (inteiro, chave) => {
    if (!(chave in campos)) {
      throw new Error(`campo desconhecido no mapa de páginas: {${chave}}`);
    }
    return campos[chave];
  });
}

function montarBloco(arquivo, campos, base) {
  const pagina = PAGINAS[arquivo];
  if (!pagina) throw new Error(`página sem entrada no mapa: ${arquivo}`);

  const meta = (atributo, nome, conteudo) =>
    `${RECUO}<meta ${atributo}="${nome}" content="${escapar(conteudo)}">`;

  const titulo = resolver(pagina.titulo, campos);
  const linhas = [`${RECUO}<title>${escapar(titulo)}</title>`];

  if (pagina.redireciona) {
    linhas.push(`${RECUO}<link rel="canonical" href="${base}/${pagina.redireciona}">`);
    linhas.push(meta('name', 'robots', 'noindex'));
    return linhas.join('\n');
  }

  const descricao = resolver(pagina.descricao, campos);
  const ogTitulo = pagina.og_titulo ? resolver(pagina.og_titulo, campos) : titulo;
  const ogDescricao = pagina.og_descricao ? resolver(pagina.og_descricao, campos) : descricao;
  const imagem = pagina.imagem ? resolver(pagina.imagem, campos) : IMAGEM_PADRAO;
  const cartao = pagina.cartao ? resolver(pagina.cartao, campos) : 'summary_large_image';
  const endereco = pagina.url ? `${base}/${pagina.url}` : base;

  linhas.push(`${RECUO}<link rel="icon" type="image/png" href="${ICONE}">`);
  linhas.push(`${RECUO}<link rel="canonical" href="${endereco}">`);
  linhas.push(meta('name', 'description', descricao));
  linhas.push(meta('property', 'og:title', ogTitulo));
  linhas.push(meta('property', 'og:description', ogDescricao));
  linhas.push(meta('property', 'og:url', endereco));
  linhas.push(meta('property', 'og:image', `${base}/${imagem}`));
  linhas.push(meta('property', 'og:type', 'website'));
  linhas.push(meta('name', 'twitter:card', cartao));
  linhas.push(meta('name', 'twitter:image', `${base}/${imagem}`));
  return linhas.join('\n');
}

/* ---------------------------------------------------------- aplicação */

function reescrever(conteudo, bloco, arquivo) {
  const i = conteudo.indexOf(INICIO);
  const f = conteudo.indexOf(FIM);
  if (i < 0 || f < 0) {
    throw new Error(`${arquivo} não tem os marcadores ${INICIO} e ${FIM} no <head>.`);
  }
  if (f < i) {
    throw new Error(`${arquivo} tem ${FIM} antes de ${INICIO}.`);
  }
  return conteudo.slice(0, i + INICIO.length) + '\n' + bloco + '\n' + RECUO + conteudo.slice(f);
}

export function gerar({ gravar = true } = {}) {
  const campos = montarCampos(carregarDados());
  const base = dominio();
  const relatorio = [];

  for (const arquivo of Object.keys(PAGINAS)) {
    if (!existe(arquivo)) {
      relatorio.push({ arquivo, estado: 'ausente' });
      continue;
    }
    const antes = ler(arquivo);
    const depois = reescrever(antes, montarBloco(arquivo, campos, base), arquivo);
    if (antes === depois) {
      relatorio.push({ arquivo, estado: 'em dia' });
      continue;
    }
    relatorio.push({ arquivo, estado: 'diferente' });
    if (gravar) fs.writeFileSync(path.join(RAIZ, arquivo), depois, 'utf8');
  }
  return relatorio;
}

/* -------------------------------------------------------------- execução */

const relatorio = gerar({ gravar: !MODO_VERIFICAR });
const diferentes = relatorio.filter(r => r.estado === 'diferente');
const ausentes = relatorio.filter(r => r.estado === 'ausente');

for (const r of relatorio) console.log(`${r.estado.padEnd(10)} ${r.arquivo}`);
console.log('');

if (ausentes.length) {
  console.error(`${ausentes.length} página do mapa não existe no repositório.`);
  process.exit(1);
}

if (MODO_VERIFICAR) {
  if (!diferentes.length) {
    console.log('Bloco de metadados em dia em todas as páginas.');
    process.exit(0);
  }
  console.error(`${diferentes.length} página(s) com bloco de metadados fora de dia.`);
  console.error('Regere com: node scripts/gerar_meta.mjs');
  process.exit(1);
}

console.log(diferentes.length
  ? `${diferentes.length} página(s) reescrita(s).`
  : 'Nada a reescrever: o bloco já estava em dia.');
