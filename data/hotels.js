// ─── HOTÉIS PARCEIROS ─────────────────────────────────────────────────────
// Para adicionar um novo hotel, copie o bloco abaixo e cole como novo item
// do array HOTELS. Nada mais precisa ser editado - a página local.html
// renderiza a lista e as tabelas de tarifas automaticamente.
//
// Campos:
//   nome       → nome do hotel
//   endereco   → endereço completo (texto exibido)
//   mapaUrl    → link do Google Maps (endereco fica clicável)
//   telefone   → telefone/WhatsApp para reservas (texto livre, ex.: "(19) 3749-8500")
//   observacao → aviso mostrado em destaque (ex.: código/menção ao evento)
//   beneficios → lista curta de itens inclusos (café da manhã, estacionamento etc.)
//   tarifas    → lista de tipos de quarto:
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
    telefone:   "(19) 3749-8500",
    observacao: "No momento da reserva, informe que é participante da 70ª Reunião Anual da RBras.",
    beneficios: ["Café da manhã incluso", "Estacionamento gratuito"],
    tarifas: [
      { tipo: "Standard", cama: "Casal",    precos: { 1: 360.15, 2: 428.40 } },
      { tipo: "Standard", cama: "Solteiro", precos: { 1: 297.15, 2: 365.40, 3: 433.65 } },
      { tipo: "Superior", cama: "Casal",    precos: { 1: 423.15, 2: 491.40 } },
      { tipo: "Superior", cama: "Solteiro", precos: { 1: 360.15, 2: 428.40, 3: 496.65 } }
    ]
  }
];
