#!/usr/bin/env node
/* Gera os três arquivos de cadastro do site a partir das abas da planilha.
 *
 *   data/pessoas.js    ← aba pessoas      (ficha de cada pessoa)
 *   data/committee.js  ← aba comissoes    (vínculo pessoa × comissão)
 *   data/speakers.js   ← aba convidados   (vínculo pessoa × palestra)
 *
 * A ficha responde quem a pessoa é. O papel dela pertence ao vínculo, nunca à
 * ficha, pois a mesma pessoa aparece em comissão, em convidados além da
 * programação ao mesmo tempo.
 *
 * Uso:
 *   node scripts/build_cadastro.mjs --fontes scripts/fontes.json
 *   node scripts/build_cadastro.mjs --dir "Claude outputs"
 *   node scripts/build_cadastro.mjs --dir "Claude outputs" --verificar
 *
 * Com --verificar nada é gravado: o conteúdo gerado é comparado com o que está
 * em data/, listando as diferenças. Com erro de validação nada é gravado em
 * nenhum modo, de modo que o site nunca publica cadastro quebrado.
 */
import fs from 'node:fs';

const ALVOS = {
  pessoas:    { saida: 'data/pessoas.js',   simbolo: 'PESSOAS' },
  comissoes:  { saida: 'data/committee.js', simbolo: 'COMMITTEE' },
  convidados: { saida: 'data/speakers.js',  simbolo: 'SPEAKERS' },
};

const erros = [];
const avisos = [];

/* ----------------------------------------------------------------- entrada */

/* Parser de CSV conforme o RFC 4180: aspas duplicadas escapam a aspa, enquanto
   vírgula além de quebra de linha valem como texto dentro das aspas. O campo
   resumo depende disso, por ter parágrafos. */
function lerCSV(texto) {
  const t = texto.replace(/^﻿/, '');
  const linhas = [];
  let campo = '', linha = [], aspas = false;
  for (let i = 0; i < t.length; i++) {
    const c = t[i];
    if (aspas) {
      if (c === '"' && t[i + 1] === '"') { campo += '"'; i++; }
      else if (c === '"') aspas = false;
      else campo += c;
    } else if (c === '"') aspas = true;
    else if (c === ',') { linha.push(campo); campo = ''; }
    else if (c === '\r') { /* ignora, a quebra vem no \n */ }
    else if (c === '\n') { linha.push(campo); linhas.push(linha); linha = []; campo = ''; }
    else campo += c;
  }
  if (campo !== '' || linha.length) { linha.push(campo); linhas.push(linha); }
  if (!linhas.length) return [];
  const cab = linhas.shift().map((x) => x.trim());
  return linhas
    .filter((l) => l.some((x) => x.trim() !== ''))
    .map((l) => Object.fromEntries(cab.map((k, i) => [k, (l[i] ?? '').trim()])));
}

function lerTSV(texto) {
  const linhas = texto.replace(/^﻿/, '').split(/\r?\n/).filter((l) => l.trim() !== '');
  const cab = linhas.shift().split('\t').map((x) => x.trim());
  return linhas.map((l) => {
    const c = l.split('\t');
    return Object.fromEntries(cab.map((k, i) => [k, (c[i] ?? '').trim()]));
  });
}

async function carregar(args) {
  const dados = {};
  for (const aba of Object.keys(ALVOS)) {
    if (args.dir) {
      const base = `${args.dir}/${aba}-cadastro-unico`;
      const csv = `${base}.csv`, tsv = `${base}.tsv`;
      if (fs.existsSync(csv)) dados[aba] = lerCSV(fs.readFileSync(csv, 'utf8'));
      else if (fs.existsSync(tsv)) dados[aba] = lerTSV(fs.readFileSync(tsv, 'utf8'));
      else throw new Error(`não achei ${csv} nem ${tsv}`);
    } else {
      const fontes = JSON.parse(fs.readFileSync(args.fontes, 'utf8'));
      const url = fontes[aba === 'pessoas' ? 'pessoas_cadastro' : aba];
      if (!url) throw new Error(`falta a URL da aba ${aba} em ${args.fontes}`);
      const r = await fetch(url);
      if (!r.ok) throw new Error(`aba ${aba}: resposta ${r.status}`);
      dados[aba] = lerCSV(await r.text());
    }
  }
  return dados;
}

/* --------------------------------------------------------------- montagem */

const CAMPOS_PESSOA = ['nome', 'instituicao', 'instituicao_curta', 'foto',
                       'lattes', 'website', 'genero', 'tratamento'];
/* instituicao sai mesmo vazia, pois o cartão reserva a linha. Os demais campos
   só saem quando preenchidos, deixando o arquivo enxuto. */
const SEMPRE = ['nome', 'instituicao'];

function montarPessoas(linhas) {
  const out = {};
  for (const r of linhas) {
    const id = (r.pessoa_id || '').trim();
    if (!id) { erros.push('ficha sem pessoa_id'); continue; }
    if (out[id]) { erros.push(`pessoa_id repetido: ${id}`); continue; }
    if (!r.nome) erros.push(`ficha ${id} sem nome`);
    if (!/^[a-z0-9-]+$/.test(id)) erros.push(`pessoa_id fora do padrão: ${id}`);
    const f = {};
    for (const c of CAMPOS_PESSOA) {
      const v = (r[c] ?? '').trim();
      if (v !== '' || SEMPRE.includes(c)) f[c] = v;
    }
    if (!f.instituicao) avisos.push(`ficha ${id} sem instituição`);
    out[id] = f;
  }
  return out;
}

function montarComissoes(linhas, pessoas) {
  const porId = new Map();
  const ordemComissao = [];
  for (const r of linhas) {
    const cid = (r.comissao_id || '').trim();
    if (!cid) { erros.push('linha de comissão sem comissao_id'); continue; }
    if (!porId.has(cid)) {
      porId.set(cid, { secao: r.secao || '', titulo: r.comissao_titulo || '',
                       icone: r.icone || '', membros: [] });
      ordemComissao.push(cid);
    }
    const pid = (r.pessoa_id || '').trim();
    if (!pessoas[pid]) { erros.push(`comissão ${cid} cita a pessoa inexistente ${pid}`); continue; }
    const m = { pessoa: pid };
    if (/^(sim|true|1|x)$/i.test((r.coordenacao || '').trim())) m.coordenacao = true;
    porId.get(cid).membros.push({ ordem: Number(r.ordem) || 0, m });
  }
  return ordemComissao.map((cid) => {
    const c = porId.get(cid);
    c.membros.sort((a, b) => a.ordem - b.ordem);
    return { secao: c.secao, titulo: c.titulo, icone: c.icone,
             membros: c.membros.map((x) => x.m) };
  });
}

function montarConvidados(linhas, pessoas) {
  const out = [];
  for (const r of linhas) {
    const pid = (r.pessoa_id || '').trim();
    if (!pessoas[pid]) { erros.push(`convidado inexistente no cadastro: ${pid}`); continue; }
    out.push({ ordem: Number(r.ordem) || 0,
               v: { pessoa: pid, tipo: r.tipo || '', tema: r.tema || '', resumo: r.resumo || '' } });
  }
  out.sort((a, b) => a.ordem - b.ordem);
  return out.map((x) => x.v);
}

/* ----------------------------------------------------------------- escrita */

const AVISO = `// ATENÇÃO: arquivo gerado por scripts/build_cadastro.mjs a partir da planilha.
// Alteração feita à mão aqui é desfeita na próxima geração: corrija na planilha.
`;

function str(v) { return JSON.stringify(v); }

function escrevePessoas(obj) {
  const ids = Object.keys(obj).sort();
  const largura = Math.max(...CAMPOS_PESSOA.map((c) => c.length)) + 1;
  const corpo = ids.map((id) => {
    const f = obj[id];
    const linhas = CAMPOS_PESSOA.filter((c) => c in f)
      .map((c) => `    ${(c + ':').padEnd(largura + 1)} ${str(f[c])},`);
    return `  ${str(id)}: {\n${linhas.join('\n')}\n  },`;
  }).join('\n');
  return `${AVISO}// ─── CADASTRO DE PESSOAS ─────────────────────────────────────────────────────
// Ficha de cada pessoa que o site exibe: quem ela é, nunca o papel que exerce.
// O papel pertence ao vínculo, em data/committee.js, data/speakers.js ou na
// aba atividades da planilha, pois a mesma pessoa aparece em mais de um lugar.
//
// Campos:
//   nome              → nome oficial, decidido pela comissão
//   instituicao       → forma longa, exibida nos cartões das páginas
//   instituicao_curta → forma curta, exibida no cartão da programação
//   foto              → caminho da imagem; ausente faz o cartão usar as iniciais
//   lattes            → endereço do currículo Lattes; ausente omite o link
//   website           → endereço do sítio pessoal; ausente omite o link
//   genero            → "f" ou "m"; usado onde o rótulo é flexionado
//   tratamento        → "Prof." ou "Profa."; usado onde o nome é precedido dele

const PESSOAS = {
${corpo}
};
`;
}

function escreveComissoes(arr) {
  const corpo = arr.map((c) => {
    const membros = c.membros.map((m) => {
      const extra = m.coordenacao ? ', coordenacao: true' : '';
      return `      { pessoa: ${str(m.pessoa)}${extra} },`;
    }).join('\n');
    return `  {\n    secao: ${str(c.secao)},\n    titulo: ${str(c.titulo)},\n` +
           `    icone: ${str(c.icone)},\n    membros: [\n${membros}\n    ],\n  },`;
  }).join('\n');
  return `${AVISO}// ─── COMISSÕES ────────────────────────────────────────────────────────────────
// Cada entrada representa uma comissão exibida como coluna no site. Os membros
// são referências ao cadastro de data/pessoas.js: nome, instituição, foto além
// do Lattes vivem lá, não aqui.
//
// Campos por membro:
//   pessoa      → identificador em PESSOAS
//   coordenacao → true quando a pessoa coordena a comissão. É atributo da
//                 participação, não da pessoa: a mesma pessoa pode coordenar
//                 uma comissão sem coordenar outra.

const COMMITTEE = [
${corpo}
];
`;
}

function escreveConvidados(arr) {
  const corpo = arr.map((s) => (
    `  {\n    pessoa:  ${str(s.pessoa)},\n    tipo:    ${str(s.tipo)},\n` +
    `    tema:    ${str(s.tema)},\n    resumo:  ${str(s.resumo)},\n  },`
  )).join('\n');
  return `${AVISO}// ─── PALESTRANTES CONVIDADOS ─────────────────────────────────────────────────
// Cada entrada guarda apenas o conteúdo da palestra. Quem a apresenta é uma
// referência ao cadastro de data/pessoas.js.
//
// O resumo é texto comum, sem marcação: parágrafos são separados por linha em
// branco, enquanto a quebra simples vira <br> no momento de exibir. Quem monta
// o texto na página escapa o conteúdo, pois a origem é a planilha.

const SPEAKERS = [
${corpo}
];
`;
}

/* ------------------------------------------------------------- verificação */

function carregarAtual(caminho, simbolo) {
  if (!fs.existsSync(caminho)) return null;
  const src = fs.readFileSync(caminho, 'utf8');
  try { return new Function(`${src}; return ${simbolo};`)(); }
  catch (e) { return null; }
}

function estavel(v) {
  if (Array.isArray(v)) return v.map(estavel);
  if (v && typeof v === 'object') {
    return Object.fromEntries(Object.keys(v).sort().map((k) => [k, estavel(v[k])]));
  }
  return v;
}

function comparar(nome, atual, gerado, ignorar = []) {
  if (atual === null) { console.log(`  ${nome}: arquivo atual ausente ou ilegível`); return 1; }
  const limpa = (o) => {
    const c = JSON.parse(JSON.stringify(estavel(o)));
    const tira = (x) => {
      if (Array.isArray(x)) return x.forEach(tira);
      if (x && typeof x === 'object') { ignorar.forEach((k) => delete x[k]); Object.values(x).forEach(tira); }
    };
    tira(c);
    return c;
  };
  const a = JSON.stringify(limpa(atual)), g = JSON.stringify(limpa(gerado));
  if (a === g) { console.log(`  ${nome}: idêntico ao atual`); return 0; }
  console.log(`  ${nome}: DIFERENTE do atual`);
  const A = limpa(atual), G = limpa(gerado);
  const chaves = Array.isArray(A) ? A.map((_, i) => i) : Object.keys({ ...A, ...G });
  let n = 0;
  for (const k of chaves) {
    const sa = JSON.stringify(A[k]), sg = JSON.stringify(G[k]);
    if (sa !== sg && n++ < 12) {
      console.log(`     ${k}:`);
      console.log(`        atual : ${sa === undefined ? '(ausente)' : sa.slice(0, 160)}`);
      console.log(`        gerado: ${sg === undefined ? '(ausente)' : sg.slice(0, 160)}`);
    }
  }
  if (n > 12) console.log(`     ... mais ${n - 12} diferença(s)`);
  return 1;
}

/* ------------------------------------------------------------------- main */

const argv = process.argv.slice(2);
const args = { verificar: argv.includes('--verificar') };
for (let i = 0; i < argv.length; i++) {
  if (argv[i] === '--dir') args.dir = argv[++i];
  if (argv[i] === '--fontes') args.fontes = argv[++i];
}
if (!args.dir && !args.fontes) args.fontes = 'scripts/fontes.json';

const dados = await carregar(args);
const pessoas = montarPessoas(dados.pessoas);
const comissoes = montarComissoes(dados.comissoes, pessoas);
const convidados = montarConvidados(dados.convidados, pessoas);

const usados = new Set();
comissoes.forEach((c) => c.membros.forEach((m) => usados.add(m.pessoa)));
convidados.forEach((s) => usados.add(s.pessoa));

for (const a of avisos) console.log(`aviso: ${a}`);
for (const e of erros) console.error(`erro: ${e}`);
if (erros.length) {
  console.error(`\n${erros.length} erro(s): nada foi gravado. Corrija a planilha e rode de novo.`);
  process.exit(1);
}

const textos = {
  'data/pessoas.js': escrevePessoas(pessoas),
  'data/committee.js': escreveComissoes(comissoes),
  'data/speakers.js': escreveConvidados(convidados),
};

if (args.verificar) {
  console.log('\nComparação com os arquivos atuais, por conteúdo:');
  let dif = 0;
  dif += comparar('data/pessoas.js', carregarAtual('data/pessoas.js', 'PESSOAS'), pessoas, ['instituicao_curta']);
  dif += comparar('data/committee.js', carregarAtual('data/committee.js', 'COMMITTEE'), comissoes);
  dif += comparar('data/speakers.js', carregarAtual('data/speakers.js', 'SPEAKERS'), convidados);
  console.log(`\nfichas: ${Object.keys(pessoas).length} | comissões: ${comissoes.length} | convidados: ${convidados.length}`);
  process.exit(dif ? 1 : 0);
}

for (const [caminho, texto] of Object.entries(textos)) {
  fs.writeFileSync(caminho, texto);
  console.log(`gravado: ${caminho}`);
}
console.log(`fichas: ${Object.keys(pessoas).length} | comissões: ${comissoes.length} | convidados: ${convidados.length}`);
