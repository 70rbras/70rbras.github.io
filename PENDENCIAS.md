# Pendências do site da 70ª RBras

Lista viva do que falta fazer no site. Criada em 16/11/2026, a partir da avaliação de usabilidade feita a sete dias do evento (23 a 25/11/2026). Ao concluir um item, mova-o para "Concluído" com a data.

Legenda de quem destrava: **Organização** (precisa de informação ou decisão da comissão), **Planilha** (edição na planilha do Google, sem mexer no repositório), **Site** (código neste repositório).

---

## Urgente: antes de 23/11

### 4. Desligar o aviso "Programação preliminar" na planilha
- **Quem:** Planilha (aba `config`)
- O site já não escreve o aviso à mão; ele agora vem só da planilha. Falta pôr `mostrar_aviso` = `NÃO` (hoje está `SIM`), e o aviso some no ciclo seguinte do fluxo.
- Fora do escopo, sem pedido: `wasa.html` também diz "Programação preliminar" na programação do WASA.

### 5. Pôsteres: regras de montagem
- **Quem:** Organização (conteúdo) + Site
- O painel de cada pôster é o número do trabalho (identificador da submissão); o site já mostra "Painel N" na busca e explica isso nas instruções.
- Faltam nas instruções (`data/apresentadores.js` → `poster.instrucoes`):
  - horário de montagem e de retirada;
  - material de fixação (quem fornece);
  - se o autor precisa estar presente durante a sessão.

### 6. Seção "Durante o evento" e FAQ do evento presencial
- **Quem:** Organização (conteúdo) + Site
- Nenhuma página fala de: crachá, certificado (como e quando sai), contato no local.
- Resolvido em 22/11/2026 (P24): Wi-Fi em `logistica.html#wifi`, com eduroam, Unicamp-Visitante além de IMECC-EVENTOS lidos de `data/wifi.js`; item no menu Logística, categoria "Durante o evento" em `data/faq.js` além do aviso `wifi-2026` em `CONFIG.avisos`, visível nos dias do evento.
- Resolvido em 18/11/2026: restaurantes próximos (`logistica.html#restaurantes`) e estacionamento gratuito do CDC e do IMECC (quadro "De carro" em `logistica.html#como-chegar`). Falta a programação apontar o "Intervalo Livre" para os restaurantes, se a organização quiser.
- Proposta: `data/guia.js` exibido em `logistica.html#no-evento`, item no menu Logística e categoria "Durante o evento" em `data/faq.js`, já criada com o Wi-Fi (credenciamento, certificado, "onde é minha sessão", "perdi o e-mail de envio dos slides").

---

## Decisões em aberto

### 8b. Título da Assembleia na planilha cita o Prêmio Destaque
- **Quem:** Organização decide; Planilha executa
- Decisão de 18/11: o site não informa quando os prêmios são entregues. Mas a atividade `REUNIAO-RBRAS` se chama "Assembleia Geral Ordinária da RBras e Prêmio Destaque RBras", e esse título aparece na programação e em `logistica.html#local`.
- Se a decisão vale também para o Destaque, renomear na planilha para "Assembleia Geral Ordinária da RBras".

### 9. Ocultar o jantar
- **Quem:** Organização pede; Site executa
- Quando pedirem: `CONFIG.jantar.visivel = false` em `data/config.js` (some seção, aviso, card de datas e link na programação). Lembrar de somar um a `VERSAO` em `sw.js`.
- Agência e conta bancária ficaram fora de propósito; só chave Pix e favorecido.

---

## Melhorias menores

### 13. Nomes da organização do WASA escritos à mão
- **Quem:** Site (+ Planilha, se as pessoas ganharem ficha)
- `wasa.html` traz à mão os cinco nomes da Comissão Organizadora do WASA e o nome da contato (Daiane de Souza) no cartão "Contato". Fogem da regra de fonte única; o verificador não reclama porque não são membros de comissão nem convidados da RBras.
- Caminho: lista em `data/wasa.js` (ou fichas em `pessoas_cadastro` com ids), renderizada pela página.

### 12. Depois do evento
- Home: hoje mostra "A 70ª RBras foi encerrada. Obrigado pela participação!" a partir de 26/11. Avaliar conteúdo pós-evento (certificados, fotos, premiados dos concursos).
- `data/premios.js`: preencher os premiados de Tese, Dissertação e IC.

---

## Concluído

- 18/11/2026: CDC sem "como chegar" por sala: orientação padrão do prédio ("Siga as indicações na recepção do CDC.") em `CONFIG.predios.CDC.como_chegar`, usada na programação, em `apresentadores.html` e no cartão do prédio.
- 18/11/2026: Texto "Programação preliminar" retirado do HTML de `programacao.html`; corrigido o CSS que impedia `mostrar_aviso = NÃO` de esconder o aviso.
- 18/11/2026: Painel do pôster = número do trabalho: "Painel N" na busca e no diálogo, instrução "Onde fixar" e botão "Encontre seu trabalho" em `apresentadores.html`.
- 18/11/2026: Rotas até o CDC e até o IMECC para aeroportos, rodoviária, hotéis e gráficas.
- 18/11/2026: Momento de entrega dos prêmios retirado do site (etapa "Entrega do prêmio" e campo `entrega_atividade`).
- 18/11/2026: Frase sobre 4:3 retirada das instruções de apresentação oral.
- 18/11/2026: Convite para instalar o aplicativo: seção na Home (`#app-convite`), faixa na programação (pode ser fechada) e pergunta no FAQ.
- 18/11/2026: Token `--navy` definido como alias de `--blue` em `assets/style.css`: várias regras antigas o usavam sem que existisse.
- 17/11/2026: Endereço do WASA visível: seção Local logo após Sobre (sala, endereço completo, mapa embutido, "Ver no mapa" e "Rota até aqui", foto do IMECC sem o logo da RBras), caixa "Local" de Sobre e selo do hero levando a `#local-wasa`, chip da Home apontando para `wasa.html#local-wasa`. Sala em `data/wasa.js` (`wasaInfo.sala`).

- 16/11/2026: Tempos de Mini-Conferência (25 + 5 min) e Conferência (55 + 5 min) na tabela de `apresentadores.html#oral`.
- 16/11/2026: Mudanças de 16/11 publicadas (commit e push pelo usuário).
- 16/11/2026: Descrição do jantar (`PREMIACAO`) atualizada na planilha: "Por adesão: valores e pagamento na página inicial".
- 16/11/2026: Programação como item próprio do menu; botões do Hero ("Ver Programação", "Encontre seu trabalho", "Como chegar"); inscrição rebaixada e oculta após o 3º Lote.
- 16/11/2026: Modo evento na Home ("Agora / A seguir") e realce do "agora" na programação, com correção do fuso. Conferir um momento com `?agora=2026-11-23T14:10` no endereço.
- 16/11/2026: Avisos encadeados (jantar, credenciamento, programação de hoje, WASA), com `atividade_id` lendo dia, horário e local da planilha.
- 16/11/2026: Selo "Novo" retirado do menu de Prêmios.
- 16/11/2026: Seção do Jantar (`index.html#jantar`), com interruptor `CONFIG.jantar.visivel`.
- 16/11/2026: Dois prédios (CDC e IMECC) em `logistica.html#local`, com endereço, o que acontece em cada um, rota a pé e credenciamento; Hero e metadados atualizados.
