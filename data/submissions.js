// ─── SUBMISSÕES ───────────────────────────────────────────────────────────────
// Dados das modalidades de submissão da 70ª RBras 2026.
// Carregado por: cientifico.html

// ── Regras gerais (valem para todas as modalidades) ──────────────────────────
const SUBMISSION_RULES = [
  "O autor responsável por apresentar o trabalho deverá <strong>se inscrever no site antes de realizar a submissão</strong>.",
  "Para se inscrever, acesse a área Submissões pelo site do evento e preencha os dados solicitados.",
  "<strong>A inscrição não precisa estar paga</strong> no momento da submissão do resumo.",
  "Serão aceitos resumos em <strong>português ou inglês</strong>.",
  "O autor deverá inserir as informações requeridas no formulário e, quando necessário, <strong>anexar os documentos em PDF</strong> exigidos.",
  "Em caso de aceitação, a inscrição do(a) autor(a) apresentador(a) deverá estar <strong>paga até 15 de outubro</strong> para garantir a inclusão na programação final."
];

// ── Áreas temáticas (Comunicações Orais e Pôsteres) ──────────────────────────
const THEMATIC_AREAS = [
  "Amostragem",
  "Análise de Big Data",
  "Análise de dados categóricos e modelos discretos",
  "Análise de dados longitudinais / Modelos de efeitos mistos",
  "Análise de sobrevivência",
  "Aprendizado de máquina",
  "Bioinformática",
  "Dados de imagem e sinal",
  "Ensaios clínicos",
  "Ensino, Extensão e Difusão da Estatística",
  "Genética, Microarranjos e dados ômicos",
  "Infecções, doenças e controle",
  "Inferência causal",
  "Métodos Bayesianos",
  "Métodos intensivos em computador e desenvolvimento de software",
  "Modelagem espacial e espaço-temporal",
  "Modelagem preditiva",
  "Modelos de mistura",
  "Outros tópicos biométricos relacionados",
  "Probabilidade e Processos Estocásticos",
  "Regressão quantílica",
  "Visualização e estatísticas gráficas"
];

// ── Modalidades de submissão ──────────────────────────────────────────────────
const SUBMISSION_MODALITIES = [
  {
    id: "oral-poster",
    icone: "📄",
    titulo: "Comunicações Orais e Pôsteres",
    prazo: "11 mai - 15 ago 2026",
    prazo_iso_fim: "2026-08-15",
    campos: [
      "Título",
      "Autor(es)",
      "Afiliação institucional do(a) apresentador(a)",
      "Resumo de até <strong>2000 caracteres</strong>, somente em texto (sem fórmulas)",
      "Até <strong>5 palavras-chave</strong>"
    ],
    notas: [
      "Caso o trabalho submetido para Comunicação Oral não seja aceito, poderá, a critério do autor, ser considerado para apresentação como <strong>Pôster</strong>.",
      "Para Comunicações Orais: <strong>apenas um artigo por apresentador</strong>.",
      "Para Pôsteres: um mesmo apresentador poderá ter no máximo <strong>2 trabalhos selecionados</strong>."
    ],
    pdf: null,
    areas_tematicas: true
  },
  {
    id: "minicurso",
    icone: "🎓",
    titulo: "Minicurso",
    prazo: "11 mai - 15 jul 2026",
    prazo_iso_fim: "2026-07-15",
    duracao: "4h total · 2h/dia",
    campos: [
      "Título do Minicurso",
      "Nome completo do proponente",
      "Co-ministrantes (se houver - nomes e instituições)",
      "Afiliação institucional do(a) apresentador(a)",
      "Resumo de até <strong>2000 caracteres</strong>, somente em texto (sem fórmulas)",
      "Até <strong>5 palavras-chave</strong>"
    ],
    notas: [],
    pdf: {
      titulo: "Proposta Completa (formato PDF até 2 páginas)",
      max_paginas: 2,
      itens: [
        "Título do Minicurso",
        "Nome completo do proponente e co-ministrantes com suas respectivas afiliações",
        "Conteúdo: resumo (até 2000 caracteres), objetivos de aprendizagem, tópicos principais e atividades programadas",
        "Nível do minicurso: introdutório / intermediário / avançado",
        "Público-alvo: graduação, mestrado ou doutorado",
        "Pré-requisitos conceituais e de software (se existirem)",
        "Necessidade de computador: softwares e materiais necessários (R, Python, pacotes, dados, etc.)",
        "Número máximo recomendado de participantes"
      ]
    },
    areas_tematicas: false
  },
  {
    id: "sessao-tematica",
    icone: "🎤",
    titulo: "Sessão Temática",
    prazo: "11 mai - 15 jul 2026",
    prazo_iso_fim: "2026-07-15",
    duracao: "1h30",
    campos: [
      "Título da Sessão Temática",
      "Nome completo do proponente",
      "Afiliação institucional do proponente",
      "Resumo de até <strong>2000 caracteres</strong>, somente em texto (sem fórmulas)",
      "Até <strong>5 palavras-chave</strong>"
    ],
    notas: [],
    pdf: {
      titulo: "Proposta Completa",
      max_paginas: null,
      itens: [
        "Título da Sessão Temática",
        "Nome completo e afiliação institucional do proponente",
        "Resumo da sessão de até 2000 caracteres",
        "Objetivos da sessão",
        "Nomes completos dos palestrantes e suas respectivas afiliações institucionais",
        "Títulos dos trabalhos a serem apresentados"
      ]
    },
    areas_tematicas: false
  },
  {
    id: "concurso",
    icone: "🏅",
    titulo: "Concurso Tese/Dissertação/IC",
    prazo: "11 mai - 15 ago 2026",
    prazo_iso_fim: "2026-08-15",
    elegibilidade: "Títulos obtidos em universidades brasileiras entre <strong>jan/2024 e jul/2026</strong>.",
    campos: [
      "Título",
      "Autor(es)",
      "Afiliação institucional do(a) apresentador(a)",
      "Resumo de até <strong>2000 caracteres</strong>, somente em texto (sem fórmulas)",
      "Até <strong>5 palavras-chave</strong>"
    ],
    notas: [],
    pdf: {
      titulo: "Documentação (formato PDF)",
      max_paginas: null,
      itens: [
        "Tese, Dissertação ou Relatório de Iniciação Científica",
        "Diploma ou ata da defesa (mestrado/doutorado) <em>ou</em> certificado/carta da coordenação de graduação (IC)",
        "Arquivo assinado pelo(a) candidato(a) e orientador(a) com nome, afiliação, categoria, título, resumo e resultados derivados do trabalho",
        "Carta de até 2 páginas assinada pelo(a) candidato(a) justificando por que o trabalho merece premiação"
      ]
    },
    areas_tematicas: false
  }
];
