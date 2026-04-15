// ─── PATROCINADORES E APOIADORES ─────────────────────────────────────────────
// Campos:
//   tier   → texto exibido como título do grupo
//   nivel  → "gold" | "silver" | "bronze" (controla o tamanho dos logos)
//   patrocinadores → lista com nome, logo (caminho da imagem ou "") e url

const SPONSORS = [
  {
    tier:  "🥇 Ouro",
    nivel: "gold",
    patrocinadores: [
      { nome: "FAPESP", logo: "", url: "https://fapesp.br"  },
      { nome: "CNPq",   logo: "", url: "https://cnpq.br"   }
    ]
  },
  {
    tier:  "🥈 Prata",
    nivel: "silver",
    patrocinadores: [
      // Adicione patrocinadores Prata aqui: { nome: "Nome", logo: "assets/logos/nome.png", url: "https://..." }
    ]
  },
  {
    tier:  "🥉 Bronze & Apoio",
    nivel: "bronze",
    patrocinadores: [
      // Adicione patrocinadores Bronze/Apoio aqui: { nome: "Nome", logo: "assets/logos/nome.png", url: "https://..." }
    ]
  }
];
