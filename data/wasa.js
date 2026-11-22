/* ═══════════════════════════════════════════════
   data/wasa.js - Dados do WASA
   VIII Workshop em Análise de Sobrevivência e Aplicações
   70ª RBras 2026
════════════════════════════════════════════════ */

const wasaInfo = {
  nome:       'VIII Workshop em Análise de Sobrevivência e Aplicações',
  sigla:      'WASA',
  edicao:     'VIII',

  // A data vem de data/dates.js, registro "wasa"; o dia da semana é derivado
  // dela. O local vem de CONFIG.evento, em data/config.js. Nenhum dos dois é
  // repetido aqui.
  prazo_id:   'wasa',

  // Sala dentro do IMECC. O endereço do prédio segue vindo de CONFIG.evento.
  sala:       'Auditório do IMECC',

  // A organização aparece na página em forma curta além de forma extensa,
  // portanto fica guardada em partes, compostas conforme o espaço de cada lugar.
  organizacao: {
    instituto:          'Instituto de Ciências Matemáticas e de Computação',
    sigla:              'ICMC',
    universidade:       'Universidade de São Paulo',
    universidade_sigla: 'USP'
  },

  descricao:  'O WASA reúne pesquisadores da área de Estatística para discutir avanços em análise de sobrevivência, confiabilidade e aplicações. O evento também presta uma homenagem especial ao Professor Francisco Louzada Neto, por sua destacada trajetória e contribuição à Estatística e à Análise de Sobrevivência, marcada por liderança, dedicação e excelência.',
};

// Quem é homenageado vem do cadastro de data/pessoas.js; aqui fica apenas o
// texto da homenagem.
const wasaHomenagem = {
  pessoa:     'francisco-louzada-neto',
  paragrafos: [
    'Francisco Louzada Neto é Professor Titular da Universidade de São Paulo (USP), vinculado ao Instituto de Ciências Matemáticas e de Computação (ICMC) de São Carlos. Sua formação acadêmica inclui o bacharelado em Estatística pela Universidade Federal de São Carlos (UFSCar, 1988), o mestrado em Ciências da Computação e Matemática Computacional pela USP (1991) e o doutorado (PhD) em Estatística pela Universidade de Oxford, Inglaterra (1998). Iniciou sua carreira docente em 1989 como Professor Auxiliar na UFSCar, onde atuou por mais de duas décadas, chegando ao posto de Professor Associado, antes de sua migração para a USP em 2011.',
    'Na esfera institucional, Louzada-Neto exerceu cargos de destaque, presidindo a Associação Brasileira de Estatística (ABE) em dois mandatos (2012-2014 e 2016-2018). Atualmente, é Diretor do Centro de Ciências Matemáticas Aplicadas à Indústria (CeMEAI), um Centro de Pesquisa, Inovação e Difusão (CEPID) financiado pela FAPESP, além de coordenar o Laboratório de Estudos do Risco (CER-USP) e o MBA em Ciência de Dados do CeMEAI. Também é membro eleito do International Statistical Institute (ISI) e atuou como representante da América Latina no comitê do Prêmio Internacional Mahalanobis em 2021.',
    'Sua atuação científica concentra-se em Ciência de Dados e Estatística, com ênfase em Análise de Sobrevivência e Confiabilidade, Aprendizado de Máquina, Inferência e Modelos de Risco. É editor do periódico Sankhya A e de séries de livros de estatística da Springer e da Blucher, tendo também integrado o corpo editorial de diversas revistas nacionais e internacionais. Ao longo da carreira, recebeu reconhecimentos como o Arnold Prize da Royal Statistical Society (1998) e a Medalha de Honra da UFSCar, consolidando-se como uma das principais referências da estatística brasileira.',
  ],
};

/* Inscrição no WASA: taxas, formas de pagamento, endereço do formulário além
   do e-mail de contato. Consumido por wasa.html e pelo bloco do WASA na home,
   portanto nenhum desses valores é escrito nas páginas. */
const wasaInscricao = {
  taxas: [
    { rotulo: 'Profissionais', valor: 50 },
    { rotulo: 'Estudantes',    valor: 25, nota: 'graduação e pós-graduação' }
  ],
  formas_pagamento: ['PIX', 'TED'],
  formulario: 'https://docs.google.com/forms/d/e/1FAIpQLSfQgHnC0pJpahJINn92FfRN__BsyhGkVI3ao1ORp6hVQe81IA/viewform',
  email: 'wasasurvival@gmail.com'
};

// Cada slot referencia quem apresenta pelo identificador em data/pessoas.js,
// no campo `pessoa`; nome, tratamento além da instituição curta vêm da ficha.
// Só o horário de início é registrado, pois a organização não divulgou o de
// término. O intervalo do almoço fica em branco por decisão da organização,
// portanto não há slot para ele: a página desenha apenas a separação entre os
// dois períodos.
//
// O campo `resumo` é texto comum, sem marcação: parágrafos separados por linha
// em branco, quebra simples vira <br>. Resumo vazio não mostra o botão.
//
// `selo: false` esconde o selo do tipo no cartão, mantendo a cor da borda.
const wasaProgramacao = [
  {
    periodo: 'Manhã',
    slots: [
      { inicio: '08:00', tipo: 'credenciamento', titulo: 'Credenciamento' },
      { inicio: '09:00', tipo: 'abertura',       titulo: 'Abertura' },
      { inicio: '09:20', tipo: 'palestra',       pessoa: 'vinicius-calsavara',
        titulo: 'A defective nested frailty model for hierarchical survival data under non-proportional hazards',
        resumo: '' },
      { inicio: '09:50', tipo: 'homenagem',      titulo: 'Homenagem ao Professor Francisco Louzada' },
      { inicio: '10:50', tipo: 'intervalo',      titulo: 'Coffee Break' },
      { inicio: '11:10', tipo: 'palestra',       pessoa: 'adriane-caroline-teixeira-portela',
        titulo: 'Confiabilidade de Sistemas: Modelos de Degradação com Reparos Imperfeitos',
        resumo: '' },
      { inicio: '11:40', tipo: 'palestra',       pessoa: 'nikolai-valtchev-kolev',
        titulo: 'Reliability applications of line integral',
        resumo: '' },
    ]
  },
  {
    periodo: 'Tarde',
    slots: [
      { inicio: '14:00', tipo: 'palestra',       pessoa: 'fernanda-lang-schumacher',
        titulo: 'When Skewed Outcomes Meet Censored Events: Robust Bayesian Joint Models for Longitudinal and Time-to-Event Data, with an Application to Multiple Sclerosis',
        resumo: '' },
      { inicio: '14:30', tipo: 'palestra',       pessoa: 'pedro-luiz-ramos',
        titulo: 'Cure-Fraction Survival Trees and Random Forests for Long-Term Survival Data',
        resumo: '' },
      { inicio: '15:00', tipo: 'palestra',       pessoa: 'gleici-da-silva-castro-perdona',
        titulo: 'Modelo Generalizado para Estudo de Tempo de Parto na Presença de Causas Competitivas: Cesariana e Parto Vaginal',
        resumo: '' },
      { inicio: '15:30', tipo: 'intervalo',      titulo: 'Coffee Break' },
      { inicio: '16:00', tipo: 'palestra',       pessoa: 'mario-de-castro-andrade-filho',
        titulo: 'A Bayesian multi-risks survival model',
        resumo: '' },
      { inicio: '16:30', tipo: 'encerramento',   pessoa: 'vera-lucia-damasceno-tomazella', selo: false,
        titulo: 'VIII WASA: Reflexões, Conexões e Perspectivas',
        resumo: '' },
    ]
  },
];
