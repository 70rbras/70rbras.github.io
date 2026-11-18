// ─── CONFIGURAÇÃO GERAL DO EVENTO ───────────────────────────────────────────
// Edite os valores abaixo para atualizar as informações do site.

const CONFIG = {
  evento: {
    nome:           "70ª Reunião Anual da Região Brasileira da Sociedade Internacional de Biometria",
    edicao:         "70ª RBras",
    tema:           "Dados que revelam vida: Estatística e Ciência de Dados na Biometria",
    inicio:         "2026-11-23",          // formato AAAA-MM-DD (usado no contador)
    fim:            "2026-11-25",
    datas_exibicao: "23 a 25 de novembro de 2026",
    cidade:         "Unicamp, Campinas, SP",
    // Dois prédios: o endereço abaixo (local_*) é o do IMECC; o do CDC fica em
    // `predios`, logo após este bloco.
    local_nome:     "Centro de Convenções (CDC) e IMECC",
    // Endereço em campos próprios: a exibição é montada por concatenação,
    // nunca por substituição de texto sobre uma linha única.
    local_logradouro: "Rua Sérgio Buarque de Holanda, 651",
    local_bairro:     "Cidade Universitária 'Zeferino Vaz'",
    local_cidade:     "Campinas",
    local_estado:     "SP",
    local_cep:        "13083-859",
    // Forma usada no cálculo de rota do Google Maps.
    endereco_rota:    "IMECC Unicamp, Rua Sérgio Buarque de Holanda, 651, Campinas - SP, 13083-859",
    local_instituicao: "Unicamp",
    email_contato:  "70rbras@unicamp.br",
    site_rbras:     "https://www.rbras.org.br",
    link_inscricoes:    "https://app.ciente.studio/70-rbras/subscription",
    link_submissao:     "https://app.ciente.studio/70-rbras/submissions",
    link_area_inscrito: "https://app.ciente.studio/",
    link_modelos_poster: "assets/documentos/modelos-poster-70rbras.zip",   // vazio = bloco oculto em apresentadores.html
    link_modelos_oral:   "assets/documentos/modelos-apresentacao-oral-70rbras.zip"   // vazio = bloco oculto em apresentadores.html
  },
  // ─── PRÉDIOS ──────────────────────────────────────────────────────────────
  // Uma entrada por sigla que a planilha usa no campo `predio` dos locais
  // (data/programacao.json). Alimenta logistica.html#local (um cartão por
  // prédio, com o que acontece em cada um, lido da programação).
  //   nome      → nome por extenso
  //   explicar  → true = o nome por extenso sai entre parênteses ao lado da
  //               sala (faixa de aviso, Home, premios.html); útil para siglas
  //               que o visitante não conhece
  //   endereco  → campos do endereço; ausente = usa o endereço de `evento`
  //   rota      → texto usado no Google Maps; ausente = evento.endereco_rota
  //   imagem    → (opcional) foto do prédio
  //   como_chegar → (opcional) orientação do prédio, usada nas salas que não
  //               têm `como_chegar` próprio na aba `locais` da planilha
  //   estacionamento → (opcional) como é o estacionamento; aparece no quadro
  //               "De carro" de logistica.html#como-chegar
  //   ordem     → posição do cartão na página
  // `trajeto` descreve a caminhada entre os dois prédios.
  predios: {
    CDC: {
      nome:     "Centro de Convenções da Unicamp",
      explicar: true,
      ordem:    1,
      endereco: {
        logradouro: "Avenida Érico Veríssimo, 500",
        bairro:     "Cidade Universitária Zeferino Vaz - Barão Geraldo",
        cidade:     "Campinas",
        estado:     "SP",
        cep:        "13083-851"
      },
      rota:     "Centro de Convenções da Unicamp, Avenida Érico Veríssimo, 500, Campinas - SP, 13083-851",
      como_chegar: "Siga as indicações na recepção do CDC.",
      estacionamento: "próprio e gratuito"
    },
    IMECC: {
      nome:     "Instituto de Matemática, Estatística e Computação Científica",
      ordem:    2,
      estacionamento: "próprio e gratuito"
    }
  },
  trajeto: { de: "CDC", para: "IMECC", minutos: 10, metros: 700 },

  // Ponto da previsão do tempo (assets/clima.js, via Open-Meteo): o CDC.
  // Os dias vêm do prazo "evento" de data/dates.js.
  clima: { lat: -22.8148, lon: -47.0714 },

  // ─── JANTAR DE CONFRATERNIZAÇÃO (70 anos da RBras) ────────────────────────
  // Seção index.html#jantar, aviso no topo, card em "Próximas datas" e link no
  // cartão da programação. Para OCULTAR tudo de uma vez: visivel: false.
  //   atividade_id → atividade de data/programacao.json (dia, horário, local, mapa)
  //   prazo_id     → prazo de adesão em data/dates.js; depois dele, as instruções
  //                  de pagamento somem e fica o aviso de adesões encerradas
  //   valores em reais como números; 0 aparece como "Isento"
  //   A seção some sozinha depois do dia do jantar.
  jantar: {
    visivel:      true,
    atividade_id: "PREMIACAO",
    prazo_id:     "jantar-adesao",
    local_nome:   "Restaurante da Adunicamp",
    endereco:     "Av. Érico Veríssimo, 1479 - Cidade Universitária, Campinas - SP",
    ingressos: [
      { categoria: "Estudante de Graduação",     valor: 75 },
      { categoria: "Estudante de Pós-Graduação", valor: 100 },
      { categoria: "Pesquisador / Profissional", valor: 175 }
    ],
    acompanhantes: [
      { categoria: "0 a 6 anos",      valor: 0 },
      { categoria: "7 a 12 anos",     valor: 87.5 },
      { categoria: "13 anos ou mais", valor: 175 }
    ],
    // Só chave e favorecido: agência e conta ficam de fora de propósito (o
    // pagamento é por Pix, e o favorecido permite conferir no app do banco).
    pix: {
      tipo:       "CNPJ",
      chave:      "64.047.327/0001-00",
      favorecido: "Região Brasileira da Sociedade Internacional de Biometria"
    },
    formulario: "https://tally.so/r/VpQ87M",
    observacao: "Quem já adquiriu o ingresso do jantar pela plataforma de inscrição do evento não precisa fazer nada."
  },

  redes_sociais: {
    instagram: "https://www.instagram.com/70rbras"
  },

  // ─── FAIXA DE AVISO (topo de todas as páginas) ────────────────────────────
  // Mostra o PRIMEIRO aviso da lista que estiver dentro do período [inicio, fim].
  // Fora do período, o aviso some sozinho. Lista vazia = sem faixa.
  //   id        → identificador único (o visitante que fechar o aviso não o vê de novo)
  //   texto     → mensagem (aceita HTML, ex.: <strong>)
  //   link      → (opcional) destino do link "Saiba mais"
  //   link_texto→ (opcional) texto do link; padrão "Saiba mais"
  //   inicio    → (opcional) "AAAA-MM-DDTHH:MM" (horário de Brasília)
  //   fim       → "AAAA-MM-DDTHH:MM" (horário de Brasília)
  //   inicio_id → (opcional) identificador de data/dates.js; usa o início do
  //               registro, dispensando escrever a data aqui
  //   fim_id    → (opcional) identificador de data/dates.js; usa o fim do registro
  //   atividade_id → (opcional) id de uma atividade de data/programacao.json.
  //               O aviso passa a valer até o fim dessa atividade (salvo fim ou
  //               fim_id explícito), o link padrão leva a ela na programação e
  //               o texto aceita {dia}, {horario} e {local}, lidos da planilha.
  //               Se a programação não puder ser lida, o aviso não aparece.
  //   No texto, {inicio} e {fim} são trocados pela data curta do prazo
  //   referenciado, por exemplo "31 out".
  //   Quem fecha um aviso passa a ver o seguinte da lista, se houver.
  //   requer    → (opcional) nome de um bloco de CONFIG com `visivel`; com
  //               visivel: false o aviso não aparece (ex.: "jantar")
  avisos: [
    {
      id:         "jantar-adesao-2026",
      texto:      "🍽️ <strong>Jantar dos 70 anos da RBras</strong>: adesões até {fim}.",
      // No dia em que o prazo termina, a faixa troca de texto e volta a
      // aparecer mesmo para quem fechou o aviso anterior.
      texto_ultimo_dia: "⏰ <strong>Último dia!</strong> Adesões ao <strong>Jantar dos 70 anos da RBras</strong> só até hoje, {fim}, às 23h59.",
      link:       "index.html#jantar",
      link_texto: "Valores e adesão",
      fim_id:     "jantar-adesao",
      requer:     "jantar"
    },
    {
      id:           "credenciamento-2026",
      texto:        "🪪 <strong>Credenciamento</strong>: {dia}, {horario} · {local}.",
      link_texto:   "Ver na programação",
      atividade_id: "INSCRICOES"
    },
    {
      // O item "Apresentadores" saiu do menu principal e virou subgrupo de
      // Logística; este aviso orienta quem procura por ele até o fim do evento.
      id:         "para-apresentadores-2026",
      texto:      "🎤 <strong>Vai apresentar?</strong> Modelos, instruções e horários agora ficam em Logística → Para Apresentadores.",
      link:       "apresentadores.html",
      link_texto: "Abrir",
      fim_id:     "evento"
    },
    {
      id:         "programacao-hoje-2026",
      texto:      "📅 <strong>Programação de hoje</strong>: horários, salas e busca de trabalhos.",
      link:       "programacao.html",
      link_texto: "Abrir",
      inicio_id:  "evento",
      fim_id:     "evento"
    },
    {
      id:         "wasa-hoje-2026",
      texto:      "🛰️ <strong>Hoje é dia de WASA</strong>, o evento satélite da RBras.",
      link:       "wasa.html#programacao-wasa",
      link_texto: "Ver programação do WASA",
      inicio_id:  "wasa",
      fim_id:     "wasa"
    },
    {
      id:         "fim-2o-lote-2026",
      texto:      "⏳ <strong>Últimos dias do 2º Lote</strong>: inscrições com valor intermediário até {fim}.",
      link:       "inscricoes.html",
      link_texto: "Ver valores",
      fim_id:     "lote-2"
    },
    {
      id:         "3o-lote-2026",
      texto:      "🖊️ <strong>3º Lote</strong>: inscrições com valor cheio até o início do evento, em {fim}.",
      link:       "inscricoes.html",
      link_texto: "Ver valores",
      inicio_id:  "lote-3",
      fim_id:     "lote-3"
    }
  ]
};
