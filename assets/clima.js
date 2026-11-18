/* ═══════════════════════════════════════════════
   clima.js - Previsão do tempo para os dias do evento
   70ª RBras 2026

   Fonte: Open-Meteo (open-meteo.com), gratuita, sem chave, licença CC BY 4.0,
   que exige o crédito exibido junto da previsão. Os dias vêm do prazo
   "evento" de data/dates.js; o ponto, de CONFIG.clima em data/config.js.

   Cada dia traz o resumo diário e as 24 horas. A página mostra o resumo e,
   ao tocar no dia, as horas do evento (HORA_INICIAL a HORA_FINAL); durante o
   congresso, a Home mostra ainda as próximas horas.

   A previsão só existe até 16 dias à frente, portanto antes disso, ou depois
   do evento, nada é exibido e a página mantém o texto de reserva. A resposta
   fica guardada no aparelho por uma hora; sem rede, vale a última guardada.
   Usado por index.html (faixa do Hero) e logistica.html (quadro Clima).
════════════════════════════════════════════════ */
(function () {
  const CHAVE = 'rbras-clima';
  const FORMATO = 'h1';                 // muda quando o formato guardado muda
  const VALIDADE_MS = 60 * 60 * 1000;
  const HORIZONTE_DIAS = 15;
  const HORA_INICIAL = 7, HORA_FINAL = 20;

  /* Códigos WMO usados pelo Open-Meteo. */
  function tempo(codigo) {
    const c = Number(codigo);
    if (c === 0) return ['☀️', 'Céu limpo'];
    if (c === 1 || c === 2) return ['🌤️', 'Parcialmente nublado'];
    if (c === 3) return ['☁️', 'Nublado'];
    if (c === 45 || c === 48) return ['🌫️', 'Neblina'];
    if (c >= 51 && c <= 57) return ['🌦️', 'Garoa'];
    if (c >= 61 && c <= 67) return ['🌧️', 'Chuva'];
    if (c >= 80 && c <= 82) return ['🌧️', 'Pancadas de chuva'];
    if (c >= 95) return ['⛈️', 'Tempestade'];
    return ['🌥️', 'Tempo instável'];
  }

  const ler = () => { try { return JSON.parse(localStorage.getItem(CHAVE) || 'null'); } catch (e) { return null; } };
  const gravar = v => { try { localStorage.setItem(CHAVE, JSON.stringify(v)); } catch (e) { /* sem armazenamento */ } };

  function dias(resposta) {
    const d = resposta && resposta.daily, h = resposta && resposta.hourly;
    if (!d || !Array.isArray(d.time)) return [];
    const horas = {};
    if (h && Array.isArray(h.time)) h.time.forEach((t, i) => {
      const data = t.slice(0, 10);
      (horas[data] = horas[data] || []).push({
        hora: Number(t.slice(11, 13)),
        codigo: h.weather_code[i],
        temp: Math.round(h.temperature_2m[i]),
        chuva: h.precipitation_probability ? h.precipitation_probability[i] : null
      });
    });
    return d.time.map((data, i) => ({
      data,
      codigo: d.weather_code[i],
      max: Math.round(d.temperature_2m_max[i]),
      min: Math.round(d.temperature_2m_min[i]),
      chuva: d.precipitation_probability_max ? d.precipitation_probability_max[i] : null,
      horas: (horas[data] || []).filter(x => Number.isFinite(x.temp))
    })).filter(x => Number.isFinite(x.max) && Number.isFinite(x.min));
  }

  /* Promessa com a lista de dias do evento que ainda têm previsão. */
  function previsao() {
    const ev = typeof dataPorId === 'function' ? dataPorId('evento') : null;
    const cfg = typeof CONFIG !== 'undefined' ? CONFIG.clima : null;
    if (!ev || !cfg || typeof Agenda === 'undefined') return Promise.resolve([]);
    const hoje = Agenda.agora().data;
    if (hoje > ev.fim) return Promise.resolve([]);
    const limite = new Date(hoje + 'T12:00:00Z');
    limite.setUTCDate(limite.getUTCDate() + HORIZONTE_DIAS);
    const inicio = ev.inicio < hoje ? hoje : ev.inicio;
    const fim = ev.fim < limite.toISOString().slice(0, 10) ? ev.fim : limite.toISOString().slice(0, 10);
    if (inicio > fim) return Promise.resolve([]);

    const pedido = [FORMATO, inicio, fim, cfg.lat, cfg.lon].join('|');
    const guardado = ler();
    if (guardado && guardado.pedido === pedido && Date.now() - guardado.quando < VALIDADE_MS) {
      return Promise.resolve(dias(guardado.resposta));
    }
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=' + cfg.lat + '&longitude=' + cfg.lon +
      '&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max' +
      '&hourly=weather_code,temperature_2m,precipitation_probability' +
      '&timezone=America%2FSao_Paulo&start_date=' + inicio + '&end_date=' + fim;
    return fetch(url)
      .then(r => { if (!r.ok) throw new Error('resposta ' + r.status); return r.json(); })
      .then(resposta => { gravar({ pedido, quando: Date.now(), resposta }); return dias(resposta); })
      .catch(() => (guardado && guardado.pedido === pedido ? dias(guardado.resposta) : []));
  }

  /* "seg, 23 nov" */
  function rotuloDia(iso) {
    const d = new Date(iso + 'T12:00:00Z');
    const semana = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'][d.getUTCDay()];
    const meses = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
    return semana + ', ' + d.getUTCDate() + ' ' + meses[d.getUTCMonth()];
  }

  const esc = s => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');

  /* Uma célula por hora: horário, ícone, temperatura e chance de chuva. */
  function celulas(horas, realce) {
    return horas.map(x => {
      const [icone, texto] = tempo(x.codigo);
      return `<div class="clima-hora${x.hora === realce ? ' is-agora' : ''}" title="${esc(texto)}">
        <span class="clima-hora-h">${x.hora}h</span>
        <span class="clima-hora-i" aria-hidden="true">${icone}</span>
        <span class="clima-hora-t">${x.temp}°</span>
        <span class="clima-hora-c">${x.chuva != null ? '💧 ' + x.chuva + '%' : ''}</span>
        <span class="sr-only">${esc(texto)}</span>
      </div>`;
    }).join('');
  }

  /* Horas do evento de um dia, para o painel que abre ao tocar no dia. */
  function horasDoEvento(dia) {
    const horas = (dia.horas || []).filter(x => x.hora >= HORA_INICIAL && x.hora <= HORA_FINAL);
    if (!horas.length) return '';
    return `<div class="clima-horas">${celulas(horas)}</div>`;
  }

  /* Próximas `n` horas a partir da hora atual, só no dia corrente. */
  function proximas(lista, n) {
    if (typeof Agenda === 'undefined') return '';
    const agora = Agenda.agora();
    const dia = lista.filter(d => d.data === agora.data)[0];
    if (!dia) return '';
    const h = Math.floor(agora.min / 60);
    const horas = (dia.horas || []).filter(x => x.hora >= h).slice(0, n || 6);
    if (!horas.length) return '';
    return `<div class="clima-horas clima-horas--linha">${celulas(horas, h)}</div>`;
  }

  /* Liga os botões de dia (data-clima-dia) a um painel: tocar abre as horas
     daquele dia, tocar de novo fecha. `alvo` devolve o painel de cada botão. */
  function ligarDias(raiz, lista, alvo) {
    raiz.querySelectorAll('[data-clima-dia]').forEach(btn => {
      btn.addEventListener('click', () => {
        const dia = lista.filter(d => d.data === btn.dataset.climaDia)[0];
        const painel = alvo(btn);
        if (!dia || !painel) return;
        const aberto = btn.getAttribute('aria-expanded') === 'true';
        raiz.querySelectorAll('[data-clima-dia]').forEach(b => {
          b.setAttribute('aria-expanded', 'false');
          const p = alvo(b);
          if (p && p !== painel) p.hidden = true;
        });
        if (aberto) { painel.hidden = true; return; }
        painel.innerHTML = `<div class="clima-horas-cab">${esc(rotuloDia(dia.data))}, hora a hora</div>` + horasDoEvento(dia);
        painel.hidden = false;
        btn.setAttribute('aria-expanded', 'true');
      });
    });
  }

  const CREDITO = '<a href="https://open-meteo.com/" target="_blank" rel="noopener noreferrer">Open-Meteo</a>';

  window.Clima = { previsao, tempo, rotuloDia, proximas, ligarDias, CREDITO };
})();
