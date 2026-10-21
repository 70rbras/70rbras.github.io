// ─── APRESENTADORES ──────────────────────────────────────────────────────────
// Alimenta apresentadores.html (instruções para quem apresenta Pôster ou
// Comunicação Oral). Carregado junto com data/config.js e data/schedule.js.
//
// Campos por modalidade:
//   instrucoes → lista de instruções (aceita HTML). Lista vazia = bloco
//                "Instruções em breve" no lugar da lista.
//   aviso      → (opcional) destaque curto exibido acima da lista
//
// Os horários e salas das sessões NÃO ficam aqui: são lidos de data/schedule.js
// (itens "Sessão de Pôsteres ..." e "CO-...").
//
// Os links dos modelos de pôster ficam em data/config.js (link_modelos_poster).

const APRESENTADORES = {
  poster: {
    aviso: "",
    instrucoes: [
      "Formato do arquivo final: PDF em <strong>A0 retrato (841 × 1189 mm)</strong>.",
      "Use um dos <strong>modelos oficiais</strong>, em PowerPoint ou LaTeX. Os dois produzem o mesmo resultado.",
      "O <strong>manual de uso</strong> traz as regras de conteúdo e a identidade visual do evento.",
      "Para imprimir, veja as <a href=\"logistica.html#graficas\">gráficas parceiras</a> em Campinas."
    ]
  },
  oral: {
    aviso: "",
    instrucoes: []
  }
};
