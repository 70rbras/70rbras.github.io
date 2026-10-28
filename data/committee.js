// ─── COMISSÕES ────────────────────────────────────────────────────────────────
// Cada entrada representa uma comissão exibida como coluna no site. Os membros
// são referências ao cadastro de data/pessoas.js: nome, instituição, foto e
// Lattes vivem lá, não aqui.
//
// Campos por comissão:
//   secao  → identificador interno, por exemplo "organizadora"
//   titulo → título exibido no cabeçalho do card
//   icone  → emoji exibido ao lado do título
//
// Campos por membro:
//   pessoa      → identificador em PESSOAS
//   coordenacao → true quando a pessoa coordena a comissão. É atributo da
//                 participação, não da pessoa: a mesma pessoa pode coordenar
//                 uma comissão sem coordenar outra.

const COMMITTEE = [
  {
    secao: "organizadora",
    titulo: "Comissão Organizadora",
    icone: "⚙️",
    membros: [
      { pessoa: "mariana-rodrigues-motta", coordenacao: true },
      { pessoa: "alex-rodrigo-dos-santos-sousa" },
      { pessoa: "benilton-carvalho" },
      { pessoa: "carlos-cesar-trucios-maza" },
      { pessoa: "larissa-avila-matos" },
      { pessoa: "nancy-lopes-garcia" },
      { pessoa: "rafael-pimentel-maia" },
      { pessoa: "samara-flamini-kiihl" },
      { pessoa: "tatiana-benaglia" },
      { pessoa: "victor-freguglia-souza" }
    ]
  },
  {
    secao: "cientifica",
    titulo: "Comissão Científica",
    icone: "🔬",
    membros: [
      { pessoa: "daiane-aparecida-zuanetti", coordenacao: true },
      { pessoa: "agatha-sacramento-rodrigues" },
      { pessoa: "anderson-luiz-ara" },
      { pessoa: "fernanda-lang-schumacher" },
      { pessoa: "idemauro-antonio-rodrigues-de-lara" },
      { pessoa: "nancy-lopes-garcia" },
      { pessoa: "rafael-de-andrade-moral" },
      { pessoa: "vera-lucia-damasceno-tomazella" },
      { pessoa: "victor-hugo-lachos" }
    ]
  },
  {
    secao: "tese-doutorado",
    titulo: "Comissão Avaliadora: Melhor Tese de Doutorado",
    icone: "🎓",
    membros: [
      { pessoa: "lucia-pereira-barroso" },
      { pessoa: "mario-de-castro-andrade-filho" },
      { pessoa: "paulo-justiniano-ribeiro-junior" }
    ]
  },
  {
    secao: "dissertacao-mestrado",
    titulo: "Comissão Avaliadora: Melhor Dissertação de Mestrado",
    icone: "🎓",
    membros: [
      { pessoa: "erlandson-ferreira-saraiva" },
      { pessoa: "fernanda-de-bastiani" },
      { pessoa: "guilherme-pumi" }
    ]
  },
  {
    secao: "trabalho-ic",
    titulo: "Comissão Avaliadora: Melhor Trabalho de IC",
    icone: "🔍",
    membros: [
      { pessoa: "carlos-tadeu-pagani-zanini" },
      { pessoa: "jodavid-de-araujo-ferreira" },
      { pessoa: "lia-hanna-martins-morita" }
    ]
  },
  {
    secao: "poster-co-local",
    titulo: "Comissão Avaliadora (Pôster + CO) Local",
    icone: "📋",
    membros: [
      { pessoa: "agatha-sacramento-rodrigues" },
      { pessoa: "alex-rodrigo-dos-santos-sousa" },
      { pessoa: "anderson-luiz-ara" },
      { pessoa: "benilton-carvalho" },
      { pessoa: "carlos-cesar-trucios-maza" },
      { pessoa: "daiane-aparecida-zuanetti" },
      { pessoa: "diogo-rossoni" },
      { pessoa: "fernanda-lang-schumacher" },
      { pessoa: "idemauro-antonio-rodrigues-de-lara" },
      { pessoa: "julia-pavan-soler" },
      { pessoa: "larissa-avila-matos" },
      { pessoa: "lia-hanna-martins-morita" },
      { pessoa: "mariana-rodrigues-motta" },
      { pessoa: "rafael-pimentel-maia" },
      { pessoa: "rafael-de-andrade-moral" },
      { pessoa: "samara-flamini-kiihl" },
      { pessoa: "vanderly-janeiro" },
      { pessoa: "vera-lucia-damasceno-tomazella" },
      { pessoa: "victor-freguglia-souza" }
    ]
  }
];
