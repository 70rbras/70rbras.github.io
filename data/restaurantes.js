// ─── RESTAURANTES ────────────────────────────────────────────────────────────
// Restaurantes perto do evento. A página logistica.html#restaurantes exibe a
// lista em ordem de distância (o menor valor entre os prédios), em três faixas
// definidas em RESTAURANTES_CONFIG, em minutos de caminhada (ritmo de
// CONFIG.caminhada_m_por_min); acima de `uber_a_partir_min` o cartão
// recomenda carro ou Uber e oferece o link do Uber com o destino preenchido.
//
// Campos:
//   nome, especialidade, endereco → texto exibido (Campinas, SP implícito)
//   campus      → true quando fica dentro da Unicamp
//   lat, lon    → posição do estabelecimento (OpenStreetMap)
//   distancia   → caminhada pelas ruas até cada prédio, em metros, com a
//                 sigla de CONFIG.predios (CDC, IMECC)
//   aproximado  → (opcional) true quando a posição é aproximada (centro da rua
//                 ou vizinho no mesmo quarteirão)
//
// Como as distâncias foram obtidas (18/11/2026): posição por OpenStreetMap
// (Nominatim e Photon), conferida um a um; caminhada calculada pelo OSRM, perfil
// a pé (routing.openstreetmap.de). Ao incluir um restaurante, repita o cálculo
// ou meça a rota a pé no Google Maps até o CDC e o IMECC.
//
// Lista de partida: sugestões de restaurantes do WVC 2026 e do Congresso do
// IMECC (ime.unicamp.br/~wvc/restaurants.html). Dados informativos: horários e
// funcionamento devem ser confirmados com cada estabelecimento.

const RESTAURANTES_CONFIG = {
  a_pe_ate_min:      10,   // até aqui: "A pé, até 10 minutos"
  uber_a_partir_min: 20    // acima daqui: recomenda carro ou Uber
};

const RESTAURANTES = [
  {
    nome:         "1727 Coffee Roasters",
    especialidade:"Cafeteria com diferentes cafés e wi-fi",
    endereco:     "R. José Martins, 603",
    campus:       false,
    lat: -22.821331, lon: -47.083269,
    distancia:    { CDC: 2360, IMECC: 2420 },
    aproximado:   true
  },
  {
    nome:         "Al Kassab",
    especialidade:"Comida árabe",
    endereco:     "Av. Dr. Romeu Tórtima, 485",
    campus:       false,
    lat: -22.830924, lon: -47.075991,
    distancia:    { CDC: 2220, IMECC: 2050 }
  },
  {
    nome:         "Aulus Bar & Restaurant",
    especialidade:"Self-service por quilo",
    endereco:     "Av. Professor Atílio Martini, 939",
    campus:       false,
    lat: -22.81862, lon: -47.07347,
    distancia:    { CDC: 720, IMECC: 790 }
  },
  {
    nome:         "Bagdá Cozinha Árabe",
    especialidade:"Comida sírio-libanesa",
    endereco:     "R. Maria Ferreira Antunes, 116",
    campus:       false,
    lat: -22.821225, lon: -47.082102,
    distancia:    { CDC: 2310, IMECC: 2370 }
  },
  {
    nome:         "Bar Santa Genebra",
    especialidade:"Boteco gastronômico, carnes na chapa e pratos tradicionais",
    endereco:     "Rua Angelo Vicentim, 736",
    campus:       false,
    lat: -22.831017, lon: -47.081977,
    distancia:    { CDC: 2670, IMECC: 2670 }
  },
  {
    nome:         "Bardana Restaurante",
    especialidade:"Self-service por quilo",
    endereco:     "Av. Dr. Romeu Tórtima, 1500",
    campus:       false,
    lat: -22.823685, lon: -47.07063,
    distancia:    { CDC: 1260, IMECC: 1090 }
  },
  {
    nome:         "Battataria Suíça",
    especialidade:"Batata suíça recheada; cardápio à la carte e jazz em alguns fins de semana",
    endereco:     "Praça José Geraldi, 18",
    campus:       false,
    lat: -22.817607, lon: -47.081458,
    distancia:    { CDC: 1760, IMECC: 2060 }
  },
  {
    nome:         "Candreva",
    especialidade:"Buffet por quilo no almoço e comida de boteco à noite",
    endereco:     "Av. Albino J. B. de Oliveira, 1240",
    campus:       false,
    lat: -22.827259, lon: -47.079119,
    distancia:    { CDC: 2000, IMECC: 2060 }
  },
  {
    nome:         "Cantina da FEF (Rebu)",
    especialidade:"Comida caseira, pratos executivos e sobremesas",
    endereco:     "Av. Érico Veríssimo, 701",
    campus:       true,
    lat: -22.814561, lon: -47.072661,
    distancia:    { CDC: 300, IMECC: 700 }
  },
  {
    nome:         "Cantina do IEL",
    especialidade:"Lanches, sucos e cafés",
    endereco:     "R. Carlos Gomes, 281",
    campus:       true,
    lat: -22.814425, lon: -47.069245,
    distancia:    { CDC: 390, IMECC: 300 }
  },
  {
    nome:         "Confeitaria Romana",
    especialidade:"Café da manhã, almoço, lanches da tarde e sopas",
    endereco:     "Rua Maria Tereza Dias da Silva, 790",
    campus:       false,
    lat: -22.808204, lon: -47.077967,
    distancia:    { CDC: 1320, IMECC: 1720 }
  },
  {
    nome:         "Empório do Nono",
    especialidade:"Petiscos e bebidas à noite; pratos feitos no almoço",
    endereco:     "Av. Albino J. B. de Oliveira, 1128",
    campus:       false,
    lat: -22.828449, lon: -47.078899,
    distancia:    { CDC: 2190, IMECC: 2160 }
  },
  {
    nome:         "Eskina Bar",
    especialidade:"Carnes e pratos em ambiente familiar",
    endereco:     "R. Horácio Leonardi, 12",
    campus:       false,
    lat: -22.827983, lon: -47.079872,
    distancia:    { CDC: 2140, IMECC: 2200 }
  },
  {
    nome:         "Estação Barão",
    especialidade:"Bar descontraído; destaque para a coxinha",
    endereco:     "R. Horácio Leonardi, 76",
    campus:       false,
    lat: -22.828494, lon: -47.079637,
    distancia:    { CDC: 2190, IMECC: 2260 }
  },
  {
    nome:         "Estância Grill",
    especialidade:"Churrasco, cortes variados, saladas, pratos quentes e massas",
    endereco:     "Av. Albino J. B. de Oliveira, 271",
    campus:       false,
    lat: -22.836355, lon: -47.080275,
    distancia:    { CDC: 3210, IMECC: 3180 }
  },
  {
    nome:         "Frutaria Rio das Pedras",
    especialidade:"Hortifruti, açougue, padaria, restaurante e cafeteria",
    endereco:     "Rua Dr. Alberto Gallo, 226",
    campus:       false,
    lat: -22.804204, lon: -47.076746,
    distancia:    { CDC: 1920, IMECC: 2160 }
  },
  {
    nome:         "GUA.CO",
    especialidade:"Tex-mex, burritos, tacos e opções veganas e vegetarianas",
    endereco:     "Av. Albino J. B. de Oliveira, 1615",
    campus:       false,
    lat: -22.824047, lon: -47.080376,
    distancia:    { CDC: 1800, IMECC: 1870 }
  },
  {
    nome:         "Mana Poke",
    especialidade:"Pokes com diferentes bases, acompanhamentos e molhos",
    endereco:     "Av. Santa Isabel, 571",
    campus:       false,
    lat: -22.824124, lon: -47.083529,
    distancia:    { CDC: 2250, IMECC: 2320 }
  },
  {
    nome:         "Muqueca Barão",
    especialidade:"Frutos do mar e pescados",
    endereco:     "R. Vitórino Antunes, 160",
    campus:       false,
    lat: -22.821075, lon: -47.081545,
    distancia:    { CDC: 2200, IMECC: 2250 },
    aproximado:   true
  },
  {
    nome:         "Namaste Salad",
    especialidade:"Buffet com panquecas, risotos, grelhados, sucos e sobremesas",
    endereco:     "R. José Martins, 751",
    campus:       false,
    lat: -22.821331, lon: -47.083269,
    distancia:    { CDC: 2360, IMECC: 2420 }
  },
  {
    nome:         "Padaria Alemã",
    especialidade:"Bolos, baguetes, croissants, café e lanches",
    endereco:     "Av. Dr. Romeu Tórtima, 285",
    campus:       false,
    lat: -22.832529, lon: -47.077288,
    distancia:    { CDC: 2700, IMECC: 2520 }
  },
  {
    nome:         "Palatus",
    especialidade:"Self-service",
    endereco:     "Rua Maria Tereza Dias da Silva, 304",
    campus:       false,
    lat: -22.81237, lon: -47.079515,
    distancia:    { CDC: 1640, IMECC: 2030 }
  },
  {
    nome:         "Panetteria Di Capri",
    especialidade:"Café da manhã, almoço, happy hour, pizzas e caldos",
    endereco:     "Rua Maria Tereza Dias da Silva, 514",
    campus:       false,
    lat: -22.810461, lon: -47.078896,
    distancia:    { CDC: 1420, IMECC: 1820 }
  },
  {
    nome:         "Raízes Zen",
    especialidade:"Vegetariano, com ingredientes orgânicos",
    endereco:     "R. Antônio Pierozzi, 94",
    campus:       false,
    lat: -22.825882, lon: -47.082747,
    distancia:    { CDC: 2270, IMECC: 2330 }
  },
  {
    nome:         "Restaurante Adunicamp",
    especialidade:"Self-service",
    endereco:     "Av. Érico Veríssimo, 1479",
    campus:       true,
    lat: -22.813176, lon: -47.065345,
    distancia:    { CDC: 770, IMECC: 330 }
  },
  {
    nome:         "Restaurante CPV",
    especialidade:"Buffet, feijoada e café da manhã",
    endereco:     "R. Cora Coralina, 350",
    campus:       true,
    lat: -22.812243, lon: -47.06596,
    distancia:    { CDC: 730, IMECC: 620 }
  },
  {
    nome:         "Restaurante Del Sol",
    especialidade:"Self-service com saladas, massas e carnes",
    endereco:     "R. Roxo Moreira, 1648",
    campus:       false,
    lat: -22.824122, lon: -47.068276,
    distancia:    { CDC: 1360, IMECC: 1180 }
  },
  {
    nome:         "ReÚne",
    especialidade:"Comida natural, com alimentos minimamente processados",
    endereco:     "R. Manoel Antunes Novo, 481",
    campus:       false,
    lat: -22.824057, lon: -47.081721,
    distancia:    { CDC: 1980, IMECC: 2050 }
  },
  {
    nome:         "Salsa con Aji",
    especialidade:"Culinária peruana",
    endereco:     "Rua Manoel Antunes Novo, 350",
    campus:       false,
    lat: -22.824743, lon: -47.080656,
    distancia:    { CDC: 1820, IMECC: 1890 }
  },
  {
    nome:         "Sorvete em Camadas",
    especialidade:"Sorvetes artesanais e gelatos veganos",
    endereco:     "R. Jerônimo Pattaro, 288",
    campus:       false,
    lat: -22.825389, lon: -47.081486,
    distancia:    { CDC: 2130, IMECC: 2190 }
  },
  {
    nome:         "Tannur Lebanese Bakery",
    especialidade:"Lanches árabes, kebabs, shawarmas, quibes e esfihas",
    endereco:     "R. Horácio Leonardi, 40",
    campus:       false,
    lat: -22.828195, lon: -47.079831,
    distancia:    { CDC: 2150, IMECC: 2210 }
  }
];
