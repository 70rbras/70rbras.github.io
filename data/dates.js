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
//   prorrogado → (opcional) true = selo dourado "Prazo Prorrogado" no card
//
// O status (Encerrado / Aberto agora / Em breve), a contagem de dias e a
// ordenação cronológica são calculados automaticamente em tempo de renderização.

const DATES = [
  {
    titulo:    "Indicações ao Prêmio Destaque RBras",
    inicio:    "2026-05-11",
    fim:       "2026-09-15",
    descricao: "Período de indicação ao Prêmio Destaque RBras",
    icone:     "🏆",
    link:      "premio.html"
  },
  {
    titulo:    "Fundo de Financiamento - Auxílio Estudante",
    inicio:    "2026-06-25",
    fim:       "2026-09-30",
    descricao: "Inscrições para auxílio individual e coletivo a estudantes associados",
    icone:     "🎓",
    link:      "fundo-estudante.html"
  },
  {
    titulo:    "Submissão de Trabalhos",
    inicio:    "2026-05-11",
    fim:       "2026-08-28",
    descricao: "Comunicação Oral e Pôster: última oportunidade excepcional até 28/ago, 17h (horário de Brasília)",
    icone:     "📝",
    prorrogado: true,
    link:      "cientifico.html#submissoes"
  },
  {
    titulo:    "Concurso Tese/Dissertação/IC",
    inicio:    "2026-05-11",
    fim:       "2026-08-24",
    descricao: "Submissão de teses, dissertações e trabalhos de IC para avaliação e premiação: prazo prorrogado até 24/ago (23h59)",
    icone:     "🏅",
    prorrogado: true,
    link:      "cientifico.html#submissoes"
  },
  {
    titulo:    "Propostas de Sessões Temáticas e Minicursos",
    inicio:    "2026-05-11",
    fim:       "2026-07-15",
    descricao: "Submissão de propostas de sessões temáticas e minicursos",
    icone:     "🎤",
    link:      "cientifico.html#submissoes"
  },
  {
    titulo:    "Inscrições com Desconto",
    inicio:    "2026-05-11",
    fim:       "2026-09-30",
    descricao: "1º Lote",
    icone:     "💳",
    link:      "inscricoes.html"
  },
  {
    titulo:    "Divulgação de Aceites",
    inicio:    "2026-09-25",
    fim:       "2026-09-29",
    descricao: "Notificação sobre aprovação de apresentações e trabalhos",
    icone:     "✉️"
  },
  {
    titulo:    "Inscrições sem Desconto",
    inicio:    "2026-10-01",
    fim:       "2026-10-31",
    descricao: "2º Lote",
    icone:     "🖊️",
    link:      "inscricoes.html"
  },
  {
    titulo:    "Inscrições Tardias",
    inicio:    "2026-11-01",
    fim:       "2026-11-23",
    descricao: "3º Lote",
    icone:     "🖊️",
    link:      "inscricoes.html"
  },
  {
    titulo:    "70ª RBras",
    inicio:    "2026-11-23",
    fim:       "2026-11-25",
    descricao: "O congresso acontece na UNICAMP - Campinas, SP",
    icone:     "📅",
    destaque:  true,
    link:      "programacao.html"
  }
];
