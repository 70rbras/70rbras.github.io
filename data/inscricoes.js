// ─── VALORES DE INSCRIÇÃO ────────────────────────────────────────────────────
// Fonte única dos valores exibidos na tabela de inscricoes.html. Edite aqui:
// a página monta a tabela a partir deste arquivo, portanto nenhum valor em
// reais deve ser escrito no HTML.
//
// Estrutura:
//   grupos[]                → blocos da tabela, na ordem de exibição
//     titulo                → cabeçalho do bloco
//     categorias[]          → linhas do bloco, na ordem de exibição
//       rotulo              → nome da categoria
//       elegibilidade       → (opcional) observação de quem se enquadra,
//                             exibida em letra menor abaixo do rótulo
//       valores             → [1º Lote, 2º Lote, 3º Lote], em número, não em
//                             texto; a formatação em reais é feita na página
//
// Os períodos de cada lote não ficam aqui: eles vêm de data/dates.js, pelos
// identificadores lote-1, lote-2 e lote-3.

const INSCRICOES = {
  grupos: [
    {
      titulo: "🎓 Estudante de Graduação",
      categorias: [
        { rotulo: "Sócio RBras / ABE / IBS", valores: [140, 155, 185] },
        { rotulo: "Não-sócio",               valores: [240, 265, 315] }
      ]
    },
    {
      titulo: "📚 Estudante de Pós-Graduação",
      categorias: [
        { rotulo: "Sócio RBras / ABE / IBS", valores: [220, 245, 290] },
        { rotulo: "Não-sócio",               valores: [330, 365, 430] }
      ]
    },
    {
      titulo: "👤 Pesquisador / Profissional",
      categorias: [
        { rotulo: "Sócio RBras / ABE / IBS", valores: [390, 430, 510] },
        { rotulo: "Não-sócio",               valores: [660, 730, 860] }
      ]
    }
  ]
};
