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
//   whatsapp   → (opcional) número do WhatsApp (ex.: "(19) 99999-9999"); vira link wa.me.
//                Para mais de um número, use uma lista: ["(19) 1111-1111", "(19) 2222-2222"]
//   telefone   → (opcional) telefone fixo
//   email      → (opcional) e-mail
//   site       → (opcional) URL do site
//   instagram  → (opcional) perfil do Instagram, sem "@"
//   prazo      → (opcional) prazo de produção
//   materiais  → (opcional) informação sobre os materiais oferecidos
//   envio      → (opcional) como enviar os arquivos (texto exibido em destaque)
//   observacao → (opcional) aviso adicional (ex.: mencionar o evento)
//   precos     → (opcional) lista { item, valor, detalhe } exibida em tabela;
//                "detalhe" (opcional) aparece em letra menor abaixo do item
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
    tipo:       "Parceira",
    endereco:   "Rua Maria Tereza Dias da Silva, 350 - Cidade Universitária, Campinas - SP, 13083-820",
    whatsapp:   ["(19) 3342-4921", "(19) 3289-4765"],
    email:      "contato@cromarte.com.br",
    site:       "https://cromarte.com.br/",
    envio:      "Combine os detalhes do envio do arquivo diretamente com a gráfica pelo WhatsApp.",
    prazo:      "1 a 2 dias úteis após a aprovação do arquivo e o pagamento antecipado.",
    materiais:  "A gráfica não trabalha com lona. Em seu lugar, oferece papéis promocionais com valores mais vantajosos: são mais leves, recicláveis e indicados para uso exclusivo durante o congresso.",
    observacao: "Informe que é participante da 70ª Reunião Anual da RBras.",
    precos: [
      { item: "Pôster 0,90 × 1,20 m · Papel sulfite 120g", valor: 55.90, detalhe: "Com canaletas e cordão" },
      { item: "Pôster 0,90 × 1,20 m · Papel glossy photo 180g (fotográfico brilhante)", valor: 77.90, detalhe: "Com canaletas e cordão" },
      { item: "Pôster 0,90 × 1,20 m · Papel sulfite 90g", valor: 35.90, detalhe: "Opção mais econômica; sem canaletas para pendurar" },
      { item: "Pôster 0,90 × 1,20 m · Tecido canvas de poliéster 250g (durabilidade padrão)", valor: 179.90, detalhe: "Canaletas e cordão opcionais: + R$ 15,00" },
      { item: "Pôster 0,90 × 1,20 m · Tecido canvas de poliéster 250g (durabilidade prolongada)", valor: 239.90, detalhe: "Canaletas e cordão opcionais: + R$ 15,00" }
    ]
  }
];
