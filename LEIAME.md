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
│   ├── programacao.json ← programação dos 3 dias (gerada da planilha; não editar à mão)
│   ├── schedule.js     ← programação antiga; usada só por apresentadores.html
│   ├── committee.js    ← comissão organizadora
│   ├── premios.js      ← prêmios e premiados (premios.html + faixa na Home)
│   ├── apresentadores.js ← instruções de Pôster e Comunicação Oral (apresentadores.html)
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

### Programação (planilha do Google → `data/programacao.json`)
A programação **não se edita mais em arquivo**: altere a planilha do Google da programação.
- A planilha é publicada em CSV, uma URL por aba, listadas em `scripts/fontes.json`
- `scripts/build_programacao.py` lê as abas, valida e gera `data/programacao.json`
- `assets/programacao.js` lê o JSON e monta as três visões: visão geral, dia a dia e busca de trabalhos
- O fluxo `.github/workflows/programacao.yml` roda de hora em hora (minuto 17) e também pelo botão **Run workflow**, na aba Actions do GitHub
- Se a validação encontrar erro (horário invertido, sala inexistente, conflito de sala, trabalho sem sessão válida), nada é publicado e o site mantém a última versão boa
- **Nunca edite `data/programacao.json` à mão**: o próximo ciclo do fluxo sobrescreve o arquivo

Para gerar localmente:
```bash
python3 scripts/build_programacao.py --csv scripts/fontes.json -o data/programacao.json
```

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

### Prêmios (`data/premios.js`)
Um objeto por prêmio no array `PREMIOS` (Destaque, Tese, Dissertação, IC).
- Para anunciar um vencedor, troque `premiado: null` por `{ nome, instituicao, foto, lattes, ... }`
  - Destaque: campo `texto` (array de parágrafos)
  - Tese/Dissertação/IC: campos `trabalho` e `orientador`
- Assim que houver um premiado, a faixa dourada aparece sozinha na Home e o card sai de "A anunciar"
- `premio.html` antigo apenas redireciona para `premios.html`

---

### Apresentadores (`data/apresentadores.js`)
- `poster.instrucoes` e `oral.instrucoes`: listas de instruções (aceitam HTML)
- Lista vazia mostra "Instruções em breve"
- Horários e salas das sessões ainda vêm de `data/schedule.js` (itens "Sessão de Pôsteres" e "CO-"), não da planilha
  - Ao mudar horário ou sala de pôster/comunicação oral na planilha, atualize também o `schedule.js` até a migração desta página

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
Os arquivos `.json` abaixo, se existirem na pasta `data/`, são versões antigas e **não são mais usados**.
Podem ser apagados com segurança. **Exceção:** `data/programacao.json` está em uso (é a programação gerada da planilha) e não deve ser apagado.
```
data/config.json
data/speakers.json
data/dates.json
data/schedule.json
data/committee.json
data/sponsors.json
```
