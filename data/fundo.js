// ─── FUNDO DE FINANCIAMENTO, AUXÍLIO ESTUDANTE ───────────────────────────────
// Fonte única dos montantes além dos textos de estado de fundo-estudante.html.
//
// O prazo não fica aqui: ele vem de data/dates.js, pelo identificador em
// prazo_id, que guarda o início além do fim do período de solicitação. Assim a
// data de abertura e a de encerramento existem num lugar só do repositório.
//
// Nos textos de estado valem três substituições:
//   {inicio} → data de abertura por extenso
//   {fim}    → data de encerramento por extenso
//   {dias}   → quantos dias faltam, com a palavra "dia" ou "dias"
//   {ano}    → ano do encerramento

const FUNDO = {
  prazo_id: "fundo-estudante",

  // Valores em número, não em texto: a formatação em reais é feita na página.
  montantes: {
    total:      5000,
    individual: 3000,
    coletivo:   2000
  },

  estados: {
    antes: {
      titulo:  "Inscrições em breve",
      detalhe: 'Abertura em <span class="prazo">{inicio}</span>'
    },
    aberto: {
      titulo:  "Inscrições abertas",
      detalhe: 'Encerram em <span class="prazo">{fim}</span> - faltam <strong>{dias}</strong>'
    },
    encerrado: {
      titulo:  "Período de inscrições encerrado",
      detalhe: "O Fundo de Financiamento para Estudantes {ano} está em avaliação."
    }
  }
};
