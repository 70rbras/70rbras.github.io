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
//
// Assim que o primeiro `premiado` for preenchido, a faixa dourada aparece
// automaticamente na Home e o card correspondente em premios.html é revelado.

const PREMIOS_ENTREGA = "Os prêmios serão entregues durante a 70ª RBras, de 23 a 25 de novembro de 2026, no IMECC/Unicamp.";

const PREMIOS = [
  {
    id:        "destaque",
    titulo:    "Prêmio Destaque RBras",
    icone:     "🏆",
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
    titulo:    "Melhor Tese de Doutorado",
    icone:     "🎓",
    descricao: "Concurso Tese/Dissertação/IC: categoria Doutorado.",
    comissao:  "tese-doutorado",
    premiado:  null
  },
  {
    id:        "dissertacao",
    titulo:    "Melhor Dissertação de Mestrado",
    icone:     "📘",
    descricao: "Concurso Tese/Dissertação/IC: categoria Mestrado.",
    comissao:  "dissertacao-mestrado",
    premiado:  null
  },
  {
    id:        "ic",
    titulo:    "Melhor Trabalho de Iniciação Científica",
    icone:     "🔍",
    descricao: "Concurso Tese/Dissertação/IC: categoria Iniciação Científica.",
    comissao:  "trabalho-ic",
    premiado:  null
  }
];
