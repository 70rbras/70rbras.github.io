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
      { nome: "Embrapa", logo: "", url: "https://embrapa.br"   },
      { nome: "Unicamp", logo: "", url: "https://unicamp.br"   },
      { nome: "CAPES",   logo: "", url: "https://capes.gov.br" }
    ]
  },
  {
    tier:  "🥉 Bronze & Apoio",
    nivel: "bronze",
    patrocinadores: [
      { nome: "ABE",           logo: "", url: "#"                               },
      { nome: "ISI",           logo: "", url: "https://isi-web.org"             },
      { nome: "IBS",           logo: "", url: "https://biometricsociety.org"    },
      { nome: "SAS Institute", logo: "", url: "https://sas.com"                },
      { nome: "R Consortium",  logo: "", url: "https://r-consortium.org"        }
    ]
  }
];
