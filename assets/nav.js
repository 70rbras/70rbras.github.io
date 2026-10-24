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

  function dropdownActiveClass(...names) {
    return names.some(n => isPage(n)) ? ' class="active"' : '';
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

      <!-- Evento (dropdown) -->
      <li class="nav-dropdown">
        <a href="${root}index.html#sobre" class="nav-dropdown-toggle"${dropdownActiveClass('index.html', 'palestrantes.html', 'programacao.html', 'comissoes.html', 'premios.html')}>Evento ${chev}</a>
        <ul class="nav-dropdown-menu">
          <li><a href="${root}index.html#sobre">Sobre</a></li>
          <li><a href="${root}palestrantes.html"${activeClass('palestrantes.html')}>Convidados</a></li>
          <li><a href="${root}programacao.html"${activeClass('programacao.html')}>Programação</a></li>
          <li><a href="${root}comissoes.html"${activeClass('comissoes.html')}>Comissões</a></li>
          <li><a href="${root}premios.html"${activeClass('premios.html')} style="color:var(--gold-light)">🏆 Prêmios RBras <span class="nav-new-badge">Novo</span></a></li>
          <li><a href="${root}index.html#patrocinadores">Apoiadores</a></li>
        </ul>
      </li>

      <!-- Apresentadores (dropdown) -->
      <li class="nav-dropdown">
        <a href="${root}apresentadores.html" class="nav-dropdown-toggle"${dropdownActiveClass('apresentadores.html')}>Apresentadores ${chev}</a>
        <ul class="nav-dropdown-menu">
          <li><a href="${root}apresentadores.html#poster">Pôster</a></li>
          <li><a href="${root}apresentadores.html#oral">Comunicação Oral</a></li>
          <li><a href="${root}logistica.html#graficas">Onde imprimir</a></li>
        </ul>
      </li>

      <!-- Inscrições -->
      <li><a href="${root}inscricoes.html"${activeClass('inscricoes.html')}>Inscrições</a></li>

      <!-- Logística (dropdown) -->
      <li class="nav-dropdown">
        <a href="${root}logistica.html" class="nav-dropdown-toggle"${dropdownActiveClass('logistica.html')}>Logística ${chev}</a>
        <ul class="nav-dropdown-menu">
          <li><a href="${root}logistica.html#local">Local do Evento</a></li>
          <li><a href="${root}logistica.html#como-chegar">Como Chegar</a></li>
          <li><a href="${root}logistica.html#hospedagem">Hospedagem</a></li>
          <li><a href="${root}logistica.html#graficas">Gráficas</a></li>
        </ul>
      </li>

      <!-- FAQ -->
      <li><a href="${root}faq.html"${activeClass('faq.html')}>FAQ</a></li>

      <!-- CTA -->
      <li><a href="#" class="nav-cta" id="nav-cta-link" data-link="area-inscrito">Área do Inscrito</a></li>

      <!-- WASA (evento satélite, dropdown) -->
      <li class="nav-dropdown">
        <a href="${root}wasa.html" class="nav-dropdown-toggle"${activeClass('wasa.html')}>WASA <span class="nav-satellite-badge">Sat&#233;lite</span> ${chev}</a>
        <ul class="nav-dropdown-menu">
          <li><a href="${root}wasa.html#sobre-wasa">Sobre</a></li>
          <li><a href="${root}wasa.html#organizacao-wasa">Organização</a></li>
          <li><a href="${root}wasa.html#homenagem">Homenagem</a></li>
          <li><a href="${root}wasa.html#programacao-wasa">Programação</a></li>
          <li><a href="${root}wasa.html#local-wasa">Local</a></li>
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

  /* ── Faixa de aviso (configurada em data/config.js → avisos) ─
     Roda após o carregamento de todos os scripts, pois nav.js é
     carregado antes de config.js em todas as páginas. */
  function aplicarAviso() {
    if (typeof CONFIG === 'undefined' || !Array.isArray(CONFIG.avisos)) return;
    const agora = new Date();
    const data = iso => new Date(iso + ':00-03:00');   // horário de Brasília
    const storageGet = k => { try { return localStorage.getItem(k); } catch (e) { return null; } };
    const aviso = CONFIG.avisos.find(a =>
      (!a.inicio || agora >= data(a.inicio)) &&
      (!a.fim || agora <= data(a.fim)) &&
      !storageGet('rbras-aviso-' + a.id));
    if (!aviso) return;

    const linkHTML = aviso.link ? `<a href="${root}${aviso.link}">${aviso.link_texto || 'Saiba mais'} &rarr;</a>` : '';
    document.body.insertAdjacentHTML('afterbegin', `
<div id="announce-bar">
  <span>${aviso.texto}</span>
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
      try { localStorage.setItem('rbras-aviso-' + aviso.id, '1'); } catch (e) {}
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

  function aplicarConfig() {
    aplicarAviso();
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
