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
        id: "modelo-poster",
        pergunta: "Meu pôster foi aceito. Existe um modelo oficial? Qual o tamanho?",
        resposta: "Sim. Há modelos oficiais em PowerPoint e em LaTeX, que produzem o mesmo resultado. O arquivo final deve ser um PDF em tamanho <strong>A0 retrato (841 × 1189 mm)</strong>. Baixe o <a href=\"assets/documentos/modelos-poster-70rbras.zip\" download>pacote com os modelos (.zip)</a> ou consulte o <a href=\"assets/documentos/manual-poster-70rbras.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">manual de uso (PDF)</a>."
      },
      {
        id: "modelo-oral",
        pergunta: "Vou fazer uma apresentação oral. Existe um modelo oficial de slides? Qual o formato?",
        resposta: "Sim. Há modelos oficiais em PowerPoint e em Beamer (LaTeX), que produzem o mesmo resultado projetado e valem para qualquer apresentação oral do evento: comunicação oral, sessão temática, concursos (tese, dissertação e iniciação científica), conferências e mini-conferências. Os slides estão em formato <strong>16:9</strong>. Baixe o <a href=\"assets/documentos/modelos-apresentacao-oral-70rbras.zip\" download>pacote com os modelos (.zip)</a> ou consulte o <a href=\"assets/documentos/manual-apresentacao-oral-70rbras.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">manual de uso (PDF)</a>. Recomenda-se o uso dos modelos, mas ele <strong>não é obrigatório</strong>: o apresentador poderá empregar material próprio."
      },
      {
        id: "tempo-apresentacao-oral",
        pergunta: "Quanto tempo terei para a minha apresentação oral?",
        resposta: "O tempo depende da modalidade e está na tabela da seção <a href=\"apresentadores.html#oral\">Logística → Para Apresentadores → Apresentação Oral</a>. Em todas as modalidades, a apresentação é seguida de 5 minutos para perguntas."
      },
      {
        id: "entrega-apresentacao-oral",
        pergunta: "Como entrego o arquivo da minha apresentação oral?",
        resposta: "Verifique o e-mail enviado pela organização do evento com o título &ldquo;Envio da sua Apresentação para a 70a RBRas&rdquo;. Ele traz instruções específicas para a sua sessão e indica como fazer o upload do arquivo da apresentação. Se não o encontrar, confira a caixa de spam ou escreva para <a href=\"mailto:70rbras@unicamp.br\">70rbras@unicamp.br</a>."
      },
      {
        id: "onde-imprimir-poster",
        pergunta: "Onde posso imprimir meu pôster?",
        resposta: "A organização indica gráficas próximas ao IMECC. Veja endereços, contatos e valores na página <a href=\"logistica.html#graficas\">Logística → Gráficas</a>."
      },
      {
        id: "poster-pdf-obrigatorio",
        pergunta: "Estou realizando a submissão de um trabalho na modalidade pôster. O sistema de submissão obriga o envio de um arquivo PDF, mas as instruções indicam que o preenchimento do formulário da plataforma é suficiente. Como proceder?",
        resposta: "Para contornar a limitação do sistema de submissões sem complicação extra, envie apenas um PDF contendo o título do trabalho e autores. Este arquivo não será considerado pela Comissão de Avaliação, mas permitirá a conclusão imediata da sua submissão."
      }
    ]
  },
  {
    categoria: "evento",
    categoriaLabel: "Durante o evento",
    icone: "📶",
    perguntas: [
      {
        id: "wifi",
        pergunta: "Como acesso o Wi-Fi durante o evento?",
        resposta: "As redes disponíveis e as instruções de acesso estão em <a href=\"logistica.html#wifi\">Logística → Wi-Fi</a>."
      }
    ]
  },
  {
    categoria: "app",
    categoriaLabel: "Site no celular",
    icone: "📲",
    perguntas: [
      {
        id: "aplicativo",
        pergunta: "Existe um aplicativo do evento?",
        resposta: "Sim: o próprio site pode ser instalado como aplicativo. Ele abre direto na programação, mostra o que acontece agora e continua funcionando sem internet no campus, depois da primeira visita. No <strong>Android</strong> (Chrome), abra o menu (⋮) e escolha <strong>Instalar aplicativo</strong> ou <strong>Adicionar à tela inicial</strong>. No <strong>iPhone</strong> (Safari), toque em <strong>Compartilhar</strong> e depois em <strong>Adicionar à Tela de Início</strong>. Veja também o <a href=\"index.html#app-convite\">convite na página inicial</a>."
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
