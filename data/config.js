// ─── CONFIGURAÇÃO GERAL DO EVENTO ───────────────────────────────────────────
// Edite os valores abaixo para atualizar as informações do site.

const CONFIG = {
  evento: {
    nome:           "70ª Reunião Anual da Região Brasileira da Sociedade Internacional de Biometria",
    edicao:         "70ª RBras",
    tema:           "Dados que revelam vida: Estatística e Ciência de Dados na Biometria",
    inicio:         "2026-11-23",          // formato AAAA-MM-DD (usado no contador)
    fim:            "2026-11-25",
    datas_exibicao: "23 a 25 de Novembro de 2026",
    cidade:         "Unicamp, Campinas, SP",
    local_nome:     "IMECC / UNICAMP<br>Instituto de Matemática, Estatística e Computação Científica",
    local_endereco: "Rua Sérgio Buarque de Holanda, 651 - Cidade Universitária 'Zeferino Vaz', Campinas, SP · CEP 13083-859",
    local_instituicao: "Unicamp",
    email_contato:  "70rbras@unicamp.br",
    site_rbras:     "https://www.rbras.org.br",
    link_inscricoes:    "https://app.ciente.studio/70-rbras/subscription",
    link_submissao:     "https://app.ciente.studio/70-rbras/submissions",
    link_area_inscrito: "https://app.ciente.studio/",
    link_modelos_poster: "assets/documentos/modelos-poster-70rbras.zip"   // vazio = bloco oculto em apresentadores.html
  },
  redes_sociais: {
    instagram: "https://www.instagram.com/70rbras"
  },

  // ─── FAIXA DE AVISO (topo de todas as páginas) ────────────────────────────
  // Mostra o PRIMEIRO aviso da lista que estiver dentro do período [inicio, fim].
  // Fora do período, o aviso some sozinho. Lista vazia = sem faixa.
  //   id        → identificador único (o visitante que fechar o aviso não o vê de novo)
  //   texto     → mensagem (aceita HTML, ex.: <strong>)
  //   link      → (opcional) destino do link "Saiba mais"
  //   link_texto→ (opcional) texto do link; padrão "Saiba mais"
  //   inicio    → (opcional) "AAAA-MM-DDTHH:MM" (horário de Brasília)
  //   fim       → "AAAA-MM-DDTHH:MM" (horário de Brasília)
  avisos: [
    {
      id:         "fim-2o-lote-2026",
      texto:      "⏳ <strong>Últimos dias do 2º Lote</strong>: inscrições com valor intermediário até 31/out.",
      link:       "inscricoes.html",
      link_texto: "Ver valores",
      fim:        "2026-10-31T23:59"
    }
  ]
};
