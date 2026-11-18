// ─── PRÊMIOS RBRAS 2026 ──────────────────────────────────────────────────────
// Alimenta premios.html (vitrine "Premiados 2026") e a faixa de anúncio da Home.
//
// Campos por prêmio:
//   id        → âncora em premios.html (ex.: premios.html#destaque)
//   titulo    → nome do prêmio
//   icone     → emoji exibido no card
//   descricao → frase curta exibida enquanto o resultado não foi divulgado
//   comissao  → (opcional) valor de `secao` da comissão avaliadora em data/committee.js
//   premiado  → null enquanto não houver anúncio. Para anunciar, preencha:
//       nome        → nome completo (obrigatório)
//       instituicao → instituição de afiliação
//       foto        → caminho da foto, ex.: "assets/fotos/fulano-400.jpg" (ou null para iniciais)
//       lattes      → link do Currículo Lattes
//       texto       → (Destaque) 1 ou 2 parágrafos sobre a trajetória; use um array para vários parágrafos
//       trabalho    → (Tese/Dissertação/IC) título do trabalho premiado
//       orientador  → (Tese/Dissertação/IC) nome do(a) orientador(a)
//   mencoes   → (opcional) array de menções honrosas, com os mesmos campos de `premiado`
//   entrega_atividade → (opcional) id da atividade de data/programacao.json em que o
//               prêmio é entregue. premios.html lê dali dia, horário e local, de
//               modo que a planilha da programação continua a fonte única.
//   sessao_finalistas → (opcional) id da sessão de data/programacao.json em que os
//               finalistas apresentam (ex.: "CONC-TESE"). premios.html lê dali nome,
//               instituição, título além do resumo de cada finalista, em ordem de fala.
//               Nada disso se escreve aqui: corrige-se na planilha (abas trabalhos e resumos).
//
// Assim que o primeiro `premiado` for preenchido, a faixa dourada aparece
// automaticamente na Home e o card correspondente em premios.html é revelado.

// A frase cita a edição além das datas do evento, que vivem em data/config.js.
// Aqui ficam apenas os marcadores {edicao} e {datas}, trocados em premios.html
// no momento de escrever o texto, do mesmo modo que data/submissions.js faz com
// os prazos. Nenhuma data é escrita neste arquivo.
const PREMIOS_ENTREGA = "Os prêmios serão entregues durante a {edicao}, de {datas}, na Unicamp.";

// Convite para as sessões dos finalistas, exibido em premios.html#finalistas.
// {dia}, {horario} além de {predio} vêm da primeira sessão de finalistas na
// programação, portanto nenhuma data é escrita aqui.
const FINALISTAS_CONVITE = {
  titulo: "Venha prestigiar os finalistas!",
  texto:  "As apresentações dos finalistas acontecem na {dia}, das {horario}, no {predio}. Cada concurso tem sua própria sala, todas no mesmo horário: escolha a sua e venha torcer pela próxima geração da Estatística e da Biometria.",
  home:   "Conheça os finalistas dos concursos de Tese, Dissertação e Iniciação Científica"
};

const PREMIOS = [
  {
    id:        "destaque",
    titulo:    "Prêmio Destaque RBras",
    icone:     "🏆",
    entrega_atividade: "REUNIAO-RBRAS",
    descricao: "Homenagem a quem dedicou a carreira ao ensino, à pesquisa e à orientação em Estatística e Biometria no Brasil.",
    premiado:  {
      nome:        "Prof. Dr. Dalton Francisco de Andrade",
      instituicao: "Universidade Federal de Santa Catarina (UFSC)",
      foto:        "assets/fotos/dalton-andrade-400.jpg",
      lattes:      "http://lattes.cnpq.br/8698702467925654",
      texto: [
        "Após deliberação do Conselho Diretor, a Diretoria da RBras anuncia o Prof. Dr. Dalton Francisco de Andrade como o pesquisador escolhido para receber o <strong>Prêmio Destaque RBras 2026</strong>.",
        "A premiação reconhece sua expressiva trajetória dedicada ao ensino, à pesquisa e à formação de profissionais nas áreas de Estatística e Biometria no Brasil. Suas contribuições acadêmicas, científicas e institucionais ao longo dos anos têm sido de grande relevância para o desenvolvimento e a consolidação dessas áreas no país, refletindo os valores, a missão e os objetivos da RBras."
      ]
    }
  },
  {
    id:        "tese",
    sessao_finalistas: "CONC-TESE",
    titulo:    "Melhor Tese de Doutorado",
    icone:     "🎓",
    descricao: "Concurso Tese/Dissertação/IC: categoria Doutorado.",
    comissao:  "tese-doutorado",
    premiado:  null
  },
  {
    id:        "dissertacao",
    sessao_finalistas: "CONC-DISS",
    titulo:    "Melhor Dissertação de Mestrado",
    icone:     "📘",
    descricao: "Concurso Tese/Dissertação/IC: categoria Mestrado.",
    comissao:  "dissertacao-mestrado",
    premiado:  null
  },
  {
    id:        "ic",
    sessao_finalistas: "CONC-IC",
    titulo:    "Melhor Trabalho de Iniciação Científica",
    icone:     "🔍",
    descricao: "Concurso Tese/Dissertação/IC: categoria Iniciação Científica.",
    comissao:  "trabalho-ic",
    premiado:  null
  }
];
