/* ═══════════════════════════════════════════════
   data/wasa.js - Dados do WASA
   VIII Workshop em Análise de Sobrevivência e Aplicações
   70ª RBras 2026
════════════════════════════════════════════════ */

const wasaInfo = {
  nome:       'VIII Workshop em Análise de Sobrevivência e Aplicações',
  sigla:      'WASA',
  edicao:     'VIII',
  data:       '26 de novembro de 2026',
  diaSemana:  'Quinta-feira',
  local:      'Unicamp, Campinas, SP',
  organizacao:'Instituto de Ciências Matemáticas e de Computação (ICMC) - USP',
  descricao:  'O WASA reúne pesquisadores da área de Estatística para discutir avanços em análise de sobrevivência, confiabilidade e aplicações. O evento também presta uma homenagem especial ao Professor Francisco Louzada Neto, por sua destacada trajetória e contribuição à Estatística e à Análise de Sobrevivência, marcada por liderança, dedicação e excelência.',
};

const wasaHomenagem = {
  nome:       'Prof. Dr. Francisco Louzada Neto',
  foto:       'assets/fotos/louzada-400.jpg',
  paragrafos: [
    'Francisco Louzada Neto é Professor Titular da Universidade de São Paulo (USP), vinculado ao Instituto de Ciências Matemáticas e de Computação (ICMC) de São Carlos. Sua formação acadêmica inclui o bacharelado em Estatística pela Universidade Federal de São Carlos (UFSCar, 1988), o mestrado em Ciências da Computação e Matemática Computacional pela USP (1991) e o doutorado (PhD) em Estatística pela Universidade de Oxford, Inglaterra (1998). Iniciou sua carreira docente em 1989 como Professor Auxiliar na UFSCar, onde atuou por mais de duas décadas, chegando ao posto de Professor Associado, antes de sua migração para a USP em 2011.',
    'Na esfera institucional, Louzada-Neto exerceu cargos de destaque, presidindo a Associação Brasileira de Estatística (ABE) em dois mandatos (2012-2014 e 2016-2018). Atualmente, é Diretor do Centro de Ciências Matemáticas Aplicadas à Indústria (CeMEAI), um Centro de Pesquisa, Inovação e Difusão (CEPID) financiado pela FAPESP, além de coordenar o Laboratório de Estudos do Risco (CER-USP) e o MBA em Ciência de Dados do CeMEAI. Também é membro eleito do International Statistical Institute (ISI) e atuou como representante da América Latina no comitê do Prêmio Internacional Mahalanobis em 2021.',
    'Sua atuação científica concentra-se em Ciência de Dados e Estatística, com ênfase em Análise de Sobrevivência e Confiabilidade, Aprendizado de Máquina, Inferência e Modelos de Risco. É editor do periódico Sankhya A e de séries de livros de estatística da Springer e da Blucher, tendo também integrado o corpo editorial de diversas revistas nacionais e internacionais. Ao longo da carreira, recebeu reconhecimentos como o Arnold Prize da Royal Statistical Society (1998) e a Medalha de Honra da UFSCar, consolidando-se como uma das principais referências da estatística brasileira.',
  ],
};

const wasaProgramacao = [
  {
    periodo: 'Manhã',
    slots: [
      { horario: '09:00 - 09:20', tipo: 'abertura',   titulo: 'Abertura do evento',                          descricao: '' },
      { horario: '09:20 - 10:20', tipo: 'homenagem',  titulo: 'Homenagem ao Professor Francisco Louzada',    descricao: '' },
      { horario: '10:20 - 10:50', tipo: 'palestra',   titulo: 'Palestra 1',                                  palestrante: 'Prof. Francisco Louzada', tituloTalks: 'A definir' },
      { horario: '10:50 - 11:10', tipo: 'intervalo',  titulo: 'Coffee Break',                                descricao: '' },
      { horario: '11:10 - 11:40', tipo: 'palestra',   titulo: 'Palestra 2',                                  palestrante: 'Profa. Gleici da Silva Castro Perdoná', tituloTalks: 'A definir' },
      { horario: '11:40 - 12:10', tipo: 'palestra',   titulo: 'Palestra 3',                                  palestrante: 'Prof. Vinicius Calsavara', tituloTalks: 'A definir' },
    ]
  },
  {
    periodo: 'Intervalo',
    slots: [
      { horario: '12:10 - 14:00', tipo: 'intervalo',  titulo: 'Almoço', descricao: '' },
    ]
  },
  {
    periodo: 'Tarde',
    slots: [
      { horario: '14:00 - 14:30', tipo: 'palestra',   titulo: 'Palestra 4',   palestrante: 'Profa. Adriane Caroline Teixeira Portela', tituloTalks: 'A definir' },
      { horario: '14:30 - 15:00', tipo: 'palestra',   titulo: 'Palestra 5',   palestrante: 'Prof. Pedro Luiz Ramos', tituloTalks: 'A definir' },
      { horario: '15:00 - 15:30', tipo: 'palestra',   titulo: 'Palestra 6',   palestrante: 'Profa. Fernanda Lang Schumacher', tituloTalks: 'A definir' },
      { horario: '15:30 - 16:00', tipo: 'intervalo',  titulo: 'Coffee Break', descricao: '' },
      { horario: '16:00 - 16:30', tipo: 'palestra',   titulo: 'Palestra 7',   palestrante: 'Prof. Mário de Castro', tituloTalks: 'A definir' },
      { horario: '16:30 - 17:00', tipo: 'encerramento', titulo: 'Encerramento', palestrante: 'Profa. Vera Tomazella', descricao: '' },
    ]
  },
];
