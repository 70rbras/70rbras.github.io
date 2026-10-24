/* Programação da 70ª RBras — monta as três visões a partir de data/programacao.json.
   Quando a página é servida como arquivo único, os dados chegam em window.PROGRAMACAO. */
(function () {
  'use strict';

  var CORES = {
    'conferencia': '#1A3870',
    'mini-conferencia': '#2560AC',
    'minicurso': '#5A9C28',
    'sessao-tematica': '#2A9080',
    'comunicacao-oral': '#38AAAA',
    'sessao-especial': '#2D5820',
    'poster': '#D6A818',
    'social': '#B5881A',
    'institucional': '#30476F',
    'intervalo': '#8C9BAD',
    'refeicao': '#8C9BAD'
  };
  var LEVES = ['intervalo', 'refeicao'];
  /* 'A definir' ainda não foi decidido. 'LIVRE' é o tempo em que cada participante
     escolhe onde ficar. Nenhum dos dois é prédio, portanto nenhum dos dois entra nos
     avisos de troca de prédio. */
  var SEM_PREDIO = ['A definir', 'LIVRE'];

  var raiz = document.querySelector('.pg');
  if (!raiz) return;

  var el = {
    aviso: raiz.querySelector('#pgAviso'),
    atualizado: raiz.querySelector('#pgAtualizado'),
    modos: raiz.querySelectorAll('.pg-modo'),
    paineis: {
      geral: raiz.querySelector('#pgGeral'),
      dia: raiz.querySelector('#pgDia'),
      busca: raiz.querySelector('#pgBusca')
    },
    grade: raiz.querySelector('#pgGrade'),
    dias: raiz.querySelector('#pgDias'),
    filtros: raiz.querySelector('#pgFiltros'),
    tempo: raiz.querySelector('#pgTempo'),
    campo: raiz.querySelector('#pgCampo'),
    resultados: raiz.querySelector('#pgResultados'),
    ajuda: raiz.querySelector('#pgAjuda'),
    legenda: raiz.querySelector('#pgLegenda')
  };

  var dados = null;
  var diaAtivo = null;
  var predioAtivo = 'todos';

  function texto(valor) {
    var d = document.createElement('div');
    d.textContent = valor == null ? '' : String(valor);
    return d.innerHTML;
  }

  function semAcento(s) {
    return (s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  }

  function cor(a) { return CORES[a.tipo_slug] || '#1A3870'; }

  function faixa(a) {
    if (!a.inicio) return 'horário a definir';
    return a.fim ? a.inicio + ' às ' + a.fim : 'a partir das ' + a.inicio;
  }

  function indefinido(valor) {
    var v = semAcento(valor);
    return !v || v.indexOf('a confirmar') === 0 || v.indexOf('a definir') === 0;
  }

  /* texto() escapa < e >, mas não escapa aspas, portanto não serve sozinho dentro
     de um atributo HTML. atributo() fecha essa brecha. */
  function atributo(valor) {
    return texto(valor).replace(/"/g, '&quot;');
  }

  /* Só aceita https, sem espaço nem aspas. Um valor digitado errado na planilha
     deixa de virar link em vez de virar um link executável. */
  function urlSegura(u) {
    return /^https:\/\/[^\s"'<>]+$/.test(u || '') ? u : '';
  }

  function ondeHtml(a) {
    var l = a.local || {};
    var temPredio = l.predio && l.predio !== 'A definir';
    var sala;
    if (!temPredio) sala = 'local a definir';
    else if (indefinido(l.sala)) sala = 'sala a confirmar';
    else sala = l.sala;

    var mapa = temPredio ? urlSegura(l.mapa_url) : '';
    var comoChegar = temPredio && l.como_chegar ? l.como_chegar : '';

    return '<div class="pg-onde">' +
      (temPredio ? '<span class="pg-predio" data-predio="' + atributo(l.predio) + '">' +
        texto(l.predio) + '</span>' : '') +
      (mapa
        ? '<a class="pg-sala" href="' + atributo(mapa) + '" target="_blank" rel="noopener"' +
          ' aria-label="' + atributo(sala + ', abre o mapa em nova aba') + '">' +
          texto(sala) + '</a>'
        : '<span class="pg-sala">' + texto(sala) + '</span>') +
      '</div>' +
      (comoChegar ? '<p class="pg-como">' + texto(comoChegar) + '</p>' : '');
  }

  function ondeTexto(a) {
    var l = a.local || {};
    if (!l.predio || l.predio === 'A definir') return 'local a definir';
    return indefinido(l.sala) ? l.predio + ', sala a confirmar' : (l.nome || l.predio);
  }

  function doDia(data) {
    return dados.atividades.filter(function (a) { return a.data === data; });
  }

  // ------------------------------------------------------------ visão geral
  var LACUNA = 60; // minutos tolerados entre duas atividades do mesmo grupo

  function minutos(h) {
    var m = /^(\d{2}):(\d{2})$/.exec(h || '');
    return m ? Number(m[1]) * 60 + Number(m[2]) : null;
  }

  function resumoOnde(lista) {
    var locais = lista.map(function (a) { return a.local.id; })
      .filter(function (l, i, arr) { return arr.indexOf(l) === i; });
    if (locais.length === 1) return ondeTexto(lista[0]);

    var predios = lista.map(function (a) { return a.local.predio; })
      .filter(function (p, i, arr) { return p && p !== 'A definir' && arr.indexOf(p) === i; });
    var onde = predios.length ? ' no ' + predios.join(' e no ') : '';

    var simultaneas = lista.every(function (a) { return a.inicio === lista[0].inicio; });
    return lista.length + (simultaneas ? ' em paralelo' : ' sessões') + onde;
  }

  /* Reúne as atividades do mesmo grupo que se encadeiam no dia: as simultâneas
     e as que vêm logo em seguida, mesmo separadas por um café. */
  function cadeiaDoGrupo(todas, alvo) {
    var irmas = todas.filter(function (b) { return b.grupo === alvo.grupo; })
      .sort(function (x, y) { return (minutos(x.inicio) || 0) - (minutos(y.inicio) || 0); });
    var cadeias = [];
    irmas.forEach(function (x) {
      var atual = cadeias[cadeias.length - 1];
      if (atual) {
        var fim = Math.max.apply(null, atual.map(function (y) {
          return minutos(y.fim) || minutos(y.inicio) || 0;
        }));
        if ((minutos(x.inicio) || 0) - fim <= LACUNA) {
          atual.push(x);
          return;
        }
      }
      cadeias.push([x]);
    });
    for (var i = 0; i < cadeias.length; i++) {
      if (cadeias[i].indexOf(alvo) >= 0) return cadeias[i];
    }
    return [alvo];
  }

  function marcosDoDia(data) {
    var todas = doDia(data);
    var usados = {};
    var itens = [];

    todas.forEach(function (a) {
      if (!a.destaque || usados[a.id]) return;

      if (!a.grupo) {
        usados[a.id] = true;
        itens.push({ hora: a.inicio, fim: a.fim, nome: a.titulo, cor: cor(a), onde: ondeTexto(a) });
        return;
      }

      var cadeia = cadeiaDoGrupo(todas, a);
      cadeia.forEach(function (x) { usados[x.id] = true; });
      var fins = cadeia.map(function (x) { return x.fim; }).filter(Boolean);
      itens.push({
        hora: cadeia[0].inicio,
        fim: fins.length ? fins.sort()[fins.length - 1] : '',
        nome: cadeia.length > 1 ? a.grupo : a.titulo,
        cor: cor(a),
        onde: resumoOnde(cadeia)
      });
    });

    return itens.sort(function (x, y) {
      return (minutos(x.hora) || 0) - (minutos(y.hora) || 0);
    });
  }

  function montarGeral() {
    el.grade.innerHTML = dados.dias.map(function (dia) {
      var itens = marcosDoDia(dia.data);
      var corpo = itens.length ? itens.map(function (a) {
        return '<div class="pg-item" style="--cor:' + a.cor + '">' +
          '<div class="pg-item-hora">' + texto(a.hora) +
          (a.fim ? '<small>até ' + texto(a.fim) + '</small>' : '') + '</div>' +
          '<div class="pg-item-nome">' + texto(a.nome) + '</div>' +
          '<div class="pg-item-onde">' + texto(a.onde) + '</div>' +
          '</div>';
      }).join('') : '<p class="pg-sub" style="padding:.6rem">Sem marcos definidos para este dia.</p>';
      return '<div class="pg-coluna">' +
        '<div class="pg-coluna-topo"><strong>' + texto(dia.rotulo_curto) + '</strong>' +
        '<span>' + texto(dia.rotulo.split(',')[0]) + '</span></div>' +
        '<div class="pg-coluna-corpo">' + corpo + '</div></div>';
    }).join('');
  }

  // ------------------------------------------------------------ dia a dia
  function montarSeletorDias() {
    el.dias.innerHTML = dados.dias.map(function (dia) {
      var partes = dia.rotulo.split(', ');
      return '<button class="pg-dia-btn" role="tab" data-data="' + texto(dia.data) + '"' +
        ' aria-selected="' + (dia.data === diaAtivo) + '">' +
        '<strong class="pg-dia-longo">' + texto(partes[0]) + '</strong>' +
        '<strong class="pg-dia-curto">' + texto(dia.rotulo_curto) + '</strong>' +
        '<span>' + texto(partes[1] || dia.data) + '</span></button>';
    }).join('');
    Array.prototype.forEach.call(el.dias.querySelectorAll('.pg-dia-btn'), function (b) {
      b.addEventListener('click', function () {
        diaAtivo = b.dataset.data;
        montarSeletorDias();
        montarTempo();
      });
    });
  }

  function montarFiltros() {
    var predios = ['todos'].concat(dados.locais.map(function (l) { return l.predio; })
      .filter(function (p, i, arr) { return p && p !== 'A definir' && arr.indexOf(p) === i; }));
    el.filtros.innerHTML = '<span class="pg-filtros-rotulo">Onde</span>' +
      predios.map(function (p) {
        return '<button class="pg-chip" data-predio="' + texto(p) + '"' +
          ' aria-pressed="' + (p === predioAtivo) + '">' +
          texto(p === 'todos' ? 'Tudo' : p) + '</button>';
      }).join('');
    Array.prototype.forEach.call(el.filtros.querySelectorAll('.pg-chip'), function (b) {
      b.addEventListener('click', function () {
        predioAtivo = b.dataset.predio;
        montarFiltros();
        montarTempo();
      });
    });
  }

  function predioDe(a) {
    var p = a.local && a.local.predio;
    return p && SEM_PREDIO.indexOf(p) < 0 ? p : null;
  }

  function listarPredios(predios) {
    if (predios.length === 1) return texto(predios[0]);
    var inicio = predios.slice(0, -1).map(function (p) { return texto(p); }).join(', ');
    return inicio + ' e ' + texto(predios[predios.length - 1]);
  }

  /* O aviso compara o conjunto de prédios do bloco anterior com o conjunto do bloco
     atual. Guardar um único prédio não resolve o caso de duas atividades simultâneas
     em prédios diferentes: quem está no prédio que não continua precisa do aviso,
     quem já está no prédio de destino não precisa. */
  function avisoTroca(origens, destinos) {
    if (!origens.length || !destinos.length) return '';

    if (destinos.length === 1) {
      var trocam = origens.filter(function (p) { return destinos.indexOf(p) < 0; });
      if (!trocam.length) return '';
      return '<p class="pg-mudanca">Troca de prédio: ' + listarPredios(trocam) +
        ' para ' + texto(destinos[0]) + '</p>';
    }

    var mesmos = origens.length === destinos.length && origens.every(function (p) {
      return destinos.indexOf(p) >= 0;
    });
    if (mesmos) return '';
    return '<p class="pg-mudanca">Atividades em mais de um prédio: ' +
      listarPredios(destinos) + '. Confira onde é a sua antes de sair.</p>';
  }

  function montarTempo() {
    var lista = doDia(diaAtivo).filter(function (a) {
      return predioAtivo === 'todos' || a.local.predio === predioAtivo;
    });

    if (!lista.length) {
      el.tempo.innerHTML = '<p class="pg-vazio">Nenhuma atividade neste dia com o filtro escolhido.</p>';
      return;
    }

    var blocos = [];
    lista.forEach(function (a) {
      var ultimo = blocos[blocos.length - 1];
      if (ultimo && ultimo.inicio === a.inicio) ultimo.itens.push(a);
      else blocos.push({ inicio: a.inicio, itens: [a] });
    });

    var prediosAnteriores = [];
    el.tempo.innerHTML = blocos.map(function (bloco) {
      var fins = bloco.itens.map(function (a) { return a.fim; })
        .filter(function (f, i, arr) { return f && arr.indexOf(f) === i; });
      var predios = bloco.itens.map(function (a) { return predioDe(a); })
        .filter(function (p, i, arr) { return p && arr.indexOf(p) === i; });

      var mudanca = avisoTroca(prediosAnteriores, predios);
      if (predios.length) prediosAnteriores = predios;

      var cartoes = bloco.itens.map(function (a) {
        var leve = LEVES.indexOf(a.tipo_slug) >= 0;
        var pessoas = a.pessoas.map(function (p) { return p.nome; }).join(', ');
        return '<article class="pg-cartao' + (leve ? ' is-leve' : '') + '" style="--cor:' + cor(a) + '"' +
          ' id="' + texto(a.id) + '">' +
          '<span class="pg-tipo">' + texto(a.tipo) + '</span>' +
          '<h3 class="pg-titulo">' + texto(a.titulo) + '</h3>' +
          (a.subtitulo || pessoas ? '<p class="pg-sub">' + texto(pessoas || a.subtitulo) + '</p>' : '') +
          ondeHtml(a) +
          (a.descricao ? '<p class="pg-desc">' + texto(a.descricao) + '</p>' : '') +
          '</article>';
      }).join('');

      return '<div class="pg-bloco">' + mudanca +
        '<div class="pg-horario">' + texto(bloco.inicio || '—') +
        (fins.length === 1 ? '<small>até ' + texto(fins[0]) + '</small>' : '') +
        '</div><div class="pg-cartoes">' + cartoes + '</div></div>';
    }).join('');
  }

  // ------------------------------------------------------------ busca
  var indice = [];

  function montarIndice() {
    var porId = {};
    dados.atividades.forEach(function (a) { porId[a.id] = a; });
    indice = dados.trabalhos.map(function (t) {
      var s = porId[t.sessao];
      var dia = s ? dados.dias.filter(function (d) { return d.data === s.data; })[0] : null;
      return {
        t: t,
        sessao: s,
        dia: dia,
        busca: semAcento(t.id + ' ' + t.autor + ' ' + t.titulo + ' ' + t.area + ' ' + t.sessao)
      };
    });
  }

  function montarBusca(consulta) {
    var q = semAcento(consulta).trim();
    if (q.length < 2) {
      el.resultados.innerHTML = '<p class="pg-vazio">Digite ao menos duas letras, ' +
        'o número do trabalho ou o nome de quem apresenta.</p>';
      return;
    }
    var termos = q.split(/\s+/);
    var achados = indice.filter(function (r) {
      return termos.every(function (t) { return r.busca.indexOf(t) >= 0; });
    });

    if (!achados.length) {
      el.resultados.innerHTML = '<p class="pg-vazio">Nenhum trabalho encontrado para esta busca.</p>';
      return;
    }

    var mostra = achados.slice(0, 40);
    var html = mostra.map(function (r) {
      var t = r.t, s = r.sessao, d = r.dia;
      var quando = s && d
        ? texto(d.rotulo_curto) + ', ' + texto(faixa(s)) + ', ' + texto(ondeTexto(s))
        : 'sessão ainda não divulgada';
      var corTrab = t.modalidade === 'Pôster' ? CORES['poster'] : CORES['comunicacao-oral'];
      return '<article class="pg-resultado" style="--cor:' + corTrab + '">' +
        '<div class="pg-resultado-topo">' +
        '<span class="pg-cod">#' + texto(t.id) + '</span>' +
        '<span class="pg-tipo" style="color:' + corTrab + '">' + texto(t.modalidade) + '</span>' +
        (t.sessao ? '<span class="pg-cod">' + texto(t.sessao) + '</span>' : '') +
        (t.painel ? '<span class="pg-cod">painel ' + texto(t.painel) + '</span>' : '') +
        '</div>' +
        '<h4>' + texto(t.titulo) + '</h4>' +
        '<p class="pg-resultado-quando">' + quando + '</p>' +
        '<p class="pg-resultado-meta">' + texto(t.autor) +
        (t.area ? ' &middot; ' + texto(t.area) : '') + '</p>' +
        '</article>';
    }).join('');

    if (achados.length > mostra.length) {
      html += '<p class="pg-busca-ajuda">Mostrando ' + mostra.length + ' de ' + achados.length +
        ' trabalhos. Refine a busca para ver os demais.</p>';
    }
    el.resultados.innerHTML = html;
  }

  // ------------------------------------------------------------ legenda
  function montarLegenda() {
    var tipos = [];
    dados.atividades.forEach(function (a) {
      if (!tipos.some(function (t) { return t.slug === a.tipo_slug; })) {
        tipos.push({ slug: a.tipo_slug, nome: a.tipo });
      }
    });
    el.legenda.innerHTML = tipos.map(function (t) {
      return '<span style="--cor:' + (CORES[t.slug] || '#1A3870') + '"><i></i>' + texto(t.nome) + '</span>';
    }).join('');
  }

  // ------------------------------------------------------------ modos
  function trocarModo(nome) {
    Array.prototype.forEach.call(el.modos, function (b) {
      b.setAttribute('aria-selected', String(b.dataset.modo === nome));
    });
    Object.keys(el.paineis).forEach(function (k) {
      if (el.paineis[k]) el.paineis[k].hidden = k !== nome;
    });
    if (nome === 'busca' && el.campo) el.campo.focus();
  }

  /* Os plurais das modalidades: a planilha guarda o rótulo no singular. */
  var PLURAIS = {
    'poster': 'pôsteres',
    'comunicacao-oral': 'comunicações orais'
  };

  function plural(nome, quantos) {
    if (quantos === 1) return nome.toLowerCase();
    var chave = semAcento(String(nome)).toLowerCase().replace(/[^a-z0-9]+/g, '-');
    return PLURAIS[chave] || (nome.toLowerCase() + 's');
  }

  /* A contagem de trabalhos sai do próprio JSON: escrita à mão ela envelhece
     a cada alteração da planilha. */
  function montarAjuda() {
    if (!el.ajuda) return;
    var lista = dados.trabalhos || [];
    if (!lista.length) {
      el.ajuda.textContent = 'A relação de trabalhos aceitos ainda não foi publicada.';
      return;
    }
    var porModalidade = [];
    lista.forEach(function (t) {
      var nome = t.modalidade || 'Trabalho';
      var achado = null;
      porModalidade.forEach(function (m) { if (m.nome === nome) achado = m; });
      if (achado) achado.quantos += 1;
      else porModalidade.push({ nome: nome, quantos: 1 });
    });
    porModalidade.sort(function (a, b) { return b.quantos - a.quantos; });

    var partes = porModalidade.map(function (m) {
      return m.quantos + ' ' + plural(m.nome, m.quantos);
    });
    var detalhe = partes.length === 1
      ? partes[0]
      : partes.slice(0, -1).join(', ') + ' e ' + partes[partes.length - 1];

    el.ajuda.textContent = lista.length === 1
      ? 'É 1 trabalho aceito: ' + detalhe + '.'
      : 'São ' + lista.length + ' trabalhos aceitos: ' + detalhe + '.';
  }

  function iniciar(d) {
    dados = d;

    if (el.atualizado && d.gerado_em_texto) {
      el.atualizado.textContent = 'Atualizada em ' + d.gerado_em_texto;
    }
    if (el.aviso) {
      var mostrar = (d.config.mostrar_aviso || 'SIM').toUpperCase() === 'SIM';
      el.aviso.hidden = !mostrar;
      if (mostrar && d.config.aviso_programacao) el.aviso.textContent = d.config.aviso_programacao;
    }

    var hoje = new Date().toISOString().slice(0, 10);
    var doHoje = d.dias.filter(function (x) { return x.data === hoje; })[0];
    diaAtivo = doHoje ? doHoje.data : (d.dias[0] && d.dias[0].data);

    montarGeral();
    montarSeletorDias();
    montarFiltros();
    montarTempo();
    montarIndice();
    montarLegenda();
    montarAjuda();
    montarBusca('');

    Array.prototype.forEach.call(el.modos, function (b) {
      b.addEventListener('click', function () { trocarModo(b.dataset.modo); });
    });

    if (el.campo) {
      var timer;
      el.campo.addEventListener('input', function () {
        clearTimeout(timer);
        timer = setTimeout(function () { montarBusca(el.campo.value); }, 150);
      });
    }

    var alvo = (location.hash || '').replace('#', '');
    if (alvo && ['geral', 'dia', 'busca'].indexOf(alvo) >= 0) trocarModo(alvo);
    else trocarModo(doHoje ? 'dia' : 'geral');
  }

  if (window.PROGRAMACAO) {
    iniciar(window.PROGRAMACAO);
  } else {
    fetch('data/programacao.json', { cache: 'no-cache' })
      .then(function (r) {
        if (!r.ok) throw new Error('resposta ' + r.status);
        return r.json();
      })
      .then(iniciar)
      .catch(function (e) {
        raiz.querySelector('#pgTempo').innerHTML =
          '<p class="pg-vazio">Não foi possível carregar a programação agora. ' +
          'Recarregue a página em alguns instantes.</p>';
        if (window.console) console.error('programacao:', e);
      });
  }
})();
