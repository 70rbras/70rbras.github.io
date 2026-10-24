# CLAUDE.md — Memória do Projeto: Site 70ª RBras 2026

Este arquivo documenta tudo que Claude precisa saber sobre este projeto para trabalhar com eficiência sem precisar re-explorar os arquivos a cada sessão.

---

## 1. O que é este projeto

Site oficial da **70ª Reunião Anual da Região Brasileira da Sociedade Internacional de Biometria (RBras)**.

- **Tema:** "Dados que revelam vida: Estatística e Ciência de Dados na Biometria"
- **Data do evento:** 23–25 de novembro de 2026 (segunda a quarta)
- **Local:** IMECC — Instituto de Matemática, Estatística e Computação Científica, Unicamp, Campinas, SP
  - Endereço: Rua Sérgio Buarque de Holanda, 651 — Cidade Universitária Zeferino Vaz, Campinas, SP · CEP 13083-859
- **Domínio:** 70rbras.org
- **Contato:** 70rbras@unicamp.br
- **Repositório GitHub:** site-rbras-claude

---

## 2. Estrutura de arquivos

```
site-rbras-claude/
├── index.html            # Home: Hero, Sobre, teasers, Local, Datas, Submissões, Comissões, Patrocinadores, CTA
├── palestrantes.html     # Página dedicada: cards completos + modal de bios
├── programacao.html      # Página dedicada: grade completa dos 3 dias
├── inscricoes.html       # Página dedicada: tabela de valores, lotes, benefícios
├── apresentadores.html   # Instruções para Pôster e Comunicação Oral (modelos A0, sessões lidas de schedule.js)
├── comissoes.html        # Todas as comissões (render de COMMITTEE)
├── cientifico.html       # Apenas redireciona (#comissao → comissoes.html; demais → apresentadores.html); não editar
├── logistica.html        # Local, como chegar, hospedagem, gráficas (atalhos no topo)
├── local.html            # Apenas redireciona para logistica.html (preserva #ancora); não editar
├── faq.html              # Perguntas frequentes
├── premios.html          # Prêmios RBras: vitrine Premiados 2026 + Destaque + Concurso Tese/Dissertação/IC
├── premio.html           # Apenas redireciona para premios.html (preserva #ancora); não editar
├── fundo-estudante.html  # Fundo de Financiamento ao estudante
├── wasa.html             # WASA (evento satélite)
├── LEIAME.md             # Guia de manutenção em português
├── FONTES.md             # Onde se edita cada informação; regras de fonte única
├── CNAME                 # Configuração de domínio (70rbras.org)
├── CLAUDE.md             # Este arquivo de memória
├── padroniza_fotos.py    # Script Python para normalizar fotos de palestrantes
├── data/
│   ├── config.js         # Configurações gerais do evento
│   ├── dates.js          # Datas e prazos; Home mostra só os abertos/futuros (faixa #proximas-datas)
│   ├── speakers.js       # Palestrantes e resumos das palestras
│   ├── programacao.json  # Programação dos 3 dias (gerada da planilha; NÃO editar à mão)
│   ├── schedule.js       # Programação antiga; agora serve apenas a apresentadores.html
│   ├── committee.js      # Comissões organizadora e científica
│   ├── sponsors.js       # Patrocinadores/apoiadores (grade única, sem tiers)
│   ├── premios.js        # Prêmios e premiados (premios.html + faixa #premios-home na Home)
│   ├── apresentadores.js # Instruções de Pôster e Comunicação Oral (lista vazia = "Instruções em breve")
│   ├── submissions.js    # Modalidades e regras de submissão (premios.html usa o item "concurso")
│   ├── faq.js            # Perguntas frequentes por categoria
│   ├── hotels.js         # Hospedagem (logistica.html#hospedagem)
│   ├── graficas.js       # Gráficas para pôster (logistica.html#graficas)
│   └── wasa.js           # Dados do WASA
├── scripts/
│   ├── build_programacao.py  # Planilha publicada em CSV → data/programacao.json
│   ├── fontes.json           # URLs das abas publicadas
│   ├── checar_fontes.mjs     # Verificador de fontes únicas (Node, sem dependência)
│   └── fontes-unicas.json    # Lista das pendências conhecidas, por tarefa
└── assets/
    ├── style.css         # CSS compartilhado por TODAS as páginas
    ├── nav.js            # Navbar injetável (carregada por todas as páginas)
    ├── footer.js         # Rodapé injetável (carregado por todas as páginas)
    ├── logos/            # Arquivos de logo (baixados localmente, nunca hotlink)
    ├── documentos/       # PDFs e modelos de pôster (.zip)
    ├── imagens/          # Banners e cartazes
    └── fotos/            # Fotos dos palestrantes (400×400 px, JPG)
```

**Regra de ouro:** Todo conteúdo do site é controlado pelos arquivos em `data/`. As páginas HTML não devem ser editadas para mudanças de conteúdo — apenas para mudanças estruturais de layout ou estilo.

**Fonte única de verdade:** `FONTES.md` diz onde se edita cada informação do site. A regra é verificada por `scripts/checar_fontes.mjs`, que recusa a publicação quando um fato que já tem fonte em `data/` reaparece escrito à mão numa página. As pendências conhecidas ficam em `scripts/fontes-unicas.json`, cada uma com a tarefa de `claude/plano-fontes-unicas-70rbras.md` que vai eliminá-la. Antes de qualquer commit, rodar `node scripts/checar_fontes.mjs`.

**Arquitetura multi-página (desde mai/2026):**
- `assets/style.css` — único arquivo CSS, carregado por todas as páginas
- `assets/nav.js` — injeta a navbar no início do `<body>`; detecta a página ativa via `window.location.pathname` (normaliza URLs sem `.html`, ex.: `/logistica`) e marca o link com classe `.active`
- `assets/footer.js`: injeta o rodapé (colunas Evento, Participar, Logística, Contato)
- Navbar fixa: `assets/style.css` aplica `scroll-margin-top` em todo `[id]`, para que links `#ancora` não fiquem escondidos sob o menu
- Cada página carrega apenas os `data/*.js` de que precisa (ex.: `programacao.html` carrega `assets/programacao.js`, que lê `data/programacao.json`)
- Navbar usa links reais entre páginas; seções que permanecem na Home são referenciadas como `index.html#ancora`

---

## 3. Stack tecnológica

- **Frontend:** HTML5 + CSS3 + JavaScript ES6+ vanilla (sem frameworks)
- **Fontes:** Montserrat + Playfair Display + Inter, via Google Fonts CDN
- **Estilos:** `assets/style.css` (arquivo único externo, compartilhado por todas as páginas)
- **Navbar:** `assets/nav.js` (script injetável que detecta página ativa automaticamente)
- **Dados:** Objetos/arrays JavaScript em `data/*.js`, carregados via `<script>` em cada página
- **Build:** Nenhum processo de build — arquivos estáticos servidos diretamente
- **Deploy:** GitHub Pages (compatível) ou qualquer servidor estático
- **Teste local:** `npx serve .` na raiz do projeto

---

## 4. Paleta de cores (tokens CSS)

| Variável         | Valor     | Uso                        |
|-----------------|-----------|----------------------------|
| `--navy`        | #1A3870   | Cor primária escura        |
| `--blue-mid`    | #2560AC   | Azul médio                 |
| `--teal`        | #2A9080   | Accent principal           |
| `--teal-light`  | #38AAAA   | Accent claro               |
| `--gold`        | #D6A818   | Ação / destaque            |
| `--gold-light`  | #EAC830   | Gold claro                 |
| `--olive`       | #5A9C28   | Verde                      |
| `--off-white`   | #F2F6FA   | Fundo claro                |
| `--text-dark`   | #0C1C3A   | Texto principal            |

---

## 5. Seções do site (navegação)

1. **Hero** — Logo, countdown regressivo, informações do evento, botão de inscrição
2. **Sobre (about)** — Descrição do evento, cards de estatísticas
3. **Palestrantes (speakers)** — Cards clicáveis com modal de bio completa
4. **Programação (schedule)** — Grade dos 3 dias
5. **Datas (dates)** — Cards de datas importantes com status (próxima/ativa/passada)
6. **Local (venue)** — Detalhes do local, placeholder para mapa
7. **Comissões (committees)** — Comissão organizadora e científica
8. **Patrocinadores (sponsors)** — Logos por tier (Ouro, Prata, Bronze/Apoio)
9. **Inscrições (CTA)** — Chamada para inscrição
10. **Footer** — Links, redes sociais, copyright

**Menu principal (ordem, out/2026):** Evento (Sobre, Convidados, Programação, Comissões, 🏆 Prêmios RBras, Apoiadores) · Apresentadores (Pôster, Comunicação Oral, Onde imprimir) · Inscrições · Logística (Local do Evento, Como Chegar, Hospedagem, Gráficas) · FAQ · botão Área do Inscrito · WASA. "Apoio" saiu do menu principal em 21/10/2026 (virou "Apoiadores" dentro de Evento e no rodapé; seção #patrocinadores segue na Home). O menu "Científico" foi aposentado em 21/10/2026 (datas e submissões vencidas). Fundo de Financiamento fica fora do menu: link no rodapé (coluna Participar) e em inscricoes.html; quando houver resultado, pôr bloco "Resultado" no topo de fundo-estudante.html e item temporário com selo "Novo" no Evento.

**Rodapé:** Evento (inclui Apoiadores) · Participar (Inscrições, Apresentadores, Fundo) · Logística · Contato.

---

## 6. Datas importantes (data/dates.js)

Exibidas na Home, faixa "Próximas datas" (#proximas-datas, logo após a faixa de Prêmios): só itens com `fim` >= hoje, em ordem de início; o que passou some sozinho.

| Evento | Período |
|--------|---------|
| Inscrições com Desconto (1º Lote) | 11 mai a 2 out 2026 |
| Inscrições sem Desconto (2º Lote) | 3 a 31 out 2026 |
| Inscrições Tardias (3º Lote, valor cheio) | 1 a 23 nov 2026 |
| **70ª RBras (Evento Principal)** | **23 a 25 nov 2026** |
| VIII WASA (satélite) | 26 nov 2026 |

Prazos já encerrados (submissões, concurso, aceites, Fundo) seguem no arquivo, mas não aparecem.

---

## 7. Palestrantes (data/speakers.js)

| Nome | Instituição | Tipo | Foto |
|------|-------------|------|------|
| Vinicius Calsavara | Cedars-Sinai Medical Center, EUA | Conferencista | ✅ |
| Thiago Rodrigo Ramos | UFSCar, Brasil | Palestrante | ✅ |
| Asuman Turkmen | The Ohio State University, EUA | Conferencista | ✅ |
| Amanda Merian Freitas Mendes | UFPR, Brasil | Palestrante | ✅ |
| Carlos Eduardo Ferreira | Fiocruz, Brasil | Conferencista | ❌ (placeholder) |
| Guilherme Lopes de Oliveira | CEFET-MG, Brasil | Conferencista | ✅ |

**Tópicos das palestras:**
- Calsavara: Modelo defective-Yang-Prentice para sobreviventes de longo prazo
- Ramos: Quantificação da incerteza sensível à deriva (método espectral-Newton)
- Turkmen: Análise multi-trait e desafios estatísticos além de modelos univariados
- Mendes: Regressão quantílica em dados eletrocardiográficos
- Ferreira: Vigilância epidemiológica baseada em dados — lições da pandemia e perspectivas para o SUS
- Oliveira: Modelo espaço-temporal zero-inflado para doenças infecciosas subnotificadas

**Padrão das fotos:** 400×400 px, JPG, fundo neutro, processadas com `padroniza_fotos.py`

---

## 8. Programação (planilha → data/programacao.json)

A programação vem de uma planilha do Google, não de um arquivo editado à mão. A cadeia é:

1. **Planilha do Google**, publicada em CSV aba por aba (atividades, trabalhos, locais, pessoas, config). As URLs ficam em `scripts/fontes.json`.
2. **`scripts/build_programacao.py`** lê as abas, valida (horário final anterior ao inicial, local inexistente, conflito de sala, trabalho apontando para sessão inexistente) e gera **`data/programacao.json`**. Com erro, não grava nada e sai com código 1; avisos (ex.: local a definir) não bloqueiam.
3. **`assets/programacao.js`** (estilos em `assets/programacao.css`, prefixo `pg-`) lê o JSON e desenha as três visões: visão geral (só atividades com `destaque = SIM`), dia a dia (filtro por prédio, aviso de troca de prédio) e busca de trabalhos (número, autor, título, área). Âncoras: `#geral`, `#dia`, `#busca` e o `id` de cada atividade (ex.: `#CO-5`).

**Atualização automática:** `.github/workflows/programacao.yml` roda de hora em hora no minuto 17 e também pelo botão **Run workflow** (aba Actions). Commita `data/programacao.json` só quando há diferença. Quando a validação encontra erro, o fluxo falha e recusa a publicação; o site continua com a última versão boa.

**Rodar localmente:** `python3 scripts/build_programacao.py --csv scripts/fontes.json -o data/programacao.json`. Para ver a página, servir com `python3 -m http.server` (o `fetch` não funciona em `file://`).

**Sigilo:** a atividade especial da tarde de 24 nov não deve mencionar o CNPEM publicamente antes do evento. Vale também para a planilha publicada e para `data/programacao.json`, que são públicos.

---

## 9. Comissão Organizadora (data/committee.js)

Todos os membros são da **UNICAMP**.

- **Coordenadora:** Mariana Rodrigues Motta
- Alex Rodrigo dos Santos Sousa
- **Benilton Carvalho** (dono deste repositório)
- Carlos Cesar Trucios Maza
- Larissa Ávila Matos
- Nancy Lopes Garcia
- Rafael Pimentel Maia
- Samara Flamini Kiihl
- Tatiana Benaglia
- Victor Freguglia Souza

Todos têm links para Currículo Lattes e fotos integradas.

---

## 10. Comissão Científica (data/committee.js)

- **Coordenadora:** Daiane Aparecida Zuanetti (UFSCar)
- Membros de: UFES, UFPR, The Ohio State University, ESALQ/USP, UNICAMP, Maynooth University, UFSCar/UFPB, University of Connecticut

---

## 11. Patrocinadores (data/sponsors.js)

Grade única, sem tiers visíveis; `quebraAntes: true` força nova linha.

| Linha | Apoiadores |
|-------|------------|
| 1 (fomento) | FAPESP, CNPq, FAEPEX |
| 2 | IBS, CONRE-3, CONRE-4, Equifax |

## 11b. Logística (data/hotels.js, data/graficas.js)

- **Hospedagem:** Hotel Matiz Barão Geraldo Express, Unibarão Hotel, Casa do Professor Visitante, Casa Pirâmide de Vidro (Airbnb)
- **Gráficas:** Connect Print (selo "Parceira", banner 0,80×1,20 m R$ 85,00 e 0,90×1,20 m R$ 87,50; arquivos preferencialmente via WhatsApp) e Cromarte Gráfica Digital (selo "Parceira", 2 WhatsApp, pôster 0,90×1,20 m em 5 materiais de R$ 35,90 a R$ 239,90, prazo 1 a 2 dias úteis; não trabalha com lona, oferece papéis promocionais recicláveis)
- Pôster oficial: A0 retrato (841×1189 mm); as duas opções de banner da Connect Print foram mantidas por decisão da organização
- Links para `#graficas`: menu Logística, rodapé, botão "Onde imprimir" em `cientifico.html`, FAQ "Onde posso imprimir meu pôster?"

---

## 11c. Prêmios (data/premios.js)

Todos os prêmios centralizados em `premios.html` (decisão out/2026). `premiado: null` = card "A anunciar"; preenchido = card revelado + faixa dourada `#premios-home` na Home (logo após o Hero, oculta se nenhum premiado).

| Prêmio | Premiado(a) |
|--------|-------------|
| Destaque RBras 2026 | Prof. Dr. Dalton Francisco de Andrade (UFSC), anunciado em 21/10/2026; Lattes 8698702467925654; foto assets/fotos/dalton-andrade-400.jpg (recorte de foto 2072×1354 enviada pela organização) |
| Melhor Tese de Doutorado | a anunciar |
| Melhor Dissertação de Mestrado | a anunciar |
| Melhor Trabalho de IC | a anunciar |

Data exata da entrega ainda indefinida (Assembleia 24 nov ou encerramento 25 nov); texto usa "durante a 70ª RBras". Menu: "🏆 Prêmios RBras" com selo `.nav-new-badge` "Novo".

---

## 12. Status atual do projeto (atualizado out/2026)

- ✅ Estrutura e design do site concluídos
- ✅ Conteúdo de palestrantes, programação e comissões populados
- ✅ Fotos padronizadas (400×400 px)
- ✅ Apoiadores: FAPESP, CNPq, FAEPEX, IBS, CONRE-3, CONRE-4, Equifax (out/2026)
- ✅ Página Logística com hospedagem e gráficas; menu Logística separado de Evento (out/2026)
- ✅ Links de inscrição, submissão e Área do Inscrito apontam para app.ciente.studio (data/config.js)
- ✅ Instagram configurado (data/config.js → redes_sociais)
- ✅ Mapa do local (iframe Google Maps em logistica.html)
- ✅ Prêmios centralizados, menu Científico aposentado, página Apresentadores, faixa "Próximas datas" (out/2026)
- ✅ Links internos não abrem mais em nova aba (só links externos usam target="_blank")
- ✅ `programacao-previa.html` removida (23/10/2026): era cópia congelada do JSON, publicada em paralelo a `programacao.html`
- ✅ Verificador de fontes únicas instalado (23/10/2026), ligado aos fluxos `fontes.yml` e `programacao.yml`; retrato inicial de 103 ocorrências em 26 entradas
- ⏳ Local do credenciamento: a pendência passou para a planilha, na atividade de id `INSCRICOES`
- ⏳ `apresentadores.html` ainda lê horários e salas de `data/schedule.js`: são duas fontes de verdade (planilha e schedule.js) até a migração
---

## 13. Como fazer alterações comuns

Antes de editar, consultar `FONTES.md`: ele lista onde mora cada informação. Depois de editar, rodar `node scripts/checar_fontes.mjs`.

### Adicionar/editar palestrante
Editar `data/speakers.js` — cada palestrante é um objeto no array `speakers`.

### Alterar datas importantes
Editar `data/dates.js` — formato ISO `YYYY-MM-DD`.

### Adicionar patrocinador
Editar `data/sponsors.js`: inserir item no array `SPONSORS` (grade única). Baixar o logo para `assets/logos/logo-<nome>.png|svg` (não usar URL externa) e recortar margens brancas se houver.

### Adicionar hotel ou gráfica
Editar `data/hotels.js` ou `data/graficas.js` (campos documentados no topo de cada arquivo). Campo omitido não aparece no card.

### Atualizar programação
A programação agora se altera na planilha do Google (ver seção 8). Nunca editar `data/programacao.json` à mão: o próximo ciclo do fluxo o sobrescreve. Para publicar na hora, usar o botão Run workflow.

### Adicionar membro de comissão
Editar `data/committee.js` — separado em `organizing` e `scientific`.

### Mudar links de inscrição/submissão
Editar `data/config.js`, campos `link_inscricoes`, `link_submissao` e `link_area_inscrito`.

### Faixa de aviso no topo do site
Editar `data/config.js` → `avisos` (id, texto, link, link_texto, inicio, fim em horário de Brasília). Aparece o primeiro aviso dentro do período; some sozinho após `fim`; quem fecha não vê de novo (localStorage por `id`). Renderizada por `assets/nav.js` no DOMContentLoaded (nav.js carrega antes de config.js).

---

## 14. Sobre a RBras

A **RBras (Região Brasileira da Sociedade Internacional de Biometria)** é a associação brasileira filiada à International Biometric Society (IBS). Promove o desenvolvimento e uso de métodos estatísticos e matemáticos nas ciências biológicas, agrárias e da saúde. A reunião anual é o principal evento científico da sociedade no Brasil.

---

*Arquivo gerado em 24/04/2026; atualizado em 21/10/2026 (logística, gráficas, menu, apoiadores).*
