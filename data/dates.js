// ─── DATAS IMPORTANTES ───────────────────────────────────────────────────────
// Adicione, remova ou edite datas conforme necessário.
//
// Campos:
//   id        → identificador estável, usado por outras páginas para referenciar
//               este prazo em vez de repetir a data (ver funções ao final)
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
    id:        "premio-destaque",
    titulo:    "Indicações ao Prêmio Destaque RBras",
    inicio:    "2026-05-11",
    fim:       "2026-09-15",
    descricao: "Período de indicação ao Prêmio Destaque RBras",
    icone:     "🏆",
    link:      "premios.html#destaque"
  },
  {
    id:        "fundo-estudante",
    titulo:    "Fundo de Financiamento - Auxílio Estudante",
    inicio:    "2026-06-25",
    fim:       "2026-09-30",
    descricao: "Inscrições para auxílio individual e coletivo a estudantes associados",
    icone:     "🎓",
    link:      "fundo-estudante.html"
  },
  {
    id:        "submissao-trabalhos",
    titulo:    "Submissão de Trabalhos",
    inicio:    "2026-05-11",
    fim:       "2026-08-28",
    descricao: "Comunicação Oral e Pôster",
    icone:     "📝",
    prorrogado: true,
    link:      "apresentadores.html"
  },
  {
    id:        "concurso-tdi",
    titulo:    "Concurso Tese/Dissertação/IC",
    inicio:    "2026-05-11",
    fim:       "2026-08-24",
    descricao: "Submissão de teses, dissertações e trabalhos de IC para avaliação e premiação",
    icone:     "🏅",
    prorrogado: true,
    link:      "apresentadores.html"
  },
  {
    id:        "propostas-sessoes",
    titulo:    "Propostas de Sessões Temáticas e Minicursos",
    inicio:    "2026-05-11",
    fim:       "2026-07-15",
    descricao: "Submissão de propostas de sessões temáticas e minicursos",
    icone:     "🎤",
    link:      "apresentadores.html"
  },
  {
    id:        "lote-1",
    titulo:    "Inscrições com Desconto",
    inicio:    "2026-05-11",
    fim:       "2026-10-02",
    descricao: "1º Lote",
    icone:     "💳",
    link:      "inscricoes.html"
  },
  {
    id:        "divulgacao-aceites",
    titulo:    "Divulgação de Aceites",
    inicio:    "2026-09-25",
    fim:       "2026-09-29",
    descricao: "Notificação sobre aprovação de apresentações e trabalhos",
    icone:     "✉️"
  },
  {
    id:        "pagamento-apresentadores",
    titulo:    "Pagamento da Inscrição de Apresentadores",
    inicio:    "2026-09-25",
    fim:       "2026-10-15",
    descricao: "Autores com trabalho aceito devem estar com a inscrição paga para entrar na programação final",
    icone:     "💰",
    link:      "inscricoes.html"
  },
  {
    id:        "fundo-resultado",
    titulo:    "Resultado do Fundo - Auxílio Estudante",
    inicio:    "2026-10-15",
    fim:       "2026-10-15",
    descricao: "Previsão de envio do resultado por e-mail aos solicitantes",
    icone:     "📬",
    link:      "fundo-estudante.html"
  },
  {
    id:        "lote-2",
    titulo:    "Inscrições sem Desconto",
    inicio:    "2026-10-03",
    fim:       "2026-10-31",
    descricao: "2º Lote: valores intermediários. Sócios RBras, ABE ou IBS têm desconto",
    icone:     "🖊️",
    link:      "inscricoes.html"
  },
  {
    id:        "lote-3",
    titulo:    "Inscrições Tardias",
    inicio:    "2026-11-01",
    fim:       "2026-11-23",
    descricao: "3º Lote: valor cheio, até o início do evento",
    icone:     "🖊️",
    link:      "inscricoes.html"
  },
  {
    id:        "evento",
    titulo:    "70ª RBras",
    inicio:    "2026-11-23",
    fim:       "2026-11-25",
    descricao: "O congresso acontece na UNICAMP - Campinas, SP",
    icone:     "📅",
    destaque:  true,
    link:      "programacao.html"
  },
  {
    id:        "wasa",
    titulo:    "VIII WASA (evento satélite)",
    inicio:    "2026-11-26",
    fim:       "2026-11-26",
    descricao: "Workshop em Análise de Sobrevivência e Aplicações - inscrição independente",
    icone:     "🛰️",
    link:      "wasa.html"
  }
];

// ─── APOIO ───────────────────────────────────────────────────────────────────
// Outras páginas referenciam um prazo pelo identificador, nunca repetindo a
// data. Em vez de escrever "2026-10-31", use dataPorId('lote-2').fim.

const dataPorId = id => DATES.find(d => d.id === id) || null;

// "2026-10-31" devolve "31 de outubro de 2026".
const dataPorExtenso = iso => {
  const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
                 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
  const [ano, mes, dia] = String(iso || '').split('-').map(Number);
  if (!ano || !mes || !dia || mes < 1 || mes > 12) return '';
  return dia + ' de ' + meses[mes - 1] + ' de ' + ano;
};
