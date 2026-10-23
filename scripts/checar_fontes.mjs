#!/usr/bin/env node
/* Verificador de fontes únicas de verdade do site da 70ª RBras.
 *
 * Lê os arquivos de dados, descobre os valores canônicos, depois varre as
 * páginas HTML além dos scripts compartilhados procurando o mesmo fato escrito
 * à mão. Toda ocorrência é violação, salvo quando registrada em
 * scripts/fontes-unicas.json, que é a lista das pendências conhecidas.
 *
 * Uso:
 *   node scripts/checar_fontes.mjs              verifica e sai com 1 em caso de violação
 *   node scripts/checar_fontes.mjs --pessoas    relatório de pessoas com registro divergente
 *   node scripts/checar_fontes.mjs --gerar      imprime a lista de exceções do estado atual
 *
 * Plano: claude/plano-fontes-unicas-70rbras.md, tarefa D0.1.
 */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import process from 'node:process';

const RAIZ = process.argv.find(a => a.startsWith('--raiz='))?.slice(7) || process.cwd();
const MODO_PESSOAS = process.argv.includes('--pessoas');
const MODO_GERAR = process.argv.includes('--gerar');

const MESES = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho',
  'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
const MESES_CURTOS = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];

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
  return fs.readdirSync(base)
    .filter(filtro)
    .map(n => path.posix.join(dir, n))
    .sort();
}

function semAcento(s) {
  return s.normalize('NFD').replace(/[̀-ͯ]/g, '');
}

function normalizarNome(s) {
  return semAcento(String(s || ''))
    .toLowerCase()
    .replace(/\b(prof|profa|dr|dra|me|ms|msc|phd)\.?\b/g, '')
    .replace(/[^a-z\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function linhaDe(texto, indice) {
  return texto.slice(0, indice).split('\n').length;
}

function recorte(texto, indice, tamanho = 70) {
  const bruto = texto.slice(indice, indice + tamanho).replace(/\s+/g, ' ');
  return bruto.length < tamanho ? bruto : bruto + '...';
}

/* ------------------------------------------------- carga dos dados do site */

/* Os arquivos de data/*.js declaram constantes no escopo léxico do módulo,
   portanto não aparecem como propriedade do contexto. A captura explícita
   abaixo devolve cada símbolo declarado, o que serve também à regra R7. */
function carregarDados() {
  const arquivos = listar('data', n => n.endsWith('.js'));
  const contexto = vm.createContext({ console, window: {}, document: {} });
  const simbolos = new Map();   // nome do símbolo -> arquivo que o declara
  const valores = {};

  for (const rel of arquivos) {
    const fonte = ler(rel);
    const nomes = [...fonte.matchAll(/^(?:const|let|var)\s+([A-Za-z_$][\w$]*)/gm)].map(m => m[1]);
    const captura = `globalThis.__captura = {${nomes.map(n => `${n}: typeof ${n} !== 'undefined' ? ${n} : undefined`).join(', ')}};`;
    try {
      vm.runInContext(fonte + '\n' + captura, contexto, { filename: rel });
    } catch (erro) {
      console.error(`Falha ao ler ${rel}: ${erro.message}`);
      process.exitCode = 1;
      continue;
    }
    const capturado = vm.runInContext('globalThis.__captura', contexto);
    for (const nome of nomes) {
      simbolos.set(nome, rel);
      valores[nome] = capturado[nome];
    }
  }

  let programacao = null;
  if (existe('data/programacao.json')) {
    programacao = JSON.parse(ler('data/programacao.json'));
  }
  return { valores, simbolos, programacao };
}

/* --------------------------------------------------- valores canônicos */

function canonicos({ valores, programacao }) {
  const cfg = valores.CONFIG?.evento || {};
  const textos = [];
  const empurra = (valor, rotulo) => {
    const s = String(valor || '').trim();
    if (s.length > 8) textos.push({ texto: s, rotulo });
  };

  empurra(cfg.nome, 'CONFIG.evento.nome');
  empurra(cfg.tema, 'CONFIG.evento.tema');
  empurra(cfg.email_contato, 'CONFIG.evento.email_contato');
  empurra(cfg.datas_exibicao, 'CONFIG.evento.datas_exibicao');
  empurra(cfg.link_inscricoes, 'CONFIG.evento.link_inscricoes');
  empurra(cfg.link_submissao, 'CONFIG.evento.link_submissao');
  empurra(cfg.link_area_inscrito, 'CONFIG.evento.link_area_inscrito');

  /* O endereço entra pelo logradouro, que é a parte estável da string. */
  const endereco = String(cfg.local_endereco || '');
  const logradouro = endereco.split(/,|·| - /)[0].trim();
  if (logradouro) textos.push({ texto: logradouro, rotulo: 'CONFIG.evento.local_endereco' });

  /* O nome de quem recebe prêmio vive em data/premios.js. Ele aparece hoje nos
     metadados de premios.html, que a fase 5 passa a gerar. */
  for (const p of valores.PREMIOS || []) {
    if (p?.premiado?.nome) empurra(p.premiado.nome, 'PREMIOS.premiado.nome');
    if (p?.premiado?.foto) empurra(p.premiado.foto.split('/').pop(), 'PREMIOS.premiado.foto');
  }

  const trabalhos = programacao?.trabalhos?.length || 0;
  return { textos, trabalhos, cfg };
}

/* ------------------------------------------------------------- as regras */

const REGRAS = {
  R1: 'data escrita à mão; a fonte é data/dates.js ou data/config.js',
  R2: 'valor em reais escrito à mão; a fonte é um arquivo de data/',
  R3: 'identidade do evento escrita à mão; a fonte é data/config.js',
  R4: 'contagem de trabalhos escrita à mão; a fonte é data/programacao.json',
  R5: 'cópia dos dados da programação fora de data/programacao.json',
  R6: 'pessoa registrada mais de uma vez nos arquivos de dados',
  R7: 'símbolo declarado em data/ sem nenhum consumidor',
  R8: 'ligação repetida que deveria viver em assets/nav.js'
};

const RE_DATA_ISO = /\b20\d{2}-\d{2}-\d{2}\b/g;
const RE_DATA_BARRA = /\b\d{1,2}\/\d{1,2}\/20\d{2}\b/g;
const RE_DATA_EXTENSO = new RegExp(`\\b\\d{1,2}\\s*(?:º|a|-|–|até|e)?\\s*\\d{0,2}\\s*de\\s+(?:${MESES.join('|')})\\b`, 'gi');
const RE_DATA_CURTA = new RegExp(`\\b\\d{1,2}\\s*/\\s*(?:${MESES_CURTOS.join('|')})\\b`, 'gi');
const RE_REAIS = /R\$\s*[\d][\d.,]*/g;
const RE_CONTAGEM = /\b\d{2,4}\s+(?:trabalhos|p[ôo]steres|comunica[çc][õo]es)\b/gi;
const RE_COPIA = /window\.PROGRAMACAO|gerado_em|"atividades"\s*:/g;

function varrerArquivo(rel, conteudo, canon, achados) {
  const marca = (re, regra) => {
    for (const m of conteudo.matchAll(re)) {
      achados.push({ arquivo: rel, regra, linha: linhaDe(conteudo, m.index), trecho: recorte(conteudo, m.index) });
    }
  };

  marca(RE_DATA_ISO, 'R1');
  marca(RE_DATA_BARRA, 'R1');
  marca(RE_DATA_EXTENSO, 'R1');
  marca(RE_DATA_CURTA, 'R1');
  marca(RE_REAIS, 'R2');
  marca(RE_CONTAGEM, 'R4');
  /* R5 vale para as páginas: o leitor em assets/programacao.js cita os mesmos
     nomes de campo por dever de ofício, não por duplicar os dados. */
  if (rel.endsWith('.html')) marca(RE_COPIA, 'R5');

  for (const { texto, rotulo } of canon.textos) {
    let de = 0;
    while (true) {
      const i = conteudo.indexOf(texto, de);
      if (i < 0) break;
      achados.push({
        arquivo: rel, regra: 'R3', linha: linhaDe(conteudo, i),
        trecho: recorte(conteudo, i), fonte: rotulo
      });
      de = i + texto.length;
    }
  }

  if (rel !== 'assets/nav.js') {
    for (const m of conteudo.matchAll(/link_area_inscrito/g)) {
      achados.push({ arquivo: rel, regra: 'R8', linha: linhaDe(conteudo, m.index), trecho: recorte(conteudo, m.index) });
    }
  }
}

/* -------------------------------------------------------------- pessoas */

function coletarPessoas({ valores, simbolos }) {
  const pessoas = [];
  const visitar = (no, origem) => {
    if (!no || typeof no !== 'object') return;
    if (Array.isArray(no)) { no.forEach(x => visitar(x, origem)); return; }
    if (typeof no.nome === 'string' && (no.lattes || no.foto || no.instituicao)) {
      pessoas.push({
        nome: no.nome, chave: normalizarNome(no.nome),
        instituicao: no.instituicao || '', lattes: no.lattes || '', foto: no.foto || '',
        origem
      });
    }
    /* A seção dá contexto ao relatório: a mesma pessoa aparece na comissão
       organizadora além da comissão de pôsteres, por exemplo. */
    const marcador = no.secao || no.id || no.titulo;
    const abaixo = marcador ? `${origem} · ${marcador}` : origem;
    Object.values(no).forEach(x => visitar(x, abaixo));
  };
  for (const [simbolo, arquivo] of simbolos) visitar(valores[simbolo], arquivo);
  return pessoas;
}

function divergenciasDePessoas(pessoas) {
  const grupos = new Map();
  const chaveDe = p => (p.lattes && p.lattes.trim()) || (p.foto && p.foto.trim()) || p.chave;
  for (const p of pessoas) {
    const k = chaveDe(p);
    if (!k) continue;
    if (!grupos.has(k)) grupos.set(k, []);
    grupos.get(k).push(p);
  }
  const saida = [];
  for (const [chave, lista] of grupos) {
    if (lista.length < 2) continue;
    const nomes = new Set(lista.map(p => p.nome));
    const instituicoes = new Set(lista.map(p => p.instituicao).filter(Boolean));
    const arquivos = new Set(lista.map(p => p.origem));
    saida.push({ chave, lista, nomesDiferentes: nomes.size > 1, instituicoesDiferentes: instituicoes.size > 1, arquivos: [...arquivos] });
  }
  return saida;
}

/* ------------------------------------------------------------ exceções */

function carregarExcecoes() {
  if (!existe('scripts/fontes-unicas.json')) return [];
  const bruto = JSON.parse(ler('scripts/fontes-unicas.json'));
  return Array.isArray(bruto) ? bruto : (bruto.excecoes || []);
}

function aplicarExcecoes(achados, excecoes) {
  const contagem = new Map();
  for (const a of achados) {
    const k = a.arquivo + '|' + a.regra;
    contagem.set(k, (contagem.get(k) || 0) + 1);
  }
  const limite = new Map();
  for (const e of excecoes) limite.set(e.arquivo + '|' + e.regra, e.limite ?? Infinity);

  const violacoes = [];
  for (const [k, n] of contagem) {
    const permitido = limite.get(k) ?? 0;
    if (n > permitido) {
      const [arquivo, regra] = k.split('|');
      violacoes.push({ arquivo, regra, encontradas: n, permitidas: permitido, exemplos: achados.filter(a => a.arquivo === arquivo && a.regra === regra).slice(0, 3) });
    }
  }
  const resolvidas = [...limite.entries()]
    .filter(([k, v]) => v > 0 && !contagem.has(k))
    .map(([k]) => k);
  return { violacoes, resolvidas };
}

/* -------------------------------------------------------------- execução */

const dados = carregarDados();
const canon = canonicos(dados);
const achados = [];

const paginas = listar('.', n => n.endsWith('.html'));
const scripts = listar('assets', n => n.endsWith('.js'));
for (const rel of [...paginas, ...scripts]) {
  varrerArquivo(rel, ler(rel), canon, achados);
}

/* R6 e R7 olham para os arquivos de dados, não para as páginas. */
const pessoas = coletarPessoas(dados);
const divergentes = divergenciasDePessoas(pessoas);
for (const g of divergentes) {
  const arquivosDoGrupo = [...new Set(g.arquivos.map(a => a.split(' · ')[0]))];
  achados.push({
    arquivo: arquivosDoGrupo.join(' + '), regra: 'R6', linha: 0,
    trecho: [...new Set(g.lista.map(p => p.nome))].join(' / ')
  });
}

const textoDoSite = [...paginas, ...scripts].map(ler).join('\n');
for (const [simbolo, arquivo] of dados.simbolos) {
  const usado = new RegExp(`\\b${simbolo}\\b`).test(textoDoSite);
  if (!usado) {
    achados.push({ arquivo, regra: 'R7', linha: 0, trecho: simbolo });
  }
}

if (MODO_PESSOAS) {
  console.log('# Pessoas com registro repetido ou divergente\n');
  console.log('As primeiras da lista são as que precisam de decisão da comissão.\n');
  const ordenadas = [...divergentes].sort((a, b) =>
    (Number(b.nomesDiferentes) + Number(b.instituicoesDiferentes)) -
    (Number(a.nomesDiferentes) + Number(a.instituicoesDiferentes)));
  for (const g of ordenadas) {
    console.log(`## ${g.lista[0].nome}`);
    console.log(`- chave de agrupamento: ${g.chave}`);
    for (const p of g.lista) {
      console.log(`- "${p.nome}" · ${p.instituicao || 'sem instituição'} · ${p.origem}`);
    }
    console.log(`- nome divergente: ${g.nomesDiferentes ? 'sim' : 'não'}; instituição divergente: ${g.instituicoesDiferentes ? 'sim' : 'não'}\n`);
  }
  process.exit(0);
}

const excecoes = carregarExcecoes();
const { violacoes, resolvidas } = aplicarExcecoes(achados, excecoes);

if (MODO_GERAR) {
  const contagem = new Map();
  for (const a of achados) {
    const k = a.arquivo + '|' + a.regra;
    contagem.set(k, (contagem.get(k) || 0) + 1);
  }
  const saida = [...contagem.entries()].sort().map(([k, n]) => {
    const [arquivo, regra] = k.split('|');
    return { arquivo, regra, limite: n, motivo: REGRAS[regra], tarefa: 'a definir' };
  });
  console.log(JSON.stringify(saida, null, 2));
  process.exit(0);
}

console.log(`Verificador de fontes únicas · ${achados.length} ocorrências, ${excecoes.length} entradas na lista de exceções\n`);

if (resolvidas.length) {
  console.log('Pendências resolvidas, remover da lista de exceções:');
  for (const k of resolvidas) console.log(`  ${k.replace('|', ' · ')}`);
  console.log('');
}

if (!violacoes.length) {
  console.log('Nenhuma violação fora da lista de exceções.');
  process.exit(0);
}

console.log('Violações:\n');
for (const v of violacoes.sort((a, b) => a.arquivo.localeCompare(b.arquivo))) {
  console.log(`${v.arquivo} · ${v.regra} · ${v.encontradas} ocorrências, ${v.permitidas} permitidas`);
  console.log(`  ${REGRAS[v.regra]}`);
  for (const e of v.exemplos) {
    console.log(`  linha ${e.linha}: ${e.trecho}`);
  }
  console.log('');
}
console.log(`${violacoes.length} violações. Corrija, ou registre a pendência em scripts/fontes-unicas.json com a tarefa que a resolve.`);
process.exit(1);
