/* ═══════════════════════════════════════════════
   pessoas.js - Funções compartilhadas do cadastro de pessoas
   70ª RBras 2026

   Carregue depois de data/pessoas.js, em qualquer página que exiba pessoas.
   Antes deste arquivo, a montagem de iniciais existia escrita três vezes, com
   listas de títulos diferentes entre si, portanto a mesma pessoa podia receber
   iniciais distintas conforme a página.
════════════════════════════════════════════════ */

/* Títulos acadêmicos descartados na montagem das iniciais. Lista única: até a
   tarefa D4.4 cada página tinha a sua. */
const TITULOS_ACADEMICOS = ['Prof.', 'Profa.', 'Dr.', 'Dra.', 'Me.', 'Ms.', 'Msa.', 'MSc.', 'PhD.'];

/* Devolve o registro da pessoa somado aos atributos da participação, por
   exemplo a coordenação de uma comissão ou o conteúdo de uma palestra. */
function resolverPessoa(ref) {
  if (!ref) return null;
  const p = (typeof PESSOAS !== 'undefined') ? PESSOAS[ref.pessoa] : null;
  return p ? Object.assign({}, p, ref) : null;
}

/* Nome antecedido do tratamento, quando a pessoa tiver um registrado. */
function nomeDaPessoa(id) {
  const p = (typeof PESSOAS !== 'undefined' && id) ? PESSOAS[id] : null;
  if (!p) return '';
  return (p.tratamento ? p.tratamento + ' ' : '') + p.nome;
}

/* Iniciais exibidas quando a pessoa não tem foto. Trata o caso de a filtragem
   não deixar palavra alguma, que antes derrubava o bloco de prêmios da home. */
function iniciaisDaPessoa(nome) {
  const texto = String(nome || '').trim();
  if (!texto) return '';
  const partes = texto.split(/\s+/).filter(p =>
    !TITULOS_ACADEMICOS.includes(p) && p.length > 1 && /^[A-ZÁÉÍÓÚÂÊÔÃÕÇ]/.test(p));
  if (partes.length === 0) return texto[0].toUpperCase();
  if (partes.length === 1) return partes[0][0].toUpperCase();
  return (partes[0][0] + partes[partes.length - 1][0]).toUpperCase();
}

/* O cadastro passa a vir da planilha, que a comissão edita, portanto tudo que
   sai dele é escapado antes de virar HTML: marcação escrita numa célula aparece
   como texto, nunca como elemento. */
function escTexto(v) {
  return String(v == null ? '' : v)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/* Dentro de atributo é preciso neutralizar também a aspa, que fecharia o valor. */
function escAtributo(v) {
  return escTexto(v).replace(/"/g, '&quot;');
}

/* Endereço aceito num href: só http ou https, sem espaço nem aspas. Qualquer
   outro valor devolve cadeia vazia, de modo que o link deixa de ser montado em
   vez de virar um link executável. */
function urlDePessoa(u) {
  const s = String(u == null ? '' : u).trim();
  return /^https?:\/\/[^\s"'<>]+$/i.test(s) ? s : '';
}

/* Rótulo da coordenação de comissão, flexionado pelo gênero registrado.
   Sem gênero registrado, sai na forma neutra. */
function rotuloCoordenacao(pessoa) {
  const genero = pessoa && pessoa.genero;
  if (genero === 'f') return 'Coordenadora';
  if (genero === 'm') return 'Coordenador';
  return 'Coordenação';
}
