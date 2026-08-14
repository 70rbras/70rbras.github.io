// ─── PERGUNTAS FREQUENTES (FAQ) ──────────────────────────────────────────────
// Cada objeto do array FAQ é uma categoria, exibida como bloco na página faq.html.
//
// Campos por categoria:
//   categoria      → identificador interno (usado em id/âncora da seção), ex: "inscricoes"
//   categoriaLabel → título exibido
//   icone          → emoji exibido ao lado do título
//   perguntas      → array de perguntas desta categoria
//
// Campos por pergunta:
//   id        → identificador único, usado na âncora faq.html#faq-<id>
//               (permita copiar/colar o link direto de uma resposta em um e-mail)
//   pergunta  → texto da pergunta
//   resposta  → texto da resposta (aceita HTML inline simples, ex: <a>, <strong>)
//               NÃO usar tags de bloco (<p>, <div>, <ul>...) — faq.html envolve
//               o texto em um único <p>; tag de bloco aninhada quebra o layout
//               e o espaçamento entre linhas.
//
// Para adicionar uma pergunta nova: inserir um objeto no array `perguntas` da
// categoria correspondente (ou criar uma nova categoria, se necessário).

const FAQ = [
  {
    categoria: "inscricoes",
    categoriaLabel: "Inscrições e Pagamento",
    icone: "💳",
    perguntas: [
      {
        id: "pagamento-internacional",
        pergunta: "Como participantes internacionais podem proceder com inscrição e pagamento da mesma?",
        resposta: "O formulário de inscrição deve ser preenchido com os dados do participante. Na área de pagamento, o mecanismo mais simples é o pagamento com cartão de crédito, utilizando o número de passaporte como documento de identificação. Recomenda-se que o banco emissor do cartão esteja previamente avisado da ocorrência de compra internacional para que evitem-se transtornos no momento do pagamento."
      },
      {
        id: "nota-fiscal",
        pergunta: "Realizei o pagamento da inscrição e necessito de uma Nota Fiscal. Como proceder?",
        resposta: "Envie um e-mail para <a href=\"mailto:70rbras@unicamp.br\">70rbras@unicamp.br</a> contendo os dados necessários para a NF e o comprovante de pagamento. Essas informações serão encaminhadas para a RBras para emissão."
      },
      {
        id: "verificacao-associado",
        pergunta: "Realizei minha inscrição como Membro Associado à RBras/ABE/IBS e o sistema de inscrição indica que há verificações documentais pendentes. O que fazer?",
        resposta: "As verificações acontecerão em breve e o status será atualizado."
      }
    ]
  },
  {
    categoria: "submissoes",
    categoriaLabel: "Submissão de Trabalhos",
    icone: "📝",
    perguntas: [
      {
        id: "poster-pdf-obrigatorio",
        pergunta: "Estou realizando a submissão de um trabalho na modalidade pôster. O sistema de submissão obriga o envio de um arquivo PDF, mas as instruções indicam que o preenchimento do formulário da plataforma é suficiente. Como proceder?",
        resposta: "Para contornar a limitação do sistema de submissões sem complicação extra, envie apenas um PDF contendo o título do trabalho e autores. Este arquivo não será considerado pela Comissão de Avaliação, mas permitirá a conclusão imediata da sua submissão."
      }
    ]
  },
  {
    categoria: "wasa",
    categoriaLabel: "WASA (Evento Satélite)",
    icone: "🛰️",
    perguntas: [
      {
        id: "wasa-inscricao",
        pergunta: "Como faço a inscrição no WASA?",
        resposta: "Acesse a guia \"WASA -&gt; Inscrições\", proceda com o pagamento e preencha o formulário."
      },
      {
        id: "wasa-inscricao-rbras-nao-garante",
        pergunta: "Estou inscrito na 70ª Reunião da RBras. Isso garante a minha inscrição no WASA?",
        resposta: "Não. Se você tem interesse em participar de ambos os eventos, você precisará fazer a inscrição individual em cada um deles."
      }
    ]
  }
];
