/* ═══════════════════════════════════════════════
   footer.js - Footer injetável para todas as páginas
   70ª RBras 2026
════════════════════════════════════════════════ */
(function () {
  const root = './';

  /* ── HTML do footer ─────────────────────────── */
  const footerHTML = `
<footer id="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <img class="footer-logo-img" src="${root}assets/logos/70rbras_logo_negativo_cor.png" alt="70ª RBras 2026">
        <p id="footer-desc">70ª Reunião da Região Brasileira da<br>Sociedade Internacional de Biometria<br>UNICAMP, Campinas, SP</p>
      </div>
      <div class="footer-col">
        <h4>Evento</h4>
        <ul>
          <li><a href="${root}index.html#sobre">Sobre</a></li>
          <li><a href="${root}palestrantes.html">Convidados</a></li>
          <li><a href="${root}programacao.html">Programação</a></li>
          <li><a href="${root}local.html">Local</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Científico</h4>
        <ul>
          <li><a href="${root}cientifico.html#datas">Datas Importantes</a></li>
          <li><a href="${root}cientifico.html#submissoes">Submissões</a></li>
          <li><a href="${root}cientifico.html#comissao">Comissões</a></li>
          <li><a href="${root}inscricoes.html">Inscrições</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contato</h4>
        <ul>
          <li><a href="#" id="footer-email">70rbras@unicamp.br</a></li>
          <li><a href="${root}cientifico.html#comissao">Comissão Organizadora</a></li>
          <li><a href="#" id="footer-site-rbras" target="_blank" rel="noopener noreferrer">RBras.org.br</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p id="footer-copy">© 2026 70ª RBras · Região Brasileira da Sociedade Internacional de Biometria · <span style="opacity:.6;font-size:.78rem;">Este site utiliza cookies analíticos para medir o alcance do evento (Google Analytics 4).</span></p>
      <div class="social-links" id="social-links">
        <a href="#" class="social-link" id="social-instagram" aria-label="Instagram">📸</a>
      </div>
    </div>
  </div>
</footer>
<button id="btn-topo" aria-label="Voltar ao topo">&#8679;</button>`;

  /* ── Injeta no final do body ─────────────────── */
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  /* ── Botão voltar ao topo ───────────────────── */
  const btn = document.getElementById('btn-topo');
  if (btn) {
    window.addEventListener('scroll', () => btn.classList.toggle('visible', window.scrollY > 400));
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ── Popula elementos dinâmicos via CONFIG ───── */
  if (typeof CONFIG === 'undefined') return;
  const { evento, redes_sociais } = CONFIG;
  const safe = (id, fn) => { const el = document.getElementById(id); if (el) fn(el); };

  safe('footer-desc',       el => el.innerHTML = '70ª Reunião da Região Brasileira da<br>Sociedade Internacional de Biometria<br>' + evento.cidade);
  safe('footer-copy',       el => el.innerHTML = `© 2026 ${evento.edicao} · Região Brasileira da Sociedade Internacional de Biometria · <span style="opacity:.6;font-size:.78rem;">Este site utiliza cookies analíticos para medir o alcance do evento (Google Analytics 4).</span>`);
  safe('footer-email',      el => { el.href = 'mailto:' + evento.email_contato; el.textContent = evento.email_contato; });
  safe('footer-site-rbras', el => { el.href = evento.site_rbras; });
  safe('social-instagram',  el => el.href = redes_sociais.instagram);
})();
