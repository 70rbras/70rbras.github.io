# Pendências do site da 70ª RBras

Lista viva do que falta fazer no site. Criada em 16/11/2026, a partir da avaliação de usabilidade feita a sete dias do evento (23 a 25/11/2026). Ao concluir um item, mova-o para "Concluído" com a data.

Legenda de quem destrava: **Organização** (precisa de informação ou decisão da comissão), **Planilha** (edição na planilha do Google, sem mexer no repositório), **Site** (código neste repositório).

---

## Urgente: antes de 23/11

### 3. "Como chegar" das salas do CDC
- **Quem:** Planilha (aba `locais`)
- Os locais `CDC-A1`, `CDC-A2`, `CDC-A3`, `CDC-RECEPCAO` e `CDC-GERAL` têm `como_chegar` vazio. As salas do IMECC já têm.
- Uma frase por sala (ex.: onde fica a Recepção, em que andar fica cada auditório) aparece nos cartões da programação.

### 4. Retirar o aviso "Programação preliminar"
- **Quem:** Organização decide; Planilha + Site executam
- Se a programação estiver fechada:
  - Planilha, aba `config`: `mostrar_aviso` = `NÃO`.
  - Site: o cabeçalho de `programacao.html` tem o texto escrito à mão ("Programação preliminar - sujeita a alterações"); deveria vir do JSON ou sair junto.

### 5. Pôsteres: painel e regras
- **Quem:** Organização + Planilha + Site
- O que é o painel: a coluna `painel` da aba `trabalhos` guarda a identificação do suporte físico onde cada pôster fica pendurado no Saguão do IMECC (ex.: 1 a 136 na sessão P1, ou A-12 se os suportes forem por fileira). Serve para o autor saber onde montar e para o visitante achar o pôster numa sessão com mais de cem. Só faz sentido se a organização numerar os suportes no local; se não houver numeração, o item cai.
- Nenhum dos 425 trabalhos tem `painel` preenchido; as sessões têm 110 a 136 pôsteres cada. A busca já mostra o painel quando ele existe.
- Faltam nas instruções (`data/apresentadores.js` → `poster.instrucoes`):
  - horário de montagem e de retirada;
  - material de fixação (quem fornece);
  - se o autor precisa estar presente durante a sessão.
- Site: botão "Encontre seu trabalho" (`programacao.html#busca`) em `apresentadores.html`. Na Home já existe.

### 6. Seção "Durante o evento" e FAQ do evento presencial
- **Quem:** Organização (conteúdo) + Site
- Nenhuma página fala de: Wi-Fi/eduroam (o minicurso M3 pede laptop com rede sem fio), almoço e onde comer (a programação diz só "Intervalo Livre"), estacionamento, crachá, certificado (como e quando sai), contato no local.
- Proposta: `data/guia.js` exibido em `logistica.html#no-evento`, item no menu Logística e categoria "Durante o evento" em `data/faq.js` (credenciamento, certificado, Wi-Fi, "onde é minha sessão", "perdi o e-mail de envio dos slides").
- Quando houver Wi-Fi, vale um aviso em `CONFIG.avisos` para os dias do evento.

---

## Decisões em aberto

### 7. Destino das rotas de aeroporto e de hotéis
- **Quem:** Organização
- Hoje as rotas de aeroportos, rodoviária, hotéis e gráficas apontam para o IMECC (`CONFIG.evento.endereco_rota`).
- Gráficas: IMECC faz sentido (pôsteres ficam lá).
- Aeroportos e hotéis: o primeiro dia começa no CDC (credenciamento e abertura). Trocar para o CDC é mudar o destino em `logistica.html` para `CONFIG.predios.CDC.rota`.

### 8. Entrega dos prêmios de Tese, Dissertação e IC
- **Quem:** Organização
- Só o Prêmio Destaque tem momento definido (Assembleia, 24/11). Quando os demais forem definidos, ligar cada prêmio a uma atividade da programação com `entrega_atividade` em `data/premios.js`, como o Destaque.

### 9. Ocultar o jantar
- **Quem:** Organização pede; Site executa
- Quando pedirem: `CONFIG.jantar.visivel = false` em `data/config.js` (some seção, aviso, card de datas e link na programação). Lembrar de somar um a `VERSAO` em `sw.js`.
- Agência e conta bancária ficaram fora de propósito; só chave Pix e favorecido.

---

## Melhorias menores

### 10. Frase sobre 4:3 em apresentações orais
- `data/apresentadores.js` diz que, em 4:3, "o conteúdo é cortado nas laterais". Na prática o slide aparece com faixas pretas nas laterais. Revisar a redação.

### 11. Divulgar o aplicativo instalável
- O site já funciona offline (service worker) e abre na programação quando instalado. Um aviso "Adicione à tela inicial" ajudaria no campus com rede ruim.

### 12. Depois do evento
- Home: hoje mostra "A 70ª RBras foi encerrada. Obrigado pela participação!" a partir de 26/11. Avaliar conteúdo pós-evento (certificados, fotos, premiados dos concursos).
- `data/premios.js`: preencher os premiados de Tese, Dissertação e IC.

---

## Concluído

- 16/11/2026: Mudanças de 16/11 publicadas (commit e push pelo usuário).
- 16/11/2026: Descrição do jantar (`PREMIACAO`) atualizada na planilha: "Por adesão: valores e pagamento na página inicial".
- 16/11/2026: Programação como item próprio do menu; botões do Hero ("Ver Programação", "Encontre seu trabalho", "Como chegar"); inscrição rebaixada e oculta após o 3º Lote.
- 16/11/2026: Modo evento na Home ("Agora / A seguir") e realce do "agora" na programação, com correção do fuso. Conferir um momento com `?agora=2026-11-23T14:10` no endereço.
- 16/11/2026: Avisos encadeados (jantar, credenciamento, programação de hoje, WASA), com `atividade_id` lendo dia, horário e local da planilha.
- 16/11/2026: Entrega do Prêmio Destaque lida da programação; selo "Novo" retirado do menu.
- 16/11/2026: Seção do Jantar (`index.html#jantar`), com interruptor `CONFIG.jantar.visivel`.
- 16/11/2026: Dois prédios (CDC e IMECC) em `logistica.html#local`, com endereço, o que acontece em cada um, rota a pé e credenciamento; Hero e metadados atualizados.
