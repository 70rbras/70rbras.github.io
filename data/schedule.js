// ─── PROGRAMAÇÃO CIENTÍFICA ───────────────────────────────────────────────────
// Cada item do array representa um dia do evento.
// Tipos de atividade: "keynote" | "mini" | "session" | "social" | "break"

const SCHEDULE = [
  {
    dia:           "23 nov · Seg",
    data_completa: "23 de novembro de 2026",
    atividades: [
      { horario: "08:00", tipo: "mini",    titulo: "Minicursos M-1 e M-2 (simultâneos)",                         descricao: "Inscrições abertas a partir das 9h no saguão principal" },
      { horario: "10:00", tipo: "break",   titulo: "Café",                                                        descricao: "" },
      { horario: "10:30", tipo: "social",  titulo: "Cerimônia de Abertura",                                       descricao: "" },
      { horario: "11:30", tipo: "keynote", titulo: "C-1",                                                         descricao: "Conferência convidada" },
      { horario: "12:30", tipo: "break",   titulo: "Almoço",                                                      descricao: "" },
      { horario: "14:00", tipo: "session", titulo: "Sessões Temáticas e Comunicações Orais (simultâneas)",        descricao: "ST-1 · ST-2 · ST-3 · CO-1 · IC-M-D" },
      { horario: "15:30", tipo: "keynote", titulo: "C-2",                                                         descricao: "Conferência convidada" },
      { horario: "16:30", tipo: "break",   titulo: "Café",                                                        descricao: "" },
      { horario: "17:30", tipo: "session", titulo: "Sessão de Pôsteres 1",                                        descricao: "Apresentação e discussão de trabalhos no formato painel" }
    ]
  },
  {
    dia:           "24 nov · Ter",
    data_completa: "24 de novembro de 2026",
    atividades: [
      { horario: "08:00", tipo: "mini",    titulo: "Minicursos M-1 e M-2 (simultâneos)",                         descricao: "Continuação dos minicursos do dia anterior" },
      { horario: "10:00", tipo: "break",   titulo: "Café",                                                        descricao: "" },
      { horario: "10:30", tipo: "keynote", titulo: "C-3",                                                         descricao: "Conferência convidada" },
      { horario: "11:30", tipo: "session", titulo: "Sessão de Pôsteres 2",                                        descricao: "Apresentação e discussão de trabalhos no formato painel" },
      { horario: "12:30", tipo: "break",   titulo: "Almoço",                                                      descricao: "" },
      { horario: "14:00", tipo: "social",  titulo: "CNPEM",                                                       descricao: "Atividade especial — Centro Nacional de Pesquisa em Energia e Materiais" },
      { horario: "17:30", tipo: "social",  titulo: "Reunião RBras / Prêmio RBras",                                descricao: "Assembleia e entrega de premiações da Região Brasileira da IBS" }
    ]
  },
  {
    dia:           "25 nov · Qua",
    data_completa: "25 de novembro de 2026",
    atividades: [
      { horario: "08:00", tipo: "mini",    titulo: "Minicursos MC-1 e MC-2 (simultâneos)",                       descricao: "" },
      { horario: "09:00", tipo: "session", titulo: "Comunicações Orais (simultâneas)",                           descricao: "CO-2 · CO-3 · CO-4" },
      { horario: "10:00", tipo: "break",   titulo: "Café",                                                        descricao: "" },
      { horario: "10:30", tipo: "keynote", titulo: "C-4",                                                         descricao: "Conferência convidada" },
      { horario: "11:30", tipo: "keynote", titulo: "C-5",                                                         descricao: "Conferência convidada" },
      { horario: "12:30", tipo: "break",   titulo: "Almoço",                                                      descricao: "" },
      { horario: "14:00", tipo: "session", titulo: "Sessões Temáticas e Comunicações Orais (simultâneas)",       descricao: "ST-4 · ST-5 · ST-6 · CO-5" },
      { horario: "15:30", tipo: "social",  titulo: "Premiações e Encerramento",                                   descricao: "Cerimônia de encerramento da 70ª RBras" }
    ]
  }
];
