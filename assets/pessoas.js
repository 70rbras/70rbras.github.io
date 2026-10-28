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

/* Rótulo da coordenação de comissão, flexionado pelo gênero registrado.
   Sem gênero registrado, sai na forma neutra. */
function rotuloCoordenacao(pessoa) {
  const genero = pessoa && pessoa.genero;
  if (genero === 'f') return 'Coordenadora';
  if (genero === 'm') return 'Coordenador';
  return 'Coordenação';
}
