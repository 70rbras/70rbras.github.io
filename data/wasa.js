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
// `resumo_rotulo` troca a palavra do botão, que por padrão é "resumo": o texto
// da Vera é biografia, portanto o botão diz "Ver biografia".
const wasaProgramacao = [
  {
    periodo: 'Manhã',
    slots: [
      { inicio: '08:00', tipo: 'credenciamento', titulo: 'Credenciamento' },
      { inicio: '09:00', tipo: 'abertura',       titulo: 'Abertura' },
      { inicio: '09:20', tipo: 'palestra',       pessoa: 'vinicius-calsavara',
        titulo: 'A defective nested frailty model for hierarchical survival data under non-proportional hazards',
        resumo: "Hierarchically clustered survival data may simultaneously exhibit non-proportional hazards, crossing survival curves, and a positive long-term event-free fraction. Most existing nested frailty models are formulated under proper survival distributions and therefore do not directly accommodate this combination of features. Within the broader class of defective survival models, we develop a nested frailty formulation based on the defective Gompertz distribution with independent multiplicative Gamma frailties at two hierarchical levels. Covariates enter both Gompertz parameters, allowing time-varying associations and covariate-specific proper or defective survival regimes, while the nested frailties represent residual heterogeneity at the upper and lower clustering levels. The lower-level frailty is integrated out analytically, whereas the remaining one-dimensional upper-level integral is evaluated using a Laplace approximation. The resulting formulation provides marginal survival functions and long-term event-free fractions after integration over both frailty distributions, as well as prediction of frailties at each hierarchical level. Finite-sample performance was investigated through Monte Carlo studies under application-calibrated and balanced nested designs, alternative survival regimes, and frailty-distribution misspecification. The methodology is illustrated using cancer-specific survival data from patients with colorectal cancer in São Paulo, Brazil, with patients nested within municipalities and municipalities nested within Regional Health Care Networks. The proposed framework extends defective survival modeling to hierarchical time-to-event data in which non-proportional hazards, positive limiting survival probabilities, and residual heterogeneity at multiple nested levels may occur simultaneously." },
      { inicio: '09:50', tipo: 'homenagem',      titulo: 'Homenagem ao Professor Francisco Louzada' },
      { inicio: '10:50', tipo: 'intervalo',      titulo: 'Coffee Break' },
      { inicio: '11:10', tipo: 'palestra',       pessoa: 'adriane-caroline-teixeira-portela',
        titulo: 'Confiabilidade de Sistemas: Modelos de Degradação com Reparos Imperfeitos',
        resumo: "A análise de confiabilidade busca compreender a evolução dos sistemas ao longo do tempo, contribuindo para o planejamento de ações de manutenção e a redução de custos operacionais. Em sistemas reparáveis, a degradação acumulada pode ser parcialmente reduzida por intervenções de manutenção, cujos efeitos nem sempre são constantes ao longo do tempo. Neste trabalho, propõe-se um modelo de degradação baseado no processo Gaussiano inverso e no modelo de Redução Aritmética da Degradação de ordem 1 (ARD1), incorporando efeitos variáveis de manutenção imperfeita. A abordagem considera observações dos níveis de degradação entre as intervenções e imediatamente antes e após cada manutenção. O desempenho do modelo é avaliado por meio de estudos de simulação e de uma aplicação adaptada a dados reais, explorando sua capacidade de representar diferentes cenários de manutenção. Os resultados contribuem para o desenvolvimento de métodos estatísticos mais flexíveis para a modelagem da degradação e a análise da confiabilidade de sistemas reparáveis." },
      { inicio: '11:40', tipo: 'palestra',       pessoa: 'nikolai-valtchev-kolev',
        titulo: 'Reliability applications of line integral',
        resumo: 'Construction of well-known and new bivariate models using the exponential representation of the joint survival function through the line integral of the corresponding gradient vector' },
    ]
  },
  {
    periodo: 'Tarde',
    slots: [
      { inicio: '14:00', tipo: 'palestra',       pessoa: 'fernanda-lang-schumacher',
        titulo: 'When Skewed Outcomes Meet Censored Events: Robust Bayesian Joint Models for Longitudinal and Time-to-Event Data, with an Application to Multiple Sclerosis',
        resumo: "Disability measures in multiple sclerosis (MS), such as the timed 25-foot walk (T25FW), are often strongly skewed and prone to extreme values. Yet joint models for longitudinal and time-to-event data usually rely on Gaussian assumptions, which can distort inference when these features are present. We propose a robust Bayesian joint modeling framework that links the two processes through shared random effects. The longitudinal process is modeled by a scale mixture of skew-normal (SMSN) linear mixed model, which includes the skew-t and skew-slash distributions and allows serially correlated within-subject errors. The survival process is a Weibull proportional hazards model. We estimate the models using Hamiltonian Monte Carlo in Stan and compare them with WAIC and LOO-CV based on marginal log-likelihood. In simulation studies with increasing censoring, sampling under the correctly specified model was efficient, bias was small for most parameters, and credible interval coverage was near the nominal 95% level. Misspecification left the survival and association parameters essentially unaffected, but it substantially biased the variance components: ignoring heavy tails inflated the error variance by more than 50%, and ignoring skewness biased the intercept and random-effects variance. Misspecified models also showed more convergence problems. We apply the method to an MS clinical trial, jointly modeling repeated T25FW measurements and time to confirmed disability progression on the Expanded Disability Status Scale. A skew-t model with AR(1) errors fit much better than the Gaussian model and showed clear skewness and heavy tails. With these features accounted for, the longitudinal estimates were more precise, and conclusions changed for the time trend and one age group. Inferences for treatment, diagnostic delay, and the survival submodel stayed largely the same. Joint work with Keyliane Travassos, Elizabeth Juarez-Colunga, and Larissa Matos." },
      { inicio: '14:30', tipo: 'palestra',       pessoa: 'pedro-luiz-ramos',
        titulo: 'Cure-Fraction Survival Trees and Random Forests for Long-Term Survival Data',
        resumo: "In long-term survival studies, it is common to observe a fraction of individuals who remain event-free after extended follow-up, suggesting the presence of a cure fraction or a subgroup of long-term survivors. Traditional survival trees and random survival forests, often guided by log-rank splitting criteria, are effective for separating event-time distributions, but they do not necessarily construct partitions targeted to the long-term cure probability. This distinction is important in biomedical applications where the main scientific question is not only when an event occurs, but also whether a subject remains susceptible to the event at all. In this talk, I will present a cure-fraction-oriented survival tree whose splits are guided directly by contrasts in node-specific estimated cure fractions, together with its extension to random forests. The proposed methodology combines Kaplan-Meier tail estimators, follow-up maturity constraints, and ensemble aggregation to build partitions around long-term survival plateaus rather than short-term hazard separation alone. I will also discuss theoretical motivation, simulation results, and an application to long-term oncology registry data, highlighting settings in which the proposed approach identifies cure-related structure that may be masked by standard survival trees." },
      { inicio: '15:00', tipo: 'palestra',       pessoa: 'gleici-da-silva-castro-perdona',
        titulo: 'Modelo Generalizado para Estudo de Tempo de Parto na Presença de Causas Competitivas: Cesariana e Parto Vaginal',
        resumo: "A análise do tempo até o parto apresenta características que dificultam a aplicação direta dos modelos usuais de sobrevivência. Entre elas, destacam-se a ocorrência de tempos iguais a zero, a presença de intervenções durante o trabalho de parto e os diferentes tipos de desfecho obstétrico. Neste trabalho, propõe-se uma extensão do modelo gama generalizado inflacionado de zeros e com fração de longa duração para o contexto de riscos competitivos. São consideradas duas causas: cesariana e parto vaginal. A aumentação do trabalho de parto e outras intervenções são tratadas como censura para ambas as causas. A massa de probabilidade no tempo zero representa mulheres para as quais o tempo até o parto não pode ser observado segundo o mecanismo usual. A fração de longa duração, embora não seja interpretada como cura clínica, é associada a mulheres submetidas a intervenções que modificam ou interrompem o curso natural do trabalho de parto. Condicionalmente à suscetibilidade e à ocorrência de um tempo positivo, são definidas as probabilidades de cesariana e de parto vaginal, e uma distribuição gama generalizada específica é atribuída ao tempo correspondente a cada causa. A flexibilidade dessa distribuição permite representar diferentes comportamentos das funções de risco. A formulação proposta fornece expressões para as subdensidades, funções de incidência acumulada, sobrevivência populacional e verossimilhança na presença de censura. A aplicação considera dados obstétricos com 7.062 mulheres, dos quais 321 apresentam tempo igual a zero, correspondendo a aproximadamente 4,55% da amostra. O modelo possibilita analisar conjuntamente a inflação de zeros, a fração de longa duração e as diferentes causas de ocorrência do parto, oferecendo uma abordagem flexível para processos obstétricos complexos." },
      { inicio: '15:30', tipo: 'intervalo',      titulo: 'Coffee Break' },
      { inicio: '16:00', tipo: 'palestra',       pessoa: 'mario-de-castro-andrade-filho',
        titulo: 'A Bayesian multi-risks survival model',
        resumo: "Semi-competing risks data include the time to a nonterminating event and the time to a terminating event. In this talk, we present a multi-risks survival model for data with nonterminating and terminating events. Theoretical and empirical results show that the estimates of the cumulative incidence function for a nonterminating event may be biased if the information on a terminating event is ignored. A Markov chain Monte Carlo sampling algorithm is also developed. Our methodology is further assessed using simulations and also an analysis of real data from a prostate cancer study." },
      { inicio: '16:30', tipo: 'encerramento',   pessoa: 'vera-lucia-damasceno-tomazella', selo: false, resumo_rotulo: 'biografia',
        titulo: 'VIII WASA: Reflexões, Conexões e Perspectivas',
        resumo: "A Professora Vera Lucia Damasceno Tomazella é professora titular e sênior da Universidade Federal de São Carlos (UFSCar), vinculada ao Departamento de Estatística. É graduada em Matemática pela Universidade Federal do Maranhão, mestre e doutora em Ciências da Computação e Matemática Computacional pela Universidade de São Paulo (USP), tendo realizado estágios de pós-doutorado na Universidade de Valência, na Espanha, e na Universidade de Manchester, na Inglaterra. Sua pesquisa concentra-se em análise de sobrevivência, confiabilidade, modelos de fração de cura, modelos de risco, inferência bayesiana, análise de diagnóstico e modelos não lineares, com aplicações nas áreas da saúde e do câncer. É membro eleita do Instituto Internacional de Estatística (ISI) e tem contribuído para a comunidade estatística por meio da pesquisa, do ensino, da formação de estudantes e da liderança científica, tendo ocupado cargos de destaque em sociedades científicas brasileiras de Estatística e Biometria. Seu trabalho tem contribuído para o desenvolvimento e a aplicação de modelos estatísticos em estudos biomédicos e de saúde pública." },
    ]
  },
];
