// ─── PATROCINADORES E APOIADORES ─────────────────────────────────────────────
// Grade única, sem níveis/rótulos visíveis (Ouro/Prata/Bronze foi removido).
//
// Campos de cada item:
//   nome  → nome do patrocinador/apoiador
//   logo  → caminho da imagem do logo (ou "" para exibir só o nome em texto)
//   url   → link do patrocinador (abre em nova aba)
//   peso  → "lg" | "md" | "sm" — controla só o tamanho da caixa do logo.
//           Não gera nenhum rótulo ou texto visível. Use "lg" como padrão se
//           não houver necessidade de diferenciar.
//   quebraAntes → true força quebra de linha antes deste logo na grade.
//
// Ordenação: renderizado por peso (lg → md → sm) e, dentro do mesmo peso,
// pela ordem em que aparecem aqui.

const SPONSORS = [
  { nome: "FAPESP", logo: "assets/logos/logo-fapesp.png", url: "https://fapesp.br", peso: "lg" },
  { nome: "CNPq",   logo: "assets/logos/logo-cnpq.png",   url: "https://cnpq.br",  peso: "lg" },
  { nome: "CONRE-3", logo: "assets/logos/logo-conre-3.png", url: "https://www.conre3.org.br/portal/", peso: "lg", quebraAntes: true },
  { nome: "CONRE-4", logo: "assets/logos/logo-conre-4.png", url: "https://www.conre4.org.br/", peso: "lg" }

  // Para adicionar um novo apoiador:
  // { nome: "Nome", logo: "assets/logos/nome.png", url: "https://...", peso: "md" }
];
