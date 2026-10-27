// ─── SUBMISSÕES ───────────────────────────────────────────────────────────────
// Dados das modalidades de submissão da 70ª RBras 2026.
// Carregado por: premios.html (regras do Concurso). cientifico.html foi aposentado em out/2026.
//
// Prazos: cada modalidade referencia um registro de data/dates.js pelo campo
// prazo_id. Nenhuma data é escrita aqui.

// ── Modalidades de submissão ──────────────────────────────────────────────────
const SUBMISSION_MODALITIES = [
  {
    id: "oral-poster",
    icone: "📄",
    titulo: "Comunicações Orais e Pôsteres",
    prazo_id: "submissao-trabalhos",
    prorrogado: true,
    prazo_nota: "Prazo original: 15 de agosto. Prorrogado até 24 de agosto. <strong>Última oportunidade excepcional: sexta-feira, 28 de agosto de 2026, até às 17h, horário de Brasília</strong> (horário de encerramento do sistema de submissão), exclusiva para quem ainda não enviou seu trabalho. Buscamos, com isso, oferecer condições equânimes a todos os interessados em participar.",
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
    prazo_id: "propostas-sessoes",
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
    prazo_id: "propostas-sessoes",
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
    prazo_id: "concurso-tdi",
    prorrogado: true,
    prazo_nota: "Prazo original: 15 de agosto de 2026. <strong>Novo prazo final: 24 de agosto de 2026, às 23h59.</strong>",
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
