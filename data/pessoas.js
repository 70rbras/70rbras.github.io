// ATENÇÃO: arquivo gerado por scripts/build_cadastro.mjs a partir da planilha.
// Alteração feita à mão aqui é desfeita na próxima geração: corrija na planilha.
// ─── CADASTRO DE PESSOAS ─────────────────────────────────────────────────────
// Ficha de cada pessoa que o site exibe: quem ela é, nunca o papel que exerce.
// O papel pertence ao vínculo, em data/committee.js, data/speakers.js ou na
// aba atividades da planilha, pois a mesma pessoa aparece em mais de um lugar.
//
// Campos:
//   nome              → nome oficial, decidido pela comissão
//   instituicao       → forma longa, exibida nos cartões das páginas
//   instituicao_curta → forma curta, exibida no cartão da programação
//   foto              → caminho da imagem; ausente faz o cartão usar as iniciais
//   lattes            → endereço do currículo Lattes; ausente omite o link
//   website           → endereço do sítio pessoal; ausente omite o link
//   genero            → "f" ou "m"; usado onde o rótulo é flexionado
//   tratamento        → "Prof." ou "Profa."; usado onde o nome é precedido dele

const PESSOAS = {
  "abrantes-joao-afonso-mussafo": {
    nome:               "Abrantes João Afonso Mussafo",
    instituicao:        "Universidade Estadual Paulista \"Júlio de Mesquita Filho\"",
    instituicao_curta:  "UNESP",
  },
  "adriana-binda-lima": {
    nome:               "Adriana Binda Lima",
    instituicao:        "Universidade Federal do Amazonas",
    instituicao_curta:  "UFAM",
  },
  "adriane-caroline-teixeira-portela": {
    nome:               "Adriane Caroline Teixeira Portela",
    instituicao:        "Universidade Federal de São Carlos",
    instituicao_curta:  "UFSCar",
    tratamento:         "Profa.",
  },
  "adryelle-da-silva": {
    nome:               "Adryelle da Silva",
    instituicao:        "Universidade Federal de Lavras",
    instituicao_curta:  "UFLA",
  },
  "agatha-sacramento-rodrigues": {
    nome:               "Ágatha Sacramento Rodrigues",
    instituicao:        "Universidade Federal da Paraíba",
    instituicao_curta:  "UFPB",
    foto:               "assets/fotos/agatha-400.png",
    lattes:             "http://lattes.cnpq.br/3445977720574534",
  },
  "alan-rodrigo-panosso": {
    nome:               "Alan Rodrigo Panosso",
    instituicao:        "Universidade Estadual Paulista \"Júlio de Mesquita Filho\"",
    instituicao_curta:  "UNESP",
  },
  "alan-vitor-lima-silva": {
    nome:               "Alan Vitor Lima Silva",
    instituicao:        "Universidade Federal do Paraná",
    instituicao_curta:  "UFPR",
  },
  "alberto-cargnelutti-filho": {
    nome:               "Alberto Cargnelutti Filho",
    instituicao:        "Universidade Federal de Santa Maria",
    instituicao_curta:  "UFSM",
  },
  "alencariano-jose-da-silva-falcao": {
    nome:               "Alencariano Jose da Silva Falcao",
    instituicao:        "Universidade Federal do Norte do Tocantins",
    instituicao_curta:  "UFNT",
  },
  "alessandra-cristina-silva-farias": {
    nome:               "Alessandra Cristina Silva Farias",
    instituicao:        "Universidade Federal do Ceará",
    instituicao_curta:  "UFC",
  },
  "alessandro-dal-col-lucio": {
    nome:               "Alessandro Dal Col Lúcio",
    instituicao:        "Universidade Federal de Santa Maria",
    instituicao_curta:  "UFSM",
  },
  "alex-monito-nhancololo": {
    nome:               "Alex Monito Nhancololo",
    instituicao:        "Universidade de São Paulo",
    instituicao_curta:  "USP",
  },
  "alex-rodrigo-dos-santos-sousa": {
    nome:               "Alex Rodrigo dos Santos Sousa",
    instituicao:        "Universidade Estadual de Campinas",
    instituicao_curta:  "UNICAMP",
    foto:               "assets/fotos/alex-400.png",
    lattes:             "http://lattes.cnpq.br/6521094728394053",
  },
  "alexandra-condori-chocce": {
    nome:               "Alexandra Condori Chocce",
    instituicao:        "Universidade de Brasília",
    instituicao_curta:  "UnB",
  },
  "alexandre-de-lima-e-lima-colete": {
    nome:               "Alexandre de Lima e Lima Colete",
    instituicao:        "Universidade Federal do Paraná",
    instituicao_curta:  "UFPR",
  },
  "alexandre-palhano-dos-santos": {
    nome:               "Alexandre Palhano dos Santos",
    instituicao:        "Universidade Federal do Paraná",
    instituicao_curta:  "UFPR",
  },
  "alexis-marichi-zela": {
    nome:               "Alexis Marichi Zela",
    instituicao:        "Universidade Estadual de Campinas",
    instituicao_curta:  "UNICAMP",
  },
  "alexsandro-andre-de-freitas": {
    nome:               "Alexsandro Andre de Freitas",
    instituicao:        "Universidade Estadual de Maringá",
    instituicao_curta:  "UEM",
  },
  "alfredo-jose-barreto-luiz": {
    nome:               "Alfredo José Barreto Luiz",
    instituicao:        "Empresa Brasileira de Pesquisa Agropecuária",
    instituicao_curta:  "EMBRAPA",
  },
  "alfredo-ribeiro-de-freitas": {
    nome:               "Alfredo Ribeiro de Freitas",
    instituicao:        "Autônomo(a)",
  },
  "alice-batista-nogueira": {
    nome:               "Alice Batista Nogueira",
    instituicao:        "Universidade Federal de Alfenas",
    instituicao_curta:  "UNIFAL-MG",
  },
  "aline-gabrielly-gomes-de-freitas": {
    nome:               "Aline Gabrielly Gomes de Freitas",
    instituicao:        "Universidade Federal do Rio Grande do Sul",
    instituicao_curta:  "UFRGS",
  },
  "aline-maia": {
    nome:               "Aline Maia",
    instituicao:        "Empresa Brasileira de Pesquisa Agropecuária",
    instituicao_curta:  "EMBRAPA",
  },
  "aline-rita-fernandes": {
    nome:               "Aline Rita Fernandes",
    instituicao:        "Universidade Federal de Lavras",
    instituicao_curta:  "UFLA",
  },
  "alissa-frigotto": {
    nome:               "Alissa Frigotto",
    instituicao:        "Universidade Federal de Santa Maria",
    instituicao_curta:  "UFSM",
  },
  "aloisio-fernando-silva-ribeiro": {
    nome:               "Aloísio Fernando Silva Ribeiro",
    instituicao:        "Universidade Federal de Viçosa",
    instituicao_curta:  "UFV",
  },
  "altemir-da-silva-braga": {
    nome:               "Altemir da Silva Braga",
    instituicao:        "Universidade Federal do Acre",
    instituicao_curta:  "UFAC",
  },
  "amanda-cyntia-lima-fonseca-rodrigues": {
    nome:               "Amanda Cyntia Lima Fonseca Rodrigues",
    instituicao:        "Universidade Federal do Paraná",
    instituicao_curta:  "UFPR",
  },
  "amanda-merian-freitas-mendes": {
    nome:               "Amanda Merian Freitas Mendes",
    instituicao:        "Universidade Federal do Paraná (UFPR)",
    instituicao_curta:  "UFPR",
    foto:               "assets/fotos/amanda-400.png",
  },
  "amanda-zanluca": {
    nome:               "Amanda Zanluca",
    instituicao:        "Universidade Federal do Paraná",
    instituicao_curta:  "UFPR",
  },
  "ana-carolina-campana-nascimento": {
    nome:               "Ana Carolina Campana Nascimento",
    instituicao:        "Universidade Federal de Viçosa",
    instituicao_curta:  "UFV",
  },
  "ana-carolina-santos-barbizan": {
    nome:               "Ana Carolina Santos Barbizan",
    instituicao:        "Universidade Federal de São Carlos",
    instituicao_curta:  "UFSCar",
  },
  "ana-clara-freire-scomparin": {
    nome:               "Ana Clara Freire Scomparin",
    instituicao:        "Universidade Estadual de Maringá",
    instituicao_curta:  "UEM",
  },
  "ana-clara-marczinski": {
    nome:               "Ana Clara Marczinski",
    instituicao:        "Universidade Federal de Santa Maria",
    instituicao_curta:  "UFSM",
  },
  "ana-paula-martini-de-lima": {
    nome:               "Ana Paula Martini de Lima",
    instituicao:        "Universidade Estadual de Maringá",
    instituicao_curta:  "UEM",
  },
  "ana-paula-schramm-steuernagel": {
    nome:               "Ana Paula Schramm Steuernagel",
    instituicao:        "Universidade Estadual de Campinas",
    instituicao_curta:  "UNICAMP",
  },
  "ana-vitoria-gomes-grave": {
    nome:               "Ana Vitoria Gomes Grave",
    instituicao:        "Universidade Federal de Santa Maria",
    instituicao_curta:  "UFSM",
  },
  "ananda-cristina-diniz-mendes-da-silva": {
    nome:               "Ananda Cristina Diniz Mendes da Silva",
    instituicao:        "Universidade Federal do Paraná",
    instituicao_curta:  "UFPR",
  },
  "anderson-andolfato-filho": {
    nome:               "Anderson Andolfato Filho",
    instituicao:        "Universidade Federal do Paraná",
    instituicao_curta:  "UFPR",
  },
  "anderson-luiz-ara": {
    nome:               "Anderson Luiz Ara",
    instituicao:        "Universidade Federal do Paraná",
    instituicao_curta:  "UFPR",
    foto:               "assets/fotos/anderson-400.png",
    lattes:             "http://lattes.cnpq.br/8916772290938469",
  },
  "anderson-oliveira": {
    nome:               "Anderson Oliveira",
    instituicao:        "Universidade Federal de Mato Grosso",
    instituicao_curta:  "UFMT",
  },
  "andre-felipe-zilio-silva": {
    nome:               "Andre Felipe Zilio Silva",
    instituicao:        "Secretaria Municipal da Educação de Curitiba",
    instituicao_curta:  "SME Curitiba",
  },
  "andressa-nascimento-santos": {
    nome:               "Andressa Nascimento Santos",
    instituicao:        "Universidade Federal de São Carlos",
    instituicao_curta:  "UFSCar",
  },
  "angela-tavares-paes": {
    nome:               "Ângela Tavares Paes",
    instituicao:        "Universidade Federal de São Paulo",
    instituicao_curta:  "UNIFESP",
  },
  "angelica-guareschi": {
    nome:               "Angélica Guareschi",
    instituicao:        "Universidade Federal de Santa Maria",
    instituicao_curta:  "UFSM",
  },
  "angelo-chiode": {
    nome:               "Ângelo Chiode",
    instituicao:        "Universidade de São Paulo",
    instituicao_curta:  "USP",
  },
  "anna-carolina": {
    nome:               "Anna Carolina",
    instituicao:        "Universidade Federal de São Carlos",
    instituicao_curta:  "UFSCar",
  },
  "antonio-cyrineu-vale": {
    nome:               "Antonio Cyrineu Vale",
    instituicao:        "Universidade Estadual de Campinas",
    instituicao_curta:  "UNICAMP",
  },
  "antonio-marcos-batista-do-nascimento": {
    nome:               "Antonio Marcos Batista do Nascimento",
    instituicao:        "Universidade Federal do Rio Grande do Norte",
    instituicao_curta:  "UFRN",
  },
  "antonio-samuel-alves-da-silva": {
    nome:               "Antonio Samuel Alves da Silva",
    instituicao:        "Universidade Federal Rural de Pernambuco",
    instituicao_curta:  "UFRPE",
  },
  "antonio-silva": {
    nome:               "Antonio Silva",
    instituicao:        "Universidade de São Paulo",
    instituicao_curta:  "USP",
  },
  "antonio-teves-menezes": {
    nome:               "Antonio Teves Menezes",
    instituicao:        "Universidade Estadual Paulista \"Júlio de Mesquita Filho\"",
    instituicao_curta:  "UNESP",
  },
  "apolinario-valentim-joao-mucocora": {
    nome:               "Apolinário Valentim João Mucocora",
    instituicao:        "Universidade Federal de Lavras",
    instituicao_curta:  "UFLA",
  },
  "arthur-pereira": {
    nome:               "Arthur Pereira",
    instituicao:        "Universidade Federal de São Carlos",
    instituicao_curta:  "UFSCar",
  },
  "arthur-souza": {
    nome:               "Arthur Souza",
    instituicao:        "Universidade de Brasília",
    instituicao_curta:  "UnB",
  },
  "artur-silva-monteiro": {
    nome:               "Artur Silva Monteiro",
    instituicao:        "Universidade Federal do Espírito Santo",
    instituicao_curta:  "UFES",
  },
  "asuman-turkmen": {
    nome:               "Asuman Turkmen",
    instituicao:        "The Ohio State University (EUA)",
    instituicao_curta:  "The Ohio State University",
    foto:               "assets/fotos/asuman-400.png",
  },
  "aurea-galindo": {
    nome:               "Áurea Galindo",
    instituicao:        "Universidade Estadual de Campinas",
    instituicao_curta:  "UNICAMP",
  },
  "ayodeji-fisayo-afolayan": {
    nome:               "Ayodeji Fisayo Afolayan",
    instituicao:        "Universidade Federal de Viçosa",
    instituicao_curta:  "UFV",
  },
  "azzure-alves-do-carmo": {
    nome:               "Azzure Alves do Carmo",
    instituicao:        "Universidade Federal do Espírito Santo",
    instituicao_curta:  "UFES",
  },
  "baywood-princess-dera": {
    nome:               "Baywood Princess Dera",
    instituicao:        "Universidade Federal de Viçosa",
    instituicao_curta:  "UFV",
  },
  "beatriz-aria-valladao": {
    nome:               "Beatriz Aria Valladão",
    instituicao:        "Empresa Brasileira de Pesquisa Agropecuária",
    instituicao_curta:  "EMBRAPA",
  },
  "beatriz-gomes": {
    nome:               "Beatriz Gomes",
    instituicao:        "Universidade de São Paulo",
    instituicao_curta:  "USP",
  },
  "beatriz-lima-silveira": {
    nome:               "Beatriz Lima Silveira",
    instituicao:        "Universidade Federal de Minas Gerais",
    instituicao_curta:  "UFMG",
  },
  "benilton-carvalho": {
    nome:               "Benilton de Sá Carvalho",
    instituicao:        "UNICAMP",
    instituicao_curta:  "IMECC/UNICAMP",
    foto:               "assets/fotos/benilton-400.png",
    lattes:             "http://lattes.cnpq.br/0897291971174045",
  },
  "benilton-de-sa-cavalho": {
    nome:               "Benilton de Sa Cavalho",
    instituicao:        "Universidade Estadual de Campinas",
    instituicao_curta:  "UNICAMP",
  },
  "bianca-da-silva-andrade": {
    nome:               "Bianca da Silva Andrade",
    instituicao:        "Universidade Estadual Paulista \"Júlio de Mesquita Filho\"",
    instituicao_curta:  "UNESP",
  },
  "bianca-perboni-de-abreu": {
    nome:               "Bianca Perboni de Abreu",
    instituicao:        "Universidade Estadual de Campinas",
    instituicao_curta:  "UNICAMP",
  },
  "brenda-feitosa-lopes-machado": {
    nome:               "Brenda Feitosa Lopes Machado",
    instituicao:        "Universidade Federal da Paraíba",
    instituicao_curta:  "UFPB",
  },
  "brenda-vieira-de-oliveira": {
    nome:               "Brenda Vieira de Oliveira",
    instituicao:        "Universidade Federal de Viçosa",
    instituicao_curta:  "UFV",
  },
  "breno-gabriel-da-silva": {
    nome:               "Breno Gabriel da Silva",
    instituicao:        "Fundação Oswaldo Cruz",
    instituicao_curta:  "FIOCRUZ",
  },
  "brian-alvarez-ribeiro-de-melo": {
    nome:               "Brian Alvarez Ribeiro de Melo",
    instituicao:        "Universidade Estadual de Maringá",
    instituicao_curta:  "UEM",
  },
  "bruna-marianne-viana-dos-santos": {
    nome:               "Bruna Marianne Viana dos Santos",
    instituicao:        "Universidade Federal Rural de Pernambuco",
    instituicao_curta:  "UFRPE",
  },
  "bruna-marques-de-queiroz": {
    nome:               "Bruna Marques de Queiroz",
    instituicao:        "Universidade de São Paulo",
    instituicao_curta:  "USP",
  },
  "bruna-reghelin": {
    nome:               "Bruna Reghelin",
    instituicao:        "Universidade Federal de Santa Maria",
    instituicao_curta:  "UFSM",
  },
  "bruna-vitoria-moreira-vanzella": {
    nome:               "Bruna Vitória Moreira Vanzella",
    instituicao:        "Universidade Federal do Paraná",
    instituicao_curta:  "UFPR",
  },
  "bruno-bee-ramirez": {
    nome:               "Bruno Bee Ramirez",
    instituicao:        "Universidade de São Paulo",
    instituicao_curta:  "USP",
  },
  "bruno-kunzel-levenhagen": {
    nome:               "Bruno Künzel Levenhagen",
    instituicao:        "Universidade de São Paulo",
    instituicao_curta:  "USP",
  },
  "bruno-wavrzenczak": {
    nome:               "Bruno Wavrzenczak",
    instituicao:        "Universidade Federal do Paraná",
    instituicao_curta:  "UFPR",
  },
  "caio-del-nero-regattieri": {
    nome:               "Caio del Nero Regattieri",
    instituicao:        "Universidade Federal de São Carlos",
    instituicao_curta:  "UFSCar",
  },
  "caio-ferreira-barbosa-soares": {
    nome:               "Caio Ferreira Barbosa Soares",
    instituicao:        "Universidade Federal do Espírito Santo",
    instituicao_curta:  "UFES",
  },
  "caio-ferreira-mattos": {
    nome:               "Caio Ferreira Mattos",
    instituicao:        "Universidade de São Paulo",
    instituicao_curta:  "USP",
  },
  "caio-gomes-alves": {
    nome:               "Caio Gomes Alves",
    instituicao:        "Universidade Estadual de Campinas",
    instituicao_curta:  "UNICAMP",
  },
  "caio-vinicius-costa-dos-anjos": {
    nome:               "Caio Vinicius Costa dos Anjos",
    instituicao:        "Universidade Federal da Bahia",
    instituicao_curta:  "UFBA",
  },
  "caio-vitor-mesquita-mendonca": {
    nome:               "Caio Vitor Mesquita Mendonça",
    instituicao:        "Universidade Federal de São Carlos",
    instituicao_curta:  "UFSCar",
  },
  "camila-bertini": {
    nome:               "Camila Bertini",
    instituicao:        "UNIFESP/CONRE-3",
    instituicao_curta:  "UNIFESP/CONRE-3",
  },
  "camila-braz-soares": {
    nome:               "Camila Braz Soares",
    instituicao:        "Universidade Federal da Bahia",
    instituicao_curta:  "UFBA",
  },
  "camila-martins": {
    nome:               "Camila Martins",
    instituicao:        "Universidade Federal de São Paulo",
    instituicao_curta:  "UNIFESP",
  },
  "camila-raquel": {
    nome:               "Camila Raquel",
    instituicao:        "Universidade Federal do Ceará",
    instituicao_curta:  "UFC",
  },
  "camille-menezes-pereira-dos-santos": {
    nome:               "Camille Menezes Pereira dos Santos",
    instituicao:        "Universidade Estadual de Campinas",
    instituicao_curta:  "UNICAMP",
  },
  "camilo-ferreira-de-jesus": {
    nome:               "Camilo Ferreira de Jesus",
    instituicao:        "Universidade Federal do Paraná",
    instituicao_curta:  "UFPR",
  },
  "carina-brunehilde-pinto-da-silva": {
    nome:               "Carina Brunehilde Pinto da Silva",
    instituicao:        "Universidade Estadual Vale do Acaraú",
    instituicao_curta:  "UVA",
  },
  "carina-de-vargas-andrighetto": {
    nome:               "Carina de Vargas Andrighetto",
    instituicao:        "Universidade Federal de São Carlos",
    instituicao_curta:  "UFSCar",
  },
  "carla-valeria-dos-santos-pacheco": {
    nome:               "Carla Valéria dos Santos Pacheco",
    instituicao:        "Universidade Estadual de Maringá",
    instituicao_curta:  "UEM",
  },
  "carlo-luders": {
    nome:               "Carlo Luders",
    instituicao:        "Universidade Estadual Paulista \"Júlio de Mesquita Filho\"",
    instituicao_curta:  "UNESP",
  },
  "carlos-alberto-oliveira-de-matos": {
    nome:               "Carlos Alberto Oliveira de Matos",
    instituicao:        "Universidade Estadual Paulista \"Júlio de Mesquita Filho\"",
    instituicao_curta:  "UNESP",
  },
  "carlos-cesar-trucios-maza": {
    nome:               "Carlos Cesar Trucios Maza",
    instituicao:        "Universidade Estadual de Campinas",
    instituicao_curta:  "UNICAMP",
    foto:               "assets/fotos/trucios-300.png",
    lattes:             "http://lattes.cnpq.br/9315014843913122",
  },
  "carlos-de-oliveira": {
    nome:               "Carlos de Oliveira",
    instituicao:        "Empresa Brasileira de Pesquisa Agropecuária",
    instituicao_curta:  "EMBRAPA",
  },
  "carlos-felix": {
    nome:               "Carlos Felix",
    instituicao:        "Universidade Estadual de Campinas",
    instituicao_curta:  "UNICAMP",
  },
  "carlos-souto-dos-santos-filho": {
    nome:               "Carlos Souto dos Santos Filho",
    instituicao:        "Universidade de São Paulo",
    instituicao_curta:  "USP",
  },
  "carlos-tadeu-pagani-zanini": {
    nome:               "Carlos Tadeu Pagani Zanini",
    instituicao:        "UFRJ",
    instituicao_curta:  "UFRJ",
    foto:               "assets/fotos/carlostadeu-300.png",
    lattes:             "http://lattes.cnpq.br/9272277541388166",
  },
  "carolina-hara": {
    nome:               "Carolina Hara",
    instituicao:        "Universidade Estadual de Campinas",
    instituicao_curta:  "UNICAMP",
  },
  "carolina-pereira-neves": {
    nome:               "Carolina Pereira Neves",
    instituicao:        "Universidade Estadual Paulista \"Júlio de Mesquita Filho\"",
    instituicao_curta:  "UNESP",
  },
  "caroline-de-oliveira-costa": {
    nome:               "Caroline de Oliveira Costa",
    instituicao:        "Universidade Federal do Espírito Santo",
    instituicao_curta:  "UFES",
  },
  "carolyne-brito": {
    nome:               "Carolyne Brito",
    instituicao:        "Universidade Federal de São Carlos",
    instituicao_curta:  "UFSCar",
  },
  "caua-oliveira": {
    nome:               "Cauã Oliveira",
    instituicao:        "Universidade Federal de São Paulo",
    instituicao_curta:  "UNIFESP",
  },
  "caua-ramos-santos-oliveira": {
    nome:               "Cauã Ramos Santos Oliveira",
    instituicao:        "Universidade Federal da Bahia",
    instituicao_curta:  "UFBA",
  },
  "celia-grego": {
    nome:               "Célia Grego",
    instituicao:        "Empresa Brasileira de Pesquisa Agropecuária",
    instituicao_curta:  "EMBRAPA",
  },
  "cesar-augusto-taconeli": {
    nome:               "Cesar Augusto Taconeli",
    instituicao:        "Universidade Federal do Paraná",
    instituicao_curta:  "UFPR",
  },
  "christian-boller": {
    nome:               "Christian Boller",
    instituicao:        "Universidade Federal do Paraná",
    instituicao_curta:  "UFPR",
  },
  "cicero-hitzschky": {
    nome:               "Cícero Hitzschky",
    instituicao:        "Universidade Federal do Ceará",
    instituicao_curta:  "UFC",
  },
  "ciro-barbosa-gomes": {
    nome:               "Ciro Barbosa Gomes",
    instituicao:        "Universidade de São Paulo",
    instituicao_curta:  "USP",
  },
  "clarice-demetrio": {
    nome:               "Clarice Demetrio",
    instituicao:        "Universidade de São Paulo",
    instituicao_curta:  "USP",
  },
  "cleanderson-fidelis": {
    nome:               "Cleanderson Fidelis",
    instituicao:        "Universidade Estadual da Paraíba",
    instituicao_curta:  "UEPB",
  },
  "cristian-pessatti-dos-anjos": {
    nome:               "Cristian Pessatti dos Anjos",
    instituicao:        "Universidade Federal do Paraná",
    instituicao_curta:  "UFPR",
  },
  "cristiano-nunes-nesi": {
    nome:               "Cristiano Nunes Nesi",
    instituicao:        "Empresa de Pesquisa Agropecuária e Extensão Rural de Santa Catarina",
    instituicao_curta:  "EPAGRI",
  },
  "cynthia-arantes-vieira-tojeiro": {
    nome:               "Cynthia Arantes Vieira Tojeiro",
    instituicao:        "Universidade Federal de Goiás",
    instituicao_curta:  "UFG",
  },
  "daiane-aparecida-zuanetti": {
    nome:               "Daiane Aparecida Zuanetti",
    instituicao:        "Universidade Federal de São Carlos",
    instituicao_curta:  "UFSCar",
    foto:               "assets/fotos/daiane-150.png",
    lattes:             "http://lattes.cnpq.br/8352484284929824",
    genero:             "f",
  },
  "damares-moraes-de-jesus": {
    nome:               "Damares Moraes de Jesus",
    instituicao:        "Universidade Federal de Alfenas",
    instituicao_curta:  "UNIFAL-MG",
  },
  "daniel-augusto-de-melo-pedro": {
    nome:               "Daniel Augusto de Melo Pedro",
    instituicao:        "Universidade Federal de Alfenas",
    instituicao_curta:  "UNIFAL-MG",
  },
  "daniel-moura-silva": {
    nome:               "Daniel Moura Silva",
    instituicao:        "Universidade Federal Rural de Pernambuco",
    instituicao_curta:  "UFRPE",
  },
  "daniel-ruiz-potma-goncalves": {
    nome:               "Daniel Ruiz Potma Goncalves",
    instituicao:        "Empresa Brasileira de Pesquisa Agropecuária",
    instituicao_curta:  "EMBRAPA",
  },
  "daniel-theiss-provatti": {
    nome:               "Daniel Theiss Provatti",
    instituicao:        "Universidade Federal de São Carlos",
    instituicao_curta:  "UFSCar",
  },
  "daniela-carine-ramires-de-oliveira": {
    nome:               "Daniela Carine Ramires de Oliveira",
    instituicao:        "Universidade Federal de São João del-Rei",
    instituicao_curta:  "UFSJ",
  },
  "daniela-lixinski-silveira": {
    nome:               "Daniela Lixinski Silveira",
    instituicao:        "Universidade Federal de Santa Maria",
    instituicao_curta:  "UFSM",
  },
  "danilo-alvares": {
    nome:               "Danilo Alvares",
    instituicao:        "University of Cambridge",
    instituicao_curta:  "Cambridge",
  },
  "danilo-araujo-da-silva": {
    nome:               "Danilo Araujo da Silva",
    instituicao:        "Universidade Federal do Espírito Santo",
    instituicao_curta:  "UFES",
  },
  "danilo-dias-correia-barbosa": {
    nome:               "Danilo Dias Correia Barbosa",
    instituicao:        "Universidade Estadual de Campinas",
    instituicao_curta:  "UNICAMP",
  },
  "darah-moreira": {
    nome:               "Darah Moreira",
    instituicao:        "Universidade Federal de Viçosa",
    instituicao_curta:  "UFV",
  },
  "davi-barbosa-pereira-de-sousa": {
    nome:               "Daví Barbosa Pereira de Sousa",
    instituicao:        "Universidade Federal de Lavras",
    instituicao_curta:  "UFLA",
  },
  "davi-oliveira-chaves": {
    nome:               "Davi Oliveira Chaves",
    instituicao:        "Universidade de São Paulo",
    instituicao_curta:  "USP",
  },
  "davi-roque-luiz": {
    nome:               "Davi Roque Luiz",
    instituicao:        "Universidade Federal de Mato Grosso",
    instituicao_curta:  "UFMT",
  },
  "davi-sant-anna": {
    nome:               "Davi Sant' Anna",
    instituicao:        "Universidade Federal de São Carlos",
    instituicao_curta:  "UFSCar",
  },
  "davi-sousa-e-silva": {
    nome:               "Davi Sousa e Silva",
    instituicao:        "Universidade de São Paulo",
    instituicao_curta:  "USP",
  },
  "davi-vitorio-vicentin-vitti": {
    nome:               "Davi Vitório Vicentin Vitti",
    instituicao:        "Universidade de São Paulo",
    instituicao_curta:  "USP",
  },
  "david-carlos-santos-de-lima": {
    nome:               "David Carlos Santos de Lima",
    instituicao:        "Universidade de São Paulo",
    instituicao_curta:  "USP",
  },
  "david-henriques-da-matta": {
    nome:               "David Henriques da Matta",
    instituicao:        "Universidade Federal de Goiás",
    instituicao_curta:  "UFG",
  },
  "david-sanchez": {
    nome:               "David Sanchez",
    instituicao:        "Universidade Estadual de Campinas",
    instituicao_curta:  "UNICAMP",
  },
  "dayana-telles-matozinho-bertuzzi": {
    nome:               "Dayana Telles Matozinho Bertuzzi",
    instituicao:        "Universidade Estadual de Maringá",
    instituicao_curta:  "UEM",
  },
  "deivisson-wellington-goncalves-de-jesus-silva": {
    nome:               "Dêivisson Wellington Gonçalves de Jesus Silva",
    instituicao:        "Centro Universitário Jorge Amado",
    instituicao_curta:  "UNIJORGE",
  },
  "dina-rubi-ramos-eugenio": {
    nome:               "Dina Rubi Ramos Eugenio",
    instituicao:        "Universidade Estadual de Campinas",
    instituicao_curta:  "UNICAMP",
  },
  "dinah-costa-almeida-gouveia": {
    nome:               "Dinah Costa Almeida Gouveia",
    instituicao:        "Universidade Estadual Paulista \"Júlio de Mesquita Filho\"",
    instituicao_curta:  "UNESP",
  },
  "diogo-francisco-rossoni": {
    nome:               "Diogo Francisco Rossoni",
    instituicao:        "Região Brasileira da Sociedade Internacional de Biometria",
    instituicao_curta:  "RBras",
  },
  "diogo-rossoni": {
    nome:               "Diogo Rossoni",
    instituicao:        "UEM",
    instituicao_curta:  "UEM",
    foto:               "assets/fotos/diogorossoni-400.png",
    lattes:             "http://lattes.cnpq.br/7817639261124081",
  },
  "doris-satie-maruyama-fontes": {
    nome:               "Doris Satie Maruyama Fontes",
    instituicao:        "Conselho Regional de Estatística da 3ª Região",
    instituicao_curta:  "CONRE-3",
  },
  "edfram-rodrigues-pereira": {
    nome:               "Edfram Rodrigues Pereira",
    instituicao:        "Universidade de São Paulo",
    instituicao_curta:  "USP",
  },
  "edilenia-queiroz-pereira": {
    nome:               "Edilenia Queiroz Pereira",
    instituicao:        "Universidade de São Paulo",
    instituicao_curta:  "USP",
  },
  "eduardo-barbosa": {
    nome:               "Eduardo Barbosa",
    instituicao:        "Universidade Federal de Viçosa",
    instituicao_curta:  "UFV",
  },
  "eduardo-batista": {
    nome:               "Eduardo Batista",
    instituicao:        "Universidade Federal da Bahia",
    instituicao_curta:  "UFBA",
  },
  "eduardo-janotti-cavalcante": {
    nome:               "Eduardo Janotti Cavalcante",
    instituicao:        "Universidade de São Paulo",
    instituicao_curta:  "USP",
  },
  "eduardo-yoshio-nakano": {
    nome:               "Eduardo Yoshio Nakano",
    instituicao:        "Universidade de Brasília",
    instituicao_curta:  "UnB",
  },
  "eduardo-yukio-garrafa-ishihara": {
    nome:               "Eduardo Yukio Garrafa Ishihara",
    instituicao:        "Universidade de São Paulo",
    instituicao_curta:  "USP",
  },
  "efraim-dias": {
    nome:               "Efraim Dias",
    instituicao:        "Universidade Federal do Piauí",
    instituicao_curta:  "UFPI",
  },
  "elias-oliveira-vieira-dos-santos": {
    nome:               "Elias Oliveira Vieira dos Santos",
    instituicao:        "Universidade Estadual Paulista \"Júlio de Mesquita Filho\"",
    instituicao_curta:  "UNESP",
  },
  "elias-sabe": {
    nome:               "Elias Sabe",
    instituicao:        "Universidade Federal de Lavras",
    instituicao_curta:  "UFLA",
  },
  "elisa-lopes-do-nascimento": {
    nome:               "Elisa Lopes do Nascimento",
    instituicao:        "Universidade Federal Rural de Pernambuco",
    instituicao_curta:  "UFRPE",
  },
  "elisane-backstrom": {
    nome:               "Elisane Bäckström",
    instituicao:        "Universidade Estadual de Campinas",
    instituicao_curta:  "UNICAMP",
  },
  "elisangela-aparecida-da-silva-lizzi": {
    nome:               "Elisangela Aparecida da Silva Lizzi",
    instituicao:        "Universidade Tecnológica Federal do Paraná",
    instituicao_curta:  "UTFPR",
  },
  "eliseu-castanheiro-alberto": {
    nome:               "Eliseu Castanheiro Alberto",
    instituicao:        "Universidade Federal de Lavras",
    instituicao_curta:  "UFLA",
  },
  "elizabeth-mie-hashimoto": {
    nome:               "Elizabeth Mie Hashimoto",
    instituicao:        "Universidade Estadual Paulista \"Júlio de Mesquita Filho\"",
    instituicao_curta:  "UNESP",
  },
  "eloi-beijamim-da-silva": {
    nome:               "Elói Beijamim da Silva",
    instituicao:        "Universidade Federal de São Carlos",
    instituicao_curta:  "UFSCar",
  },
  "elpidio-ana-alberto": {
    nome:               "Elpídio Ana Alberto",
    instituicao:        "Universidade Federal de Lavras",
    instituicao_curta:  "UFLA",
  },
  "elton-pereira-dos-santos": {
    nome:               "Elton Pereira dos Santos",
    instituicao:        "Universidade Federal do Pará",
    instituicao_curta:  "UFPA",
  },
  "emanuel-victor-da-silva-favorato": {
    nome:               "Emanuel Victor da Silva Favorato",
    instituicao:        "Universidade Federal de São Carlos",
    instituicao_curta:  "UFSCar",
  },
  "emilia-hamada": {
    nome:               "Emilia Hamada",
    instituicao:        "Empresa Brasileira de Pesquisa Agropecuária",
    instituicao_curta:  "EMBRAPA",
  },
  "emily-teruya": {
    nome:               "Emily Teruya",
    instituicao:        "Universidade de São Paulo",
    instituicao_curta:  "USP",
  },
  "eric-ferreira": {
    nome:               "Eric Ferreira",
    instituicao:        "Universidade Federal de Alfenas",
    instituicao_curta:  "UNIFAL-MG",
  },
  "eric-rocha": {
    nome:               "Éric Rocha",
    instituicao:        "Universidade Estadual de Campinas",
    instituicao_curta:  "UNICAMP",
  },
  "erick-jun-miyagi": {
    nome:               "Erick Jun Miyagi",
    instituicao:        "Universidade Estadual de Campinas",
    instituicao_curta:  "UNICAMP",
  },
  "erlandson-ferreira-saraiva": {
    nome:               "Erlandson Ferreira Saraiva",
    instituicao:        "UFMS",
    instituicao_curta:  "UFMS",
    foto:               "assets/fotos/erlandson-220.png",
    lattes:             "http://lattes.cnpq.br/1890753837146343",
  },
  "evelyn-rodrigues-de-lacerda": {
    nome:               "Evelyn Rodrigues de Lacerda",
    instituicao:        "Universidade Estadual Paulista \"Júlio de Mesquita Filho\"",
    instituicao_curta:  "UNESP",
  },
  "fabiano-alecrim": {
    nome:               "Fabiano Alecrim",
    instituicao:        "Empresa Brasileira de Pesquisa Agropecuária",
    instituicao_curta:  "EMBRAPA",
  },
  "fabio-prataviera": {
    nome:               "Fábio Prataviera",
    instituicao:        "Universidade de São Paulo",
    instituicao_curta:  "USP",
  },
  "fabricio-bazilio-jaguszeski": {
    nome:               "Fabricio Bazilio Jaguszeski",
    instituicao:        "Universidade Federal do Paraná",
    instituicao_curta:  "UFPR",
  },
  "felipe-augusto-da-silva-prado": {
    nome:               "Felipe Augusto da Silva Prado",
    instituicao:        "Universidade Federal de São Carlos",
    instituicao_curta:  "UFSCar",
  },
  "felipe-emanoel-barletta-mendes": {
    nome:               "Felipe Emanoel Barletta Mendes",
    instituicao:        "Universidade de Lisboa",
    instituicao_curta:  "ULisboa",
  },
  "felipe-heron-queluz": {
    nome:               "Felipe Heron Queluz",
    instituicao:        "Universidade Federal de Pernambuco",
    instituicao_curta:  "UFPE",
  },
  "felipe-ramos": {
    nome:               "Felipe Ramos",
    instituicao:        "Universidade Federal de Minas Gerais",
    instituicao_curta:  "UFMG",
  },
  "felipe-segantine-de-faria": {
    nome:               "Felipe Segantine de Faria",
    instituicao:        "Universidade de São Paulo",
    instituicao_curta:  "USP",
  },
  "fernanda-de-bastiani": {
    nome:               "Fernanda de Bastiani",
    instituicao:        "UFPE",
    instituicao_curta:  "UFPE",
    foto:               "assets/fotos/fernandabastiani-253.png",
    lattes:             "http://lattes.cnpq.br/5519064508209103",
  },
  "fernanda-lang-schumacher": {
    nome:               "Fernanda Lang Schumacher",
    instituicao:        "The Ohio State University",
    instituicao_curta:  "The Ohio State University",
    foto:               "assets/fotos/fernanda-200.png",
    lattes:             "http://lattes.cnpq.br/8132149083320545",
    website:            "https://cph.osu.edu/doc/cv-resume/schumacher-fernanda-cv-0/view",
    tratamento:         "Profa.",
  },
  "fernanda-venturato-roquim": {
    nome:               "Fernanda Venturato Roquim",
    instituicao:        "Universidade Federal do Espírito Santo",
    instituicao_curta:  "UFES",
  },
  "fernando-andrade": {
    nome:               "Fernando Andrade",
    instituicao:        "Universidade Estadual Paulista \"Júlio de Mesquita Filho\"",
    instituicao_curta:  "UNESP",
  },
  "fernando-humberto-de-almeida-moraes-neto": {
    nome:               "Fernando Humberto de Almeida Moraes Neto",
    instituicao:        "Universidade Federal de Mato Grosso",
    instituicao_curta:  "UFMT",
  },
  "fidel-aniano-causil-barrios": {
    nome:               "Fidel Aniano Causil Barrios",
    instituicao:        "Universidade Estadual de Campinas",
    instituicao_curta:  "UNICAMP",
  },
  "fidel-ernesto-castro-morales": {
    nome:               "Fidel Ernesto Castro Morales",
    instituicao:        "Universidade Federal do Rio Grande do Norte",
    instituicao_curta:  "UFRN",
  },
  "filipe-campos-de-freitas": {
    nome:               "Filipe Campos de Freitas",
    instituicao:        "Empresa Brasileira de Pesquisa Agropecuária",
    instituicao_curta:  "EMBRAPA",
  },
  "flavio-barros": {
    nome:               "Flavio Barros",
    instituicao:        "Universidade de São Paulo",
    instituicao_curta:  "USP",
  },
  "francisco-felipe-de-queiroz": {
    nome:               "Francisco Felipe de Queiroz",
    instituicao:        "Universidade de São Paulo",
    instituicao_curta:  "USP",
  },
  "francisco-fernandes": {
    nome:               "Francisco Fernandes",
    instituicao:        "Universidade de São Paulo",
    instituicao_curta:  "USP",
  },
  "francisco-louzada-neto": {
    nome:               "Francisco Louzada Neto",
    instituicao:        "UFSCar",
    instituicao_curta:  "UFSCar",
    foto:               "assets/fotos/louzada-400.jpg",
    tratamento:         "Prof.",
  },
  "frederico-machado-almeida": {
    nome:               "Frederico Machado Almeida",
    instituicao:        "Universidade de Brasília",
    instituicao_curta:  "UnB",
  },
  "gabriel-baia-da-silva": {
    nome:               "Gabriel Baia da Silva",
    instituicao:        "Departamento de Trânsito do Estado do Pará",
    instituicao_curta:  "DETRAN-PA",
  },
  "gabriel-da-cruz-leao": {
    nome:               "Gabriel da Cruz Leão",
    instituicao:        "Universidade Federal da Bahia",
    instituicao_curta:  "UFBA",
  },
  "gabriel-dantas-morais": {
    nome:               "Gabriel Dantas Morais",
    instituicao:        "Universidade Federal da Bahia",
    instituicao_curta:  "UFBA",
  },
  "gabriel-de-jesus-pereira": {
    nome:               "Gabriel de Jesus Pereira",
    instituicao:        "Universidade Federal de São Carlos",
    instituicao_curta:  "UFSCar",
  },
  "gabriel-dias-barbosa-da-silva": {
    nome:               "Gabriel Dias Barbosa da Silva",
    instituicao:        "Universidade Estadual de Campinas",
    instituicao_curta:  "UNICAMP",
  },
  "gabriel-filipi-coelho": {
    nome:               "Gabriel Filipi Coelho",
    instituicao:        "Universidade Federal do Espírito Santo",
    instituicao_curta:  "UFES",
  },
  "gabriel-furlan-shiguihara": {
    nome:               "Gabriel Furlan Shiguihara",
    instituicao:        "Universidade Estadual de Campinas",
    instituicao_curta:  "UNICAMP",
  },
  "gabriel-gomes-ribeiro": {
    nome:               "Gabriel Gomes Ribeiro",
    instituicao:        "Horus CDA",
    instituicao_curta:  "Horus CDA",
  },
  "gabriel-graciano-dias": {
    nome:               "Gabriel Graciano Dias",
    instituicao:        "Universidade de São Paulo",
    instituicao_curta:  "USP",
  },
  "gabriel-naves-queiroz-buffon": {
    nome:               "Gabriel Naves Queiroz Buffon",
    instituicao:        "Universidade Federal do Espírito Santo",
    instituicao_curta:  "UFES",
  },
  "gabriel-peixoto": {
    nome:               "Gabriel Peixoto",
    instituicao:        "Universidade Federal de Lavras",
    instituicao_curta:  "UFLA",
  },
  "gabriel-taveira": {
    nome:               "Gabriel Taveira",
    instituicao:        "Universidade Federal do Ceará",
    instituicao_curta:  "UFC",
  },
  "gabriel-victor-da-silva-de-araujo": {
    nome:               "Gabriel Victor da Silva de Araujo",
    instituicao:        "Universidade de São Paulo",
    instituicao_curta:  "USP",
  },
  "gabriela-a-lavezzo": {
    nome:               "Gabriela A. Lavezzo",
    instituicao:        "Universidade de São Paulo",
    instituicao_curta:  "USP",
  },
  "gabriela-dos-santos-amaral": {
    nome:               "Gabriela dos Santos Amaral",
    instituicao:        "Universidade de São Paulo",
    instituicao_curta:  "USP",
  },
  "gabriela-ferreira-neto": {
    nome:               "Gabriela Ferreira Neto",
    instituicao:        "Universidade Federal de Lavras",
    instituicao_curta:  "UFLA",
  },
  "gabriela-franca-oliveira": {
    nome:               "Gabriela França Oliveira",
    instituicao:        "Universidade Estadual Paulista \"Júlio de Mesquita Filho\"",
    instituicao_curta:  "UNESP",
  },
  "gabriela-lins-de-albuquerque": {
    nome:               "Gabriela Lins de Albuquerque",
    instituicao:        "Universidade Federal de São Carlos",
    instituicao_curta:  "UFSCar",
  },
  "gabriela-rodrigues": {
    nome:               "Gabriela Rodrigues",
    instituicao:        "Universidade de São Paulo",
    instituicao_curta:  "USP",
  },
  "gabriela-sanches-clemente": {
    nome:               "Gabriela Sanches Clemente",
    instituicao:        "Universidade Federal do Paraná",
    instituicao_curta:  "UFPR",
  },
  "gabriella-ribeiro-dos-santos-rocha": {
    nome:               "Gabriella Ribeiro dos Santos Rocha",
    instituicao:        "Universidade Federal do Paraná",
    instituicao_curta:  "UFPR",
  },
  "gabrielle-aparecida-affonso": {
    nome:               "Gabrielle Aparecida Affonso",
    instituicao:        "Universidade Estadual de Maringá",
    instituicao_curta:  "UEM",
  },
  "gean-pereira-damaceno": {
    nome:               "Gean Pereira Damaceno",
    instituicao:        "Universidade Federal de Lavras",
    instituicao_curta:  "UFLA",
  },
  "george-anderson-alves-dos-santos": {
    nome:               "George Anderson Alves dos Santos",
    instituicao:        "Universidade Federal da Bahia",
    instituicao_curta:  "UFBA",
  },
  "geovane-fernandes-da-silva": {
    nome:               "Geovane Fernandes da Silva",
    instituicao:        "Universidade Federal de Lavras",
    instituicao_curta:  "UFLA",
  },
  "geovanna-sousa-santos-do-nascimento": {
    nome:               "Geovanna Sousa Santos do Nascimento",
    instituicao:        "Universidade Federal de São Carlos",
    instituicao_curta:  "UFSCar",
  },
  "geraldo-brito-neto": {
    nome:               "Geraldo Brito Neto",
    instituicao:        "Governo do Estado de São Paulo",
    instituicao_curta:  "GESP",
  },
  "gessica-talube": {
    nome:               "Gessica Talube",
    instituicao:        "Universidade Federal de Alfenas",
    instituicao_curta:  "UNIFAL-MG",
  },
  "gilberto-rodrigues-liska": {
    nome:               "Gilberto Rodrigues Liska",
    instituicao:        "Universidade Federal de São Carlos",
    instituicao_curta:  "UFSCar",
  },
  "giovana-ghantous": {
    nome:               "Giovana Ghantous",
    instituicao:        "Universidade de São Paulo",
    instituicao_curta:  "USP",
  },
  "giovana-oliveira-silva": {
    nome:               "Giovana Oliveira Silva",
    instituicao:        "Universidade Federal da Bahia",
    instituicao_curta:  "UFBA",
  },
  "giovani-festa-paludo": {
    nome:               "Giovani Festa Paludo",
    instituicao:        "Universidade Federal de Lavras",
    instituicao_curta:  "UFLA",
  },
  "giullber-valentim-da-silva": {
    nome:               "Giullber Valentim da Silva",
    instituicao:        "Universidade Federal de Lavras",
    instituicao_curta:  "UFLA",
  },
  "gleici-da-silva-castro-perdona": {
    nome:               "Gleici da Silva Castro Perdoná",
    instituicao:        "USP",
    instituicao_curta:  "USP",
    tratamento:         "Profa.",
  },
  "gleidisom-thyery-souza-da-costa": {
    nome:               "Gleidisom Thyery Souza da Costa",
    instituicao:        "Universidade Estadual de Campinas",
    instituicao_curta:  "UNICAMP",
  },
  "gligor-douglas-ortiz": {
    nome:               "Gligor Douglas Ortiz",
    instituicao:        "Universidade Federal do Paraná",
    instituicao_curta:  "UFPR",
  },
  "gualberto-segundo-agamez-montalvo": {
    nome:               "Gualberto Segundo Agamez Montalvo",
    instituicao:        "Universidade Federal do Ceará",
    instituicao_curta:  "UFC",
  },
  "guilherme-chaveiro-soares": {
    nome:               "Guilherme Chaveiro Soares",
    instituicao:        "Universidade Federal de São Carlos",
    instituicao_curta:  "UFSCar",
  },
  "guilherme-da-ros-ortega": {
    nome:               "Guilherme da Ros Ortega",
    instituicao:        "Universidade Federal do Espírito Santo",
    instituicao_curta:  "UFES",
  },
  "guilherme-de-oliveira-cherobim": {
    nome:               "Guilherme de Oliveira Cherobim",
    instituicao:        "Universidade Federal de São Carlos",
    instituicao_curta:  "UFSCar",
  },
  "guilherme-fioresi": {
    nome:               "Guilherme Fioresi",
    instituicao:        "Universidade de São Paulo",
    instituicao_curta:  "USP",
  },
  "guilherme-gomes-dos-santos": {
    nome:               "Guilherme Gomes dos Santos",
    instituicao:        "Universidade de São Paulo",
    instituicao_curta:  "USP",
  },
  "guilherme-lopes-de-oliveira": {
    nome:               "Guilherme Lopes de Oliveira",
    instituicao:        "Centro Federal de Educação Tecnológica de Minas Gerais",
    instituicao_curta:  "CEFET-MG",
    foto:               "assets/fotos/guilherme-400.png",
  },
  "guilherme-pumi": {
    nome:               "Guilherme Pumi",
    instituicao:        "UFRGS",
    instituicao_curta:  "UFRGS",
    foto:               "assets/fotos/guilhermepumi-400.png",
    lattes:             "http://lattes.cnpq.br/0541756341423245",
  },
  "gustavo-borges-de-rezende": {
    nome:               "Gustavo Borges de Rezende",
    instituicao:        "Universidade Federal de São Carlos",
    instituicao_curta:  "UFSCar",
  },
  "gustavo-da-silveira-gomes": {
    nome:               "Gustavo da Silveira Gomes",
    instituicao:        "Universidade de São Paulo",
    instituicao_curta:  "USP",
  },
  "gustavo-jun-yakushiji": {
    nome:               "Gustavo Jun Yakushiji",
    instituicao:        "Universidade de São Paulo",
    instituicao_curta:  "USP",
  },
  "gustavo-pereira": {
    nome:               "Gustavo Pereira",
    instituicao:        "Universidade Federal de São Carlos",
    instituicao_curta:  "UFSCar",
  },
  "gustavo-santana-silva": {
    nome:               "Gustavo Santana Silva",
    instituicao:        "Universidade Estadual Paulista \"Júlio de Mesquita Filho\"",
    instituicao_curta:  "UNESP",
  },
  "haward-antunny-da-silva-americo": {
    nome:               "Haward Antunny da Silva Américo",
    instituicao:        "Universidade Estadual de Maringá",
    instituicao_curta:  "UEM",
  },
  "heitor-cardoso-fernandes": {
    nome:               "Heitor Cardoso Fernandes",
    instituicao:        "Universidade Federal do Paraná",
    instituicao_curta:  "UFPR",
  },
  "helen-eduarda-dos-santos-lourenco": {
    nome:               "Helen Eduarda dos Santos Lourenço",
    instituicao:        "Universidade Estadual de Maringá",
    instituicao_curta:  "UEM",
  },
  "helena-fantin-gebler": {
    nome:               "Helena Fantin Gebler",
    instituicao:        "Universidade de São Paulo",
    instituicao_curta:  "USP",
  },
  "hellen-geremias-gatica-santos": {
    nome:               "Hellen Geremias Gatica Santos",
    instituicao:        "Fundação Oswaldo Cruz",
    instituicao_curta:  "FIOCRUZ",
  },
  "hellen-sonaly-silva-alves": {
    nome:               "Hellen Sonaly Silva Alves",
    instituicao:        "Universidade Federal de Lavras",
    instituicao_curta:  "UFLA",
  },
  "henrique-farbelow": {
    nome:               "Henrique Farbelow",
    instituicao:        "Universidade de São Paulo",
    instituicao_curta:  "USP",
  },
  "hozana-francielle-do-nascimento-borges": {
    nome:               "Hozana Francielle do Nascimento Borges",
    instituicao:        "Universidade Federal Rural de Pernambuco",
    instituicao_curta:  "UFRPE",
  },
  "hudson-macedo": {
    nome:               "Hudson Macedo",
    instituicao:        "Universidade Federal de Mato Grosso",
    instituicao_curta:  "UFMT",
  },
  "iago-augusto-carvalho": {
    nome:               "Iago Augusto Carvalho",
    instituicao:        "Universidade Federal de Alfenas",
    instituicao_curta:  "UNIFAL-MG",
  },
  "icaro-da-costa-francisco": {
    nome:               "Ícaro da Costa Francisco",
    instituicao:        "Universidade Estadual de Maringá",
    instituicao_curta:  "UEM",
  },
  "icaro-santos": {
    nome:               "Icaro Santos",
    instituicao:        "Universidade Federal do Espírito Santo",
    instituicao_curta:  "UFES",
  },
  "idemauro-antonio-rodrigues-de-lara": {
    nome:               "Idemauro Antonio Rodrigues de Lara",
    instituicao:        "Universidade de São Paulo",
    instituicao_curta:  "USP",
    foto:               "assets/fotos/idemauro-400.png",
    lattes:             "http://lattes.cnpq.br/2458007865506934",
  },
  "ieda-maria-de-siqueira-bezerra": {
    nome:               "Iêda Maria de Siqueira Bezerra",
    instituicao:        "Universidade Federal Rural de Pernambuco",
    instituicao_curta:  "UFRPE",
  },
  "igor-de-andrade-garcia": {
    nome:               "Igor de Andrade Garcia",
    instituicao:        "Universidade Federal do Paraná",
    instituicao_curta:  "UFPR",
  },
  "isabel-guizzi": {
    nome:               "Isabel Guizzi",
    instituicao:        "Universidade Federal de Santa Maria",
    instituicao_curta:  "UFSM",
  },
  "isabela-bolari-ramos": {
    nome:               "Isabela Bolari Ramos",
    instituicao:        "Universidade Federal do Espírito Santo",
    instituicao_curta:  "UFES",
  },
  "isabela-lika-morioka": {
    nome:               "Isabela Lika Morioka",
    instituicao:        "Universidade Federal de São Carlos",
    instituicao_curta:  "UFSCar",
  },
  "isabela-pereira-dos-santos": {
    nome:               "Isabela Pereira dos Santos",
    instituicao:        "Universidade Federal do Espírito Santo",
    instituicao_curta:  "UFES",
  },
  "isabele-alves-pereira": {
    nome:               "Isabele Alves Pereira",
    instituicao:        "Universidade Estadual Paulista \"Júlio de Mesquita Filho\"",
    instituicao_curta:  "UNESP",
  },
  "isabele-payao": {
    nome:               "Isabele Payão",
    instituicao:        "Universidade Estadual Paulista \"Júlio de Mesquita Filho\"",
    instituicao_curta:  "UNESP",
  },
  "isabella-ferreira-dias": {
    nome:               "Isabella Ferreira Dias",
    instituicao:        "Universidade Estadual de Campinas",
    instituicao_curta:  "UNICAMP",
  },
  "isabella-thalia-almeida-carvalho": {
    nome:               "Isabella Thalia Almeida Carvalho",
    instituicao:        "Universidade Federal de Lavras",
    instituicao_curta:  "UFLA",
  },
  "isabelle-cristina-idalgo-carnielli": {
    nome:               "Isabelle Cristina Idalgo Carnielli",
    instituicao:        "Universidade Estadual de Campinas",
    instituicao_curta:  "UNICAMP",
  },
  "isis-amarante-botelho-rocha": {
    nome:               "Ísis Amarante Botelho Rocha",
    instituicao:        "Universidade Federal de Lavras",
    instituicao_curta:  "UFLA",
  },
  "israel-victor-rodrigues-menezes": {
    nome:               "Israel Victor Rodrigues Menezes",
    instituicao:        "Universidade Federal de São Carlos",
    instituicao_curta:  "UFSCar",
  },
  "ivan-cunha-vieira": {
    nome:               "Ivan Cunha Vieira",
    instituicao:        "Universidade Federal do Espírito Santo",
    instituicao_curta:  "UFES",
  },
  "izayner-zanni": {
    nome:               "Izayner Zanni",
    instituicao:        "Universidade Federal do Espírito Santo",
    instituicao_curta:  "UFES",
  },
  "jackson-assis": {
    nome:               "Jackson Assis",
    instituicao:        "Empresa Brasileira de Pesquisa Agropecuária",
    instituicao_curta:  "EMBRAPA",
  },
  "jair-rocha-do-prado": {
    nome:               "Jair Rocha do Prado",
    instituicao:        "Universidade Federal de Uberlândia",
    instituicao_curta:  "UFU",
  },
  "jairo-lordelo": {
    nome:               "Jairo Lordelo",
    instituicao:        "Universidade Federal da Bahia",
    instituicao_curta:  "UFBA",
  },
  "janaina-ribeiro-costa-rouws": {
    nome:               "Janaina Ribeiro Costa Rouws",
    instituicao:        "Empresa Brasileira de Pesquisa Agropecuária",
    instituicao_curta:  "EMBRAPA",
  },
  "janlucca-de-almeida-macedo": {
    nome:               "Janlucca de Almeida Macedo",
    instituicao:        "Universidade Federal de Mato Grosso",
    instituicao_curta:  "UFMT",
  },
  "jefferson-balbino": {
    nome:               "Jefferson Balbino",
    instituicao:        "Universidade Estadual da Paraíba",
    instituicao_curta:  "UEPB",
  },
  "jeniffer-johana-duarte-sanchez": {
    nome:               "Jeniffer Johana Duarte Sanchez",
    instituicao:        "Universidade Federal do Ceará",
    instituicao_curta:  "UFC",
  },
  "jessica-carolina-zilio": {
    nome:               "Jéssica Carolina Zilio",
    instituicao:        "Universidade de São Paulo",
    instituicao_curta:  "USP",
  },
  "joao-antonio-oliveira-ribeiro-de-castro": {
    nome:               "João Antônio Oliveira Ribeiro de Castro",
    instituicao:        "Universidade Federal de Minas Gerais",
    instituicao_curta:  "UFMG",
  },
  "joao-carlos-pereira-alves": {
    nome:               "João Carlos Pereira Alves",
    instituicao:        "Universidade Federal de Lavras",
    instituicao_curta:  "UFLA",
  },
  "joao-cesar": {
    nome:               "João César",
    instituicao:        "Universidade de São Paulo",
    instituicao_curta:  "USP",
  },
  "joao-eduardo-pastori-garcia": {
    nome:               "João Eduardo Pastori Garcia",
    instituicao:        "Universidade Estadual de Campinas",
    instituicao_curta:  "UNICAMP",
  },
  "joao-felipe-de-brites-senra": {
    nome:               "João Felipe de Brites Senra",
    instituicao:        "Instituto Capixaba de Pesquisa, Assistência Técnica e Extensão Rural",
    instituicao_curta:  "INCAPER",
  },
  "joao-felipe-de-souza-silva": {
    nome:               "João Felipe de Souza Silva",
    instituicao:        "Universidade Federal do Amazonas",
    instituicao_curta:  "UFAM",
  },
  "joao-otavio-do-lago": {
    nome:               "João Otávio do Lago",
    instituicao:        "Universidade Federal do Paraná",
    instituicao_curta:  "UFPR",
  },
  "joao-paulo-assis-bonifacio": {
    nome:               "João Paulo Assis Bonifácio",
    instituicao:        "Universidade Federal de Lavras",
    instituicao_curta:  "UFLA",
  },
  "joao-paulo-sardo-madi": {
    nome:               "João Paulo Sardo Madi",
    instituicao:        "Universidade Federal de Mato Grosso",
    instituicao_curta:  "UFMT",
  },
  "joao-pedro-tedesco-medrado-rocha": {
    nome:               "João Pedro Tedesco Medrado Rocha",
    instituicao:        "Universidade Federal do Espírito Santo",
    instituicao_curta:  "UFES",
  },
  "joao-silva": {
    nome:               "João Silva",
    instituicao:        "Universidade Federal do Ceará",
    instituicao_curta:  "UFC",
  },
  "joao-souza": {
    nome:               "João Souza",
    instituicao:        "Universidade Federal de Lavras",
    instituicao_curta:  "UFLA",
  },
  "joao-victor-bastos-de-freitas": {
    nome:               "João Victor Bastos de Freitas",
    instituicao:        "Universidade Estadual de Campinas",
    instituicao_curta:  "UNICAMP",
  },
  "jodavid-de-araujo-ferreira": {
    nome:               "Jodavid de Araújo Ferreira",
    instituicao:        "Universidade Federal de Pernambuco",
    instituicao_curta:  "UFPE",
    foto:               "assets/fotos/jodavid-300.png",
    lattes:             "http://lattes.cnpq.br/4617170601890026",
  },
  "jonas-firmiano-da-silva": {
    nome:               "Jonas Firmiano da Silva",
    instituicao:        "Universidade Federal de Viçosa",
    instituicao_curta:  "UFV",
  },
  "jonas-vasconcelos": {
    nome:               "Jonas Vasconcelos",
    instituicao:        "Universidade Federal do Paraná",
    instituicao_curta:  "UFPR",
  },
  "jorge-alves-de-sousa": {
    nome:               "Jorge Alves de Sousa",
    instituicao:        "Universidade Federal de Campina Grande",
    instituicao_curta:  "UFCG",
  },
  "jose-augusto-andrade-souza": {
    nome:               "José Augusto Andrade Souza",
    instituicao:        "Universidade Federal de Lavras",
    instituicao_curta:  "UFLA",
  },
  "jose-ferreira-de-carvalho": {
    nome:               "José Ferreira de Carvalho",
    instituicao:        "Statistika Consultoria",
    instituicao_curta:  "Statistika",
  },
  "jose-lucas-bueno-loponi": {
    nome:               "José Lucas Bueno Loponi",
    instituicao:        "Universidade Estadual de Campinas",
    instituicao_curta:  "UNICAMP",
  },
  "jose-roberto-silva-dos-santos": {
    nome:               "José Roberto Silva dos Santos",
    instituicao:        "Universidade Federal do Ceará",
    instituicao_curta:  "UFC",
  },
  "josiane-rodrigues": {
    nome:               "Josiane Rodrigues",
    instituicao:        "Universidade Federal de São Carlos",
    instituicao_curta:  "UFSCar",
  },
  "josiel-oliveira": {
    nome:               "Josiel Oliveira",
    instituicao:        "Instituto Federal de Educação, Ciência e Tecnologia do Sertão Pernambucano",
    instituicao_curta:  "IF Sertão-PE",
  },
  "josimar-m-de-vasconcelos": {
    nome:               "Josimar M. de Vasconcelos",
    instituicao:        "Universidade Federal Rural de Pernambuco",
    instituicao_curta:  "UFRPE",
  },
  "juan-m-rodriguez-diaz": {
    nome:               "Juan M. Rodríguez Díaz",
    instituicao:        "Universidad de Salamanca",
    instituicao_curta:  "USAL",
  },
  "julia-carriel-trivellato": {
    nome:               "Julia Carriel Trivellato",
    instituicao:        "Universidade Estadual Paulista \"Júlio de Mesquita Filho\"",
    instituicao_curta:  "UNESP",
  },
  "julia-pavan-soler": {
    nome:               "Júlia Pavan Soler",
    instituicao:        "Universidade de São Paulo",
    instituicao_curta:  "USP",
    foto:               "assets/fotos/juliapavan-400.png",
    lattes:             "http://lattes.cnpq.br/2947693375237766",
  },
  "juliana-marchesi-reina": {
    nome:               "Juliana Marchesi Reina",
    instituicao:        "Universidade Estadual de Campinas",
    instituicao_curta:  "UNICAMP",
  },
  "juliana-nascimento-de-paula": {
    nome:               "Juliana Nascimento de Paula",
    instituicao:        "Universidade Estadual de Maringá",
    instituicao_curta:  "UEM",
  },
  "julianne-ribeiro-de-moura": {
    nome:               "Julianne Ribeiro de Moura",
    instituicao:        "Universidade Federal de Mato Grosso",
    instituicao_curta:  "UFMT",
  },
  "juliano-bortolini": {
    nome:               "Juliano Bortolini",
    instituicao:        "Universidade Federal de Mato Grosso",
    instituicao_curta:  "UFMT",
  },
  "julie-camolesi": {
    nome:               "Julie Camolesi",
    instituicao:        "Universidade Estadual de Campinas",
    instituicao_curta:  "UNICAMP",
  },
  "julio-pereira": {
    nome:               "Julio Pereira",
    instituicao:        "Universidade Federal de São Carlos",
    instituicao_curta:  "UFSCar",
  },
  "junior-melo-damian": {
    nome:               "Júnior Melo Damian",
    instituicao:        "Empresa Brasileira de Pesquisa Agropecuária",
    instituicao_curta:  "EMBRAPA",
  },
  "kaique-queiros-dos-santos": {
    nome:               "Kaique Queirós dos Santos",
    instituicao:        "Universidade Federal da Bahia",
    instituicao_curta:  "UFBA",
  },
  "kallin-miola-albernaz": {
    nome:               "Kállin Miola Albernaz",
    instituicao:        "Universidade Federal de Santa Maria",
    instituicao_curta:  "UFSM",
  },
  "katerine-zuniga-lastra": {
    nome:               "Katerine Zuniga Lastra",
    instituicao:        "Universidade de São Paulo",
    instituicao_curta:  "USP",
  },
  "kaylane-sabino": {
    nome:               "Kaylane Sabino",
    instituicao:        "Universidade Federal do Rio Grande do Norte",
    instituicao_curta:  "UFRN",
  },
  "kethlen-de-nardi-lopes": {
    nome:               "Kethlen de Nardi Lopes",
    instituicao:        "Universidade Federal do Espírito Santo",
    instituicao_curta:  "UFES",
  },
  "keyliane-travassos-almeida-da-silva": {
    nome:               "Keyliane Travassos Almeida da Silva",
    instituicao:        "Universidade Estadual de Campinas",
    instituicao_curta:  "UNICAMP",
  },
  "lais-cherobini": {
    nome:               "Lais Cherobini",
    instituicao:        "Universidade Federal de Santa Maria",
    instituicao_curta:  "UFSM",
  },
  "lara-fernandes-andreu-guillo": {
    nome:               "Lara Fernandes Andreu Guillo",
    instituicao:        "Universidade Federal de São Carlos",
    instituicao_curta:  "UFSCar",
  },
  "lara-rodrigues-de-almeida": {
    nome:               "Lara Rodrigues de Almeida",
    instituicao:        "Universidade Federal da Bahia",
    instituicao_curta:  "UFBA",
  },
  "larissa-avila-matos": {
    nome:               "Larissa Ávila Matos",
    instituicao:        "Universidade Estadual de Campinas",
    instituicao_curta:  "UNICAMP",
    foto:               "assets/fotos/larissa-400.png",
    lattes:             "http://lattes.cnpq.br/6330766834005870",
  },
  "larissa-buzinari-de-farias": {
    nome:               "Larissa Buzinari de Farias",
    instituicao:        "Universidade Estadual Paulista \"Júlio de Mesquita Filho\"",
    instituicao_curta:  "UNESP",
  },
  "larissa-carvalho-vilas-boas": {
    nome:               "Larissa Carvalho Vilas Boas",
    instituicao:        "Instituto Federal de Educação, Ciência e Tecnologia do Sudeste de Minas Gerais",
    instituicao_curta:  "IF Sudeste MG",
  },
  "larissa-goncalves-barbosa-vilela": {
    nome:               "Larissa Gonçalves Barbosa Vilela",
    instituicao:        "Universidade Estadual Paulista \"Júlio de Mesquita Filho\"",
    instituicao_curta:  "UNESP",
  },
  "larissa-reis-sousa-santos": {
    nome:               "Larissa Reis Sousa Santos",
    instituicao:        "Superintendência de Estudos Econômicos e Sociais da Bahia",
    instituicao_curta:  "SEI",
  },
  "laura-lucia-dominguez-barrios": {
    nome:               "Laura Lucia Dominguez Barrios",
    instituicao:        "Universidade Estadual de Campinas",
    instituicao_curta:  "UNICAMP",
  },
  "leandro-scala-da-rocha": {
    nome:               "Leandro Scala da Rocha",
    instituicao:        "Universidade Candido Mendes",
    instituicao_curta:  "UCAM",
  },
  "leila-akemi-de-paula-kawanishi": {
    nome:               "Leila Akemi de Paula Kawanishi",
    instituicao:        "Universidade Estadual de Campinas",
    instituicao_curta:  "UNICAMP",
  },
  "leonardo-araujo-de-moura": {
    nome:               "Leonardo Araújo de Moura",
    instituicao:        "Universidade Estadual de Campinas",
    instituicao_curta:  "UNICAMP",
  },
  "leonardo-cesar-pradebon": {
    nome:               "Leonardo Cesar Pradebon",
    instituicao:        "Universidade Federal de Santa Maria",
    instituicao_curta:  "UFSM",
  },
  "leonardo-peressim": {
    nome:               "Leonardo Peressim",
    instituicao:        "Universidade de São Paulo",
    instituicao_curta:  "USP",
  },
  "leonardo-vidal-bhering": {
    nome:               "Leonardo Vidal Bhering",
    instituicao:        "Universidade Federal do Paraná",
    instituicao_curta:  "UFPR",
  },
  "leticia-kazuko-kanemoto-rodrigues": {
    nome:               "Letícia Kazuko Kanemoto Rodrigues",
    instituicao:        "Universidade Estadual Paulista \"Júlio de Mesquita Filho\"",
    instituicao_curta:  "UNESP",
  },
  "leticia-rodrigues-da-silva": {
    nome:               "Letícia Rodrigues da Silva",
    instituicao:        "Universidade Federal de Juiz de Fora",
    instituicao_curta:  "UFJF",
  },
  "leticia-yumi-ichibara": {
    nome:               "Leticia Yumi Ichibara",
    instituicao:        "Universidade Federal de São Carlos",
    instituicao_curta:  "UFSCar",
  },
  "lia-hanna-martins-morita": {
    nome:               "Lia Hanna Martins Morita",
    instituicao:        "Universidade Federal de Mato Grosso",
    instituicao_curta:  "UFMT",
    foto:               "assets/fotos/liahanna-400.jpg",
    lattes:             "http://lattes.cnpq.br/8952048121396398",
  },
  "lilian-martins": {
    nome:               "Lilian Martins",
    instituicao:        "Universidade Federal de Mato Grosso",
    instituicao_curta:  "UFMT",
  },
  "lineu-alberto-cavazani-de-freitas": {
    nome:               "Lineu Alberto Cavazani de Freitas",
    instituicao:        "Universidade Federal do Paraná",
    instituicao_curta:  "UFPR",
  },
  "livia-cruz-veneri": {
    nome:               "Lívia Cruz Veneri",
    instituicao:        "Universidade Estadual Paulista \"Júlio de Mesquita Filho\"",
    instituicao_curta:  "UNESP",
  },
  "livia-ribeiro-melgaco": {
    nome:               "Livia Ribeiro Melgaço",
    instituicao:        "Universidade Federal do Espírito Santo",
    instituicao_curta:  "UFES",
  },
  "lorhanne-gomes-martins": {
    nome:               "Lorhanne Gomes Martins",
    instituicao:        "Universidade Federal de São Carlos",
    instituicao_curta:  "UFSCar",
  },
  "louiziane-ribeiro-carvalho": {
    nome:               "Louiziane Ribeiro Carvalho",
    instituicao:        "Universidade Federal de Lavras",
    instituicao_curta:  "UFLA",
  },
  "luben-miguel-cruz-cabezas": {
    nome:               "Luben Miguel Cruz Cabezas",
    instituicao:        "Universidade Federal de São Carlos",
    instituicao_curta:  "UFSCar",
  },
  "lucas-alves-de-almeida": {
    nome:               "Lucas Alves de Almeida",
    instituicao:        "Universidade de São Paulo",
    instituicao_curta:  "USP",
  },
  "lucas-avila-moreira-de-paula": {
    nome:               "Lucas Avila Moreira de Paula",
    instituicao:        "Instituto Butantan",
    instituicao_curta:  "Butantan",
  },
  "lucas-coelho-da-silva": {
    nome:               "Lucas Coelho da Silva",
    instituicao:        "Universidade Federal de Viçosa",
    instituicao_curta:  "UFV",
  },
  "lucas-dos-santos-rodrigues-szavara": {
    nome:               "Lucas dos Santos Rodrigues Szavara",
    instituicao:        "Universidade de São Paulo",
    instituicao_curta:  "USP",
  },
  "lucas-pereira-barbosa": {
    nome:               "Lucas Pereira Barbosa",
    instituicao:        "Universidade Federal de Lavras",
    instituicao_curta:  "UFLA",
  },
  "lucas-pereira-belo": {
    nome:               "Lucas Pereira Belo",
    instituicao:        "Universidade Federal de Viçosa",
    instituicao_curta:  "UFV",
  },
  "lucas-ragiotto": {
    nome:               "Lucas Ragiotto",
    instituicao:        "Instituto Butantan",
    instituicao_curta:  "Butantan",
  },
  "lucas-rigoti-goes": {
    nome:               "Lucas Rigoti Goes",
    instituicao:        "Universidade Federal do Espírito Santo",
    instituicao_curta:  "UFES",
  },
  "lucas-scheffer": {
    nome:               "Lucas Scheffer",
    instituicao:        "Universidade Federal do Paraná",
    instituicao_curta:  "UFPR",
  },
  "lucia-pereira-barroso": {
    nome:               "Lucia Pereira Barroso",
    instituicao:        "IME - USP",
    instituicao_curta:  "IME - USP",
    foto:               "assets/fotos/lucia-175.png",
    lattes:             "http://lattes.cnpq.br/2264376518383172",
  },
  "luciana-graziela-de-godoi": {
    nome:               "Luciana Graziela de Godoi",
    instituicao:        "Universidade Federal do Espírito Santo",
    instituicao_curta:  "UFES",
  },
  "luciano-matheus-floriano-de-araujo": {
    nome:               "Luciano Matheus Floriano de Araujo",
    instituicao:        "Universidade Estadual de Campinas",
    instituicao_curta:  "UNICAMP",
  },
  "luciene-resende-goncalves": {
    nome:               "Luciene Resende Gonçalves",
    instituicao:        "Universidade Federal de Alfenas",
    instituicao_curta:  "UNIFAL-MG",
  },
  "luis-davi-de-araujo-pereira": {
    nome:               "Luis Davi de Araújo Pereira",
    instituicao:        "Universidade Estadual de Campinas",
    instituicao_curta:  "UNICAMP",
  },
  "luis-eduardo-de-freitas-marconi": {
    nome:               "Luis Eduardo de Freitas Marconi",
    instituicao:        "Universidade Federal de São Carlos",
    instituicao_curta:  "UFSCar",
  },
  "luis-gonzaga-pinheiro-felix": {
    nome:               "Luis Gonzaga Pinheiro Felix",
    instituicao:        "Universidade Federal Rural de Pernambuco",
    instituicao_curta:  "UFRPE",
  },
  "luis-gustavo-barioni": {
    nome:               "Luís Gustavo Barioni",
    instituicao:        "Empresa Brasileira de Pesquisa Agropecuária",
    instituicao_curta:  "EMBRAPA",
  },
  "luisa-camarosano-pires": {
    nome:               "Luisa Camarosano Pires",
    instituicao:        "Universidade Estadual Paulista \"Júlio de Mesquita Filho\"",
    instituicao_curta:  "UNESP",
  },
  "luiz-alberto-beijo": {
    nome:               "Luiz Alberto Beijo",
    instituicao:        "Universidade Federal de Alfenas",
    instituicao_curta:  "UNIFAL-MG",
  },
  "luiz-fernando-silva-resende": {
    nome:               "Luiz Fernando Silva Resende",
    instituicao:        "Universidade Federal de São Carlos",
    instituicao_curta:  "UFSCar",
  },
  "luiz-otavio-de-oliveira-pala": {
    nome:               "Luiz Otávio de Oliveira Pala",
    instituicao:        "Universidade Federal de Lavras",
    instituicao_curta:  "UFLA",
  },
  "luiz-peternelli": {
    nome:               "Luiz Peternelli",
    instituicao:        "Universidade Federal de Viçosa",
    instituicao_curta:  "UFV",
  },
  "luiz-ricardo-nakamura": {
    nome:               "Luiz Ricardo Nakamura",
    instituicao:        "Universidade Federal de Lavras",
    instituicao_curta:  "UFLA",
  },
  "luiza-graca": {
    nome:               "Luiza Graça",
    instituicao:        "Universidade Federal de São Carlos",
    instituicao_curta:  "UFSCar",
  },
  "luiza-helena-pereira-lucio": {
    nome:               "Luíza Helena Pereira Lúcio",
    instituicao:        "Universidade Federal de Lavras",
    instituicao_curta:  "UFLA",
  },
  "luzia-aparecida-trinca": {
    nome:               "Luzia Aparecida Trinca",
    instituicao:        "Universidade Estadual Paulista \"Júlio de Mesquita Filho\"",
    instituicao_curta:  "UNESP",
  },
  "luzia-pedroso-de-oliveira": {
    nome:               "Luzia Pedroso de Oliveira",
    instituicao:        "Universidade Federal de São Paulo",
    instituicao_curta:  "UNIFESP",
  },
  "lyanderson-rabelo": {
    nome:               "Lyanderson Rabelo",
    instituicao:        "Universidade de São Paulo",
    instituicao_curta:  "USP",
  },
  "magno-tairone-de-freitas-severino": {
    nome:               "Magno Tairone de Freitas Severino",
    instituicao:        "Insper Instituto de Ensino e Pesquisa",
    instituicao_curta:  "INSPER",
  },
  "maiara-da-silva-antunes": {
    nome:               "Maiara da Silva Antunes",
    instituicao:        "Universidade Federal da Bahia",
    instituicao_curta:  "UFBA",
  },
  "manoel-ivanildo-silvestre-bezerra": {
    nome:               "Manoel Ivanildo Silvestre Bezerra",
    instituicao:        "Universidade Estadual Paulista \"Júlio de Mesquita Filho\"",
    instituicao_curta:  "UNESP",
  },
  "manoel-santos-neto": {
    nome:               "Manoel Santos-Neto",
    instituicao:        "Universidade Federal do Ceará",
    instituicao_curta:  "UFC",
  },
  "marcela-jacob-moreira-de-souza": {
    nome:               "Marcela Jacob Moreira de Souza",
    instituicao:        "Universidade Federal de São Carlos",
    instituicao_curta:  "UFSCar",
  },
  "marcela-silva-de-araujo": {
    nome:               "Marcela Silva de Araujo",
    instituicao:        "Universidade Federal de Lavras",
    instituicao_curta:  "UFLA",
  },
  "marcelo-andrade-da-silva": {
    nome:               "Marcelo Andrade da Silva",
    instituicao:        "Universidade de São Paulo",
    instituicao_curta:  "USP",
  },
  "marcelo-tavares-de-lima": {
    nome:               "Marcelo Tavares de Lima",
    instituicao:        "Universidade Pitágoras Unopar Anhanguera",
    instituicao_curta:  "UNOPAR",
  },
  "marcio-augusto-ferreira-rodrigues": {
    nome:               "Márcio Augusto Ferreira Rodrigues",
    instituicao:        "Universidade Federal de Goiás",
    instituicao_curta:  "UFG",
  },
  "marcio-luis-lanfredi-viola": {
    nome:               "Márcio Luis Lanfredi Viola",
    instituicao:        "Universidade Federal de São Carlos",
    instituicao_curta:  "UFSCar",
  },
  "marcio-roger-piagio": {
    nome:               "Márcio Roger Piagio",
    instituicao:        "Universidade Estadual de Maringá",
    instituicao_curta:  "UEM",
  },
  "marco-antonio-de-oliveira": {
    nome:               "Marco Antonio de Oliveira",
    instituicao:        "Instituto Butantan",
    instituicao_curta:  "Butantan",
  },
  "marco-antonio-silva-guibor": {
    nome:               "Marco Antonio Silva Guibor",
    instituicao:        "Universidade Federal do Paraná",
    instituicao_curta:  "UFPR",
  },
  "marcos-alves-de-lima": {
    nome:               "Marcos Alves de Lima",
    instituicao:        "Instituto Butantan",
    instituicao_curta:  "Butantan",
  },
  "marcos-andre-braz-vaz": {
    nome:               "Marcos André Braz Vaz",
    instituicao:        "Universidade Federal de Santa Catarina",
    instituicao_curta:  "UFSC",
  },
  "marcos-jardel-henriques": {
    nome:               "Marcos Jardel Henriques",
    instituicao:        "Universidade Federal de São Carlos",
    instituicao_curta:  "UFSCar",
  },
  "marcos-peres": {
    nome:               "Marcos Peres",
    instituicao:        "Universidade Estadual de Maringá",
    instituicao_curta:  "UEM",
  },
  "marcos-santos-de-oliveira": {
    nome:               "Marcos Santos de Oliveira",
    instituicao:        "Universidade Federal de São João del-Rei",
    instituicao_curta:  "UFSJ",
  },
  "maria-beatriz-piccelli-paterno": {
    nome:               "Maria Beatriz Piccelli Paterno",
    instituicao:        "Universidade Estadual Paulista \"Júlio de Mesquita Filho\"",
    instituicao_curta:  "UNESP",
  },
  "maria-de-fatima-magalhaes-de-souza-andrade": {
    nome:               "Maria de Fátima Magalhães de Souza Andrade",
    instituicao:        "Universidade Federal de Lavras",
    instituicao_curta:  "UFLA",
  },
  "maria-gabriela-cendoya": {
    nome:               "María Gabriela Cendoya",
    instituicao:        "Universidad Nacional de Mar del Plata (Argentina)",
    instituicao_curta:  "IBS & Universidad Nacional de Mar del Plata",
    foto:               "assets/fotos/cendoya-302.png",
  },
  "maria-jose-pereira-barbosa-filha": {
    nome:               "Maria José Pereira Barbosa Filha",
    instituicao:        "Universidade Federal do Pará",
    instituicao_curta:  "UFPA",
  },
  "maria-julia-de-souza-pompei": {
    nome:               "Maria Júlia de Souza Pompei",
    instituicao:        "Universidade Estadual Paulista \"Júlio de Mesquita Filho\"",
    instituicao_curta:  "UNESP",
  },
  "maria-leticia-salvador": {
    nome:               "Maria Leticia Salvador",
    instituicao:        "Fundação Pio XII – Hospital de Amor",
    instituicao_curta:  "HA",
  },
  "maria-mailane-vieira-da-silva": {
    nome:               "Maria Mailane Vieira da Silva",
    instituicao:        "Universidade Federal do Ceará",
    instituicao_curta:  "UFC",
  },
  "maria-vitoria-dos-santos-gonsalves": {
    nome:               "Maria Vitória dos Santos Gonsalves",
    instituicao:        "Universidade Federal da Bahia",
    instituicao_curta:  "UFBA",
  },
  "maria-vitoria-neves": {
    nome:               "Maria Vitória Neves",
    instituicao:        "Universidade Federal de Lavras",
    instituicao_curta:  "UFLA",
  },
  "mariana-rodrigues-motta": {
    nome:               "Mariana Rodrigues Motta",
    instituicao:        "Universidade Estadual de Campinas",
    instituicao_curta:  "UNICAMP",
    foto:               "assets/fotos/mariana-300.png",
    lattes:             "http://lattes.cnpq.br/6624470698679448",
    genero:             "f",
  },
  "maricielo-huayllapuma-lopez": {
    nome:               "Maricielo Huayllapuma Lopez",
    instituicao:        "Universidade Estadual de Campinas",
    instituicao_curta:  "UNICAMP",
  },
  "marilia-rocha": {
    nome:               "Marília Rocha",
    instituicao:        "Universidade Estadual de Campinas",
    instituicao_curta:  "UNICAMP",
  },
  "marinalva-maciel": {
    nome:               "Marinalva Maciel",
    instituicao:        "Universidade Federal do Pará",
    instituicao_curta:  "UFPA",
  },
  "mario-de-castro-andrade-filho": {
    nome:               "Mário de Castro Andrade Filho",
    instituicao:        "ICMC - USP",
    instituicao_curta:  "ICMC - USP",
    foto:               "assets/fotos/mariocastro-200.png",
    lattes:             "http://lattes.cnpq.br/6518161034709249",
    tratamento:         "Prof.",
  },
  "mario-henrique-santos-de-sena": {
    nome:               "Mario Henrique Santos de Sena",
    instituicao:        "Universidade Federal do Paraná",
    instituicao_curta:  "UFPR",
  },
  "marley-apolinario-saraiva": {
    nome:               "Marley Apolinario Saraiva",
    instituicao:        "Universidade Federal de Goiás",
    instituicao_curta:  "UFG",
  },
  "martha-liliana-huertas-madrid": {
    nome:               "Martha Liliana Huertas Madrid",
    instituicao:        "Universidade Federal de Pernambuco",
    instituicao_curta:  "UFPE",
  },
  "mateus-jardim-benvenuti": {
    nome:               "Mateus Jardim Benvenuti",
    instituicao:        "Universidade Federal de São Carlos",
    instituicao_curta:  "UFSCar",
  },
  "matheus-born-cabus": {
    nome:               "Matheus Born Cabús",
    instituicao:        "Universidade Federal do Paraná",
    instituicao_curta:  "UFPR",
  },
  "matheus-correia-da-silva": {
    nome:               "Matheus Correia da Silva",
    instituicao:        "Universidade Federal de Mato Grosso",
    instituicao_curta:  "UFMT",
  },
  "matheus-custodio-da-silva": {
    nome:               "Matheus Custódio da Silva",
    instituicao:        "Universidade Federal de Viçosa",
    instituicao_curta:  "UFV",
  },
  "matheus-da-costa-lima": {
    nome:               "Matheus da Costa Lima",
    instituicao:        "Universidade Federal de Lavras",
    instituicao_curta:  "UFLA",
  },
  "matheus-dias-aguiar": {
    nome:               "Matheus Dias Aguiar",
    instituicao:        "Universidade Federal Rural de Pernambuco",
    instituicao_curta:  "UFRPE",
  },
  "matheus-ferreira-dos-santos": {
    nome:               "Matheus Ferreira dos Santos",
    instituicao:        "Universidade Federal do Paraná",
    instituicao_curta:  "UFPR",
  },
  "matheus-oliveira-de-castro": {
    nome:               "Matheus Oliveira de Castro",
    instituicao:        "Universidade Estadual de Campinas",
    instituicao_curta:  "UNICAMP",
  },
  "matheus-tenorio-baumgartner": {
    nome:               "Matheus Tenório Baumgartner",
    instituicao:        "Universidade Estadual de Maringá",
    instituicao_curta:  "UEM",
  },
  "matheus-varistelo-mezzomo": {
    nome:               "Matheus Varistelo Mezzomo",
    instituicao:        "Universidade Federal do Paraná",
    instituicao_curta:  "UFPR",
  },
  "mauricio-alexandre-de-lacerda-ribeiro": {
    nome:               "Maurício Alexandre de Lacerda Ribeiro",
    instituicao:        "Universidade Federal do Espírito Santo",
    instituicao_curta:  "UFES",
  },
  "mauricio-celini-neto": {
    nome:               "Mauricio Celini Neto",
    instituicao:        "Universidade Federal de São Carlos",
    instituicao_curta:  "UFSCar",
  },
  "mauro-citro-lalucci": {
    nome:               "Mauro Citro Lalucci",
    instituicao:        "Universidade Federal de Lavras",
    instituicao_curta:  "UFLA",
  },
  "maycon-junio-ivo-vieira": {
    nome:               "Maycon Junio Ivo Vieira",
    instituicao:        "Universidade Federal de Viçosa",
    instituicao_curta:  "UFV",
  },
  "melissa-wendy-ribeiro-vicente": {
    nome:               "Melissa Wendy Ribeiro Vicente",
    instituicao:        "Universidade Federal de Lavras",
    instituicao_curta:  "UFLA",
  },
  "michel-miler-rocha-dos-santos": {
    nome:               "Michel Miler Rocha dos Santos",
    instituicao:        "Universidade Federal da Bahia",
    instituicao_curta:  "UFBA",
  },
  "miguel-flores": {
    nome:               "Miguel Flores",
    instituicao:        "Universidade Federal de Santa Maria",
    instituicao_curta:  "UFSM",
  },
  "miguel-junior": {
    nome:               "Miguel Junior",
    instituicao:        "Universidade Federal da Bahia",
    instituicao_curta:  "UFBA",
  },
  "miguel-luiz-martinho": {
    nome:               "Miguel Luiz Martinho",
    instituicao:        "Universidade Federal de Lavras",
    instituicao_curta:  "UFLA",
  },
  "miguel-zanchettin-de-oliveira": {
    nome:               "Miguel Zanchettin de Oliveira",
    instituicao:        "Universidade Federal do Paraná",
    instituicao_curta:  "UFPR",
  },
  "milene-vieira-figueira": {
    nome:               "Milene Vieira Figueira",
    instituicao:        "Universidade Federal Rural de Pernambuco",
    instituicao_curta:  "UFRPE",
  },
  "miriam-harumi-tsunemi": {
    nome:               "Miriam Harumi Tsunemi",
    instituicao:        "Universidade Estadual Paulista \"Júlio de Mesquita Filho\"",
    instituicao_curta:  "UNESP",
  },
  "moacyr-cunha-filho": {
    nome:               "Moacyr Cunha Filho",
    instituicao:        "Universidade Federal Rural de Pernambuco",
    instituicao_curta:  "UFRPE",
  },
  "moises-andre-augusto": {
    nome:               "Moises Andre Augusto",
    instituicao:        "Universidade Estadual de Campinas",
    instituicao_curta:  "UNICAMP",
  },
  "moises-farias-da-silva": {
    nome:               "Moisés Farias da Silva",
    instituicao:        "Universidade Estadual de Campinas",
    instituicao_curta:  "UNICAMP",
  },
  "moises-lima": {
    nome:               "Moises Lima",
    instituicao:        "Universidade Federal de Lavras",
    instituicao_curta:  "UFLA",
  },
  "momate-emate-ossifo": {
    nome:               "Momate Emate Ossifo",
    instituicao:        "Universidade Federal do Espírito Santo",
    instituicao_curta:  "UFES",
  },
  "moyses-nascimento": {
    nome:               "Moyses Nascimento",
    instituicao:        "Universidade Federal de Viçosa",
    instituicao_curta:  "UFV",
  },
  "murilo-de-paula-ferreira-da-silva": {
    nome:               "Murilo de Paula Ferreira da Silva",
    instituicao:        "Universidade Federal do Espírito Santo",
    instituicao_curta:  "UFES",
  },
  "murilo-vieira-loro": {
    nome:               "Murilo Vieira Loro",
    instituicao:        "Universidade Federal de Santa Maria",
    instituicao_curta:  "UFSM",
  },
  "nancy-lopes-garcia": {
    nome:               "Nancy Lopes Garcia",
    instituicao:        "Universidade Estadual de Campinas",
    instituicao_curta:  "UNICAMP",
    foto:               "assets/fotos/nancy-400.png",
    lattes:             "http://lattes.cnpq.br/5717731375008770",
  },
  "natalia-martins-fonseca": {
    nome:               "Natalia Martins Fonseca",
    instituicao:        "Universidade Federal de Alfenas",
    instituicao_curta:  "UNIFAL-MG",
  },
  "natan-hilario": {
    nome:               "Natan Hilário",
    instituicao:        "Universidade Federal de São Carlos",
    instituicao_curta:  "UFSCar",
  },
  "natan-sant-anna-borges": {
    nome:               "Natan Sant Anna Borges",
    instituicao:        "Universidade de São Paulo",
    instituicao_curta:  "USP",
  },
  "nathalia-lobo-da-silva": {
    nome:               "Nathália Lobo da Silva",
    instituicao:        "Universidade Estadual de Campinas",
    instituicao_curta:  "UNICAMP",
  },
  "nathalie-alves-silva": {
    nome:               "Nathalie Alves Silva",
    instituicao:        "Universidade Federal de Mato Grosso",
    instituicao_curta:  "UFMT",
  },
  "nayara-maria-barbosa-de-sousa": {
    nome:               "Nayara Maria Barbosa de Sousa",
    instituicao:        "Universidade Federal de Lavras",
    instituicao_curta:  "UFLA",
  },
  "nicolas-magalhaes-santana-e-silva": {
    nome:               "Nicolas Magalhães Santana e Silva",
    instituicao:        "Universidade Federal de São Carlos",
    instituicao_curta:  "UFSCar",
  },
  "nicoli-prosperi-pereira": {
    nome:               "Nicoli Prosperi Pereira",
    instituicao:        "Universidade Estadual de Campinas",
    instituicao_curta:  "UNICAMP",
  },
  "nicoly-lourenco": {
    nome:               "Nicoly Lourenço",
    instituicao:        "Universidade Estadual de Campinas",
    instituicao_curta:  "UNICAMP",
  },
  "nixon-jerez": {
    nome:               "Nixon Jerez",
    instituicao:        "Universidad Técnica Federico Santa María",
    instituicao_curta:  "UTFSM",
  },
  "noe-osorio-macario": {
    nome:               "Noe Osorio Macario",
    instituicao:        "Universidade Federal de Lavras",
    instituicao_curta:  "UFLA",
  },
  "oilson-alberto-gonzatto-junior": {
    nome:               "Oilson Alberto Gonzatto Junior",
    instituicao:        "Universidade de São Paulo",
    instituicao_curta:  "USP",
  },
  "osmary-camila-bortoncello-glober": {
    nome:               "Osmary Camila Bortoncello Glober",
    instituicao:        "Universidade Federal do Paraná",
    instituicao_curta:  "UFPR",
  },
  "osvaldo-moises-assinde": {
    nome:               "Osvaldo Moises Assinde",
    instituicao:        "Universidade de São Paulo",
    instituicao_curta:  "USP",
  },
  "otavio-marques-neves-da-silva": {
    nome:               "Otavio Marques Neves da Silva",
    instituicao:        "Universidade Estadual de Maringá",
    instituicao_curta:  "UEM",
  },
  "pablo-almeida": {
    nome:               "Pablo Almeida",
    instituicao:        "Universidade Estadual Paulista \"Júlio de Mesquita Filho\"",
    instituicao_curta:  "UNESP",
  },
  "pablo-silva-dos-santos": {
    nome:               "Pablo Silva dos Santos",
    instituicao:        "Universidade Federal de São Carlos",
    instituicao_curta:  "UFSCar",
  },
  "pamela-silveira": {
    nome:               "Pamela Silveira",
    instituicao:        "Universidade Federal de São Carlos",
    instituicao_curta:  "UFSCar",
  },
  "patricia-arruda-de-moura": {
    nome:               "Patricia Arruda de Moura",
    instituicao:        "Universidade Federal Rural de Pernambuco",
    instituicao_curta:  "UFRPE",
  },
  "patricia-barros": {
    nome:               "Patricia Barros",
    instituicao:        "Universidade Federal da Paraíba",
    instituicao_curta:  "UFPB",
  },
  "patricia-ferreira-paranaiba": {
    nome:               "Patrícia Ferreira Paranaíba",
    instituicao:        "Universidade Federal de Uberlândia",
    instituicao_curta:  "UFU",
  },
  "paulo-andrade": {
    nome:               "Paulo Andrade",
    instituicao:        "Universidade Federal dos Vales do Jequitinhonha e Mucuri",
    instituicao_curta:  "UFVJM",
  },
  "paulo-cesar-ossani": {
    nome:               "Paulo César Ossani",
    instituicao:        "Universidade Estadual de Maringá",
    instituicao_curta:  "UEM",
  },
  "paulo-henrique-brasil-ribeiro": {
    nome:               "Paulo Henrique Brasil Ribeiro",
    instituicao:        "Universidade Federal de São Carlos",
    instituicao_curta:  "UFSCar",
  },
  "paulo-henrique-ferreira-da-silva": {
    nome:               "Paulo Henrique Ferreira da Silva",
    instituicao:        "UFBA",
    instituicao_curta:  "UFBA",
  },
  "paulo-henrique-sales-guimaraes": {
    nome:               "Paulo Henrique Sales Guimarães",
    instituicao:        "Universidade Federal de Lavras",
    instituicao_curta:  "UFLA",
  },
  "paulo-justiniano-ribeiro-junior": {
    nome:               "Paulo Justiniano Ribeiro Junior",
    instituicao:        "Universidade Federal do Paraná",
    instituicao_curta:  "UFPR",
    foto:               "assets/fotos/paulojustiniano-232.png",
    lattes:             "http://lattes.cnpq.br/0852938701434556",
  },
  "paulo-justiniano-ribeiro-neto": {
    nome:               "Paulo Justiniano Ribeiro Neto",
    instituicao:        "Universidade Federal de Minas Gerais",
    instituicao_curta:  "UFMG",
  },
  "paulo-lino": {
    nome:               "Paulo Lino",
    instituicao:        "Universidade Estadual de Campinas",
    instituicao_curta:  "UNICAMP",
  },
  "paulo-roberto-salles-neto": {
    nome:               "Paulo Roberto Salles Neto",
    instituicao:        "Universidade Federal de São Carlos",
    instituicao_curta:  "UFSCar",
  },
  "pedro-augusto-gongora-yoshihara": {
    nome:               "Pedro Augusto Gongora Yoshihara",
    instituicao:        "Universidade Estadual de Campinas",
    instituicao_curta:  "UNICAMP",
  },
  "pedro-augusto-lima-do-nascimento": {
    nome:               "Pedro Augusto Lima do Nascimento",
    instituicao:        "Universidade Federal de Santa Maria",
    instituicao_curta:  "UFSM",
  },
  "pedro-daniel-lacerda": {
    nome:               "Pedro Daniel Lacerda",
    instituicao:        "Universidade Federal de São Carlos",
    instituicao_curta:  "UFSCar",
  },
  "pedro-florencio-de-almeida-neto": {
    nome:               "Pedro Florencio de Almeida Neto",
    instituicao:        "Governo do Estado de São Paulo",
    instituicao_curta:  "GESP",
  },
  "pedro-henrique-de-araujo": {
    nome:               "Pedro Henrique de Araujo",
    instituicao:        "Universidade Federal de São Carlos",
    instituicao_curta:  "UFSCar",
  },
  "pedro-henrique-pereira-nunes": {
    nome:               "Pedro Henrique Pereira Nunes",
    instituicao:        "Universidade Federal de Santa Maria",
    instituicao_curta:  "UFSM",
  },
  "pedro-lucas-domingos-aguiar": {
    nome:               "Pedro Lucas Domingos Aguiar",
    instituicao:        "Universidade Federal do Espírito Santo",
    instituicao_curta:  "UFES",
  },
  "pedro-luiz-ramos": {
    nome:               "Pedro Luiz Ramos",
    instituicao:        "CeMEAI - USP",
    instituicao_curta:  "CeMEAI - USP",
    tratamento:         "Prof.",
  },
  "pedro-rafael-diniz-marinho": {
    nome:               "Pedro Rafael Diniz Marinho",
    instituicao:        "Universidade Federal da Paraíba",
    instituicao_curta:  "UFPB",
  },
  "pedro-reginatto-constantino": {
    nome:               "Pedro Reginatto Constantino",
    instituicao:        "Universidade Estadual de Maringá",
    instituicao_curta:  "UEM",
  },
  "pettala-de-moraes-zacche": {
    nome:               "Péttala de Moraes Zacché",
    instituicao:        "Universidade Federal do Espírito Santo",
    instituicao_curta:  "UFES",
  },
  "poifi-asof": {
    nome:               "Poifi Asof",
    instituicao:        "SDFA",
    instituicao_curta:  "SDFA",
  },
  "poliana-silva": {
    nome:               "Poliana Silva",
    instituicao:        "Universidade Federal de Alfenas",
    instituicao_curta:  "UNIFAL-MG",
  },
  "r-alcarde": {
    nome:               "R. Alcarde",
    instituicao:        "Universidade de São Paulo",
    instituicao_curta:  "USP",
  },
  "rafael-braz-azevedo-farias": {
    nome:               "Rafael Bráz Azevedo Farias",
    instituicao:        "Universidade Federal do Ceará",
    instituicao_curta:  "UFC",
  },
  "rafael-cabral-fernandez": {
    nome:               "Rafael Cabral Fernandez",
    instituicao:        "Universidade Federal do Rio de Janeiro",
    instituicao_curta:  "UFRJ",
  },
  "rafael-de-andrade-moral": {
    nome:               "Rafael de Andrade Moral",
    instituicao:        "Maynooth University",
    foto:               "assets/fotos/rafaelmoral-400.png",
    lattes:             "http://lattes.cnpq.br/8041441890541410",
    website:            "https://rafamoral.github.io/index.html",
  },
  "rafael-js-oliveira": {
    nome:               "Rafael J. S. Oliveira",
    instituicao:        "Universidade Federal do Espírito Santo",
    instituicao_curta:  "UFES",
  },
  "rafael-magalhaes": {
    nome:               "Rafael Magalhães",
    instituicao:        "Universidade Federal do Paraná",
    instituicao_curta:  "UFPR",
  },
  "rafael-moreno-aguiar": {
    nome:               "Rafael Moreno Aguiar",
    instituicao:        "Universidade Federal da Bahia",
    instituicao_curta:  "UFBA",
  },
  "rafael-ninno-iseri": {
    nome:               "Rafael Ninno Iseri",
    instituicao:        "Universidade Estadual de Maringá",
    instituicao_curta:  "UEM",
  },
  "rafael-pimentel-maia": {
    nome:               "Rafael Pimentel Maia",
    instituicao:        "Universidade Estadual de Campinas",
    instituicao_curta:  "UNICAMP",
    foto:               "assets/fotos/rafael-400.png",
    lattes:             "http://lattes.cnpq.br/9151825716259032",
  },
  "rafael-ribeiro": {
    nome:               "Rafael Ribeiro",
    instituicao:        "Universidade Estadual de Campinas",
    instituicao_curta:  "UNICAMP",
  },
  "rafael-sant-ana-herzog": {
    nome:               "Rafael Sant'Ana Herzog",
    instituicao:        "Universidade Federal do Espírito Santo",
    instituicao_curta:  "UFES",
  },
  "rafael-simoes-martins-da-silva-oliveira": {
    nome:               "Rafael Simões Martins da Silva Oliveira",
    instituicao:        "Universidade Federal de Mato Grosso",
    instituicao_curta:  "UFMT",
  },
  "rafaela-bezerra": {
    nome:               "Rafaela Bezerra",
    instituicao:        "Universidade Federal do Amapá",
    instituicao_curta:  "UNIFAP",
  },
  "raphael-bruno-amemiya": {
    nome:               "Raphael Bruno Amemiya",
    instituicao:        "Universidade de São Paulo",
    instituicao_curta:  "USP",
  },
  "raul-berti-bruno-da-silva": {
    nome:               "Raul Berti Bruno da Silva",
    instituicao:        "Universidade Federal de São Carlos",
    instituicao_curta:  "UFSCar",
  },
  "reinaldo-anacleto": {
    nome:               "Reinaldo Anacleto",
    instituicao:        "Universidade Federal de São Carlos",
    instituicao_curta:  "UFSCar",
  },
  "renan-mercuri-pinto": {
    nome:               "Renan Mercuri Pinto",
    instituicao:        "Universidade Estadual Paulista \"Júlio de Mesquita Filho\"",
    instituicao_curta:  "UNESP",
  },
  "renata-dourado-roque": {
    nome:               "Renata Dourado Roque",
    instituicao:        "Universidade Federal de Viçosa",
    instituicao_curta:  "UFV",
  },
  "renato-de-lima": {
    nome:               "Renato de Lima",
    instituicao:        "Universidade Federal de Lavras",
    instituicao_curta:  "UFLA",
  },
  "rene-de-sousa-alves": {
    nome:               "Rene de Sousa Alves",
    instituicao:        "Governo do Estado de São Paulo",
    instituicao_curta:  "GESP",
  },
  "rhoda-ayanfeoluwa-ojo": {
    nome:               "Rhoda Ayanfeoluwa Ojo",
    instituicao:        "Universidade Federal de Viçosa",
    instituicao_curta:  "UFV",
  },
  "ricardina-lucas": {
    nome:               "Ricardina Lucas",
    instituicao:        "Universidade Federal de Lavras",
    instituicao_curta:  "UFLA",
  },
  "ricardo-antonio-ruiz-cardozo": {
    nome:               "Ricardo Antonio Ruiz Cardozo",
    instituicao:        "Universidade de São Paulo",
    instituicao_curta:  "USP",
  },
  "rick-anderson-freire-mangueira": {
    nome:               "Rick Anderson Freire Mangueira",
    instituicao:        "Universidade Estadual Paulista \"Júlio de Mesquita Filho\"",
    instituicao_curta:  "UNESP",
  },
  "roberto-vila-gabriel": {
    nome:               "Roberto Vila Gabriel",
    instituicao:        "Universidade de Brasília",
    instituicao_curta:  "UnB",
  },
  "rodrigo-ferreira-de-abreu": {
    nome:               "Rodrigo Ferreira de Abreu",
    instituicao:        "Instituto Federal de Educação, Ciência e Tecnologia do Sul de Minas Gerais",
    instituicao_curta:  "IFSULDEMINAS",
  },
  "rodrigo-luiz-costa-cavalcanti": {
    nome:               "Rodrigo Luiz Costa Cavalcanti",
    instituicao:        "Universidade Federal Rural de Pernambuco",
    instituicao_curta:  "UFRPE",
  },
  "rodrigo-perim": {
    nome:               "Rodrigo Perim",
    instituicao:        "Universidade Estadual Paulista \"Júlio de Mesquita Filho\"",
    instituicao_curta:  "UNESP",
  },
  "rogerio-antonio-de-oliveira": {
    nome:               "Rogerio Antonio de Oliveira",
    instituicao:        "Universidade Estadual Paulista \"Júlio de Mesquita Filho\"",
    instituicao_curta:  "UNESP",
  },
  "rosemeire-l-fiaccone": {
    nome:               "Rosemeire L. Fiaccone",
    instituicao:        "Universidade Federal da Bahia (UFBA)",
    instituicao_curta:  "Universidade Federal da Bahia (UFBA)",
    foto:               "assets/fotos/rosemeire-400.png",
  },
  "ruan-gabriel-da-cruz-cerqueira": {
    nome:               "Ruan Gabriel da Cruz Cerqueira",
    instituicao:        "Universidade Federal da Bahia",
    instituicao_curta:  "UFBA",
  },
  "rudimar-henrique-de-andrade-maciel": {
    nome:               "Rudimar Henrique de Andrade Maciel",
    instituicao:        "Universidade Estadual de Maringá",
    instituicao_curta:  "UEM",
  },
  "ruth-elisabeth-vera-carbonelli": {
    nome:               "Ruth Elisabeth Vera Carbonelli",
    instituicao:        "Universidade Estadual de Campinas",
    instituicao_curta:  "UNICAMP",
  },
  "ryan-matheus-gomes-da-silva": {
    nome:               "Ryan Matheus Gomes da Silva",
    instituicao:        "Kasvi",
    instituicao_curta:  "Kasvi",
  },
  "sabrina-caetano": {
    nome:               "Sabrina Caetano",
    instituicao:        "Universidade Estadual Paulista \"Júlio de Mesquita Filho\"",
    instituicao_curta:  "UNESP",
  },
  "samantha-gouvea-oliveira": {
    nome:               "Samantha Gouvêa Oliveira",
    instituicao:        "Universidade Federal de Viçosa",
    instituicao_curta:  "UFV",
  },
  "samara-flamini-kiihl": {
    nome:               "Samara Flamini Kiihl",
    instituicao:        "Universidade Estadual de Campinas",
    instituicao_curta:  "UNICAMP",
    foto:               "assets/fotos/samara-360.png",
    lattes:             "http://lattes.cnpq.br/3841950980858699",
  },
  "samuel-verissimo-portela-mendes": {
    nome:               "Samuel Veríssimo Portela Mendes",
    instituicao:        "Superintendência de Estudos Econômicos e Sociais da Bahia",
    instituicao_curta:  "SEI",
  },
  "sandra-coelho-da-silva": {
    nome:               "Sandra Coelho da Silva",
    instituicao:        "Universidade Federal do Rio de Janeiro",
    instituicao_curta:  "UFRJ",
  },
  "sara-dos-anjos-de-souza-dias": {
    nome:               "Sara dos Anjos de Souza Dias",
    instituicao:        "Universidade Estadual de Campinas",
    instituicao_curta:  "UNICAMP",
  },
  "sara-silverio": {
    nome:               "Sara Silvério",
    instituicao:        "Universidade Federal de Viçosa",
    instituicao_curta:  "UFV",
  },
  "sarah-martins-rezende-de-souza": {
    nome:               "Sarah Martins Rezende de Souza",
    instituicao:        "Universidade Federal de Lavras",
    instituicao_curta:  "UFLA",
  },
  "sergio-domingos-simao": {
    nome:               "Sérgio Domingos Simão",
    instituicao:        "Universidade Federal de Alfenas",
    instituicao_curta:  "UNIFAL-MG",
  },
  "sergio-m-oikawa": {
    nome:               "Sérgio M Oikawa",
    instituicao:        "Universidade Estadual Paulista \"Júlio de Mesquita Filho\"",
    instituicao_curta:  "UNESP",
  },
  "shanda-andrea-huillca-torres": {
    nome:               "Shanda Andrea Huillca Torres",
    instituicao:        "Universidade Estadual de Campinas",
    instituicao_curta:  "UNICAMP",
  },
  "silvana-schneider": {
    nome:               "Silvana Schneider",
    instituicao:        "Universidade Federal do Rio Grande do Sul",
    instituicao_curta:  "UFRGS",
  },
  "silvia-emiko-shimakura": {
    nome:               "Silvia Emiko Shimakura",
    instituicao:        "Universidade Federal do Paraná",
    instituicao_curta:  "UFPR",
  },
  "silvia-maria-de-freitas": {
    nome:               "Sílvia Maria de Freitas",
    instituicao:        "Universidade Federal do Ceará",
    instituicao_curta:  "UFC",
  },
  "sofia-ferreira": {
    nome:               "Sofia Ferreira",
    instituicao:        "Universidade Federal de São Carlos",
    instituicao_curta:  "UFSCar",
  },
  "stefane-lele-rossoni": {
    nome:               "Stéfane Lele Rossoni",
    instituicao:        "Universidade Estadual de Maringá",
    instituicao_curta:  "UEM",
  },
  "stephany-parteka": {
    nome:               "Stephany Parteka",
    instituicao:        "Universidade Estadual de Maringá",
    instituicao_curta:  "UEM",
  },
  "sylvia-bastian-do-lago": {
    nome:               "Sylvia Bastian do Lago",
    instituicao:        "Universidade Federal da Bahia",
    instituicao_curta:  "UFBA",
  },
  "syntia-regina-de-souza": {
    nome:               "Syntia Regina de Souza",
    instituicao:        "Universidade Federal Rural de Pernambuco",
    instituicao_curta:  "UFRPE",
  },
  "taciano-francisco-menezes-maciel": {
    nome:               "Taciano Francisco Menezes Maciel",
    instituicao:        "Universidade Federal de São João del-Rei",
    instituicao_curta:  "UFSJ",
  },
  "tales-jesus-fernandes": {
    nome:               "Tales Jesus Fernandes",
    instituicao:        "Universidade Federal de Lavras",
    instituicao_curta:  "UFLA",
  },
  "tales-piffer-coltre": {
    nome:               "Tales Piffer Coltre",
    instituicao:        "Universidade Federal de São Carlos",
    instituicao_curta:  "UFSCar",
  },
  "tatiana-benaglia": {
    nome:               "Tatiana Benaglia",
    instituicao:        "Universidade Estadual de Campinas",
    instituicao_curta:  "UNICAMP",
    foto:               "assets/fotos/tatiana-400.png",
    lattes:             "http://lattes.cnpq.br/1292097563479677",
  },
  "tatiane-carvalho-alvarenga": {
    nome:               "Tatiane Carvalho Alvarenga",
    instituicao:        "Universidade Federal de Itajubá",
    instituicao_curta:  "UNIFEI",
  },
  "tays-batista": {
    nome:               "Tays Batista",
    instituicao:        "Universidade Federal de Viçosa",
    instituicao_curta:  "UFV",
  },
  "thais-ribeiro": {
    nome:               "Thaís Ribeiro",
    instituicao:        "Universidade Estadual de Campinas",
    instituicao_curta:  "UNICAMP",
  },
  "thais-sena-de-paula-domingues": {
    nome:               "Thais Sena de Paula Domingues",
    instituicao:        "Universidade de São Paulo",
    instituicao_curta:  "USP",
  },
  "thayza-soares-coelho": {
    nome:               "Thayza Soares Coelho",
    instituicao:        "Universidade Federal de Mato Grosso",
    instituicao_curta:  "UFMT",
  },
  "thelma-safadi": {
    nome:               "Thelma Safadi",
    instituicao:        "Universidade Federal de Lavras",
    instituicao_curta:  "UFLA",
  },
  "thiago-rafael-de-souza": {
    nome:               "Thiago Rafael de Souza",
    instituicao:        "Universidade Federal de São Carlos",
    instituicao_curta:  "UFSCar",
  },
  "thiago-roberto-alves": {
    nome:               "Thiago Roberto Alves",
    instituicao:        "UFPR",
    instituicao_curta:  "UFPR",
  },
  "thiago-rodrigo-ramos": {
    nome:               "Thiago Rodrigo Ramos",
    instituicao:        "Universidade Federal de São Carlos (UFSCar)",
    instituicao_curta:  "UFSCar",
    foto:               "assets/fotos/thiago-400.png",
  },
  "thierry-ribeiro": {
    nome:               "Thierry Ribeiro",
    instituicao:        "Universidade Federal do Espírito Santo",
    instituicao_curta:  "UFES",
  },
  "tiago-barbosa-rezende": {
    nome:               "Tiago Barbosa Rezende",
    instituicao:        "Universidade Federal de Lavras",
    instituicao_curta:  "UFLA",
  },
  "tiago-pereira-marques": {
    nome:               "Tiago Pereira Marques",
    instituicao:        "Universidade Virtual do Estado de São Paulo",
    instituicao_curta:  "UNIVESP",
  },
  "ulisses-mello": {
    nome:               "Ulisses Mello",
    instituicao:        "Universidade Federal de Lavras",
    instituicao_curta:  "UFLA",
  },
  "unan-bonetti-da-silva": {
    nome:               "Unan Bonetti da Silva",
    instituicao:        "Universidade Federal do Paraná",
    instituicao_curta:  "UFPR",
  },
  "vanderly-janeiro": {
    nome:               "Vanderly Janeiro",
    instituicao:        "Universidade Estadual de Maringá",
    instituicao_curta:  "UEM",
    foto:               "assets/fotos/vanderlyjaneiro-342.png",
    lattes:             "http://lattes.cnpq.br/7910133462131658",
  },
  "vanessa-maculan-silverio": {
    nome:               "Vanessa Maculan Silvério",
    instituicao:        "Universidade Federal de Lavras",
    instituicao_curta:  "UFLA",
  },
  "vasco-lacerda-augusto": {
    nome:               "Vasco Lacerda Augusto",
    instituicao:        "Universidade Federal de Lavras",
    instituicao_curta:  "UFLA",
  },
  "vera-lucia-damasceno-tomazella": {
    nome:               "Vera Lucia Damasceno Tomazella",
    instituicao:        "Universidade Federal de São Carlos",
    instituicao_curta:  "UFSCar",
    foto:               "assets/fotos/vera-400.png",
    lattes:             "http://lattes.cnpq.br/8870556978317000",
    tratamento:         "Profa.",
  },
  "veronica-manhaes-saint-clair": {
    nome:               "Verônica Manhães Saint'Clair",
    instituicao:        "Universidade Federal de Viçosa",
    instituicao_curta:  "UFV",
  },
  "victor": {
    nome:               "Victor",
    instituicao:        "Universidade Estadual de Campinas",
    instituicao_curta:  "UNICAMP",
  },
  "victor-freguglia-souza": {
    nome:               "Victor Freguglia Souza",
    instituicao:        "UNICAMP",
    instituicao_curta:  "UNICAMP",
    foto:               "assets/fotos/victor-200.png",
    lattes:             "http://lattes.cnpq.br/6306080581906246",
  },
  "victor-hugo-lachos": {
    nome:               "Victor Hugo Lachos",
    instituicao:        "University of Connecticut",
    foto:               "assets/fotos/victorhugo-400.png",
    lattes:             "http://lattes.cnpq.br/5456626204155096",
  },
  "victor-marcellus-bianchi-brandao": {
    nome:               "Victor Marcellus Bianchi Brandão",
    instituicao:        "Universidade Estadual de Maringá",
    instituicao_curta:  "UEM",
  },
  "victoria-keith-de-oliveira-canto": {
    nome:               "Victória Keith de Oliveira Canto",
    instituicao:        "Universidade Federal do Paraná",
    instituicao_curta:  "UFPR",
  },
  "victoria-marchetti": {
    nome:               "Victoria Marchetti",
    instituicao:        "Universidade Estadual Paulista \"Júlio de Mesquita Filho\"",
    instituicao_curta:  "UNESP",
  },
  "vinicius-calsavara": {
    nome:               "Vinicius Calsavara",
    instituicao:        "Cedars-Sinai Medical Center (EUA)",
    instituicao_curta:  "Cedars-Sinai Medical Center",
    foto:               "assets/fotos/vinicius-400.png",
    tratamento:         "Prof.",
  },
  "vinicius-cotrim-cruz": {
    nome:               "Vinicius Cotrim Cruz",
    instituicao:        "Universidade Federal de São Carlos",
    instituicao_curta:  "UFSCar",
  },
  "vinicius-fernandes-da-silva": {
    nome:               "Vinicius Fernandes da Silva",
    instituicao:        "Universidade Estadual de Campinas",
    instituicao_curta:  "UNICAMP",
  },
  "vinicius-morgado-rosa-vianna": {
    nome:               "Vinícius Morgado Rosa Vianna",
    instituicao:        "Universidade Federal de São Carlos",
    instituicao_curta:  "UFSCar",
  },
  "vinicius-silva-begnami": {
    nome:               "Vinicius Silva Begnami",
    instituicao:        "Universidade Federal de Viçosa",
    instituicao_curta:  "UFV",
  },
  "vitor-barelli": {
    nome:               "Vitor Barelli",
    instituicao:        "Universidade Estadual Paulista \"Júlio de Mesquita Filho\"",
    instituicao_curta:  "UNESP",
  },
  "vitor-fujimoto": {
    nome:               "Vitor Fujimoto",
    instituicao:        "Universidade Federal do Paraná",
    instituicao_curta:  "UFPR",
  },
  "vitor-hugo-mourao": {
    nome:               "Vitor Hugo Mourão",
    instituicao:        "Universidade Estadual de Campinas",
    instituicao_curta:  "UNICAMP",
  },
  "vitor-mendes": {
    nome:               "Vitor Mendes",
    instituicao:        "Universidade Federal do Ceará",
    instituicao_curta:  "UFC",
  },
  "vitor-pignatari": {
    nome:               "Vitor Pignatari",
    instituicao:        "Universidade Federal do Paraná",
    instituicao_curta:  "UFPR",
  },
  "vitor-ribas-perrone": {
    nome:               "Vitor Ribas Perrone",
    instituicao:        "Universidade Estadual de Campinas",
    instituicao_curta:  "UNICAMP",
  },
  "vitor-zambaldi": {
    nome:               "Vitor Zambaldi",
    instituicao:        "Universidade Federal do Paraná",
    instituicao_curta:  "UFPR",
  },
  "vitoria-cristina-mendes-da-silva": {
    nome:               "Vitória Cristina Mendes da Silva",
    instituicao:        "Universidade Federal de Lavras",
    instituicao_curta:  "UFLA",
  },
  "vitoria-larrosa-bueno": {
    nome:               "Vitória Larrosa Bueno",
    instituicao:        "Universidade Federal de Santa Maria",
    instituicao_curta:  "UFSM",
  },
  "vitoria-silva-garcia": {
    nome:               "Vitória Silva Garcia",
    instituicao:        "Universidade Federal do Rio Grande do Sul",
    instituicao_curta:  "UFRGS",
  },
  "viviane-figueiredo": {
    nome:               "Viviane Figueiredo",
    instituicao:        "Somos Educação",
    instituicao_curta:  "Somos Educação",
  },
  "vladison-de-sousa-magalhaes": {
    nome:               "Vladison de Sousa Magalhães",
    instituicao:        "Universidade de São Paulo",
    instituicao_curta:  "USP",
  },
  "waldomiro-barioni-junior": {
    nome:               "Waldomiro Barioni Junior",
    instituicao:        "Empresa Brasileira de Pesquisa Agropecuária",
    instituicao_curta:  "EMBRAPA",
  },
  "walifer-costa-ferreira": {
    nome:               "Walifer Costa Ferreira",
    instituicao:        "Universidade Federal de Alfenas",
    instituicao_curta:  "UNIFAL-MG",
  },
  "warlley-ferreira-sahb": {
    nome:               "Warlley Ferreira Sahb",
    instituicao:        "Universidade Federal de Lavras",
    instituicao_curta:  "UFLA",
  },
  "welinton-yoshio-hirai": {
    nome:               "Welinton Yoshio Hirai",
    instituicao:        "Fundação Pio XII – Hospital de Amor",
    instituicao_curta:  "HA",
  },
  "wellington-de-lara-martins": {
    nome:               "Wellington de Lara Martins",
    instituicao:        "Universidade Federal de Mato Grosso",
    instituicao_curta:  "UFMT",
  },
  "welyrson-carlos-coutinho-silva": {
    nome:               "Welyrson Carlos Coutinho Silva",
    instituicao:        "Universidade Federal do Pará",
    instituicao_curta:  "UFPA",
  },
  "william-pereira-leal": {
    nome:               "William Pereira Leal",
    instituicao:        "Universidade Federal de Lavras",
    instituicao_curta:  "UFLA",
  },
  "william-tanigava": {
    nome:               "William Tanigava",
    instituicao:        "Universidade Estadual Paulista \"Júlio de Mesquita Filho\"",
    instituicao_curta:  "UNESP",
  },
  "willian-luis-de-oliveira": {
    nome:               "Willian Luís de Oliveira",
    instituicao:        "Universidade Estadual de Maringá",
    instituicao_curta:  "UEM",
  },
  "wisley-vitor-de-sousa-goncalves": {
    nome:               "Wisley Vítor de Sousa Gonçalves",
    instituicao:        "Universidade de São Paulo",
    instituicao_curta:  "USP",
  },
  "witoria-de-oliveira-araujo": {
    nome:               "Witória de Oliveira Araujo",
    instituicao:        "Universidade Estadual Paulista \"Júlio de Mesquita Filho\"",
    instituicao_curta:  "UNESP",
  },
  "yago-silva": {
    nome:               "Yago Silva",
    instituicao:        "Universidade Federal do Espírito Santo",
    instituicao_curta:  "UFES",
  },
  "yana-miranda-borges": {
    nome:               "Yana Miranda Borges",
    instituicao:        "Universidade Estadual de Maringá",
    instituicao_curta:  "UEM",
  },
  "yasmin-beatriz-pereira-santana": {
    nome:               "Yasmin Beatriz Pereira Santana",
    instituicao:        "Universidade Federal de Lavras",
    instituicao_curta:  "UFLA",
  },
  "yesica-castellanos": {
    nome:               "Yesica Castellanos",
    instituicao:        "Universidade de São Paulo",
    instituicao_curta:  "USP",
  },
  "yuri-wanderley-cavalcanti": {
    nome:               "Yuri Wanderley Cavalcanti",
    instituicao:        "Universidade Federal da Paraíba",
    instituicao_curta:  "UFPB",
  },
  "yusuf-nadi-karatay": {
    nome:               "Yusuf Nadi Karatay",
    instituicao:        "Empresa Brasileira de Pesquisa Agropecuária",
    instituicao_curta:  "EMBRAPA",
  },
};
