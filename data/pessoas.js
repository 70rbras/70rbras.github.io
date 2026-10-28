// ─── CADASTRO DE PESSOAS ─────────────────────────────────────────────────────
// Cadastro único de todas as pessoas que o site exibe. Comissões, convidados e
// demais listas referenciam cada uma pelo identificador, nunca repetindo nome,
// instituição, foto ou Lattes. Corrigir um dado aqui corrige o site inteiro.
//
// Campos:
//   nome        → nome oficial, decidido pela comissão em scripts/pessoas-oficiais.md
//   instituicao → instituição de afiliação, como deve aparecer nos cartões
//   foto        → caminho da imagem; ausente faz o cartão usar as iniciais
//   lattes      → endereço do currículo Lattes; ausente omite o link
//   website     → endereço do sítio pessoal; ausente omite o link
//   genero      → "f" ou "m"; preenchido apenas onde o site exibe rótulo
//                 flexionado, hoje só nas coordenações de comissão. Ausente,
//                 o rótulo sai na forma neutra.
//
// O identificador é derivado do nome oficial, devendo permanecer estável: é
// por ele que as demais listas encontram a pessoa.

const PESSOAS = {
  "agatha-sacramento-rodrigues": {
    nome:        "Ágatha Sacramento Rodrigues",
    instituicao: "UFES",
    foto:        "assets/fotos/agatha-400.png",
    lattes:      "http://lattes.cnpq.br/3445977720574534",
  },
  "alex-rodrigo-dos-santos-sousa": {
    nome:        "Alex Rodrigo dos Santos Sousa",
    instituicao: "UNICAMP",
    foto:        "assets/fotos/alex-400.png",
    lattes:      "http://lattes.cnpq.br/6521094728394053",
  },
  "amanda-merian-freitas-mendes": {
    nome:        "Amanda Merian Freitas Mendes",
    instituicao: "Universidade Federal do Paraná (UFPR)",
    foto:        "assets/fotos/amanda-400.png",
  },
  "anderson-luiz-ara": {
    nome:        "Anderson Luiz Ara",
    instituicao: "UFPR",
    foto:        "assets/fotos/anderson-400.png",
    lattes:      "http://lattes.cnpq.br/8916772290938469",
  },
  "asuman-turkmen": {
    nome:        "Asuman Turkmen",
    instituicao: "The Ohio State University (EUA)",
    foto:        "assets/fotos/asuman-400.png",
  },
  "benilton-carvalho": {
    nome:        "Benilton Carvalho",
    instituicao: "UNICAMP",
    foto:        "assets/fotos/benilton-400.png",
    lattes:      "http://lattes.cnpq.br/0897291971174045",
  },
  "carlos-cesar-trucios-maza": {
    nome:        "Carlos Cesar Trucios Maza",
    instituicao: "UNICAMP",
    foto:        "assets/fotos/trucios-300.png",
    lattes:      "http://lattes.cnpq.br/9315014843913122",
  },
  "carlos-tadeu-pagani-zanini": {
    nome:        "Carlos Tadeu Pagani Zanini",
    instituicao: "UFRJ",
    foto:        "assets/fotos/carlostadeu-300.png",
    lattes:      "http://lattes.cnpq.br/9272277541388166",
  },
  "daiane-aparecida-zuanetti": {
    nome:        "Daiane Aparecida Zuanetti",
    instituicao: "UFSCar",
    foto:        "assets/fotos/daiane-150.png",
    lattes:      "http://lattes.cnpq.br/8352484284929824",
    genero:      "f",
  },
  "diogo-rossoni": {
    nome:        "Diogo Rossoni",
    instituicao: "UEM",
    foto:        "assets/fotos/diogorossoni-400.png",
    lattes:      "http://lattes.cnpq.br/7817639261124081",
  },
  "erlandson-ferreira-saraiva": {
    nome:        "Erlandson Ferreira Saraiva",
    instituicao: "UFMS",
    foto:        "assets/fotos/erlandson-220.png",
    lattes:      "http://lattes.cnpq.br/1890753837146343",
  },
  "fernanda-de-bastiani": {
    nome:        "Fernanda de Bastiani",
    instituicao: "UFPE",
    foto:        "assets/fotos/fernandabastiani-253.png",
    lattes:      "http://lattes.cnpq.br/5519064508209103",
  },
  "fernanda-lang-schumacher": {
    nome:        "Fernanda Lang Schumacher",
    instituicao: "The Ohio State University",
    foto:        "assets/fotos/fernanda-200.png",
    lattes:      "http://lattes.cnpq.br/8132149083320545",
    website:     "https://cph.osu.edu/doc/cv-resume/schumacher-fernanda-cv-0/view",
  },
  "guilherme-lopes-de-oliveira": {
    nome:        "Guilherme Lopes de Oliveira",
    instituicao: "CEFET - MG",
    foto:        "assets/fotos/guilherme-400.png",
  },
  "guilherme-pumi": {
    nome:        "Guilherme Pumi",
    instituicao: "UFRGS",
    foto:        "assets/fotos/guilhermepumi-400.png",
    lattes:      "http://lattes.cnpq.br/0541756341423245",
  },
  "idemauro-antonio-rodrigues-de-lara": {
    nome:        "Idemauro Antonio Rodrigues de Lara",
    instituicao: "ESALQ (USP)",
    foto:        "assets/fotos/idemauro-400.png",
    lattes:      "http://lattes.cnpq.br/2458007865506934",
  },
  "jodavid-de-araujo-ferreira": {
    nome:        "Jodavid de Araujo Ferreira",
    instituicao: "UFPE",
    foto:        "assets/fotos/jodavid-300.png",
    lattes:      "http://lattes.cnpq.br/4617170601890026",
  },
  "julia-pavan-soler": {
    nome:        "Julia Pavan Soler",
    instituicao: "USP",
    foto:        "assets/fotos/juliapavan-400.png",
    lattes:      "http://lattes.cnpq.br/2947693375237766",
  },
  "larissa-avila-matos": {
    nome:        "Larissa Ávila Matos",
    instituicao: "UNICAMP",
    foto:        "assets/fotos/larissa-400.png",
    lattes:      "http://lattes.cnpq.br/6330766834005870",
  },
  "lia-hanna-martins-morita": {
    nome:        "Lia Hanna Martins Morita",
    instituicao: "UFMT",
    foto:        "assets/fotos/liahanna-400.jpg",
    lattes:      "http://lattes.cnpq.br/8952048121396398",
  },
  "lucia-pereira-barroso": {
    nome:        "Lucia Pereira Barroso",
    instituicao: "IME - USP",
    foto:        "assets/fotos/lucia-175.png",
    lattes:      "http://lattes.cnpq.br/2264376518383172",
  },
  "maria-gabriela-cendoya": {
    nome:        "María Gabriela Cendoya",
    instituicao: "Universidad Nacional de Mar del Plata (Argentina)",
    foto:        "assets/fotos/cendoya-302.png",
  },
  "mariana-rodrigues-motta": {
    nome:        "Mariana Rodrigues Motta",
    instituicao: "UNICAMP",
    foto:        "assets/fotos/mariana-300.png",
    lattes:      "http://lattes.cnpq.br/6624470698679448",
    genero:      "f",
  },
  "mario-de-castro-andrade-filho": {
    nome:        "Mário de Castro Andrade Filho",
    instituicao: "ICMC - USP",
    foto:        "assets/fotos/mariocastro-200.png",
    lattes:      "http://lattes.cnpq.br/6518161034709249",
  },
  "nancy-lopes-garcia": {
    nome:        "Nancy Lopes Garcia",
    instituicao: "UNICAMP",
    foto:        "assets/fotos/nancy-400.png",
    lattes:      "http://lattes.cnpq.br/5717731375008770",
  },
  "paulo-justiniano-ribeiro-junior": {
    nome:        "Paulo Justiniano Ribeiro Junior",
    instituicao: "UFPR",
    foto:        "assets/fotos/paulojustiniano-232.png",
    lattes:      "http://lattes.cnpq.br/0852938701434556",
  },
  "rafael-de-andrade-moral": {
    nome:        "Rafael de Andrade Moral",
    instituicao: "Maynooth University",
    foto:        "assets/fotos/rafaelmoral-400.png",
    lattes:      "http://lattes.cnpq.br/8041441890541410",
    website:     "https://rafamoral.github.io/index.html",
  },
  "rafael-pimentel-maia": {
    nome:        "Rafael Pimentel Maia",
    instituicao: "UNICAMP",
    foto:        "assets/fotos/rafael-400.png",
    lattes:      "http://lattes.cnpq.br/9151825716259032",
  },
  "rosemeire-l-fiaccone": {
    nome:        "Rosemeire L. Fiaccone",
    instituicao: "Universidade Federal da Bahia (UFBA)",
    foto:        "assets/fotos/rosemeire-400.png",
  },
  "samara-flamini-kiihl": {
    nome:        "Samara Flamini Kiihl",
    instituicao: "UNICAMP",
    foto:        "assets/fotos/samara-360.png",
    lattes:      "http://lattes.cnpq.br/3841950980858699",
  },
  "tatiana-benaglia": {
    nome:        "Tatiana Benaglia",
    instituicao: "UNICAMP",
    foto:        "assets/fotos/tatiana-400.png",
    lattes:      "http://lattes.cnpq.br/1292097563479677",
  },
  "thiago-rodrigo-ramos": {
    nome:        "Thiago Rodrigo Ramos",
    instituicao: "Universidade Federal de São Carlos (UFSCar)",
    foto:        "assets/fotos/thiago-400.png",
  },
  "vanderly-janeiro": {
    nome:        "Vanderly Janeiro",
    instituicao: "UEM",
    foto:        "assets/fotos/vanderlyjaneiro-342.png",
    lattes:      "http://lattes.cnpq.br/7910133462131658",
  },
  "vera-lucia-damasceno-tomazella": {
    nome:        "Vera Lucia Damasceno Tomazella",
    instituicao: "UFSCar",
    foto:        "assets/fotos/vera-400.png",
    lattes:      "http://lattes.cnpq.br/8870556978317000",
  },
  "victor-freguglia-souza": {
    nome:        "Victor Freguglia Souza",
    instituicao: "UNICAMP",
    foto:        "assets/fotos/victor-200.png",
    lattes:      "http://lattes.cnpq.br/6306080581906246",
  },
  "victor-hugo-lachos": {
    nome:        "Victor Hugo Lachos",
    instituicao: "University of Connecticut",
    foto:        "assets/fotos/victorhugo-400.png",
    lattes:      "http://lattes.cnpq.br/5456626204155096",
  },
  "vinicius-calsavara": {
    nome:        "Vinicius Calsavara",
    instituicao: "Cedars-Sinai Medical Center (EUA)",
    foto:        "assets/fotos/vinicius-400.png",
  }
};
