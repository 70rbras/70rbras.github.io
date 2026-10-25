# Fontes únicas de verdade do site da 70ª RBras

Este arquivo responde a uma pergunta: onde se edita cada informação que o site publica. Ele existe porque a mesma informação já esteve escrita em dois lugares, o que fez o site exibir horário, nome e endereço divergentes conforme a página. A regra que substitui esse estado é simples: cada fato mora em um arquivo só, enquanto as páginas apenas o exibem.

A verificação dessa regra é automática. O arquivo `scripts/checar_fontes.mjs` varre o repositório procurando fato escrito à mão em página, recusando a publicação quando encontra algo fora da lista de pendências conhecidas. O plano completo de correção está em `claude/plano-fontes-unicas-70rbras.md`, no projeto da comissão.

Quem mantém o site deve ler as seções 1 e 2. Quem apenas edita conteúdo durante o evento precisa das seções 1 e 4. A seção 5 interessa a quem for assumir o site na 71ª RBras.

---

## 1. Onde editar cada informação

| Informação | Onde editar | Quem exibe |
|---|---|---|
| Programação, salas, trabalhos, pessoas do programa | Planilha do Google, abas publicadas em CSV | `programacao.html`, `apresentadores.html` |
| Nome, tema, datas, endereço, e-mail, links externos | `data/config.js` | todas as páginas |
| Endereço do local, em campos separados | `data/config.js`, campos `local_logradouro` a `local_cep` | `logistica.html`, `wasa.html` |
| Destino usado no cálculo de rota | `data/config.js`, campo `endereco_rota` | `logistica.html` |
| Prazos, lotes de inscrição | `data/dates.js` | home, `inscricoes.html`, `premios.html` |
| Valores de inscrição | `data/inscricoes.js` | `inscricoes.html` |
| Convidados além das palestras | `data/speakers.js` | `palestrantes.html`, home |
| Comissões | `data/committee.js` | `comissoes.html`, `premios.html` |
| Prêmios além de premiados | `data/premios.js` | `premios.html`, faixa da home |
| Regras de submissão | `data/submissions.js` | `premios.html`, home |
| WASA | `data/wasa.js` | `wasa.html`, bloco da home |
| Fundo de Financiamento | `data/fundo.js` | `fundo-estudante.html` |
| Hospedagem, gráficas, perguntas frequentes | `data/hotels.js`, `data/graficas.js`, `data/faq.js` | `logistica.html`, `faq.html` |
| Faixa de aviso no topo | `data/config.js`, campo `avisos` | todas as páginas |

Dois arquivos nunca se editam à mão. O primeiro é `data/programacao.json`, que o fluxo automático regrava de hora em hora a partir da planilha. O segundo é qualquer página `.html`, que só muda por alteração de estrutura ou de estilo.

Alguns arquivos da tabela ainda estão sendo criados pelo plano de correção. Enquanto a tarefa correspondente não terminar, a informação continua no lugar antigo, registrada como pendência em `scripts/fontes-unicas.json`. A seção 5 mostra como ler esse arquivo.

---

## 2. Como conferir antes de publicar

A verificação roda com um comando, dentro da pasta do repositório. Ela não altera nada: apenas lê os arquivos, comparando o que as páginas escrevem com o que os arquivos de dados guardam. O resultado sai na tela, com arquivo, linha além da regra violada.

```
node scripts/checar_fontes.mjs
```

Existe um segundo modo, voltado às pessoas cadastradas. Ele agrupa os registros pelo currículo Lattes além da foto, mostrando quando a mesma pessoa aparece com nomes ou instituições diferentes. É o comando a rodar antes de mexer em comissões.

```
node scripts/checar_fontes.mjs --pessoas
```

O mesmo verificador roda sozinho no GitHub, em duas situações. A primeira é a cada envio de alteração, pelo fluxo `fontes.yml`. A segunda é a cada atualização horária da programação, dentro do fluxo `programacao.yml`, antes da publicação do JSON.

---

## 3. Quando a verificação recusar a publicação

A recusa não derruba o site. O fluxo da programação só grava `data/programacao.json` depois de a verificação passar, portanto uma recusa deixa a última versão boa no ar. O prejuízo é o atraso da atualização, nunca a queda da página.

A primeira coisa a fazer é ler a mensagem na aba Actions do repositório. Ela diz qual arquivo, qual linha além de qual regra foi violada. Quando a causa estiver na planilha, a correção é feita na planilha, com nova execução pelo botão Run workflow.

Quando a causa estiver no repositório, existem dois caminhos. O primeiro é corrigir, movendo o fato para o arquivo de dados que lhe corresponde na tabela da seção 1. O segundo, válido apenas para pendência conhecida, é registrar a entrada em `scripts/fontes-unicas.json`, com a tarefa do plano que vai resolvê-la.

---

## 4. Como reverter uma publicação ruim

Cada alteração publicada é um commit próprio, com identificador da tarefa na mensagem. A reversão desfaz apenas aquela alteração, sem tocar nas demais. O site volta ao estado anterior no minuto seguinte, pois o GitHub Pages publica o ramo principal.

```
git log --oneline -10
git revert <código do commit>
git push
```

Durante o evento a comissão altera a planilha, não o repositório. Qualquer correção de sala, de horário ou de aviso entra na planilha, aparecendo no site na atualização seguinte. Para publicar na hora, use o botão Run workflow do fluxo "Atualizar programação", na aba Actions.

Quem tem acesso de escrita ao repositório além da planilha deve ser registrado aqui pela comissão. Essa informação não está no código, portanto precisa ser escrita por alguém. Sem ela, uma emergência durante o evento vira busca por quem tem a senha.

---

## 5. Estado das pendências

O arquivo `scripts/fontes-unicas.json` é a lista do que ainda falta. Cada entrada registra o arquivo, a regra violada, quantas ocorrências existem hoje além da tarefa do plano que vai eliminá-las. O campo de limite impede o retrocesso: uma ocorrência nova no mesmo arquivo passa do limite, portanto a verificação falha.

As tarefas D0.1 a D0.3, que instalaram o verificador além deste registro, foram concluídas em 23/10/2026. As tarefas D1.1, que deu fonte única aos horários de `apresentadores.html`, além da D1.2, que removeu a página de prévia congelada, foram concluídas em 24/10/2026. No mesmo dia foram concluídas a D1.3 além da D2.1, que levou a identidade do evento para os componentes compartilhados. A D2.2, que separou o endereço do IMECC em campos próprios, além da D2.3, que unificou a redação do tema, foram concluídas em 25/10/2026. O retrato inicial, de 23/10/2026, tinha 103 ocorrências distribuídas em 26 entradas; depois da D2.3 restam 82 ocorrências em 13 entradas. Duas entradas de `index.html` tiveram o limite reduzido em vez de removidas, pois as ocorrências restantes são metadados, que só saem com o gerador da D5.1. As maiores são os dezoito valores de inscrição escritos em `inscricoes.html`, as dezessete pessoas repetidas em `data/committee.js`, além das nove datas somadas a nove valores em `fundo-estudante.html`. Cada tarefa concluída remove as suas entradas.

| Tarefa do plano | O que ela elimina | Estado |
|---|---|---|
| D1.3 | contagem de trabalhos escrita em `programacao.html` | concluída em 24/10/2026 |
| D2.1 | ligação repetida do botão Área do Inscrito, nome do evento no rodapé | concluída em 24/10/2026 |
| D2.2 | endereço do IMECC repetido em `logistica.html` além de `wasa.html` | concluída em 25/10/2026 |
| D2.3 | tema além das datas escritas na home e em `logistica.html` | concluída em 25/10/2026 |
| D3.2 | datas de lote escritas em `inscricoes.html` | pendente |
| D3.3 | valores de inscrição escritos em `inscricoes.html` | pendente |
| D3.4 | dados sem consumidor em `data/submissions.js` | pendente |
| D3.5 | prazos além de valores do Fundo e do WASA | pendente |
| D4.2 | pessoas repetidas em `data/committee.js` | pendente |
| D4.3 | dados do WASA sem consumidor, datas escritas em `wasa.html` | pendente |
| D5.1 | metadados escritos à mão em `premios.html` além de `programacao.html` | pendente |

Quando a lista ficar vazia, o site terá uma única fonte para cada informação publicada. O verificador continua rodando depois disso, com a função de impedir que o problema volte. É o que permite à próxima comissão assumir o repositório sem repetir este trabalho.
