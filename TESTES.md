# Conferência cruzada do site da 70ª RBras

Este arquivo registra a execução dos roteiros de teste do repositório, com resultado além de data de cada passo. Ele existe porque verificação sem registro não sobrevive à troca de pessoas entre edições da reunião. Quem repetir um roteiro acrescenta uma execução nova, sem apagar a anterior.

A seção 1 é o roteiro da tarefa D6.1 do plano de fontes únicas, que confere se o site publica a mesma informação por todos os caminhos. As seções seguintes ficam reservadas aos roteiros do plano do aplicativo, que ainda não foram executados.

O princípio das duas é o mesmo. Não basta o verificador automático sair com código 0: é preciso comparar, item a item, o que a planilha diz com o que cada página exibe, pois o verificador enxerga duplicidade de texto, não erro de conteúdo.

---

## 1. D6.1, conferência cruzada de conteúdo

**Execução de 28/10/2026**, sobre o `main` em `06dc604`, com a planilha lida ao vivo nas cinco abas publicadas em CSV. Os passos 1, 2, 3, 5 e 6 foram executados por leitura das páginas servidas localmente, comparadas com a planilha além dos arquivos de `data/`. O passo 7 foi executado contra o site publicado em `https://70rbras.org`, na parte que não depende de aparelho.

Dois passos dependiam de informação que não está no repositório, tendo sido fechados por conferência do Benilton no mesmo dia. O passo 4 exigia a planilha de valores aprovada pela comissão, que não vive aqui. O passo 7 exigia um aparelho com aplicativo de mensagem, para ver a prévia montada de fato.

O resultado geral é de conformidade, com os oito passos concluídos. Nenhuma divergência de conteúdo foi encontrada entre planilha, arquivos de dados além das páginas. Dois defeitos apareceram no caminho, ambos sem relação com fonte única: um de navegação, registrado na seção 1.9, outro de valor ausente, registrado no passo 8.

O roteiro da tarefa D6.1 tem sete passos. O oitavo nasceu da própria execução, em 28/10/2026, depois que um defeito escapou dos sete: ele custa pouco, enquanto cobre uma classe de erro que nenhum verificador do repositório alcança.

### 1.1 Passo 1: cinco atividades, da planilha às páginas

Concluído, sem divergência. As cinco atividades foram sorteadas entre as que têm `publicar = SIM`, conferindo data, horário de início, horário de fim, título, nome do local, sala além da instrução de chegada.

| Atividade | Planilha contra `data/programacao.json` | Página |
|---|---|---|
| `ALMOCO-23` | igual nos sete campos | `programacao.html` |
| `CAFE-24A` | igual nos sete campos | `programacao.html` |
| `CAFE-25B` | igual nos sete campos | `programacao.html` |
| `PREMIACAO` | igual nos sete campos | `programacao.html` |
| `REUNIAO-RBRAS` | igual nos sete campos, inclusive a instrução de chegada | `programacao.html` |

As sessões que o autor de trabalho consulta foram conferidas à parte, nas duas páginas que as exibem. As três sessões de pôsteres além das dez de comunicação oral aparecem em `apresentadores.html` com data, horário, local além de instrução de chegada idênticos aos do JSON, que por sua vez é idêntico à planilha. As sessões `CO-1` e `P1` foram conferidas também em `programacao.html`, onde exibem o mesmo horário, a mesma sala além da mesma instrução.

### 1.2 Passo 2: contagem de trabalhos

Concluído, sem divergência. A planilha publica 402 trabalhos, dos quais 392 com `publicar = SIM`, sendo 360 pôsteres além de 32 comunicações orais. O JSON traz os mesmos 392, na mesma divisão. A frase exibida em `programacao.html` diz "São 392 trabalhos aceitos: 360 pôsteres e 32 comunicações orais", portanto bate com as duas fontes.

### 1.3 Passo 3: identidade do evento em cinco páginas

Concluído, sem divergência. Foram conferidas `index.html`, `logistica.html`, `faq.html`, `wasa.html` além de `comissoes.html`.

| Informação | Fonte | Resultado |
|---|---|---|
| Nome do evento, por extenso, no rodapé | `CONFIG.evento.nome` | presente nas cinco páginas |
| E-mail de contato | `CONFIG.evento.email_contato` | presente nas cinco páginas |
| Tema | `CONFIG.evento.tema` | presente em `index.html` |
| Datas de exibição | `CONFIG.evento.datas_exibicao` | presente em `index.html` além de `logistica.html` |
| Logradouro além do CEP | `CONFIG.evento.local_logradouro`, `local_cep` | presentes em `logistica.html` |

O bloco do local em `logistica.html` exibe três linhas, com a cidade uma única vez: logradouro, bairro, depois "Campinas, SP · CEP 13083-859". É a confirmação de que o achado A4 do plano, que duplicava a cidade, está corrigido.

### 1.4 Passo 4: dezoito valores de inscrição

Concluído, sem divergência. A tabela publicada em `inscricoes.html` é montada a partir de `data/inscricoes.js`, exibindo os dezoito valores abaixo, com os períodos lidos de `data/dates.js`. O verificador confirma que nenhum valor em reais está escrito no HTML.

| Categoria | 1º Lote | 2º Lote | 3º Lote |
|---|---|---|---|
| Graduação, sócio RBras, ABE ou IBS | R$ 140 | R$ 155 | R$ 185 |
| Graduação, não-sócio | R$ 240 | R$ 265 | R$ 315 |
| Pós-graduação, sócio RBras, ABE ou IBS | R$ 220 | R$ 245 | R$ 290 |
| Pós-graduação, não-sócio | R$ 330 | R$ 365 | R$ 430 |
| Pesquisador ou profissional, sócio RBras, ABE ou IBS | R$ 390 | R$ 430 | R$ 510 |
| Pesquisador ou profissional, não-sócio | R$ 660 | R$ 730 | R$ 860 |

Os dezoito valores acima foram conferidos pelo Benilton, em 28/10/2026, contra a planilha de valores aprovada pela comissão, que não está no repositório. Nenhuma divergência. A faixa de estado do lote foi conferida no mesmo dia: a página exibe uma única frase calculada, "2º Lote vigente até 31 de outubro de 2026", o que confirma a correção do achado A5, que tinha duas frases contraditórias.

### 1.5 Passo 5: WASA na página além da home

Concluído, sem divergência. A data de 26 de novembro de 2026 vem do registro `wasa` de `data/dates.js`. As taxas de R$ 50 para profissionais além de R$ 25 para estudantes vêm de `wasaInscricao.taxas`, em `data/wasa.js`, aparecendo apenas na página do WASA. O e-mail de contato do workshop aparece na página, vindo do mesmo arquivo.

O endereço do formulário de inscrição existe em um único lugar do repositório, em `data/wasa.js`, sendo consumido por um link em `wasa.html` além de um link em `index.html`. A descrição do WASA aparece completa na home, terminando em "marcada por liderança, dedicação e excelência", o que confirma a correção do achado E4, que a truncava.

### 1.6 Passo 6: cinco pessoas nas páginas em que aparecem

Concluído, sem divergência de cadastro. Foram conferidas cinco pessoas, pelo nome, pela instituição além da foto, em todas as páginas que as exibem.

| Pessoa | Onde aparece | Resultado |
|---|---|---|
| Benilton Carvalho | `comissoes.html` | nome, instituição além de foto conferem com `data/pessoas.js` |
| Carlos Cesar Trucios Maza | `comissoes.html` | grafia oficial, sem a segunda grafia que existia antes da D4.2 |
| Vinicius Calsavara | `palestrantes.html`, `wasa.html` | mesma grafia nas duas páginas |
| Francisco Louzada Neto | `index.html`, `wasa.html` | mesma grafia nas duas páginas |
| Prof. Dr. Dalton Francisco de Andrade | `index.html`, `premios.html` | mesma grafia nas duas páginas, vinda de `data/premios.js` |

Duas observações de leitura, que não são divergência. Na programação do WASA além do bloco do WASA na home, a pessoa aparece só pelo nome, sem instituição nem foto, porque esses blocos são listas de horário, não fichas. Francisco Louzada Neto segue sem instituição no cadastro, pendência já registrada no documento de estado das tarefas, junto de outras três pessoas do WASA.

### 1.7 Passo 7: prévia de link

Concluído, sem divergência. Os cinco endereços abaixo foram buscados no site publicado, com a leitura do bloco entre `<!-- meta:inicio -->` e `<!-- meta:fim -->` do HTML entregue pelo servidor, que é exatamente o que o robô de prévia lê.

| Endereço                                   | Resultado                                                                                                          |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `https://70rbras.org/`                     | título, descrição, `og:title`, `og:description`, `og:url`, `og:image` além de `twitter:card` presentes e coerentes |
| `https://70rbras.org/programacao.html`     | idem, com descrição própria da página                                                                              |
| `https://70rbras.org/premios.html`         | idem, com `og:image` apontando para a foto da pessoa premiada e `twitter:card` igual a `summary`                   |
| `https://70rbras.org/wasa.html`            | idem, com data do WASA                                                                                             |
| `https://70rbras.org/fundo-estudante.html` | idem, com montantes além do prazo do Fundo                                                                         |

As duas imagens de compartilhamento respondem com código 200: o logotipo, com 88 KB em PNG, além da foto da pessoa premiada, com 28 KB em JPEG. O texto publicado já traz a redação sem marca de gênero além do mês em minúscula, portanto a publicação está em dia com o `main`.

A conferência visual foi feita pelo Benilton, em 28/10/2026, colando os cinco endereços num aplicativo de mensagem. A prévia monta corretamente nos cinco casos, com imagem, título além de descrição legíveis no cartão.

### 1.8 Passo 8: varredura por valor ausente nas páginas

Concluído, com um defeito encontrado além de corrigido. Este passo não consta do roteiro original: ele foi acrescentado em 28/10/2026, depois que a caixa "Convidados confirmados" da home apareceu com "undefined" no lugar dos nomes, durante os testes em celular.

O procedimento é renderizar cada página num navegador, depois procurar no texto visível as marcas que o JavaScript deixa quando lê campo que não existe: `undefined`, `NaN` além de `[object Object]`. Procurar no código-fonte não serve, pois o conteúdo é montado em tempo de execução. É também por isso que `scripts/checar_fontes.mjs` não alcança esse erro: ele procura fato duplicado no arquivo, não valor ausente na tela.

O resultado da execução de 28/10/2026 foi uma ocorrência, na home, com sete convidados exibidos como "undefined · undefined". A causa foi a tarefa D4.2, que moveu nome e instituição para `data/pessoas.js` adaptando `palestrantes.html`, sem adaptar a caixa da home. Depois da correção as onze páginas saem limpas nas três marcas.

### 1.9 Defeito encontrado durante a execução

O endereço com âncora de atividade não abre a atividade quando ela não é do dia exibido por padrão. Em `assets/programacao.js`, a leitura de `location.hash` aceita apenas `geral`, `dia` além de `busca`: qualquer outro valor cai no modo padrão, sem selecionar o dia da atividade. Como a visão dia a dia desenha um dia por vez, `programacao.html#CO-5` abre no dia 23, onde o elemento `CO-5` nem existe no documento.

O efeito prático recai sobre quem recebe o link da própria sessão. Dos treze blocos de apresentação, apenas os dois do primeiro dia abrem corretamente por âncora. O `CLAUDE.md`, na seção 8, descreve o comportamento pretendido, que é a âncora levar à atividade.

O item fica registrado sem correção, por estar fora do escopo da D6.1, cuja especificação lista apenas este arquivo. Ele também alcança o plano do aplicativo, cuja tarefa T1.5 propõe gravar no arquivo de calendário um endereço nesse mesmo formato.

---

## 2. T4.1, roteiro do aplicativo em aparelho real

Este roteiro precisa de aparelho de verdade: um iPhone com Safari além de um Android com Chrome. O emulador do navegador de mesa não reproduz a instalação na tela inicial, nem o comportamento de armazenamento do Safari, nem o leitor de tela do sistema. Nenhuma execução registrada até 28/10/2026.

O escopo do aplicativo foi reduzido às fases 0 e 2 em 27/10/2026, portanto o roteiro encolheu de nove para oito passos. Saíram os passos de agenda pessoal além de exportação para calendário, que dependiam da fase 1, mais o de faixa de aviso da comissão, que dependia da fase 3.

Quem executar registra abaixo o aparelho, o sistema, o navegador além do resultado de cada passo, com a data. Um passo que falhar fica escrito do mesmo modo que um que passou: o valor deste arquivo está em registrar o que aconteceu, não em registrar sucesso.

| Passo | O que fazer | O que precisa acontecer |
|---|---|---|
| 1 | Abrir `https://70rbras.org` e instalar na tela inicial. No iPhone: Compartilhar, depois Adicionar à Tela de Início. No Android: menu do Chrome, depois Instalar aplicativo | o ícone aparece na tela inicial, com o numeral legível, sem o nome cortado |
| 2 | Abrir pelo ícone da tela inicial | o aplicativo abre sem a barra de endereço do navegador, com a barra do sistema na cor azul do evento |
| 3 | Visitar a programação, a página de apresentadores além de outras duas páginas | todas abrem normalmente, com a programação listando os três dias |
| 4 | Ligar o modo avião, fechar o aplicativo, abrir de novo pelo ícone | as páginas visitadas continuam abrindo, com a grade da programação desenhada |
| 5 | Ainda em modo avião, usar a busca de trabalhos por autor além de por número | a busca responde, pois o JSON está guardado no aparelho |
| 6 | Ainda em modo avião, olhar o carimbo no topo da programação, depois tocar em Tentar atualizar | o selo diz "cópia guardada neste aparelho"; o botão responde "Sem rede agora", sem afirmar que está em dia |
| 7 | Desligar o modo avião. Alterar um horário na planilha, rodar o fluxo pelo botão Run workflow, voltar ao aplicativo | aparece a faixa com o botão Recarregar; a página não recarrega sozinha; tocando em Recarregar, o horário novo aparece |
| 8 | Ligar o leitor de tela, VoiceOver no iPhone ou TalkBack no Android, percorrer a programação | os botões de dia além dos cartões de atividade são anunciados com texto que faz sentido ouvido, não apenas lido |

### Execuções

#### iPhone, Safari, 28/10/2026

Executada pelo Benilton, sobre o site publicado. Os passos 1 a 6 foram percorridos, todos com o resultado esperado. Os passos 7 e 8 não foram executados, portanto seguem pendentes neste aparelho.

| Passo | Resultado |
|---|---|
| 1 | aprovado, instalou na tela inicial pelo Safari |
| 2 | aprovado, abre sem a barra de endereço |
| 3 | aprovado |
| 4 | aprovado, as páginas visitadas abrem em modo avião |
| 5 | aprovado, a busca de trabalhos responde sem rede |
| 6 | aprovado, o selo indica a cópia guardada |
| 7 | não executado, por depender de alteração real na planilha seguida do botão Run workflow |
| 8 | não executado, por depender do VoiceOver |

Durante estes testes apareceu o defeito da caixa "Convidados confirmados" da home, que exibia "undefined" no lugar dos sete nomes. Ele não é do aplicativo: atinge o site em qualquer navegador, inclusive no computador. A causa foi a tarefa D4.2, com a correção publicada no mesmo dia, além do passo 8 da seção 1 nascer dessa falha.

#### Android, Chrome

Pendente. Nenhum passo executado até 28/10/2026. É a execução que mais falta, pois o Android responde por boa parte do público, além de ser onde o convite de instalação do Chrome se comporta de modo diferente do Safari.

#### O que fica em aberto

Dois passos seguem sem execução em qualquer aparelho. O passo 7 é o único que exercita de ponta a ponta a faixa de dado novo, que é o caminho pelo qual a comissão corrige uma sala durante o evento. O passo 8, do leitor de tela, não tem substituto: nenhuma auditoria automática diz se o que é anunciado faz sentido ouvido.

---

## 3. T4.2, auditoria de desempenho e acessibilidade

Reservado para o resultado do Lighthouse em perfil móvel, com rede limitada, nas páginas `index.html`, `programacao.html` além de `apresentadores.html`. O critério é 90 ou mais em desempenho, acessibilidade além de melhores práticas, sem erro de contraste abaixo de 4,5 para 1 em texto normal, sem alvo de toque abaixo de 44 pixels, sem imagem sem texto alternativo.

É também onde o critério de instalabilidade do Chrome pode enfim ser conferido. Ele exige manifesto somado a service worker com manipulador de `fetch`, que passaram a existir com as tarefas T0.2 e T2.1.

Nenhuma execução registrada até 28/10/2026.
