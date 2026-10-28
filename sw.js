/* Service worker do site da 70ª RBras.
 *
 * Ele existe por um cenário concreto: wi-fi do campus congestionado com
 * centenas de pessoas, rede de celular instável dentro dos prédios. Sem ele o
 * site deixa de responder exatamente no momento em que é mais necessário.
 *
 * Três estratégias, uma por tipo de pedido:
 *   navegação em HTML      rede primeiro, com tempo limite; cai no cache,
 *                          depois em offline.html
 *   data/programacao.json  rede primeiro, com tempo limite; cai no cache
 *   demais arquivos nossos cache primeiro, revalidando em segundo plano
 *
 * Pedido para outro domínio, como as fontes do Google, passa direto para a
 * rede, sem cache. Sem internet ele falha, então o navegador cai nas fontes do
 * sistema: a página continua legível, apenas muda de aparência.
 *
 * ATENÇÃO: quem alterar qualquer arquivo da lista CASCO precisa somar um a
 * VERSAO. Sem isso o aparelho de quem já visitou continua servindo a cópia
 * antiga, pois o cache só é trocado quando o nome muda.
 *
 * Plano: claude/plano-app-70rbras.md, tarefa T2.1.
 */

const VERSAO = 2;
const CACHE = 'rbras70-casco-v' + VERSAO;
const SEM_REDE = 'offline.html';
const LIMITE_MS = 3000;
const PROGRAMACAO = 'data/programacao.json';

/* O casco é o que precisa estar no aparelho antes de faltar rede. Imagens de
   pessoas além de banners ficam de fora por peso: elas entram no cache sozinhas
   conforme forem visitadas. */
const CASCO = [
  './',
  'index.html',
  'programacao.html',
  'apresentadores.html',
  'palestrantes.html',
  'comissoes.html',
  'inscricoes.html',
  'logistica.html',
  'faq.html',
  'premios.html',
  'fundo-estudante.html',
  'wasa.html',
  'offline.html',

  'manifest.webmanifest',

  'assets/style.css',
  'assets/programacao.css',
  'assets/nav.js',
  'assets/footer.js',
  'assets/programacao.js',
  'assets/app.css',
  'assets/pessoas.js',
  'assets/registrar-sw.js',

  'data/config.js',
  'data/dates.js',
  'data/pessoas.js',
  'data/speakers.js',
  'data/committee.js',
  'data/sponsors.js',
  'data/premios.js',
  'data/inscricoes.js',
  'data/fundo.js',
  'data/apresentadores.js',
  'data/submissions.js',
  'data/faq.js',
  'data/hotels.js',
  'data/graficas.js',
  'data/wasa.js',
  'data/programacao.json',

  'assets/icons/icon-192.png',
  'assets/icons/icon-512.png',
  'assets/icons/icon-512-maskable.png',
  'assets/icons/apple-touch-icon.png',
  'assets/logos/70rbras_logo_positivo_cor.png',
  'assets/logos/70rbras_logo_negativo_cor.png'
];

/* ------------------------------------------------------------- instalação */

self.addEventListener('install', function (evento) {
  evento.waitUntil(
    caches.open(CACHE).then(function (cache) {
      /* Um arquivo ausente não pode derrubar a instalação inteira, portanto
         cada item é guardado por conta própria. */
      return Promise.all(CASCO.map(function (caminho) {
        return cache.add(new Request(caminho, { cache: 'reload' })).catch(function (erro) {
          console.warn('sw: não foi possível guardar', caminho, erro && erro.message);
        });
      }));
    })
  );
});

/* -------------------------------------------------------------- ativação */

self.addEventListener('activate', function (evento) {
  evento.waitUntil(
    caches.keys().then(function (nomes) {
      return Promise.all(nomes
        .filter(function (n) { return n.indexOf('rbras70-casco-v') === 0 && n !== CACHE; })
        .map(function (n) { return caches.delete(n); }));
    }).then(function () {
      return self.clients.claim();
    })
  );
});

/* A interface oferece o botão de atualizar; esta mensagem é o que ele dispara. */
self.addEventListener('message', function (evento) {
  if (evento.data === 'pular-espera') self.skipWaiting();
});

/* ------------------------------------------------------------ estratégias */

function comLimite(pedido) {
  return new Promise(function (resolve, reject) {
    var caiu = false;
    var relogio = setTimeout(function () { caiu = true; reject(new Error('tempo limite')); }, LIMITE_MS);
    fetch(pedido).then(function (resposta) {
      clearTimeout(relogio);
      if (!caiu) resolve(resposta);
    }).catch(function (erro) {
      clearTimeout(relogio);
      if (!caiu) reject(erro);
    });
  });
}

function guardar(pedido, resposta) {
  if (!resposta || !resposta.ok || resposta.type === 'opaque') return resposta;
  var copia = resposta.clone();
  caches.open(CACHE).then(function (cache) { cache.put(pedido, copia); });
  return resposta;
}

/* A página precisa saber se exibe dado da rede ou cópia guardada, pois a
   diferença muda o que ela conta ao participante. O cabeçalho abaixo é o modo
   de dizer isso sem inventar estado, acertando inclusive no caso em que a rede
   existe mas estourou o tempo limite. Consumido por assets/programacao.js. */
function marcarComoCache(resposta) {
  var cabecalhos = new Headers(resposta.headers);
  cabecalhos.set('X-RBras-Origem', 'cache');
  return resposta.blob().then(function (corpo) {
    return new Response(corpo, {
      status: resposta.status,
      statusText: resposta.statusText,
      headers: cabecalhos
    });
  });
}

/* Rede primeiro: o conteúdo fresco vale mais, o cache é a rede de segurança. */
function redePrimeiro(pedido, reserva) {
  return comLimite(pedido)
    .then(function (resposta) { return guardar(pedido, resposta); })
    .catch(function () {
      return caches.match(pedido).then(function (guardada) {
        if (guardada) return marcarComoCache(guardada);
        return reserva ? caches.match(reserva) : Response.error();
      });
    });
}

/* Cache primeiro, revalidando em segundo plano: o arquivo aparece na hora,
   enquanto a versão nova fica pronta para a visita seguinte. */
function cachePrimeiro(pedido) {
  return caches.match(pedido).then(function (guardada) {
    var daRede = fetch(pedido)
      .then(function (resposta) { return guardar(pedido, resposta); })
      .catch(function () { return guardada; });
    return guardada || daRede;
  });
}

self.addEventListener('fetch', function (evento) {
  var pedido = evento.request;
  if (pedido.method !== 'GET') return;

  var url = new URL(pedido.url);
  if (url.origin !== self.location.origin) return;   // fontes do Google e afins

  if (pedido.mode === 'navigate') {
    evento.respondWith(redePrimeiro(pedido, SEM_REDE));
    return;
  }

  if (url.pathname.indexOf(PROGRAMACAO) >= 0) {
    evento.respondWith(redePrimeiro(pedido, null));
    return;
  }

  evento.respondWith(cachePrimeiro(pedido));
});
