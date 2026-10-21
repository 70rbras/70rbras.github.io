// ─── GRÁFICAS PARCEIRAS ───────────────────────────────────────────────────
// Gráficas para impressão de pôsteres/banners. A página logistica.html renderiza
// a lista automaticamente na seção #graficas; se o array estiver vazio, a
// seção inteira fica oculta.
//
// Campos:
//   nome       → nome da gráfica
//   tipo       → (opcional) selo exibido ao lado do nome (ex.: "Parceira")
//   endereco   → endereço completo (texto exibido)
//   mapaUrl    → (opcional) link do Google Maps; se omitido, é gerado a partir de "endereco"
//   distancia  → (opcional) distância/tempo até o IMECC (ex.: "2 km · ~5 min de carro")
//   rotaModo   → (opcional) "walking" para rota a pé; padrão é de carro
//   whatsapp   → (opcional) número do WhatsApp (ex.: "(19) 99999-9999"); vira link wa.me
//   telefone   → (opcional) telefone fixo
//   email      → (opcional) e-mail
//   site       → (opcional) URL do site
//   instagram  → (opcional) perfil do Instagram, sem "@"
//   envio      → (opcional) como enviar os arquivos (texto exibido em destaque)
//   observacao → (opcional) aviso adicional (ex.: mencionar o evento)
//   precos     → (opcional) lista { item, valor } exibida em tabela
//
// Exemplo de nova gráfica:
//   {
//     nome:     "Nome da Gráfica",
//     endereco: "Rua Exemplo, 123 - Bairro, Campinas - SP, 00000-000",
//     whatsapp: "(19) 99999-9999",
//     precos: [
//       { item: "Banner 0,90 × 1,20 m", valor: 90.00 }
//     ]
//   }

const GRAFICAS = [
  {
    nome:       "Connect Print",
    tipo:       "Parceira",
    endereco:   "Rua Roxo Moreira, 1042 - Barão Geraldo - Cidade Universitária, Campinas - SP, 13083-591",
    whatsapp:   "(19) 98181-1882",
    telefone:   "(19) 3032-8279",
    email:      "atendimento@connectprint.com.br",
    site:       "https://connectprint.com.br/",
    envio:      "Envie o arquivo do seu pôster preferencialmente pelo WhatsApp; também é possível enviar por e-mail.",
    observacao: "Informe que é participante da 70ª Reunião Anual da RBras.",
    precos: [
      { item: "Banner 0,80 × 1,20 m", valor: 85.00 },
      { item: "Banner 0,90 × 1,20 m", valor: 87.50 }
    ]
  },
  {
    nome:       "Cromarte Gráfica Digital",
    endereco:   "Rua Maria Tereza Dias da Silva, 350 - Cidade Universitária, Campinas - SP, 13083-820",
    whatsapp:   "(19) 3342-4921",
    observacao: "Entre em contato para consultar valores e prazos, informando que é participante da 70ª Reunião Anual da RBras."
  }
];
