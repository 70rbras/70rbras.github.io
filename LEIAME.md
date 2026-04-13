# 70ª RBras — Guia de Manutenção do Site

Site estático em HTML/CSS/JS. Funciona em GitHub Pages, qualquer VPS ou localmente.

---

## Estrutura de arquivos

```
site-rbras-claude/
├── index.html          ← estrutura e visual do site (não editar)
├── LEIAME.md           ← este guia
├── data/
│   ├── config.js       ← configuração geral (datas, local, links, e-mail)
│   ├── speakers.js     ← palestrantes convidados e resumos das palestras
│   ├── dates.js        ← datas importantes (prazos, inscrições)
│   ├── schedule.js     ← programação dos 3 dias
│   ├── committee.js    ← comissão organizadora
│   └── sponsors.js     ← patrocinadores e apoiadores
└── assets/
    └── fotos/          ← fotos dos palestrantes (JPG/PNG, 400×400 px)
```

---

## Como atualizar cada seção

### Informações gerais (`data/config.js`)
Edite os campos do objeto `CONFIG.evento`:
- `datas_exibicao` → texto das datas exibido no hero e rodapé
- `inicio` → data de início no formato `AAAA-MM-DD` (usada no contador regressivo)
- `local_nome` → nome do local do evento
- `local_endereco` → endereço completo
- `email_contato` → e-mail de contato exibido no rodapé
- `link_inscricoes` / `link_submissao` → URLs dos sistemas externos
- `redes_sociais` → URLs das redes sociais (Instagram, Twitter/X, LinkedIn, YouTube)

---

### Palestrantes (`data/speakers.js`)
Adicione um bloco ao array `SPEAKERS`:

```js
{
  nome:        "Profa. Dra. Nome Completo",
  instituicao: "Instituição · País",
  tipo:        "Keynote Speaker",           // ou "Palestrante Convidado(a)"
  tema:        "Título da palestra",
  foto:        "assets/fotos/nome.jpg",     // ou "" para ícone padrão
  resumo:      "Texto completo do resumo da palestra..."
}
```

**Fotos:** coloque o arquivo em `assets/fotos/` e referencie o caminho no campo `foto`.
Tamanho ideal: **400×400 px**, formato JPG ou PNG.

---

### Datas importantes (`data/dates.js`)
Cada item do array `DATES` tem os campos:
- `titulo` → nome do prazo
- `data` → texto da data (ex: `"31 ago 2026"` ou `"A definir"`)
- `descricao` → descrição curta
- `icone` → emoji exibido no card
- `cor` → cor do destaque: `"blue"`, `"teal"`, `"gold"` ou `"olive"`

---

### Programação (`data/schedule.js`)
Cada dia tem um campo `atividades` com lista de itens:
- `horario` → horário no formato `"HH:MM"`
- `tipo` → `"keynote"`, `"mini"`, `"session"`, `"social"` ou `"break"`
- `titulo` → título da atividade
- `descricao` → informação complementar (sala, palestrante, etc.) — pode ser `""`

---

### Comissão organizadora (`data/committee.js`)
Cada grupo do array `COMMITTEE` tem:
- `grupo` → nome do grupo (ex: `"🔬 Comissão Científica"`)
- `membros` → lista de `{ nome, instituicao }`

---

### Patrocinadores (`data/sponsors.js`)
Cada tier do array `SPONSORS` tem:
- `tier` → título exibido (ex: `"🥇 Ouro"`)
- `nivel` → `"gold"`, `"silver"` ou `"bronze"` (controla o tamanho dos logos)
- `patrocinadores` → lista de `{ nome, logo, url }`
  - `logo`: caminho para a imagem (ex: `"assets/logos/fapesp.png"`) ou `""` para exibir só o nome
  - `url`: link ao clicar no logo

---

## Adicionar foto de patrocinador
1. Salve o logo em `assets/logos/` (crie a pasta se não existir)
2. No `sponsors.js`, preencha o campo `logo` com o caminho (ex: `"assets/logos/fapesp.png"`)

---

## Como publicar

### GitHub Pages
```bash
git add .
git commit -m "Atualiza conteúdo do site"
git push origin main
```
O site estará disponível em `https://seu-usuario.github.io/nome-do-repositorio/`

### VPS (nginx/apache)
Copie todos os arquivos para a pasta pública do servidor (ex: `/var/www/html/rbras2026/`).

---

## Testar localmente
Abra um terminal na pasta do projeto e execute:
```bash
npx serve .
```
Acesse `http://localhost:3000` no navegador.

> O site **não funciona** se aberto diretamente como `file://` no navegador
> (restrição de segurança do browser para arquivos locais).

---

## Arquivos obsoletos para apagar
Os arquivos `.json` na pasta `data/` são versões antigas e **não são mais usados**.
Podem ser apagados com segurança:
```
data/config.json
data/speakers.json
data/dates.json
data/schedule.json
data/committee.json
data/sponsors.json
```
