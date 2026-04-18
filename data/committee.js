// ─── COMISSÕES ────────────────────────────────────────────────────────────────
// Cada entrada representa uma comissão exibida como coluna no site.
//
// Campos por comissão:
//   secao  → identificador interno: "organizadora" | "cientifica"
//   titulo → título exibido no cabeçalho do card
//   icone  → emoji exibido ao lado do título
//
// Campos por membro:
//   nome         → nome completo
//   instituicao  → instituição de afiliação
//   foto         → caminho da imagem, ex: "assets/fotos/fulano-400.png" (ou null para avatar)
//   coordenador  → true para destacar como Coordenador(a) (opcional; omitir ou false)
//   lattes       → URL do CV Lattes (ou "" para omitir o link)
//   website      → URL do site pessoal (ou "" para omitir o link)

const COMMITTEE = [
  {
    secao: "organizadora",
    titulo: "Comissão Organizadora",
    icone: "⚙️",
    membros: [
      { nome: "Mariana Rodrigues Motta",          instituicao: "UNICAMP", foto: null, coordenador: true, lattes: "http://lattes.cnpq.br/6624470698679448", website: "" },
      { nome: "Alex Rodrigo dos Santos Sousa",    instituicao: "UNICAMP", foto: null,                    lattes: "http://lattes.cnpq.br/6521094728394053", website: "" },
      { nome: "Benilton Carvalho",          instituicao: "UNICAMP", foto: "assets/fotos/benilton-400.png",                    lattes: "http://lattes.cnpq.br/0897291971174045", website: "" },
      { nome: "Carlos Cesar Trucios Maza",        instituicao: "UNICAMP", foto: null,                    lattes: "http://lattes.cnpq.br/9315014843913122", website: "" },
      { nome: "Larissa Ávila Matos",              instituicao: "UNICAMP", foto: "assets/fotos/larissa-400.png",                    lattes: "http://lattes.cnpq.br/6330766834005870", website: "" },
      { nome: "Nancy Lopes Garcia",               instituicao: "UNICAMP", foto: null,                    lattes: "http://lattes.cnpq.br/5717731375008770", website: "" },
      { nome: "Rafael Pimentel Maia",             instituicao: "UNICAMP", foto: null,                    lattes: "http://lattes.cnpq.br/9151825716259032", website: "" },
      { nome: "Samara Flamini Kiihl",             instituicao: "UNICAMP", foto: "assets/fotos/samara-360.png",                    lattes: "http://lattes.cnpq.br/3841950980858699", website: "" },
      { nome: "Tatiana Benaglia", instituicao: "UNICAMP", foto: "assets/fotos/tatiana-400.png",                    lattes: "http://lattes.cnpq.br/1292097563479677", website: "" },
      { nome: "Victor Freguglia Souza",           instituicao: "UNICAMP", foto: null,                    lattes: "http://lattes.cnpq.br/6306080581906246", website: "" }
    ]
  },
  {
    secao: "cientifica",
    titulo: "Comissão Científica",
    icone: "🔬",
    membros: [
      { nome: "Daiane Aparecida Zuanetti",          instituicao: "UFSCar",                    foto: null, coordenador: true , lattes: "http://lattes.cnpq.br/8352484284929824", website: "" },
      { nome: "Agatha Sacramento Rodrigues",        instituicao: "UFES",                      foto: null,                    lattes: "http://lattes.cnpq.br/3445977720574534", website: "" },
      { nome: "Anderson Luiz Ara",                  instituicao: "UFPR",                      foto: null,                    lattes: "http://lattes.cnpq.br/8916772290938469", website: "" },
      { nome: "Fernanda Lang Schumacher",           instituicao: "The Ohio State University", foto: null,                    lattes: "http://lattes.cnpq.br/8132149083320545", website: "https://cph.osu.edu/doc/cv-resume/schumacher-fernanda-cv-0/view" },
      { nome: "Idemauro Antonio Rodrigues de Lara", instituicao: "ESALQ (USP)",               foto: null,                    lattes: "http://lattes.cnpq.br/2458007865506934", website: "" },
      { nome: "Nancy Lopes Garcia",                 instituicao: "UNICAMP",                   foto: null,                    lattes: "http://lattes.cnpq.br/5717731375008770", website: "" },
      { nome: "Rafael de Andrade Moral",            instituicao: "Maynooth University",        foto: null,                    lattes: "http://lattes.cnpq.br/8041441890541410", website: "https://rafamoral.github.io/index.html" },
      { nome: "Vera Lucia Damasceno Tomazella",     instituicao: "UFSCar e UFPB",             foto: null,                    lattes: "http://lattes.cnpq.br/8870556978317000", website: "" },
      { nome: "Victor Hugo Lachos",                 instituicao: "University of Connecticut",  foto: null,                    lattes: "http://lattes.cnpq.br/5456626204155096", website: "" }
    ]
  }
];
