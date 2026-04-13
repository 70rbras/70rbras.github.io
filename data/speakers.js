// ─── PALESTRANTES CONVIDADOS ─────────────────────────────────────────────────
// Adicione ou edite palestrantes nesta lista.
// Campos:
//   nome        → nome completo do palestrante
//   instituicao → instituição e país
//   tipo        → ex: "Keynote Speaker" ou "Palestrante Convidado(a)"
//   tema        → título da palestra
//   foto        → caminho para a foto (ex: "assets/fotos/nome.jpg") ou "" para ícone padrão
//   resumo      → texto completo do resumo (aparece no modal ao clicar no card)

const SPEAKERS = [
  {
    nome:        "Profa. Dra. Ana Luiza Matos",
    instituicao: "Universidade de São Paulo (USP) · Brasil",
    tipo:        "Keynote Speaker",
    tema:        "Aprendizado de máquina e inferência estatística: convergências e tensões na era dos dados massivos",
    foto:        "",
    resumo:      "O avanço das técnicas de aprendizado de máquina tem reconfigurado o papel da estatística inferencial em diversas áreas do conhecimento. Nesta palestra, discutiremos as interseções e divergências entre a abordagem clássica da inferência estatística e os paradigmas computacionais modernos, com ênfase em aplicações nas ciências da vida.\n\nAbordaremos questões fundamentais como interpretabilidade de modelos, quantificação de incerteza e generalização, apresentando exemplos práticos em genômica, epidemiologia e ecologia. Ao final, propomos uma visão integrativa que preserva o rigor probabilístico enquanto incorpora o poder preditivo dos algoritmos modernos."
  },
  {
    nome:        "Prof. Dr. Ricardo Vasconcellos",
    instituicao: "Universidade Estadual de Campinas (Unicamp) · Brasil",
    tipo:        "Keynote Speaker",
    tema:        "Modelos de sobrevivência com fração de cura: desenvolvimentos recentes e aplicações em oncologia",
    foto:        "",
    resumo:      "A análise de sobrevivência com fração de cura representa um dos campos mais ativos da bioestatística contemporânea, especialmente em estudos oncológicos onde uma proporção de pacientes não experimenta o evento de interesse mesmo após longos períodos de acompanhamento.\n\nNesta palestra, revisaremos os principais modelos de mistura e de promoção de riscos, discutiremos métodos de estimação bayesiana e frequentista, e apresentaremos aplicações em dados de câncer de mama e leucemia. Serão também apresentados pacotes computacionais em R desenvolvidos pelo grupo de pesquisa, tornando esses métodos acessíveis à comunidade científica."
  },
  {
    nome:        "Prof. Dr. James T. Whitmore",
    instituicao: "University of Edinburgh · Reino Unido",
    tipo:        "Keynote Speaker",
    tema:        "Bayesian hierarchical models for large-scale ecological data: from forests to fisheries",
    foto:        "",
    resumo:      "The explosion of ecological monitoring data — from remote sensing, acoustic sensors, and citizen science platforms — has created both extraordinary opportunities and significant methodological challenges. Bayesian hierarchical models offer a principled framework for integrating multiple data streams, accounting for spatial and temporal autocorrelation, and propagating uncertainty across scales of biological organization.\n\nThis talk will present recent methodological advances in scalable Bayesian computation applied to ecological datasets spanning entire continents. Applications range from estimating biodiversity trends in Amazonian forests to modelling Atlantic fish population dynamics under climate change scenarios. We will demonstrate how these models can inform conservation policy while maintaining rigorous uncertainty quantification."
  },
  {
    nome:        "Profa. Dra. Fernanda Chaves Lima",
    instituicao: "Empresa Brasileira de Pesquisa Agropecuária (Embrapa) · Brasil",
    tipo:        "Palestrante Convidada",
    tema:        "Estatística para segurança alimentar: delineamentos modernos em experimentos agrícolas de larga escala",
    foto:        "",
    resumo:      "Os desafios da agricultura moderna — adaptação climática, sustentabilidade e aumento de produtividade — demandam experimentos cada vez mais complexos, envolvendo múltiplos ambientes, genótipos e interações. Esta palestra apresenta avanços no delineamento e análise de experimentos multi-ambiente, com foco em modelos fatoriais analíticos, análise de estabilidade genotípica e integração de dados de sensoriamento remoto.\n\nDiscutiremos casos reais envolvendo culturas de soja, milho e cana-de-açúcar, onde abordagens biométricas modernas contribuíram diretamente para recomendações varietais adotadas em escala nacional. A palestra também abordará perspectivas para a biometria agrícola na era da agricultura de precisão e do sequenciamento genômico de alto rendimento."
  },
  {
    nome:        "Prof. Dr. Carlos Eduardo Ferreira",
    instituicao: "Fundação Oswaldo Cruz (Fiocruz) · Brasil",
    tipo:        "Palestrante Convidado",
    tema:        "Vigilância epidemiológica baseada em dados: lições da pandemia e perspectivas para o SUS",
    foto:        "",
    resumo:      "A pandemia de COVID-19 expôs tanto as potencialidades quanto as fragilidades dos sistemas de informação em saúde no Brasil. Esta palestra faz um balanço crítico do uso de métodos estatísticos e epidemiológicos durante a crise sanitária, desde modelos de transmissão até estimativas de excesso de mortalidade e avaliação de intervenções não farmacológicas.\n\nPropõe-se uma agenda para o fortalecimento da vigilância epidemiológica no âmbito do SUS, com ênfase em infraestrutura de dados, capacitação em bioestatística e integração entre sistemas de informação de saúde. Serão discutidos protocolos de análise em tempo real e ferramentas de comunicação de risco para o público e para gestores de saúde."
  },
  {
    nome:        "Profa. Dra. María José Rendón",
    instituicao: "Universidad Nacional Autónoma de México (UNAM) · México",
    tipo:        "Palestrante Convidada",
    tema:        "Estadística espacial y salud pública: modelado de enfermedades transmitidas por vectores en América Latina",
    foto:        "",
    resumo:      "Las enfermedades transmitidas por vectores, como el dengue, el chikungunya y la leishmaniasis, representan un desafío creciente de salud pública en América Latina, agravado por el cambio climático y la urbanización acelerada. Esta conferencia presenta el uso de modelos estadísticos espaciotemporales para identificar factores de riesgo, anticipar brotes y optimizar intervenciones de control vectorial.\n\nSe discutirán modelos de riesgo basados en datos satelitales, registros clínicos y datos socioeconómicos, integrando métodos geoestadísticos con aprendizaje automático. Los casos de estudio incluyen análisis comparativos entre Brasil, México y Colombia, con énfasis en la transferibilidad de los modelos y la equidad en salud como criterio de evaluación."
  }
];
