// ─── WI-FI NO EVENTO ─────────────────────────────────────────────────────────
// Redes sem fio à disposição dos participantes, exibidas em logistica.html#wifi.
// A FAQ além da faixa de aviso apenas remetem a essa seção, portanto o nome das
// redes além das instruções vivem só aqui.
//
// Campos da seção:
//   intro → parágrafo abaixo do título
//   redes → um cartão por rede, na ordem do array
//
// Campos por rede:
//   id     → âncora do cartão (logistica.html#wifi-<id>)
//   nome   → nome da rede, exibido como título do cartão
//   icone  → emoji do cartão
//   texto  → parágrafo de apresentação (aceita HTML inline simples)
//   passos → (opcional) lista numerada de instruções (aceita HTML inline simples)
//   nota   → (opcional) linha final, em letra menor (aceita HTML inline simples)
//
// As instruções da Unicamp-Visitante seguem o documento da DETIC/Unicamp
// "Como acessar a rede Unicamp-Visitante", recebido pela organização.

const WIFI = {
  intro: "Há três redes sem fio à disposição dos participantes. Quem já usa o eduroam na própria instituição não precisa configurar nada.",
  redes: [
    {
      id:    "eduroam",
      nome:  "eduroam",
      icone: "🎓",
      texto: "A Unicamp faz parte da rede federada eduroam. Quem já configurou esta rede na instituição de origem tem acesso automático, sem novo cadastro."
    },
    {
      id:    "unicamp-visitante",
      nome:  "Unicamp-Visitante",
      icone: "📱",
      texto: "Acesso gratuito à internet para visitantes, com cadastro por e-mail.",
      passos: [
        "Conecte-se à rede Unicamp-Visitante.",
        "Toque no aviso que aparece para abrir o portal de autenticação. Em alguns aparelhos o portal abre sozinho.",
        "Se o portal não abrir, acesse <a href=\"http://visitante.unicamp.br\" target=\"_blank\" rel=\"noopener noreferrer\">http://visitante.unicamp.br</a> no navegador. Digite \"http\", não \"https\". Se houver dificuldade, use uma janela anônima.",
        "No portal, clique em \"Cadastrar-se\" e informe seu e-mail para receber um código de acesso.",
        "Informe o e-mail e o código para se autenticar.",
        "Na primeira autenticação, preencha os dados de cadastro. Depois informe de novo o e-mail e o código na tela inicial.",
        "Pronto: a internet está liberada."
      ],
      nota: "Instruções da DETIC/Unicamp. Dúvidas: <a href=\"mailto:cacdetic@unicamp.br\">cacdetic@unicamp.br</a> · <a href=\"tel:+551935212221\">(19) 3521-2221</a> / <a href=\"tel:+551935212222\">3521-2222</a> · <a href=\"https://www.detic.unicamp.br\" target=\"_blank\" rel=\"noopener noreferrer\">www.detic.unicamp.br</a>"
    },
    {
      id:    "imecc-eventos",
      nome:  "IMECC-EVENTOS",
      icone: "🏛️",
      texto: "Rede disponível no prédio do IMECC durante o evento. O QR code com as instruções de acesso está afixado no prédio."
    }
  ]
};
