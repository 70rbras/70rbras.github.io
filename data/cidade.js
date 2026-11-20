// ─── APROVEITE CAMPINAS ──────────────────────────────────────────────────────
// Lugares para o participante aproveitar fora da programação: bares, cafés,
// shoppings além de parques. A página logistica.html#aproveite-campinas exibe a
// lista na ordem deste arquivo, grupo a grupo.
//
// Campos de cada lugar:
//   nome, texto, endereco → texto exibido (Campinas, SP implícito)
//   lat, lon              → (opcional) posição exata do estabelecimento no
//                           OpenStreetMap; sem ela o cartão não oferece Uber
//   link, link_texto      → (opcional) endereço https com o rótulo do botão
//   restaurante           → em vez dos campos acima, o nome de um lugar já
//                           cadastrado em data/restaurantes.js: nome, endereço
//                           além do texto vêm de lá, para não haver duas fontes
//
// Campos de cada grupo:
//   titulo, icone         → cabeçalho do grupo
//   uber                  → true quando o grupo pede carro ou Uber
//   itens ou subgrupos    → lista de lugares, ou subgrupos com titulo e itens
//
// Origem das informações, conferidas uma a uma na preparação da 70ª RBras:
//   guia "Welcome to Barão Geraldo", do NICS/UNICAMP, feito para o SBCM 2025;
//   guias do QuintoAndar sobre bares além de shoppings de Campinas;
//   sites oficiais da Cervejaria Campinas, da The Bikery, do Buteco do Fortão;
//   BaresSP, Morando em Barão, Songkick, cardápio.menu, Cervejeira Uai além de
//   FPX Comunica; endereços e posições pelo OpenStreetMap (Photon e API do OSM);
//   a Gelateria Pallure além do Butiquim do Fortão confirmados pela comissão.
// Dados informativos: horários e funcionamento devem ser confirmados com cada
// estabelecimento.

const CIDADE = {
  aviso:     "Horários e funcionamento devem ser confirmados com cada estabelecimento.",
  remissao:  "Outros bares e cafés perto do campus estão em",
  grupos: [
    {
      titulo: "Barão Geraldo, perto dos hotéis",
      icone:  "🚶",
      subgrupos: [
        {
          titulo: "Bares e cervejarias",
          itens: [
            { restaurante: "Empório do Nono" },
            { nome: "Confra Empório Bar",
              texto: "Cervejas artesanais e pizzas individuais, em ambiente informal.",
              endereco: "R. José Martins, 503" },
            { nome: "Cervejaria Tábuas",
              texto: "Cervejaria.",
              endereco: "Av. Santa Isabel, 57" },
            { nome: "Blacaman",
              texto: "Cervejaria com música ao vivo.",
              endereco: "Av. Santa Isabel, 493" },
            { nome: "Cervejaria Campinas Tap House",
              texto: "Chope da Cervejaria Campinas.",
              endereco: "Av. Modesto Fernandes, 191" },
            { nome: "Praça do Coco",
              texto: "Quiosque com petiscos, sucos e açaí. Aos sábados e domingos, das 10h às 15h, recebe feira de artesanato e gastronomia.",
              endereco: "R. José Martins, 738" }
          ]
        },
        {
          titulo: "Para comer",
          itens: [
            { nome: "Espósito Pizzaria",
              texto: "Pizzaria.",
              endereco: "Av. Albino J. B. de Oliveira, 1110" },
            { nome: "Bronco Burger",
              texto: "Hamburgueria.",
              endereco: "R. Agostinho Pattaro, 199" }
          ]
        },
        {
          titulo: "Cafés, padarias e sorvetes",
          itens: [
            { restaurante: "1727 Coffee Roasters" },
            { nome: "The Bikery",
              texto: "Padaria artesanal de longa fermentação.",
              endereco: "Av. Albino J. B. de Oliveira, 1801" },
            { nome: "The Best Açaí",
              texto: "Açaí com doze variedades, sorvetes e frutas.",
              endereco: "Av. Albino J. B. de Oliveira, 1214" },
            { nome: "Gelateria Pallure",
              texto: "Sorvetes artesanais.",
              endereco: "R. Maria Fernanda Antunes, 94" }
          ]
        }
      ]
    },
    {
      titulo: "Bares em outros bairros, de carro ou Uber",
      icone:  "🚗",
      uber:   true,
      itens: [
        { nome: "Catedral do Chopp",
          texto: "Chopperia com cervejaria própria.",
          endereco: "R. Cel. Francisco de Andrade Coutinho, 299",
          lat: -22.9054363, lon: -47.0472577 },
        { nome: "Giovannetti",
          texto: "Bar tradicional de chope.",
          endereco: "R. General Osório, 1059, Centro",
          lat: -22.9037832, lon: -47.0596805 },
        { nome: "Dom Brejas",
          texto: "Bar com chope e cervejas.",
          endereco: "Av. Barão de Itapura, 2947",
          lat: -22.8809711, lon: -47.0555428 },
        { nome: "Grainne's Irish Pub",
          texto: "Pub irlandês. Não abre às segundas.",
          endereco: "R. Padre Almeida, 170, Cambuí" },
        { nome: "Landel Cervejaria",
          texto: "Cervejaria com bar próprio.",
          endereco: "R. Dr. Oswaldo Cruz, 607",
          lat: -22.8836262, lon: -47.0616133 },
        { nome: "Zin Bar",
          texto: "Bar.",
          endereco: "R. Dr. Oswaldo Cruz, 586",
          lat: -22.8832395, lon: -47.0614484 },
        { nome: "Daoravida Brewpub",
          texto: "Brewpub com cervejas de produção própria.",
          endereco: "Av. Paulo de Almeida Nogueira, 166" },
        { nome: "Buteco do Fortão, Nova Campinas",
          texto: "Boteco.",
          endereco: "R. Maria Conceição F. de Andrade, 461, Nova Campinas" },
        { nome: "Buteco do Fortão, São Quirino",
          texto: "Boteco.",
          endereco: "Av. Diogo Álvares, 2098, Parque São Quirino" },
        { nome: "Butiquim do Fortão",
          texto: "Boteco.",
          endereco: "R. Cônego Nery, 407, Jardim Guanabara" }
      ]
    },
    {
      titulo: "Shoppings",
      icone:  "🛍️",
      uber:   true,
      itens: [
        { nome: "Parque D. Pedro Shopping",
          texto: "O mais próximo do campus. Lojas, cinema e praça de alimentação.",
          endereco: "Av. Guilherme Campos, 500",
          lat: -22.8479489, lon: -47.0636856 },
        { nome: "Galleria Shopping",
          texto: "Shopping com jardim interno e vão central a céu aberto.",
          endereco: "Rod. D. Pedro I, km 131,5",
          lat: -22.8636718, lon: -47.0231215 },
        { nome: "Shopping Iguatemi Campinas",
          texto: "Lojas, restaurantes e cinema.",
          endereco: "Av. Iguatemi, 777",
          lat: -22.8924024, lon: -47.0272094 }
      ]
    },
    {
      titulo: "Parques e natureza",
      icone:  "🌳",
      itens: [
        { nome: "Lagoa do Taquaral (Parque Portugal)",
          texto: "Lagoa com pista de caminhada, pedalinhos e planetário.",
          endereco: "Av. Dr. Heitor Penteado, 1671" },
        { nome: "Lagoa Ecológica",
          texto: "Lagoa com pista de 1.700 m, perto do campus.",
          endereco: "Av. Dr. Luís de Tella, Cidade Universitária" },
        { nome: "Mata de Santa Genebra",
          texto: "Área de preservação com trilhas. A visita exige agendamento prévio no site da Fundação José Pedro de Oliveira.",
          link: "https://www.fjposantagenebra.sp.gov.br/visita-autoguiada",
          link_texto: "Site da Fundação" }
      ]
    }
  ]
};
