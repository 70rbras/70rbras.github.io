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
      "<strong>Onde fixar:</strong> cada pôster tem um painel com o <strong>número do trabalho</strong>, o identificador recebido na submissão. Confira o seu na <a href=\"programacao.html#busca\">busca de trabalhos</a>.",
      "Formato do arquivo final: PDF em <strong>A0 retrato (841 × 1189 mm)</strong>.",
      "Use um dos <strong>modelos oficiais</strong>, em PowerPoint ou LaTeX. Os dois produzem o mesmo resultado.",
      "O <strong>manual de uso</strong> traz as regras de conteúdo e a identidade visual do evento.",
      "Para imprimir, veja as <a href=\"logistica.html#graficas\">gráficas parceiras</a> em Campinas."
    ]
  },
  oral: {
    aviso: "",
    // Tempo de cada modalidade, em minutos. Tabela exibida em apresentadores.html.
    tempos: [
      { modalidade: "Comunicação Oral",                            apresentacao: 15, perguntas: 5 },
      { modalidade: "Sessão Temática",                             apresentacao: 20, perguntas: 5 },
      { modalidade: "Concurso: Melhor Tese de Doutorado",          apresentacao: 15, perguntas: 5 },
      { modalidade: "Concurso: Melhor Dissertação de Mestrado",    apresentacao: 15, perguntas: 5 },
      { modalidade: "Concurso: Melhor Trabalho de Iniciação Científica", apresentacao: 10, perguntas: 5 },
      { modalidade: "Mini-Conferência",                            apresentacao: 25, perguntas: 5 },
      { modalidade: "Conferência",                                 apresentacao: 55, perguntas: 5 }
    ],
    instrucoes: [
      "Recomenda-se que as apresentações orais utilizem, preferencialmente, os modelos oficiais disponibilizados nesta página. O uso dos modelos, contudo, não é obrigatório: o apresentador poderá empregar material próprio. Os modelos estão em PowerPoint e em Beamer (LaTeX), produzem o mesmo resultado projetado e valem para qualquer apresentação oral do evento: comunicação oral, sessão temática, concursos (tese, dissertação e iniciação científica), conferências e mini-conferências.",
      "A tela do evento é <strong>16:9</strong>, como os modelos.",
      "Apresente a partir de um <strong>PDF</strong> sempre que possível: ele leva as fontes junto e dispensa instalar a Montserrat no computador da sala.",
      "<strong>Envio do arquivo:</strong> verifique o e-mail enviado pela organização do evento com o título &ldquo;Envio da sua Apresentação para a 70a RBRas&rdquo;. O e-mail traz instruções específicas para a sua sessão e indica como fazer o upload do arquivo da apresentação.",
      "O <strong>manual de uso</strong> traz as regras de conteúdo (uma ideia por slide, uma mensagem principal, três conclusões), a identidade visual e os problemas comuns.",
      "<strong>Quantos slides de conteúdo</strong> (orientação do manual, sem contar abertura, divisórias e encerramento): <strong>10 min</strong>, de 7 a 9 slides; <strong>15 min</strong>, de 10 a 14; <strong>20 min</strong>, de 14 a 18. É uma referência para dimensionar o roteiro, não uma regra do evento.",
      "Ajuste o número de slides ao tempo da sua modalidade, indicado na tabela acima. Em todas as modalidades, a apresentação é seguida de <strong>5 minutos para perguntas</strong>."
    ]
  }
};
