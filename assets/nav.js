/* ═══════════════════════════════════════════════
   nav.js - Navbar injetável para todas as páginas
   70ª RBras 2026
════════════════════════════════════════════════ */
(function () {
  /* ── Detecta a página atual ─────────────────── */
  const raw  = window.location.pathname;
  // Normaliza para "nome.html", inclusive em URLs sem extensão (ex.: /logistica)
  const last = raw.split('/').pop() || 'index.html';
  const page = last.endsWith('.html') ? last : last + '.html';

  function isPage(name) {
    if (name === 'index.html') {
      return page === '' || page === '/' || page === 'index.html';
    }
    return page === name;
  }

  function activeClass(name) {
    return isPage(name) ? ' class="active"' : '';
  }

  /* Classe extra para o botão de um dropdown: vai dentro do class="..." já
     existente, pois um segundo atributo class seria ignorado pelo navegador. */
  function dropdownActive(...names) {
    return names.some(n => isPage(n)) ? ' active' : '';
  }

  /* ── Prefixo de caminho (para subpastas futuras) */
  const root = './';

  /* ── Chevron SVG ────────────────────────────── */
  const chev = `<svg class="chev" width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M1 1.5l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

  /* ── HTML da navbar ─────────────────────────── */
  const navHTML = `
<nav id="navbar"${!isPage('index.html') ? ' class="solid"' : ''}>
  <div class="container nav-inner">
    <a href="${root}index.html" class="nav-logo">
      <img class="nav-logo-img" src="${root}assets/logos/70rbras_logo_negativo_cor.png" alt="70ª RBras 2026">
    </a>
    <ul class="nav-links" id="navLinks">

      <!-- Evento (dropdown). Inscrições mora aqui desde a tarefa P20: as
           inscrições seguem abertas no local, porém durante o evento o
           primeiro nível do menu fica para o que o participante consulta. -->
      <li class="nav-dropdown">
        <a href="${root}index.html#sobre" class="nav-dropdown-toggle${dropdownActive('palestrantes.html', 'comissoes.html', 'inscricoes.html', 'premios.html')}">Evento ${chev}</a>
        <ul class="nav-dropdown-menu">
          <li><a href="${root}index.html#sobre">Sobre</a></li>
          <li><a href="${root}palestrantes.html"${activeClass('palestrantes.html')}>Convidados</a></li>
          <li><a href="${root}comissoes.html"${activeClass('comissoes.html')}>Comissões</a></li>
          <li><a href="${root}inscricoes.html"${activeClass('inscricoes.html')}>Inscrições</a></li>
          <li><a href="${root}premios.html"${activeClass('premios.html')} style="color:var(--gold-light)">🏆 Prêmios RBras</a></li>
          <li><a href="${root}index.html#patrocinadores">Apoiadores</a></li>
        </ul>
      </li>

      <!-- Programação: item próprio, pois é a página mais usada durante o evento -->
      <li><a href="${root}programacao.html"${activeClass('programacao.html')}>Programação</a></li>

      <!-- Logística (dropdown), em três subgrupos: Para Apresentadores primeiro,
           depois Local, por fim Sua estadia. Ordem da tarefa P22. -->
      <li class="nav-dropdown">
        <a href="${root}logistica.html" class="nav-dropdown-toggle${dropdownActive('logistica.html', 'apresentadores.html')}">Logística ${chev}</a>
        <ul class="nav-dropdown-menu">
          <li class="nav-dropdown-label" role="presentation">Para Apresentadores</li>
          <li><a href="${root}apresentadores.html#poster">Pôster</a></li>
          <li><a href="${root}apresentadores.html#oral">Apresentação Oral</a></li>
          <li><a href="${root}logistica.html#graficas">Onde imprimir o pôster</a></li>
          <li class="nav-dropdown-label" role="presentation">Local</li>
          <li><a href="${root}logistica.html#local">Local e Como Chegar</a></li>
          <li class="nav-dropdown-label" role="presentation">Sua estadia</li>
          <li><a href="${root}logistica.html#hospedagem">Hospedagem</a></li>
          <li><a href="${root}logistica.html#restaurantes">Restaurantes</a></li>
          <li><a href="${root}logistica.html#aproveite-campinas">Aproveite Campinas</a></li>
        </ul>
      </li>

      <!-- FAQ -->
      <li><a href="${root}faq.html"${activeClass('faq.html')}>FAQ</a></li>

      <!-- CTA -->
      <li><a href="#" class="nav-cta" id="nav-cta-link" data-link="area-inscrito">Área do Inscrito</a></li>

      <!-- WASA (evento satélite, dropdown) -->
      <li class="nav-dropdown">
        <a href="${root}wasa.html" class="nav-dropdown-toggle${dropdownActive('wasa.html')}">WASA <span class="nav-satellite-badge">Sat&#233;lite</span> ${chev}</a>
        <ul class="nav-dropdown-menu">
          <li><a href="${root}wasa.html#sobre-wasa">Sobre</a></li>
          <li><a href="${root}wasa.html#local-wasa">Local</a></li>
          <li><a href="${root}wasa.html#organizacao-wasa">Organização</a></li>
          <li><a href="${root}wasa.html#homenagem">Homenagem</a></li>
          <li><a href="${root}wasa.html#programacao-wasa">Programação</a></li>
          <li><a href="${root}wasa.html#inscricoes-cta">Inscrições</a></li>
        </ul>
      </li>
    </ul>
    <button class="hamburger" id="hamburger" aria-label="Abrir menu" aria-expanded="false" aria-controls="navLinks">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>`;

  /* ── Injeta no início do body ───────────────── */
  document.body.insertAdjacentHTML('afterbegin', navHTML);

  /* ── Agenda: relógio de Brasília e leitura da programação ─────
     Compartilhada pela faixa de aviso, pela Home (bloco "Agora / A seguir"),
     por premios.html e por assets/programacao.js. O relógio segue sempre o
     horário de Brasília, seja qual for o fuso do aparelho.

     Para conferir o comportamento de um momento do evento, acrescente ao
     endereço ?agora=AAAA-MM-DDTHH:MM (horário de Brasília), por exemplo
     index.html?agora=2026-11-23T14:10. */
  const Agenda = (function () {
    const FUSO = 'America/Sao_Paulo';
    const MESES = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];

    function minutos(h) {
      const m = /^(\d{1,2}):(\d{2})/.exec(h || '');
      return m ? Number(m[1]) * 60 + Number(m[2]) : null;
    }

    function agora() {
      let simulado = null;
      try { simulado = new URLSearchParams(location.search).get('agora'); } catch (e) { /* sem URLSearchParams */ }
      if (simulado && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(simulado)) {
        return { data: simulado.slice(0, 10), min: minutos(simulado.slice(11)), simulado: true };
      }
      try {
        const p = {};
        new Intl.DateTimeFormat('en-CA', {
          timeZone: FUSO, year: 'numeric', month: '2-digit', day: '2-digit',
          hour: '2-digit', minute: '2-digit', hourCycle: 'h23'
        }).formatToParts(new Date()).forEach(x => { p[x.type] = x.value; });
        return { data: p.year + '-' + p.month + '-' + p.day, min: Number(p.hour) * 60 + Number(p.minute) };
      } catch (e) {
        /* Navegador sem fuso nomeado: Brasília é UTC-3 o ano todo desde 2019. */
        const d = new Date(Date.now() - 3 * 3600000);
        return { data: d.toISOString().slice(0, 10), min: d.getUTCHours() * 60 + d.getUTCMinutes() };
      }
    }

    /* Uma promessa por página: quem pedir depois recebe o mesmo arquivo. */
    let promessa = null;
    function carregar() {
      if (!promessa) {
        promessa = fetch(root + 'data/programacao.json')
          .then(r => { if (!r.ok) throw new Error('resposta ' + r.status); return r.json(); });
        promessa.catch(() => { promessa = null; });
      }
      return promessa;
    }

    function atividade(dados, id) {
      return (dados && dados.atividades || []).filter(a => a.id === id)[0] || null;
    }

    /* "17:30" vira "17h30"; "09:00" vira "9h". */
    function hora(h) {
      const m = minutos(h);
      if (m === null) return '';
      const mm = m % 60;
      return Math.floor(m / 60) + 'h' + (mm ? String(mm).padStart(2, '0') : '');
    }

    function faixa(a) {
      if (!a) return '';
      return a.fim && a.fim !== '23:59' ? hora(a.inicio) + ' às ' + hora(a.fim) : 'a partir das ' + hora(a.inicio);
    }

    /* "terça-feira, 24 nov", a partir do rótulo do dia no próprio JSON. */
    function dia(dados, iso) {
      const d = (dados && dados.dias || []).filter(x => x.data === iso)[0];
      const [, mes, num] = String(iso || '').split('-').map(Number);
      const curta = num && mes ? num + ' ' + MESES[mes - 1] : '';
      const semana = d && d.rotulo ? d.rotulo.split(',')[0].toLowerCase() : '';
      return [semana, curta].filter(Boolean).join(', ');
    }

    /* Nome do local, com o nome por extenso do prédio quando data/config.js
       o define (CONFIG.predios), pois a sigla sozinha não orienta quem chega. */
    function local(a) {
      const l = a && a.local;
      if (!l || !l.nome || ['A-DEFINIR', 'LIVRE'].indexOf(l.id) >= 0) return '';
      const predios = (typeof CONFIG !== 'undefined' && CONFIG.predios) || {};
      const p = predios[l.predio];
      const extenso = typeof p === 'string' ? p : (p && p.explicar ? p.nome : '');
      return extenso ? l.nome + ' (' + extenso + ')' : l.nome;
    }

    /* Orientação de como chegar à sala: a da planilha; sem ela, a do prédio
       (CONFIG.predios[sigla].como_chegar). */
    function comoChegar(l) {
      if (!l) return '';
      if (l.como_chegar) return l.como_chegar;
      const p = (typeof CONFIG !== 'undefined' && CONFIG.predios) ? CONFIG.predios[l.predio] : null;
      return p && typeof p === 'object' && p.como_chegar ? p.como_chegar : '';
    }

    function escapar(s) {
      return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
        .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    return { agora, minutos, carregar, atividade, hora, faixa, dia, local, comoChegar, escapar };
  })();
  window.Agenda = Agenda;

  /* ── Faixa de aviso (configurada em data/config.js → avisos) ─
     Roda após o carregamento de todos os scripts, pois nav.js é
     carregado antes de config.js em todas as páginas. */
  async function aplicarAviso() {
    if (typeof CONFIG === 'undefined' || !Array.isArray(CONFIG.avisos)) return;
    const relogio = Agenda.agora();
    /* Com ?agora= no endereço, a faixa segue o relógio simulado. */
    const instante = relogio.simulado
      ? new Date(relogio.data + 'T' + String(Math.floor(relogio.min / 60)).padStart(2, '0') + ':' +
          String(relogio.min % 60).padStart(2, '0') + ':00-03:00').getTime()
      : Date.now();
    const data = iso => new Date(iso + ':00-03:00').getTime();   // horário de Brasília
    const storageGet = k => { try { return localStorage.getItem(k); } catch (e) { return null; } };
    /* Um aviso fixa inicio e fim, ou referencia um prazo de data/dates.js
       pelos campos inicio_id e fim_id, de modo que a data viva num lugar só.
       Com atividade_id, o fim padrão é o fim daquela atividade da programação. */
    const registro = id => (typeof dataPorId === 'function' ? dataPorId(id) : null);
    const periodo = (a, ativ) => ({
      inicio: a.inicio || (registro(a.inicio_id) ? registro(a.inicio_id).inicio + 'T00:00' : ''),
      fim:    a.fim    || (registro(a.fim_id)    ? registro(a.fim_id).fim    + 'T23:59' : '')
                       || (ativ ? ativ.data + 'T' + (ativ.fim || ativ.inicio) : '')
    });
    const curta = iso => (typeof dataCurta === 'function' ? dataCurta(String(iso).slice(0, 10)) : '');
    const dentro = p => (!p.inicio || instante >= data(p.inicio)) && (!p.fim || instante <= data(p.fim));

    /* Aviso com texto_ultimo_dia: no último dia do período, troca de texto e
       ganha chave própria, para reaparecer a quem fechou a versão anterior. */
    const ultimoDia = a => !!a.texto_ultimo_dia && String(periodo(a, null).fim).slice(0, 10) === relogio.data;
    const chave = a => 'rbras-aviso-' + a.id + (ultimoDia(a) ? '-ultimo-dia' : '');

    let aviso = null;
    let dadosAtiv = null;
    for (const a of CONFIG.avisos) {
      if (storageGet(chave(a))) continue;
      if (a.requer && CONFIG[a.requer] && CONFIG[a.requer].visivel === false) continue;
      /* Prazo referenciado que não existe em data/dates.js: melhor calar do
         que mostrar um aviso sem data e sem fim. */
      if ((a.inicio_id && !registro(a.inicio_id)) || (a.fim_id && !registro(a.fim_id))) continue;
      /* Fora do período declarado no próprio aviso, nem chega a ler a programação. */
      if (!dentro(periodo(a, null))) continue;
      let ativ = null;
      if (a.atividade_id) {
        /* Um aviso preso a uma atividade sai do ar se ela não puder ser lida:
           sem horário e local, ele perderia a razão de existir. */
        try { dadosAtiv = await Agenda.carregar(); } catch (e) { dadosAtiv = null; }
        ativ = Agenda.atividade(dadosAtiv, a.atividade_id);
        if (!ativ) continue;
      }
      const p = periodo(a, ativ);
      if (!dentro(p)) continue;
      aviso = Object.assign({}, a, { periodo: p, ativ });
      break;
    }
    if (!aviso) return;

    const ativ = aviso.ativ;
    const urgente = ultimoDia(aviso);
    const textoAviso = String((urgente ? aviso.texto_ultimo_dia : aviso.texto) || '')
      .replace(/\{inicio\}/g, curta(aviso.periodo.inicio))
      .replace(/\{fim\}/g, curta(aviso.periodo.fim))
      .replace(/\{dia\}/g, ativ ? Agenda.escapar(Agenda.dia(dadosAtiv, ativ.data)) : '')
      .replace(/\{horario\}/g, ativ ? Agenda.escapar(Agenda.faixa(ativ)) : '')
      .replace(/\{local\}/g, ativ ? Agenda.escapar(Agenda.local(ativ)) : '');
    const destino = aviso.link || (ativ ? 'programacao.html#' + encodeURIComponent(ativ.id) : '');

    const linkHTML = destino ? `<a href="${root}${destino}">${aviso.link_texto || 'Saiba mais'} &rarr;</a>` : '';
    document.body.insertAdjacentHTML('afterbegin', `
<div id="announce-bar"${urgente ? ' class="announce-urgente"' : ''}>
  <span>${textoAviso}</span>
  ${linkHTML}
  <button class="announce-close" id="announce-close" aria-label="Fechar aviso">&#x2715;</button>
</div>`);

    const updateAnnounceOffset = () => {
      const bar = document.getElementById('announce-bar');
      const h = bar ? bar.offsetHeight : 0;
      document.documentElement.style.setProperty('--announce-h', h + 'px');
    };
    updateAnnounceOffset();
    window.addEventListener('resize', updateAnnounceOffset);
    document.body.classList.add('has-announce');

    document.getElementById('announce-close').addEventListener('click', () => {
      try { localStorage.setItem(chave(aviso), '1'); } catch (e) {}
      document.getElementById('announce-bar').remove();
      document.body.classList.remove('has-announce');
      document.documentElement.style.setProperty('--announce-h', '0px');
      window.removeEventListener('resize', updateAnnounceOffset);
    });
  }
  /* ── Ligações externas (configuradas em data/config.js → evento) ─
     Todo elemento com data-link recebe o endereço do campo correspondente.
     O botão da Área do Inscrito usa o mecanismo, assim como os botões das
     páginas que levam ao mesmo destino, portanto nenhum arquivo fora daqui
     precisa nomear o campo da configuração. Roda junto com a faixa de aviso,
     pois nav.js é carregado antes de config.js em todas as páginas. */
  const CAMPO_DO_LINK = {
    'area-inscrito': 'link_area_inscrito'
  };

  function aplicarLigacoes() {
    if (typeof CONFIG === 'undefined' || !CONFIG.evento) return;
    document.querySelectorAll('[data-link]').forEach(el => {
      const campo = CAMPO_DO_LINK[el.dataset.link];
      const url = campo ? CONFIG.evento[campo] : '';
      if (!url || url === '#') return;
      el.href = url;
      el.target = '_blank';
      el.rel = 'noopener noreferrer';
    });
  }

  /* ── Convite para instalar o aplicativo ─────────────
     Todo elemento com data-app-convite recebe o convite: "completo" (seção da
     Home) ou "compacto" (faixa na programação, que o visitante pode fechar).
     Some quando o site já está aberto como aplicativo. No Android/Chrome usa o
     pedido de instalação do navegador; no iPhone e nos demais casos mostra o
     caminho pelo menu. O evento beforeinstallprompt não é cancelado, para não
     tirar do visitante o convite nativo do navegador. */
  let pedidoInstalacao = null;
  window.addEventListener('beforeinstallprompt', ev => {
    pedidoInstalacao = ev;
    montarConvitesApp();
  });
  window.addEventListener('appinstalled', () => {
    pedidoInstalacao = null;
    document.querySelectorAll('[data-app-convite]').forEach(el => { el.hidden = true; });
  });

  function montarConvitesApp() {
    const alvos = document.querySelectorAll('[data-app-convite]');
    if (!alvos.length) return;
    const instalado = (window.matchMedia && matchMedia('(display-mode: standalone)').matches) ||
      navigator.standalone === true;
    const ios = /iphone|ipad|ipod/i.test(navigator.userAgent) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    const fechado = (() => { try { return localStorage.getItem('rbras-app-convite') === '1'; } catch (e) { return false; } })();

    const como = pedidoInstalacao
      ? '<button type="button" class="btn btn--primary app-instalar">📲 Instalar aplicativo</button>'
      : ios
        ? '<p class="app-como">No <strong>Safari</strong>, toque em <strong>Compartilhar</strong> ' +
          '<span aria-hidden="true">(□↑)</span> e depois em <strong>Adicionar à Tela de Início</strong>.</p>'
        : '<p class="app-como">No <strong>Chrome</strong> ou no <strong>Edge</strong>, abra o menu ' +
          '<span aria-hidden="true">(⋮)</span> e escolha <strong>Instalar aplicativo</strong> ou ' +
          '<strong>Adicionar à tela inicial</strong>.</p>';

    alvos.forEach(el => {
      const compacto = el.dataset.appConvite === 'compacto';
      if (instalado || (compacto && fechado)) { el.hidden = true; return; }
      el.innerHTML = compacto
        ? '<p class="app-convite-texto"><strong>Programação no celular</strong>, mesmo sem internet no campus.</p>' +
          '<div class="app-convite-acao">' + como + '</div>' +
          '<button type="button" class="app-convite-fechar" aria-label="Fechar convite">✕</button>'
        : '<div class="container app-convite-inner">' +
            '<div class="app-convite-icone" aria-hidden="true">📲</div>' +
            '<div class="app-convite-corpo">' +
              '<h2 class="section-title">Leve a programação <span>no celular</span></h2>' +
              '<p class="section-body">Instale o site como aplicativo: ele abre direto na programação, ' +
              'mostra o que acontece agora e continua funcionando sem internet no campus, ' +
              'depois da primeira visita.</p>' +
              '<div class="app-convite-acao">' + como + '</div>' +
            '</div>' +
          '</div>';
      el.hidden = false;
      /* Seção que nasce oculta não recebe a rolagem da âncora; o atraso
         espera as seções de cima (ex.: jantar) terminarem de aparecer. */
      if (el.id && location.hash === '#' + el.id) setTimeout(() => el.scrollIntoView(), 600);
      const botao = el.querySelector('.app-instalar');
      if (botao) botao.addEventListener('click', () => {
        if (!pedidoInstalacao) return;
        pedidoInstalacao.prompt();
        pedidoInstalacao.userChoice.finally(() => { pedidoInstalacao = null; montarConvitesApp(); });
      });
      const fechar = el.querySelector('.app-convite-fechar');
      if (fechar) fechar.addEventListener('click', () => {
        try { localStorage.setItem('rbras-app-convite', '1'); } catch (e) { /* sem armazenamento */ }
        el.hidden = true;
      });
    });
  }

  function aplicarConfig() {
    montarConvitesApp();
    aplicarAviso().catch(e => { if (window.console) console.error('aviso:', e); });
    aplicarLigacoes();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', aplicarConfig);
  else aplicarConfig();

  /* ── Comportamentos ─────────────────────────── */
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  // Scroll: fundo sólido ao rolar (só na home; subpáginas já têm .solid via class="solid")
  if (isPage('index.html')) {
    const atualizarNavbar = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    };
    window.addEventListener('scroll', atualizarNavbar);
    atualizarNavbar();
  }

  // Hamburger toggle
  hamburger.addEventListener('click', () => {
    const isOpen = document.body.classList.toggle('nav-open');
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // Fechar menu ao clicar em link
  navLinks.addEventListener('click', e => {
    const shouldClose = e.target.tagName === 'A' || e.target === e.currentTarget;
    if (shouldClose) {
      document.body.classList.remove('nav-open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });

  // Fechar menu com Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && document.body.classList.contains('nav-open')) {
      document.body.classList.remove('nav-open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
})();
