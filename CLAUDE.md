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
- **Contato:** contato@70rbras.org
- **Repositório GitHub:** site-rbras-claude

---

## 2. Estrutura de arquivos

```
site-rbras-claude/
├── index.html            # Home: Hero, Sobre, teasers, Local, Datas, Submissões, Comissões, Patrocinadores, CTA
├── palestrantes.html     # Página dedicada: cards completos + modal de bios
├── programacao.html      # Página dedicada: grade completa dos 3 dias
├── inscricoes.html       # Página dedicada: tabela de valores, lotes, benefícios
├── LEIAME.md             # Guia de manutenção em português
├── CNAME                 # Configuração de domínio (70rbras.org)
├── CLAUDE.md             # Este arquivo de memória
├── padroniza_fotos.py    # Script Python para normalizar fotos de palestrantes
├── data/
│   ├── config.js         # Configurações gerais do evento
│   ├── dates.js          # Datas importantes e prazos
│   ├── speakers.js       # Palestrantes e resumos das palestras
│   ├── schedule.js       # Programação dos 3 dias
│   ├── committee.js      # Comissões organizadora e científica
│   └── sponsors.js       # Patrocinadores por tier
└── assets/
    ├── style.css         # CSS compartilhado por TODAS as páginas
    ├── nav.js            # Navbar injetável (carregada por todas as páginas)
    ├── logos/            # Arquivos de logo
    └── fotos/            # Fotos dos palestrantes (400×400 px, JPG)
```

**Regra de ouro:** Todo conteúdo do site é controlado pelos arquivos em `data/`. As páginas HTML não devem ser editadas para mudanças de conteúdo — apenas para mudanças estruturais de layout ou estilo.

**Arquitetura multi-página (desde mai/2026):**
- `assets/style.css` — único arquivo CSS, carregado por todas as páginas
- `assets/nav.js` — injeta a navbar no início do `<body>`; detecta a página ativa via `window.location.pathname` e marca o link com classe `.active`
- Cada página carrega apenas os `data/*.js` de que precisa (ex.: `programacao.html` só precisa de `schedule.js`)
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

---

## 6. Datas importantes (data/dates.js)

| Evento | Período |
|--------|---------|
| Submissão de Trabalhos | 11 mai – 15 ago 2026 |
| Propostas de Sessões, Mesas e Minicursos | 11 mai – 15 jul 2026 |
| Inscrições com Desconto (Early Bird) | 11 mai – 30 set 2026 |
| Divulgação de Aceites | 14–15 set 2026 |
| Inscrições sem Desconto (Regular) | 1 out – 23 nov 2026 |
| **70ª RBras (Evento Principal)** | **23–25 nov 2026** |

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

## 8. Programação (data/schedule.js)

### Dia 1 — 23 nov (segunda)
- 08:00 — Credenciamento + Minicursos M-1, M-2
- 10:00 — Coffee break
- 10:30 — Abertura oficial
- 11:30 — Conferência C-1
- 12:30 — Almoço
- 14:00 — Sessões Temáticas (ST-1 a ST-3), Comunicações Orais (CO-1), Iniciação Científica (IC-M-D)
- 15:30 — Conferência C-2
- 16:30 — Coffee break
- 17:30 — Sessão de Pôsteres 1

### Dia 2 — 24 nov (terça)
- 08:00 — Minicursos M-1, M-2 (continuação)
- 10:00 — Coffee break
- 10:30 — Conferência C-3
- 11:30 — Sessão de Pôsteres 2
- 12:30 — Almoço
- 14:00 — Atividade especial (a ser divulgada — não mencionar o CNPEM publicamente antes do evento)
- 17:30 — Assembleia RBras + Entrega de Prêmios

### Dia 3 — 25 nov (quarta)
- 08:00 — Minicursos MC-1, MC-2
- 09:00 — Comunicações Orais (CO-2 a CO-4)
- 10:00 — Coffee break
- 10:30 — Conferência C-4
- 11:30 — Conferência C-5
- 12:30 — Almoço
- 14:00 — Sessões Temáticas (ST-4 a ST-6), Comunicações Orais (CO-5)
- 15:30 — Cerimônia de encerramento + Premiação

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

| Tier | Patrocinadores |
|------|----------------|
| 🥇 Ouro | FAPESP, CNPq |
| 🥈 Prata | (vazio) |
| 🥉 Bronze / Apoio | (vazio) |

---

## 12. Status atual do projeto (abr 2026)

- ✅ Estrutura e design do site concluídos
- ✅ Conteúdo de palestrantes, programação e comissões populados
- ✅ Fotos padronizadas (400×400 px)
- ✅ Patrocinadores Ouro adicionados (FAPESP, CNPq)
- ⏳ Links de inscrição e submissão ainda são placeholders ("#")
- ⏳ Tiers Prata e Bronze de patrocínio ainda vazios
- ⏳ Links de redes sociais precisam ser preenchidos
- ⏳ Placeholder para mapa do local ainda não implementado

---

## 13. Como fazer alterações comuns

### Adicionar/editar palestrante
Editar `data/speakers.js` — cada palestrante é um objeto no array `speakers`.

### Alterar datas importantes
Editar `data/dates.js` — formato ISO `YYYY-MM-DD`.

### Adicionar patrocinador
Editar `data/sponsors.js` — inserir no array do tier correspondente.

### Atualizar programação
Editar `data/schedule.js` — cada dia é um objeto com array de `slots`.

### Adicionar membro de comissão
Editar `data/committee.js` — separado em `organizing` e `scientific`.

### Mudar links de inscrição/submissão
Editar `data/config.js` — campos `registrationUrl` e `submissionUrl`.

---

## 14. Sobre a RBras

A **RBras (Região Brasileira da Sociedade Internacional de Biometria)** é a associação brasileira filiada à International Biometric Society (IBS). Promove o desenvolvimento e uso de métodos estatísticos e matemáticos nas ciências biológicas, agrárias e da saúde. A reunião anual é o principal evento científico da sociedade no Brasil.

---

*Arquivo gerado em 24/04/2026 com base na exploração completa do repositório.*
