/* Registro do service worker.
 *
 * Carregado por todas as páginas de conteúdo, pela tag que
 * scripts/gerar_meta.mjs escreve no bloco de metadados. O arquivo serve a três
 * propósitos: registrar o sw.js com escopo da raiz, avisar a interface quando
 * houver versão nova esperando, além de oferecer a função que manda o service
 * worker assumir na hora.
 *
 * A troca nunca acontece sozinha. Quem decide é o visitante, pelo botão que a
 * tarefa T2.2 coloca na tela: recarregar sem aviso derrubaria a leitura de
 * quem está no meio da programação.
 *
 * Plano: claude/plano-app-70rbras.md, tarefa T2.1.
 */
(function () {
  'use strict';

  if (!('serviceWorker' in navigator)) return;
  /* O service worker exige origem segura. Em https funciona; em localhost
     também, por decisão dos navegadores, o que permite testar sem certificado. */
  if (location.protocol !== 'https:' && location.hostname !== 'localhost'
      && location.hostname !== '127.0.0.1') return;

  var esperando = null;
  var pediuTroca = false;

  function avisar(registro) {
    esperando = registro.waiting;
    if (!esperando) return;
    document.dispatchEvent(new CustomEvent('sw:atualizacao'));
  }

  /* A interface chama isto quando o visitante aceita atualizar. */
  window.aplicarAtualizacao = function () {
    if (!esperando) { location.reload(); return; }
    pediuTroca = true;
    esperando.postMessage('pular-espera');
  };

  window.addEventListener('load', function () {
    navigator.serviceWorker.register('sw.js', { scope: './' }).then(function (registro) {
      avisar(registro);

      registro.addEventListener('updatefound', function () {
        var novo = registro.installing;
        if (!novo) return;
        novo.addEventListener('statechange', function () {
          /* Instalado com alguém no controle significa versão nova esperando;
             sem controlador é a primeira instalação, que não merece aviso. */
          if (novo.state === 'installed' && navigator.serviceWorker.controller) {
            avisar(registro);
          }
        });
      });
    }).catch(function (erro) {
      if (window.console) console.warn('sw: registro falhou', erro && erro.message);
    });

    /* Recarrega uma única vez, somente quando a troca foi pedida pelo
       visitante. Na primeira instalação o service worker também assume o
       controle, porém ali recarregar seria um piscar de tela sem motivo. */
    var recarregou = false;
    navigator.serviceWorker.addEventListener('controllerchange', function () {
      if (!pediuTroca || recarregou) return;
      recarregou = true;
      location.reload();
    });
  });
})();
