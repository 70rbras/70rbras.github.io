// ─── PATROCINADORES E APOIADORES ─────────────────────────────────────────────
// Grade única, sem níveis/rótulos visíveis (Ouro/Prata/Bronze foi removido).
//
// Campos de cada item:
//   nome  → nome do patrocinador/apoiador
//   logo  → caminho da imagem do logo (ou "" para exibir só o nome em texto)
//   url   → link do patrocinador (abre em nova aba)
//   peso  → "lg" | "md" | "sm" — controla só o tamanho da caixa do logo.
//           Não gera nenhum rótulo, texto ou agrupamento visível — é puramente
//           uma diferença discreta de tamanho. Use "lg" como padrão se não
//           houver necessidade de diferenciar.
//
// Ordenação: renderizado por peso (lg → md → sm) e, dentro do mesmo peso,
// pela ordem em que aparecem aqui.

const SPONSORS = [
  { nome: "FAPESP", logo: "assets/logos/logo-fapesp.png", url: "https://fapesp.br", peso: "lg" },
  { nome: "CNPq",   logo: "assets/logos/logo-cnpq.png",   url: "https://cnpq.br",  peso: "lg" }

  // Para adicionar um novo apoiador:
  // { nome: "Nome", logo: "assets/logos/nome.png", url: "https://...", peso: "md" }
];
