/* ═══════════════════════════════════════════════
   nav.js - Navbar injetável para todas as páginas
   70ª RBras 2026
════════════════════════════════════════════════ */
(function () {
  /* ── Detecta a página atual ─────────────────── */
  const raw  = window.location.pathname;
  const page = raw.split('/').pop() || 'index.html';

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
        <a href="${root}index.html#sobre" class="nav-dropdown-toggle"${dropdownActiveClass('index.html', 'local.html')}>Evento ${chev}</a>
        <ul class="nav-dropdown-menu">
          <li><a href="${root}index.html#sobre">Sobre</a></li>
          <li><a href="${root}palestrantes.html"${activeClass('palestrantes.html')}>Convidados</a></li>
          <li><a href="${root}programacao.html"${activeClass('programacao.html')}>Programação</a></li>
          <li><a href="${root}local.html"${activeClass('local.html')}>Local</a></li>
        </ul>
      </li>

      <!-- Científico (dropdown) -->
      <li class="nav-dropdown">
        <a href="${root}cientifico.html" class="nav-dropdown-toggle"${dropdownActiveClass('cientifico.html', 'premio.html', 'fundo-estudante.html')}>Científico ${chev}</a>
        <ul class="nav-dropdown-menu">
          <li><a href="${root}cientifico.html#datas">Datas Importantes</a></li>
          <li><a href="${root}cientifico.html#submissoes">Submissões</a></li>
          <li><a href="${root}cientifico.html#comissao">Comissões</a></li>
          <li><a href="${root}premio.html"${activeClass('premio.html')} style="color:var(--gold-light)">🏆 Prêmio Destaque</a></li>
          <li><a href="${root}fundo-estudante.html"${activeClass('fundo-estudante.html')} style="color:var(--gold-light)">🎓 Fundo de Financiamento</a></li>
        </ul>
      </li>

      <!-- Inscrições -->
      <li><a href="${root}inscricoes.html"${activeClass('inscricoes.html')}>Inscrições</a></li>

      <!-- FAQ -->
      <li><a href="${root}faq.html"${activeClass('faq.html')}>FAQ</a></li>

      <!-- Apoio -->
      <li><a href="${root}index.html#patrocinadores">Apoio</a></li>

      <!-- CTA -->
      <li><a href="#" class="nav-cta" id="nav-cta-link">Área do Inscrito</a></li>

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

  /* ── Faixa de aviso: última chance Pôster/Comunicação Oral ─ */
  const ANNOUNCE_DEADLINE = new Date(2026, 7, 28, 17, 0, 0); // 28/ago/2026, 17h
  const ANNOUNCE_KEY = 'rbras-announce-dismissed-2026-08-28';
  if (new Date() < ANNOUNCE_DEADLINE && !localStorage.getItem(ANNOUNCE_KEY)) {
    const announceHTML = `
<div id="announce-bar">
  <span>🔔 <strong>Última oportunidade para Pôster e Comunicação Oral</strong>: submissões tardias até sex, 28/ago, 17h (Brasília).</span>
  <a href="${root}cientifico.html#submissoes">Saiba mais &rarr;</a>
  <button class="announce-close" id="announce-close" aria-label="Fechar aviso">&#x2715;</button>
</div>`;
    document.body.insertAdjacentHTML('afterbegin', announceHTML);

    const updateAnnounceOffset = () => {
      const bar = document.getElementById('announce-bar');
      const h = bar ? bar.offsetHeight : 0;
      document.documentElement.style.setProperty('--announce-h', h + 'px');
    };
    updateAnnounceOffset();
    window.addEventListener('resize', updateAnnounceOffset);
    document.body.classList.add('has-announce');

    document.getElementById('announce-close').addEventListener('click', () => {
      localStorage.setItem(ANNOUNCE_KEY, '1');
      document.getElementById('announce-bar').remove();
      document.body.classList.remove('has-announce');
      document.documentElement.style.setProperty('--announce-h', '0px');
      window.removeEventListener('resize', updateAnnounceOffset);
    });
  }

  /* ── Comportamentos ─────────────────────────── */
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  // Scroll: fundo sólido ao rolar (só na home; subpáginas já têm .solid via class="solid")
  if (isPage('index.html')) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    });
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
