// ─── DATAS IMPORTANTES ───────────────────────────────────────────────────────
// Adicione, remova ou edite datas conforme necessário.
//
// Campos:
//   titulo    → nome do prazo/evento
//   inicio    → data de início no formato ISO  "YYYY-MM-DD"
//   fim       → data de término no formato ISO "YYYY-MM-DD"
//               (use o mesmo valor de `inicio` para um evento de um só dia)
//   descricao → descrição curta exibida abaixo da data
//   icone     → emoji exibido no card
//   destaque  → (opcional) true = card principal do evento (banner destacado)
//
// O status (Encerrado / Aberto agora / Em breve), a contagem de dias e a
// ordenação cronológica são calculados automaticamente em tempo de renderização.

const DATES = [
  {
    titulo:    "Submissão de Trabalhos",
    inicio:    "2026-05-04",
    fim:       "2026-08-15",
    descricao: "Envio de trabalhos orais e pôsteres",
    icone:     "📝"
  },
  {
    titulo:    "Propostas de Sessões, Mesas e Minicursos",
    inicio:    "2026-05-04",
    fim:       "2026-06-05",
    descricao: "Submissão de sessões temáticas, mesas redondas e minicursos",
    icone:     "🎤"
  },
  {
    titulo:    "Inscrições com Desconto",
    inicio:    "2026-05-05",
    fim:       "2026-09-30",
    descricao: "Inscrições com valor promocional",
    icone:     "💳"
  },
  {
    titulo:    "Divulgação de Aceites",
    inicio:    "2026-09-14",
    fim:       "2026-09-15",
    descricao: "Notificação sobre aprovação de apresentações e trabalhos",
    icone:     "✉️"
  },
  {
    titulo:    "Inscrições sem Desconto",
    inicio:    "2026-10-01",
    fim:       "2026-11-23",
    descricao: "Inscrições regulares (valor cheio)",
    icone:     "🖊️"
  },
  {
    titulo:    "70ª RBras",
    inicio:    "2026-11-23",
    fim:       "2026-11-25",
    descricao: "O congresso acontece na UNICAMP — Campinas, SP",
    icone:     "📅",
    destaque:  true
  }
];
