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
//   coordenador  → true para destacar como Coordenador(a) (opcional; omitir ou false)
//   lattes       → URL do CV Lattes (ou "" para omitir o link)
//   website      → URL do site pessoal (ou "" para omitir o link)

const COMMITTEE = [
  {
    secao: "organizadora",
    titulo: "Comissão Organizadora",
    icone: "⚙️",
    membros: [
      { nome: "Profa. Dra. Mariana Rodrigues Motta",          instituicao: "UNICAMP", coordenador: true,  lattes: "", website: "" },
      { nome: "Prof. Dr. Alex Rodrigo dos Santos Sousa",      instituicao: "UNICAMP",                    lattes: "", website: "" },
      { nome: "Prof. Dr. Benilton de Sá Carvalho",            instituicao: "UNICAMP",                    lattes: "", website: "" },
      { nome: "Prof. Dr. Carlos Cesar Trucios Maza",          instituicao: "UNICAMP",                    lattes: "", website: "" },
      { nome: "Profa. Dra. Larissa Ávila Matos",              instituicao: "UNICAMP",                    lattes: "", website: "" },
      { nome: "Profa. Dra. Nancy Lopes Garcia",               instituicao: "UNICAMP",                    lattes: "", website: "" },
      { nome: "Prof. Dr. Rafael Pimentel Maia",               instituicao: "UNICAMP",                    lattes: "", website: "" },
      { nome: "Profa. Dra. Samara Flamini Kiihl",             instituicao: "UNICAMP",                    lattes: "", website: "" },
      { nome: "Profa. Dra. Tatiana Andrea Benaglia Carvalho", instituicao: "UNICAMP",                    lattes: "", website: "" },
      { nome: "Prof. Dr. Victor Freguglia Souza",             instituicao: "UNICAMP",                    lattes: "", website: "" }
    ]
  },
  {
    secao: "cientifica",
    titulo: "Comissão Científica",
    icone: "🔬",
    membros: [
      { nome: "Profa. Dra. Daiane Aparecida Zuanetti",        instituicao: "UFSCar", coordenador: true ,                                       lattes: "http://lattes.cnpq.br/8352484284929824", website: "" },
      { nome: "Profa. Dra. Agatha Sacramento Rodrigues",      instituicao: "UFES",                                          lattes: "http://lattes.cnpq.br/3445977720574534", website: "" },
      { nome: "Prof. Dr. Anderson Luiz Ara",                  instituicao: "UFPR",                                          lattes: "http://lattes.cnpq.br/8916772290938469", website: "" },
      { nome: "Profa. Dra. Fernanda Lang Schumacher",         instituicao: "The Ohio State University",                     lattes: "http://lattes.cnpq.br/8132149083320545", website: "https://cph.osu.edu/doc/cv-resume/schumacher-fernanda-cv-0/view" },
      { nome: "Prof. Dr. Idemauro Antonio Rodrigues de Lara", instituicao: "ESALQ (USP)",                                   lattes: "http://lattes.cnpq.br/2458007865506934", website: "" },
      { nome: "Profa. Dra. Nancy Lopes Garcia",               instituicao: "UNICAMP",  lattes: "http://lattes.cnpq.br/5717731375008770", website: "" },
      { nome: "Prof. Dr. Rafael de Andrade Moral",            instituicao: "Maynooth University",                           lattes: "http://lattes.cnpq.br/8041441890541410", website: "https://rafamoral.github.io/index.html" },
      { nome: "Profa. Dra. Vera Lucia Damasceno Tomazella",   instituicao: "UFSCar e UFPB",                                 lattes: "http://lattes.cnpq.br/8870556978317000", website: "" },
      { nome: "Prof. Dr. Victor Hugo Lachos",                 instituicao: "University of Connecticut",                     lattes: "http://lattes.cnpq.br/5456626204155096", website: "" }
    ]
  }
];
