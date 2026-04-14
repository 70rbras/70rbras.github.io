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
    nome:        "Vinicius Calsavara",
    instituicao: "info requerida",
    tipo:        "Keynote Speaker - ajustar",
    tema:        "A novel approach for analyzing non-proportional hazards with long-term survivors: The defective-Yang-Prentice model",
    foto:        "",
    resumo:      "In survival analysis, non-proportional hazards and the presence of long-term survivors pose important methodological challenges, as traditional models often fail to accommodate both features adequately within a single framework. In this talk, I present a novel long-term survival model that integrates the Yang and Prentice framework with a defective Gompertz distribution, providing a flexible approach for analyzing time-to-event data with non-proportional hazards and a cure fraction. The proposed model is able to capture time-varying hazard ratios while accounting for the presence of long-term survivors, thereby extending existing survival modeling strategies. Its performance is evaluated through comprehensive simulation studies, and an application to colorectal cancer data illustrates its practical value and flexibility. The results suggest that the proposed framework is a useful and interpretable alternative to existing methods for survival data exhibiting both non-proportional hazards and long-term survivors."
  },
  {
    nome:        "Thiago Rodrigo Ramos",
    instituicao: "info requerida",
    tipo:        "Keynote Speaker - ajustar",
    tema:        "Quantificação da incerteza sensível à deriva por meio de um método espectral-Newton funcional",
    foto:        "",
    resumo:      "Os modelos de aprendizado de máquina são cada vez mais utilizados em domínios de alto risco, como saúde e finanças, onde a quantificação da incerteza é essencial e as mudanças na distribuição podem prejudicar seriamente o desempenho preditivo.\n \nNo entanto, muitas abordagens existentes para detecção e adaptação de mudanças abordam componentes isolados do ciclo capturar–adaptar–operar, frequentemente sem levar em conta explicitamente a incerteza preditiva. Neste artigo, apresentamos uma estrutura em etapas para o aprendizado de distribuições condicionais que visa diretamente mudanças prejudiciais que afetam o desempenho preditivo. Nosso método aprende uma decomposição espectral da razão de densidade f_{XY}/(f_Xf_Y) por meio de atualizações funcionais alternadas de Newton, que lembram os métodos de gradient boosting. Introduzimos também uma métrica de degradação de desempenho para identificar mudanças prejudiciais que devem desencadear uma adaptação. Experimentos preliminares em benchmarks de estimação de distribuição condicional com deslocamentos induzidos sugerem que essa abordagem oferece um caminho fundamentado para a modelagem robusta de distribuição condicional em ambientes não estacionários de alto risco.
"
  },
  {
    nome:        "Asuman",
    instituicao: "info requerida",
    tipo:        "Keynote Speaker - ajustar",
    tema:        "Beyond Univariate Models: Statistical Challenges and Opportunities in Multi-Trait Analysis
",
    foto:        "",
    resumo:      "The joint analysis of multiple correlated traits is increasingly important in areas such as genomics, agriculture, and public health. Moving beyond univariate approaches, multi-trait analysis requires appropriate measures of association that generalize correlation to multivariate settings. In this talk, I focus on mathematical frameworks for quantifying associations between sets of variables, such as the RV coefficient, as a natural multivariate extension of correlation, and illustrate how such measures can capture dependence structures among traits and reveal meaningful associations in practice.\n \nA particular emphasis is placed on applications of multi-trait analysis in genome wide association studies (GWAS), where leveraging correlated phenotypes can increase power and provide novel biological insights. I also present empirical performance comparisons that illustrate the practical advantages and limitations of different multivariate association measures in realistic high-dimensional settings. I discuss key challenges arising in high-dimensional settings, including instability, overfitting, and interpretability, and highlight recent methodological advances based on regularization.
"
  },
  {
    nome:        "Amanda",
    instituicao: "Universidade Federal do Paraná (UFPR)",
    tipo:        "Palestrante Convidada - ajustar",
    tema:        "Modelagem de quantis condicionais em dados eletrocardiográficos: uma aplicação da regressão quantílica",
    foto:        "",
    resumo:      "O eletrocardiograma (ECG) é uma ferramenta fundamental na prática clínica para avaliação da atividade elétrica cardíaca, sendo essencial a definição de limites de normalidade para a correta identificação de alterações. Estudos recentes, evidenciam a variabilidade dos parâmetros eletrocardiográficos em função de fatores como idade e sexo, além de destacarem a importância de valores de referência específicos para a população latino-americana . Nesse contexto, observa-se que medidas como frequência cardíaca, intervalos PR e QT, e durações das ondas apresentam distribuições assimétricas e heterogêneas ao longo da vida, o que limita abordagens baseadas exclusivamente na média. Diante disso, este trabalho tem como objetivo analisar dados eletrocardiográficos por meio de modelos de regressão quantílica, permitindo investigar o comportamento de diferentes quantis da distribuição das variáveis de interesse em função de covariáveis como idade e sexo. Diferentemente da regressão tradicional baseada na média, a regressão quantílica possibilita uma descrição mais completa da distribuição condicional, sendo especialmente adequada para dados com heterocedasticidade e assimetria, como observado nos parâmetros do ECG."
  },
  {
    nome:        "Prof. Dr. Carlos Eduardo Ferreira",
    instituicao: "Fundação Oswaldo Cruz (Fiocruz) · Brasil",
    tipo:        "Palestrante Convidado - ajustar",
    tema:        "Vigilância epidemiológica baseada em dados: lições da pandemia e perspectivas para o SUS",
    foto:        "",
    resumo:      "A pandemia de COVID-19 expôs tanto as potencialidades quanto as fragilidades dos sistemas de informação em saúde no Brasil. Esta palestra faz um balanço crítico do uso de métodos estatísticos e epidemiológicos durante a crise sanitária, desde modelos de transmissão até estimativas de excesso de mortalidade e avaliação de intervenções não farmacológicas.\n\nPropõe-se uma agenda para o fortalecimento da vigilância epidemiológica no âmbito do SUS, com ênfase em infraestrutura de dados, capacitação em bioestatística e integração entre sistemas de informação de saúde. Serão discutidos protocolos de análise em tempo real e ferramentas de comunicação de risco para o público e para gestores de saúde."
  },
  {
    nome:        "Guilherme Lopes de Oliveira",
    instituicao: "CEFET - MG",
    tipo:        "Palestrante Convidada - ajustar",
    tema:        "A Zero-Inflated Spatiotemporal Model for Underreported Infectious Diseases Counts",
    foto:        "",
    resumo:      "Underreporting of disease cases is a recurring challenge in epidemiology, which introduces bias into the statistical estimation of disease rates. Although many approaches for modeling underreported count data have been proposed in recent years, there remains a lack of methods that address data correction within a spatiotemporal framework. This limitation is especially pronounced in analyzes based on less aggregated time periods and small geographic areas, where excess zeros are frequently observed. Zero-inflation can be caused by both the absence of the disease and under-registration. In this talk, we will introduce a zero-inflated model that explicitly accounts for both the absence of the disease (true zeros) and an imperfect counting process. Conditional on disease presence, the observed count follows a Binomial thinned zero-truncated negative binomial distribution, which may lead to the observation of zeros even when the disease is present but goes undetected. We consider a spatiotemporal setting, and inference follows the Bayesian paradigm. By taking into account underreporting, excess zeros, and spatiotemporal heterogeneity, the proposed modeling strategy aims to provide more realistic estimates for associated disease rates. In this way, decision-makers can rely on more accurate and informative evidence for disease control and prevention. Simulation studies are conducted to explore the model’s behavior and illustrate the identifiability conditions under different levels of disease presence and underreporting, as well as under distinct data-generating processes. We apply the model to the cases of chikungunya infection in Rio de Janeiro, Brazil. This is joint work with Prof. Alexandra Schmidt (McGill University) and was funded by Instituto Serrapilheira, CNPq, and FAPEMIG."
  }
];
