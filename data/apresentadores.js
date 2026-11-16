// ─── APRESENTADORES ──────────────────────────────────────────────────────────
// Alimenta apresentadores.html (instruções para quem apresenta Pôster ou
// Comunicação Oral). Carregado junto com data/config.js.
//
// Campos por modalidade:
//   instrucoes → lista de instruções (aceita HTML). Lista vazia = bloco
//                "Instruções em breve" no lugar da lista.
//   aviso      → (opcional) destaque curto exibido acima da lista
//
// Os horários e salas das sessões NÃO ficam aqui: são lidos de
// data/programacao.json, gerado da planilha da comissão.
//
// Os links dos modelos ficam em data/config.js (link_modelos_poster e link_modelos_oral).

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
    instrucoes: [
      "Use um dos <strong>modelos oficiais</strong>, em PowerPoint ou Beamer (LaTeX). Os dois produzem o mesmo resultado projetado e valem para comunicação oral e sessão temática.",
      "A tela do evento é <strong>16:9</strong>, como os modelos. Ao exportar, mantenha essa proporção: em 4:3 o conteúdo é cortado nas laterais.",
      "Apresente a partir de um <strong>PDF</strong> sempre que possível: ele leva as fontes junto e dispensa instalar a Montserrat no computador da sala.",
      "<strong>Envio do arquivo:</strong> verifique o e-mail enviado pela organização do evento com o título &ldquo;Envio da sua Apresentação para a 70a RBRas&rdquo;. O e-mail traz instruções específicas para a sua sessão e indica como fazer o upload do arquivo da apresentação.",
      "O <strong>manual de uso</strong> traz as regras de conteúdo (uma ideia por slide, uma mensagem principal, três conclusões), a identidade visual e os problemas comuns.",
      "<strong>Quantos slides de conteúdo</strong> (orientação do manual, sem contar abertura, divisórias e encerramento): <strong>10 min</strong>, de 7 a 9 slides (concurso de iniciação científica, por exemplo); <strong>15 min</strong>, de 10 a 14; <strong>20 min</strong>, de 14 a 18; <strong>30 min</strong>, de 20 a 26. É uma referência para dimensionar o roteiro, não uma regra do evento.",
      "Confira o tempo que cabe à sua apresentação na <a href=\"programacao.html\">programação</a> e ajuste o número de slides a ele."
    ]
  }
};
