// ─── PROGRAMAÇÃO CIENTÍFICA ───────────────────────────────────────────────────
// Cada item do array representa um dia do evento.
// Tipos de atividade: "keynote" | "mini" | "session" | "social" | "break"

const SCHEDULE = [
  {
    dia:           "23 nov · Seg",
    data_completa: "23 de novembro de 2026",
    atividades: [
      { horario: "08:00", tipo: "break",   titulo: "Credenciamento e retirada de materiais",                                                              descricao: "Saguão principal" },
      { horario: "09:00", tipo: "keynote", titulo: "Cerimônia de Abertura da 70ª RBras",                                                                  descricao: "Autoridades, diretoria da RBras e representantes das instituições anfitriãs" },
      { horario: "10:00", tipo: "keynote", titulo: "Aprendizado de máquina e inferência estatística: convergências e tensões na era dos dados massivos",   descricao: "Profa. Dra. Ana Luiza Matos · USP" },
      { horario: "11:00", tipo: "break",   titulo: "Coffee Break",                                                                                         descricao: "Foyer do auditório principal" },
      { horario: "11:30", tipo: "mini",    titulo: "Minicursos — Bloco 1 (simultâneos)",                                                                   descricao: "MC1: Modelos Mistos em R · MC2: Análise de Sobrevivência · MC3: Métodos Bayesianos Computacionais" },
      { horario: "13:00", tipo: "break",   titulo: "Almoço",                                                                                               descricao: "Restaurante universitário e praça de alimentação" },
      { horario: "14:30", tipo: "session", titulo: "Sessões Temáticas — Bloco 1 (simultâneas)",                                                            descricao: "ST1: Bioestatística e Saúde · ST2: Experimentação Agrícola · ST3: Estatística Espacial" },
      { horario: "16:30", tipo: "break",   titulo: "Coffee Break",                                                                                         descricao: "" },
      { horario: "17:00", tipo: "session", titulo: "Sessão de Pôsteres — Bloco 1",                                                                         descricao: "Apresentação e discussão de trabalhos no formato painel" },
      { horario: "19:30", tipo: "social",  titulo: "Jantar de Abertura e Confraternização",                                                                descricao: "Local a confirmar · incluso na inscrição" }
    ]
  },
  {
    dia:           "24 nov · Ter",
    data_completa: "24 de novembro de 2026",
    atividades: [
      { horario: "08:30", tipo: "keynote", titulo: "Bayesian hierarchical models for large-scale ecological data: from forests to fisheries",              descricao: "Prof. Dr. James T. Whitmore · University of Edinburgh" },
      { horario: "09:30", tipo: "break",   titulo: "Coffee Break",                                                                                         descricao: "" },
      { horario: "10:00", tipo: "mini",    titulo: "Minicursos — Bloco 2 (simultâneos)",                                                                   descricao: "MC4: Deep Learning para Bioinformática · MC5: Análise Fatorial e SEM · MC6: R para Epidemiologia" },
      { horario: "12:00", tipo: "break",   titulo: "Almoço",                                                                                               descricao: "" },
      { horario: "14:00", tipo: "keynote", titulo: "Vigilância epidemiológica baseada em dados: lições da pandemia e perspectivas para o SUS",             descricao: "Prof. Dr. Carlos Eduardo Ferreira · Fiocruz" },
      { horario: "15:00", tipo: "session", titulo: "Sessões Temáticas — Bloco 2 (simultâneas)",                                                            descricao: "ST4: Genômica Estatística · ST5: Modelagem Ambiental · ST6: Estatística Computacional" },
      { horario: "16:30", tipo: "break",   titulo: "Coffee Break",                                                                                         descricao: "" },
      { horario: "17:00", tipo: "keynote", titulo: "Mesa Redonda: O futuro da biometria no Brasil",                                                        descricao: "Mediação: Prof. Dr. Marcos Antônio Oliveira · Debatedores a confirmar" },
      { horario: "18:30", tipo: "session", titulo: "Assembleia da Região Brasileira da IBS",                                                               descricao: "Aberta a todos os sócios da RBras" }
    ]
  },
  {
    dia:           "25 nov · Qua",
    data_completa: "25 de novembro de 2026",
    atividades: [
      { horario: "08:30", tipo: "keynote", titulo: "Estatística para segurança alimentar: delineamentos modernos em experimentos agrícolas de larga escala", descricao: "Profa. Dra. Fernanda Chaves Lima · Embrapa" },
      { horario: "09:30", tipo: "break",   titulo: "Coffee Break",                                                                                           descricao: "" },
      { horario: "10:00", tipo: "keynote", titulo: "Estadística espacial y salud pública: modelado de enfermedades transmitidas por vectores en América Latina", descricao: "Profa. Dra. María José Rendón · UNAM" },
      { horario: "11:00", tipo: "mini",    titulo: "Minicursos — Bloco 3 (simultâneos)",                                                                     descricao: "MC7: Stan e MCMC · MC8: Análise de Dados Longitudinais · MC9: Machine Learning com tidymodels" },
      { horario: "12:30", tipo: "break",   titulo: "Almoço",                                                                                                 descricao: "" },
      { horario: "14:00", tipo: "session", titulo: "Sessões Temáticas — Bloco 3 (simultâneas)",                                                              descricao: "ST7: Biometria Florestal · ST8: Modelos de Mistura · ST9: Estatística e Ensino" },
      { horario: "15:30", tipo: "session", titulo: "Sessão de Pôsteres — Bloco 2",                                                                           descricao: "Apresentação e discussão de trabalhos no formato painel" },
      { horario: "16:30", tipo: "break",   titulo: "Coffee Break",                                                                                           descricao: "" },
      { horario: "17:00", tipo: "keynote", titulo: "Cerimônia de Encerramento e Premiações",                                                                 descricao: "Melhores trabalhos de pós-graduação · Melhores pôsteres · Anúncio da 71ª RBras" }
    ]
  }
];
