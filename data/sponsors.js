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
      { nome: "X", logo: "", url: "https://site"   },
      { nome: "Y", logo: "", url: "https://site"   },
      { nome: "Z",   logo: "", url: "https://site" }
    ]
  },
  {
    tier:  "🥉 Bronze & Apoio",
    nivel: "bronze",
    patrocinadores: [
      { nome: "A",           logo: "", url: "#"                               },
      { nome: "B",           logo: "", url: "https://b"             },
      { nome: "C",           logo: "", url: "https://c"    },
      { nome: "D", logo: "", url: "https://d"                },
      { nome: "E",  logo: "", url: "https://e"        }
    ]
  }
];
