// ─── PROGRAMAÇÃO CIENTÍFICA ───────────────────────────────────────────────────
// Estrutura: cada dia possui "blocos" de horário.
// Cada bloco tem um "horario" e um array de "itens" (eventos simultâneos).
// Tipos: "conf" | "mini" | "session" | "social" | "break"
// Campos do item: tipo, titulo, fim (opcional), inicio (opcional), descricao (opcional), local (opcional), maps_url (opcional)
// Nota: "inicio" no item sobrescreve o "horario" do bloco no card — útil quando atividades dentro de um
// mesmo bloco têm horários de início diferentes (ex.: bloco 08:00 com item que começa às 08:30).

const SCHEDULE = [
  {
    dia:           "23 nov · Seg",
    data_completa: "23 de novembro de 2026",
    blocos: [
      {
        horario: "08:00",
        itens: [
          { tipo: "social", titulo: "Inscrições e Credenciamento", inicio: "09:00", fim: "16:00", descricao: "Início às 9h",  local: "A ser determinado", maps_url: "" },
          { tipo: "mini",   titulo: "Minicurso M-1",               fim: "10:00", descricao: "",              local: "Sala A" },
          { tipo: "mini",   titulo: "Minicurso M-2",               fim: "10:00", descricao: "",              local: "Sala B" }
        ]
      },
      {
        horario: "10:00",
        itens: [
          { tipo: "break",  titulo: "Coffee-Break",                fim: "10:30", descricao: "",              local: "Saguão Principal" }
        ]
      },
      {
        horario: "10:30",
        itens: [
          { tipo: "social", titulo: "Cerimônia de Abertura",       fim: "11:30", descricao: "",              local: "Auditório" }
        ]
      },
      {
        horario: "11:30",
        itens: [
          { tipo: "conf",    titulo: "C-1",                        fim: "12:30", descricao: "Conferência convidada", local: "Auditório Principal" }
        ]
      },
      {
        horario: "12:30",
        itens: [
          { tipo: "break",  titulo: "Almoço",                      fim: "14:00", descricao: "",              local: "" }
        ]
      },
      {
        horario: "14:00",
        itens: [
          { tipo: "session", titulo: "ST-1",   fim: "15:30", descricao: "Sessão Temática 1",  local: "Sala 101" },
          { tipo: "session", titulo: "ST-2",   fim: "15:30", descricao: "Sessão Temática 2",  local: "Sala 102" },
          { tipo: "session", titulo: "ST-3",   fim: "15:30", descricao: "Sessão Temática 3",  local: "Sala 103" },
          { tipo: "session", titulo: "CO-1",   fim: "15:30", descricao: "Comunicações Orais", local: "Sala 104" },
          { tipo: "session", titulo: "IC-M-D", fim: "15:30", descricao: "Iniciação Científica", local: "Sala 105" }
        ]
      },
      {
        horario: "15:30",
        itens: [
          { tipo: "conf",    titulo: "C-2",                        fim: "16:30", descricao: "Conferência convidada", local: "Auditório Principal" }
        ]
      },
      {
        horario: "16:30",
        itens: [
          { tipo: "break",  titulo: "Café",                        fim: "17:30", descricao: "",              local: "Saguão Principal" }
        ]
      },
      {
        horario: "17:30",
        itens: [
          { tipo: "session", titulo: "Sessão de Pôsteres 1",       fim: "19:00", descricao: "Apresentação e discussão de trabalhos no formato painel", local: "Área de Pôsteres" }
        ]
      }
    ]
  },
  {
    dia:           "24 nov · Ter",
    data_completa: "24 de novembro de 2026",
    blocos: [
      {
        horario: "08:00",
        itens: [
          { tipo: "mini",   titulo: "Minicurso M-1",               fim: "10:00", descricao: "Continuação do dia anterior", local: "Sala A" },
          { tipo: "mini",   titulo: "Minicurso M-2",               fim: "10:00", descricao: "Continuação do dia anterior", local: "Sala B" }
        ]
      },
      {
        horario: "10:00",
        itens: [
          { tipo: "break",  titulo: "Café",                        fim: "10:30", descricao: "",              local: "Saguão Principal" }
        ]
      },
      {
        horario: "10:30",
        itens: [
          { tipo: "conf",    titulo: "C-3",                        fim: "11:30", descricao: "Conferência convidada", local: "Auditório Principal" }
        ]
      },
      {
        horario: "11:30",
        itens: [
          { tipo: "session", titulo: "Sessão de Pôsteres 2",       fim: "12:30", descricao: "Apresentação e discussão de trabalhos no formato painel", local: "Área de Pôsteres" }
        ]
      },
      {
        horario: "12:30",
        itens: [
          { tipo: "break",  titulo: "Almoço",                      fim: "14:00", descricao: "",              local: "" }
        ]
      },
      {
        horario: "14:00",
        itens: [
          { tipo: "social", titulo: "CNPEM",                       fim: "17:30", descricao: "Centro Nacional de Pesquisa em Energia e Materiais", local: "CNPEM — Campinas", maps_url: "https://maps.google.com/?q=CNPEM+Campinas" }
        ]
      },
      {
        horario: "17:30",
        itens: [
          { tipo: "social", titulo: "Reunião RBras / Prêmio RBras", fim: "19:00", descricao: "Assembleia e entrega de premiações da Região Brasileira da IBS", local: "Auditório Principal" }
        ]
      }
    ]
  },
  {
    dia:           "25 nov · Qua",
    data_completa: "25 de novembro de 2026",
    blocos: [
      {
        horario: "08:00",
        itens: [
          { tipo: "mini",   titulo: "Minicurso MC-1",              fim: "09:00", descricao: "",              local: "Sala A" },
          { tipo: "mini",   titulo: "Minicurso MC-2",              fim: "09:00", descricao: "",              local: "Sala B" }
        ]
      },
      {
        horario: "09:00",
        itens: [
          { tipo: "session", titulo: "CO-2",                       fim: "10:00", descricao: "Comunicações Orais", local: "Sala 101" },
          { tipo: "session", titulo: "CO-3",                       fim: "10:00", descricao: "Comunicações Orais", local: "Sala 102" },
          { tipo: "session", titulo: "CO-4",                       fim: "10:00", descricao: "Comunicações Orais", local: "Sala 103" }
        ]
      },
      {
        horario: "10:00",
        itens: [
          { tipo: "break",  titulo: "Café",                        fim: "10:30", descricao: "",              local: "Saguão Principal" }
        ]
      },
      {
        horario: "10:30",
        itens: [
          { tipo: "conf",    titulo: "C-4",                        fim: "11:30", descricao: "Conferência convidada", local: "Auditório Principal" }
        ]
      },
      {
        horario: "11:30",
        itens: [
          { tipo: "conf",    titulo: "C-5",                        fim: "12:30", descricao: "Conferência convidada", local: "Auditório Principal" }
        ]
      },
      {
        horario: "12:30",
        itens: [
          { tipo: "break",  titulo: "Almoço",                      fim: "14:00", descricao: "",              local: "" }
        ]
      },
      {
        horario: "14:00",
        itens: [
          { tipo: "session", titulo: "ST-4",  fim: "15:30", descricao: "Sessão Temática 4",  local: "Sala 101" },
          { tipo: "session", titulo: "ST-5",  fim: "15:30", descricao: "Sessão Temática 5",  local: "Sala 102" },
          { tipo: "session", titulo: "ST-6",  fim: "15:30", descricao: "Sessão Temática 6",  local: "Sala 103" },
          { tipo: "session", titulo: "CO-5",  fim: "15:30", descricao: "Comunicações Orais", local: "Sala 104" }
        ]
      },
      {
        horario: "15:30",
        itens: [
          { tipo: "social", titulo: "Premiações e Encerramento",   fim: "17:00", descricao: "Cerimônia de encerramento da 70ª RBras", local: "Auditório Principal" }
        ]
      }
    ]
  }
];
