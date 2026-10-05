// ─── HOTÉIS PARCEIROS ─────────────────────────────────────────────────────
// Para adicionar um novo hotel, copie o bloco abaixo e cole como novo item
// do array HOTELS. Nada mais precisa ser editado - a página local.html
// renderiza a lista e as tabelas de tarifas automaticamente.
//
// Campos:
//   nome       → nome do hotel
//   tipo       → (opcional) selo exibido ao lado do nome (ex.: "Airbnb")
//   endereco   → endereço completo (texto exibido)
//   mapaUrl    → link do Google Maps (endereco fica clicável)
//   distancia  → (opcional) distância/tempo até o IMECC (ex.: "3 km · ~8 min de carro")
//   rotaUrl    → (opcional) link de rota até o IMECC; se omitido, é gerado
//                automaticamente a partir de "endereco"
//   rotaModo   → (opcional) "walking" para rota a pé; padrão é de carro
//   telefone   → (opcional) telefone/WhatsApp para reservas (texto livre, ex.: "(19) 3749-8500")
//   email      → (opcional) e-mail para reservas
//   site       → (opcional) URL do site do hotel
//   instagram  → (opcional) perfil do Instagram, sem "@" (ex.: "acasapiramide")
//   reservaUrl → (opcional) link de reserva online (ex.: Airbnb); exibido como botão
//   observacao → aviso mostrado em destaque (ex.: código/menção ao evento)
//   beneficios → lista curta de itens inclusos (café da manhã, estacionamento etc.)
//   tarifas    → (opcional) lista de tipos de quarto; se omitida, a tabela não aparece:
//                  tipo   → nome do tipo de quarto (ex.: "Standard", "Superior")
//                  cama   → descrição da cama (ex.: "Casal", "Solteiro")
//                  precos → valores por número de hóspedes: { 1: valor, 2: valor, 3: valor }
//                           (omita a chave para capacidades não oferecidas)
//
// Exemplo de novo hotel:
//   {
//     nome:       "Nome do Hotel",
//     endereco:   "Rua Exemplo, 123 - Bairro, Campinas - SP, 00000-000",
//     mapaUrl:    "https://maps.app.goo.gl/xxxxxxx",
//     telefone:   "(19) 0000-0000",
//     observacao: "Informe que é participante da 70ª Reunião Anual da RBras.",
//     beneficios: ["Café da manhã incluso", "Estacionamento gratuito"],
//     tarifas: [
//       { tipo: "Standard", cama: "Casal", precos: { 1: 300.00, 2: 350.00 } }
//     ]
//   }

const HOTELS = [
  {
    nome:       "Hotel Matiz Barão Geraldo Express",
    endereco:   "Av. Albino J. B. de Oliveira, 1700 - Barão Geraldo, Campinas - SP, 13084-551",
    mapaUrl:    "https://maps.app.goo.gl/F7ADyTz2fYD89EGo9",
    distancia:  "3 km · ~8 min de carro",
    telefone:   "(19) 3749-8500",
    observacao: "No momento da reserva, informe que é participante da 70ª Reunião Anual da RBras.",
    beneficios: ["Café da manhã incluso", "Estacionamento gratuito"],
    tarifas: [
      { tipo: "Standard", cama: "Casal",    precos: { 1: 360.15, 2: 428.40 } },
      { tipo: "Standard", cama: "Solteiro", precos: { 1: 297.15, 2: 365.40, 3: 433.65 } },
      { tipo: "Superior", cama: "Casal",    precos: { 1: 423.15, 2: 491.40 } },
      { tipo: "Superior", cama: "Solteiro", precos: { 1: 360.15, 2: 428.40, 3: 496.65 } }
    ]
  },
  {
    nome:       "Unibarão Hotel",
    endereco:   "R. Antônio Galvão de O. Barros, 101 - Barão Geraldo, Campinas - SP, 13084-275",
    mapaUrl:    "https://maps.app.goo.gl/QHpZa96QHarVHXdt5",
    distancia:  "2,5 km · ~6 min de carro",
    telefone:   "(19) 3308-6656 / (19) 3289-6768 · WhatsApp (19) 98706-6656",
    site:       "https://www.unibaraohotel.com.br",
    observacao: "No momento da reserva, informe que é participante da 70ª Reunião Anual da RBras. Check-in a partir das 13h · check-out até as 12h.",
    beneficios: ["Café da manhã opcional (R$ 20/pessoa)", "Estacionamento fechado", "Ar-condicionado", "Wi-Fi", "Recepção 24h"],
    tarifas: [
      { tipo: "Individual", cama: "Solteiro", precos: { 1: 230.00 } },
      { tipo: "Duplo",      cama: "Solteiro", precos: { 2: 320.00 } },
      { tipo: "Duplo",      cama: "Casal",    precos: { 2: 320.00 } },
      { tipo: "Triplo",     cama: "Solteiro", precos: { 3: 390.00 } },
      { tipo: "Quádruplo",  cama: "Solteiro", precos: { 4: 430.00 } }
    ]
  },
  {
    nome:       "Casa do Professor Visitante",
    endereco:   "Av. Érico Veríssimo, 1251 - Cidade Universitária, Campinas - SP, 13083-851",
    mapaUrl:    "https://maps.app.goo.gl/xLekGEC6jJCFEGsV7",
    distancia:  "700 m · ~10 min a pé",
    telefone:   "(19) 98150-9819",
    email:      "cpv@funcamp.unicamp.br",
    site:       "https://www.funcamp.unicamp.br/CPV",
    observacao: "No momento da reserva, informe que é participante da 70ª Reunião Anual da RBras. Check-in a partir das 14h · check-out até as 12h.",
    beneficios: ["Café da manhã incluso", "Estacionamento", "Wi-Fi gratuito", "Piscina externa"],
    tarifas: [
      { tipo: "Single Master", cama: "Solteiro",           precos: { 1: 320.00 } },
      { tipo: "Twin Master",   cama: "Solteiro (2 camas)", precos: { 1: 320.00, 2: 340.00 } },
      { tipo: "Casal Master",  cama: "Casal",              precos: { 1: 320.00, 2: 340.00 } },
      { tipo: "Twin Standard", cama: "Solteiro (2 camas)", precos: { 1: 265.00, 2: 320.00 } }
    ]
  },
  {
    nome:       "Casa Pirâmide de Vidro",
    tipo:       "Airbnb",
    endereco:   "R. Aristídes Lôbo, 1200 - Cidade Universitária, Campinas - SP, 13083-060",
    mapaUrl:    "https://maps.app.goo.gl/APEgRr1viA5Dmym46",
    distancia:  "850 m · ~11 min a pé",
    rotaModo:   "walking",
    instagram:  "acasapiramide",
    reservaUrl: "https://www.airbnb.com/pr/casa-da-piramide",
    observacao: "No momento da reserva, informe que é participante da 70ª Reunião Anual da RBras. Reservas e consulta de valores diretamente pelo Airbnb."
  }
];
