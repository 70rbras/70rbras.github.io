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
//
// Exibido em: index.html, faixa "Próximas datas" (#proximas-datas). Só aparecem
// os itens ainda abertos ou futuros; o que já passou some sozinho.

const DATES = [
  {
    titulo:    "Indicações ao Prêmio Destaque RBras",
    inicio:    "2026-05-11",
    fim:       "2026-09-15",
    descricao: "Período de indicação ao Prêmio Destaque RBras",
    icone:     "🏆",
    link:      "premios.html#destaque"
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
    descricao: "Comunicação Oral e Pôster: encerrada em 28/ago",
    icone:     "📝",
    prorrogado: true,
    link:      "apresentadores.html"
  },
  {
    titulo:    "Concurso Tese/Dissertação/IC",
    inicio:    "2026-05-11",
    fim:       "2026-08-24",
    descricao: "Submissão de teses, dissertações e trabalhos de IC para avaliação e premiação: encerrada em 24/ago",
    icone:     "🏅",
    prorrogado: true,
    link:      "apresentadores.html"
  },
  {
    titulo:    "Propostas de Sessões Temáticas e Minicursos",
    inicio:    "2026-05-11",
    fim:       "2026-07-15",
    descricao: "Submissão de propostas de sessões temáticas e minicursos",
    icone:     "🎤",
    link:      "apresentadores.html"
  },
  {
    titulo:    "Inscrições com Desconto",
    inicio:    "2026-05-11",
    fim:       "2026-10-02",
    descricao: "1º Lote: encerrado em 2/out",
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
    titulo:    "Pagamento da Inscrição de Apresentadores",
    inicio:    "2026-09-25",
    fim:       "2026-10-15",
    descricao: "Autores com trabalho aceito devem estar com a inscrição paga para entrar na programação final",
    icone:     "💰",
    link:      "inscricoes.html"
  },
  {
    titulo:    "Resultado do Fundo - Auxílio Estudante",
    inicio:    "2026-10-15",
    fim:       "2026-10-15",
    descricao: "Previsão de envio do resultado por e-mail aos solicitantes",
    icone:     "📬",
    link:      "fundo-estudante.html"
  },
  {
    titulo:    "Inscrições sem Desconto",
    inicio:    "2026-10-03",
    fim:       "2026-10-31",
    descricao: "2º Lote: valores intermediários. Sócios RBras, ABE ou IBS têm desconto",
    icone:     "🖊️",
    link:      "inscricoes.html"
  },
  {
    titulo:    "Inscrições Tardias",
    inicio:    "2026-11-01",
    fim:       "2026-11-23",
    descricao: "3º Lote: valor cheio, até o início do evento",
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
  },
  {
    titulo:    "VIII WASA (evento satélite)",
    inicio:    "2026-11-26",
    fim:       "2026-11-26",
    descricao: "Workshop em Análise de Sobrevivência e Aplicações - inscrição independente",
    icone:     "🛰️",
    link:      "wasa.html"
  }
];
