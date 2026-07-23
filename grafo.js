const CORES = {
  Filme: "#ff735c",
  Serie: "#4f91ea",
  Ator: "#8a68dd",
  Diretor: "#f0ab3d",
  Genero: "#43aa7b",
  Plataforma: "#dc5da4"
};

const DADOS_NOS = [
  {
    "id": "aOrigem",
    "label": "A Origem",
    "tipo": "Filme",
    "titulo": "A Origem",
    "ano": "2010",
    "nota": 8.8,
    "duracaoMinutos": 148,
    "classificacaoIndicativa": "14 anos"
  },
  {
    "id": "interestelar",
    "label": "Interestelar",
    "tipo": "Filme",
    "titulo": "Interestelar",
    "ano": "2014",
    "nota": 8.7,
    "duracaoMinutos": 169,
    "classificacaoIndicativa": "10 anos"
  },
  {
    "id": "matrix",
    "label": "Matrix",
    "tipo": "Filme",
    "titulo": "Matrix",
    "ano": "1999",
    "nota": 8.7,
    "duracaoMinutos": 136,
    "classificacaoIndicativa": "16 anos"
  },
  {
    "id": "parasita",
    "label": "Parasita",
    "tipo": "Filme",
    "titulo": "Parasita",
    "ano": "2019",
    "nota": 8.5,
    "duracaoMinutos": 132,
    "classificacaoIndicativa": "16 anos"
  },
  {
    "id": "coringa",
    "label": "Coringa",
    "tipo": "Filme",
    "titulo": "Coringa",
    "ano": "2019",
    "nota": 8.4,
    "duracaoMinutos": 122,
    "classificacaoIndicativa": "16 anos"
  },
  {
    "id": "panteraNegra",
    "label": "Pantera Negra",
    "tipo": "Filme",
    "titulo": "Pantera Negra",
    "ano": "2018",
    "nota": 7.3,
    "duracaoMinutos": 134,
    "classificacaoIndicativa": "12 anos"
  },
  {
    "id": "strangerThings",
    "label": "Stranger Things",
    "tipo": "Serie",
    "titulo": "Stranger Things",
    "ano": "2016",
    "nota": 8.7,
    "numeroTemporadas": 5,
    "classificacaoIndicativa": "16 anos"
  },
  {
    "id": "breakingBad",
    "label": "Breaking Bad",
    "tipo": "Serie",
    "titulo": "Breaking Bad",
    "ano": "2008",
    "nota": 9.5,
    "numeroTemporadas": 5,
    "classificacaoIndicativa": "18 anos"
  },
  {
    "id": "dark",
    "label": "Dark",
    "tipo": "Serie",
    "titulo": "Dark",
    "ano": "2017",
    "nota": 8.7,
    "numeroTemporadas": 3,
    "classificacaoIndicativa": "16 anos"
  },
  {
    "id": "wandinha",
    "label": "Wandinha",
    "tipo": "Serie",
    "titulo": "Wandinha",
    "ano": "2022",
    "nota": 8.1,
    "numeroTemporadas": 2,
    "classificacaoIndicativa": "14 anos"
  },
  {
    "id": "arcane",
    "label": "Arcane",
    "tipo": "Serie",
    "titulo": "Arcane",
    "ano": "2021",
    "nota": 9.0,
    "numeroTemporadas": 2,
    "classificacaoIndicativa": "16 anos"
  },
  {
    "id": "theLastOfUs",
    "label": "The Last of Us",
    "tipo": "Serie",
    "titulo": "The Last of Us",
    "ano": "2023",
    "nota": 8.8,
    "numeroTemporadas": 2,
    "classificacaoIndicativa": "16 anos"
  },
  {
    "id": "leonardoDiCaprio",
    "label": "Leonardo DiCaprio",
    "tipo": "Ator",
    "nome": "Leonardo DiCaprio"
  },
  {
    "id": "matthewMcConaughey",
    "label": "Matthew McConaughey",
    "tipo": "Ator",
    "nome": "Matthew McConaughey"
  },
  {
    "id": "keanuReeves",
    "label": "Keanu Reeves",
    "tipo": "Ator",
    "nome": "Keanu Reeves"
  },
  {
    "id": "joaquinPhoenix",
    "label": "Joaquin Phoenix",
    "tipo": "Ator",
    "nome": "Joaquin Phoenix"
  },
  {
    "id": "chadwickBoseman",
    "label": "Chadwick Boseman",
    "tipo": "Ator",
    "nome": "Chadwick Boseman"
  },
  {
    "id": "millieBobbyBrown",
    "label": "Millie Bobby Brown",
    "tipo": "Ator",
    "nome": "Millie Bobby Brown"
  },
  {
    "id": "bryanCranston",
    "label": "Bryan Cranston",
    "tipo": "Ator",
    "nome": "Bryan Cranston"
  },
  {
    "id": "jennaOrtega",
    "label": "Jenna Ortega",
    "tipo": "Ator",
    "nome": "Jenna Ortega"
  },
  {
    "id": "christopherNolan",
    "label": "Christopher Nolan",
    "tipo": "Diretor",
    "nome": "Christopher Nolan"
  },
  {
    "id": "lanaWachowski",
    "label": "Lana Wachowski",
    "tipo": "Diretor",
    "nome": "Lana Wachowski"
  },
  {
    "id": "bongJoonHo",
    "label": "Bong Joon-ho",
    "tipo": "Diretor",
    "nome": "Bong Joon-ho"
  },
  {
    "id": "ryanCoogler",
    "label": "Ryan Coogler",
    "tipo": "Diretor",
    "nome": "Ryan Coogler"
  },
  {
    "id": "vinceGilligan",
    "label": "Vince Gilligan",
    "tipo": "Diretor",
    "nome": "Vince Gilligan"
  },
  {
    "id": "timBurton",
    "label": "Tim Burton",
    "tipo": "Diretor",
    "nome": "Tim Burton"
  },
  {
    "id": "acao",
    "label": "Ação",
    "tipo": "Genero"
  },
  {
    "id": "aventura",
    "label": "Aventura",
    "tipo": "Genero"
  },
  {
    "id": "drama",
    "label": "Drama",
    "tipo": "Genero"
  },
  {
    "id": "comedia",
    "label": "Comédia",
    "tipo": "Genero"
  },
  {
    "id": "ficcaoCientifica",
    "label": "Ficção Científica",
    "tipo": "Genero"
  },
  {
    "id": "suspense",
    "label": "Suspense",
    "tipo": "Genero"
  },
  {
    "id": "fantasia",
    "label": "Fantasia",
    "tipo": "Genero"
  },
  {
    "id": "animacao",
    "label": "Animação",
    "tipo": "Genero"
  },
  {
    "id": "terror",
    "label": "Terror",
    "tipo": "Genero"
  },
  {
    "id": "romance",
    "label": "Romance",
    "tipo": "Genero"
  },
  {
    "id": "netflix",
    "label": "Netflix",
    "tipo": "Plataforma"
  },
  {
    "id": "primeVideo",
    "label": "Prime Video",
    "tipo": "Plataforma"
  },
  {
    "id": "max",
    "label": "Max",
    "tipo": "Plataforma"
  },
  {
    "id": "disneyPlus",
    "label": "Disney+",
    "tipo": "Plataforma"
  },
  {
    "id": "appleTVPlus",
    "label": "Apple TV+",
    "tipo": "Plataforma"
  }
];

const DADOS_ARESTAS = [
  {
    "from": "aOrigem",
    "to": "ficcaoCientifica",
    "label": "temGenero"
  },
  {
    "from": "aOrigem",
    "to": "max",
    "label": "disponivelEm"
  },
  {
    "from": "aOrigem",
    "to": "christopherNolan",
    "label": "possuiDiretor"
  },
  {
    "from": "aOrigem",
    "to": "leonardoDiCaprio",
    "label": "possuiAtor"
  },
  {
    "from": "interestelar",
    "to": "ficcaoCientifica",
    "label": "temGenero"
  },
  {
    "from": "interestelar",
    "to": "max",
    "label": "disponivelEm"
  },
  {
    "from": "interestelar",
    "to": "christopherNolan",
    "label": "possuiDiretor"
  },
  {
    "from": "interestelar",
    "to": "matthewMcConaughey",
    "label": "possuiAtor"
  },
  {
    "from": "matrix",
    "to": "ficcaoCientifica",
    "label": "temGenero"
  },
  {
    "from": "matrix",
    "to": "primeVideo",
    "label": "disponivelEm"
  },
  {
    "from": "matrix",
    "to": "lanaWachowski",
    "label": "possuiDiretor"
  },
  {
    "from": "matrix",
    "to": "keanuReeves",
    "label": "possuiAtor"
  },
  {
    "from": "parasita",
    "to": "drama",
    "label": "temGenero"
  },
  {
    "from": "parasita",
    "to": "primeVideo",
    "label": "disponivelEm"
  },
  {
    "from": "parasita",
    "to": "bongJoonHo",
    "label": "possuiDiretor"
  },
  {
    "from": "coringa",
    "to": "drama",
    "label": "temGenero"
  },
  {
    "from": "coringa",
    "to": "max",
    "label": "disponivelEm"
  },
  {
    "from": "coringa",
    "to": "timBurton",
    "label": "possuiDiretor"
  },
  {
    "from": "coringa",
    "to": "joaquinPhoenix",
    "label": "possuiAtor"
  },
  {
    "from": "panteraNegra",
    "to": "acao",
    "label": "temGenero"
  },
  {
    "from": "panteraNegra",
    "to": "disneyPlus",
    "label": "disponivelEm"
  },
  {
    "from": "panteraNegra",
    "to": "ryanCoogler",
    "label": "possuiDiretor"
  },
  {
    "from": "panteraNegra",
    "to": "chadwickBoseman",
    "label": "possuiAtor"
  },
  {
    "from": "strangerThings",
    "to": "ficcaoCientifica",
    "label": "temGenero"
  },
  {
    "from": "strangerThings",
    "to": "netflix",
    "label": "disponivelEm"
  },
  {
    "from": "strangerThings",
    "to": "vinceGilligan",
    "label": "possuiDiretor"
  },
  {
    "from": "strangerThings",
    "to": "millieBobbyBrown",
    "label": "possuiAtor"
  },
  {
    "from": "breakingBad",
    "to": "drama",
    "label": "temGenero"
  },
  {
    "from": "breakingBad",
    "to": "netflix",
    "label": "disponivelEm"
  },
  {
    "from": "breakingBad",
    "to": "vinceGilligan",
    "label": "possuiDiretor"
  },
  {
    "from": "breakingBad",
    "to": "bryanCranston",
    "label": "possuiAtor"
  },
  {
    "from": "dark",
    "to": "ficcaoCientifica",
    "label": "temGenero"
  },
  {
    "from": "dark",
    "to": "netflix",
    "label": "disponivelEm"
  },
  {
    "from": "wandinha",
    "to": "fantasia",
    "label": "temGenero"
  },
  {
    "from": "wandinha",
    "to": "netflix",
    "label": "disponivelEm"
  },
  {
    "from": "wandinha",
    "to": "timBurton",
    "label": "possuiDiretor"
  },
  {
    "from": "wandinha",
    "to": "jennaOrtega",
    "label": "possuiAtor"
  },
  {
    "from": "arcane",
    "to": "animacao",
    "label": "temGenero"
  },
  {
    "from": "arcane",
    "to": "netflix",
    "label": "disponivelEm"
  },
  {
    "from": "theLastOfUs",
    "to": "drama",
    "label": "temGenero"
  },
  {
    "from": "theLastOfUs",
    "to": "max",
    "label": "disponivelEm"
  }
];

const nos = new vis.DataSet(
  DADOS_NOS.map((no) => ({
    ...no,
    shape: no.tipo === "Filme" || no.tipo === "Serie" ? "box" : "dot",
    size: no.tipo === "Filme" || no.tipo === "Serie" ? 26 : 18,
    margin: no.tipo === "Filme" || no.tipo === "Serie" ? 12 : 8,
    color: {
      background: CORES[no.tipo],
      border: escurecerCor(CORES[no.tipo], 25),
      highlight: {
        background: clarearCor(CORES[no.tipo], 8),
        border: "#101827"
      },
      hover: {
        background: clarearCor(CORES[no.tipo], 6),
        border: "#101827"
      }
    },
    borderWidth: 2,
    borderWidthSelected: 3,
    font: {
      color: "#152033",
      size: 14,
      face: "Inter, Arial, sans-serif",
      bold: {
        color: "#101827",
        size: 15
      }
    },
    title: `${no.tipo}: ${no.label}`
  }))
);

const arestas = new vis.DataSet(
  DADOS_ARESTAS.map((aresta, indice) => ({
    id: indice + 1,
    ...aresta,
    arrows: {
      to: {
        enabled: true,
        scaleFactor: 0.72
      }
    },
    width: 1.45,
    color: {
      color: corDaRelacao(aresta.label),
      highlight: "#183b73",
      hover: "#183b73",
      opacity: 0.88
    },
    font: {
      size: 10,
      face: "Inter, Arial, sans-serif",
      color: "#5a6678",
      strokeWidth: 4,
      strokeColor: "#fbfcfe",
      align: "middle"
    },
    smooth: {
      enabled: true,
      type: "dynamic",
      roundness: 0.35
    }
  }))
);

const container = document.getElementById("grafo");

const opcoes = {
  autoResize: true,
  interaction: {
    hover: true,
    hoverConnectedEdges: true,
    navigationButtons: true,
    keyboard: {
      enabled: true,
      bindToWindow: false
    },
    multiselect: false,
    tooltipDelay: 180,
    zoomView: true,
    dragView: true
  },
  physics: {
    enabled: true,
    stabilization: {
      enabled: true,
      iterations: 650,
      updateInterval: 25
    },
    barnesHut: {
      gravitationalConstant: -4800,
      centralGravity: 0.22,
      springLength: 175,
      springConstant: 0.03,
      damping: 0.14,
      avoidOverlap: 0.65
    }
  },
  layout: {
    improvedLayout: true,
    randomSeed: 19
  },
  edges: {
    selectionWidth: 2.5,
    hoverWidth: 2.2
  }
};

const rede = new vis.Network(container, { nodes: nos, edges: arestas }, opcoes);

rede.once("stabilizationIterationsDone", () => {
  rede.setOptions({ physics: false });
  rede.fit({
    animation: {
      duration: 750,
      easingFunction: "easeInOutQuad"
    }
  });
});

rede.on("click", (parametros) => {
  if (parametros.nodes.length === 0) {
    mostrarEstadoVazio();
    return;
  }

  const no = DADOS_NOS.find((item) => item.id === parametros.nodes[0]);
  mostrarDetalhes(no);
});

rede.on("doubleClick", (parametros) => {
  if (parametros.nodes.length === 0) return;

  rede.focus(parametros.nodes[0], {
    scale: 1.45,
    animation: {
      duration: 550,
      easingFunction: "easeInOutQuad"
    }
  });
});

document.getElementById("busca").addEventListener("input", executarFiltros);
document.getElementById("filtroTipo").addEventListener("change", executarFiltros);
document.getElementById("filtroRelacao").addEventListener("change", executarFiltros);

document.getElementById("btnLimpar").addEventListener("click", () => {
  document.getElementById("busca").value = "";
  document.getElementById("filtroTipo").value = "todos";
  document.getElementById("filtroRelacao").value = "todas";
  restaurarTudo();
});

document.getElementById("btnCentralizar").addEventListener("click", () => {
  rede.fit({
    animation: {
      duration: 650,
      easingFunction: "easeInOutQuad"
    }
  });
});

document.getElementById("btnTelaCheia").addEventListener("click", async () => {
  const area = document.querySelector(".visualizacao");

  try {
    if (!document.fullscreenElement) {
      await area.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  } catch (erro) {
    console.error("Não foi possível ativar a tela cheia:", erro);
  }
});

function executarFiltros() {
  const termo = document.getElementById("busca").value.trim().toLowerCase();
  const tipo = document.getElementById("filtroTipo").value;
  const relacao = document.getElementById("filtroRelacao").value;

  const idsPrincipais = new Set(
    DADOS_NOS
      .filter((no) => {
        const correspondeTexto =
          !termo ||
          no.label.toLowerCase().includes(termo) ||
          no.id.toLowerCase().includes(termo);

        const correspondeTipo = tipo === "todos" || no.tipo === tipo;

        return correspondeTexto && correspondeTipo;
      })
      .map((no) => no.id)
  );

  let arestasFiltradas = DADOS_ARESTAS.filter(
    (aresta) => relacao === "todas" || aresta.label === relacao
  );

  const idsVisiveis = new Set(idsPrincipais);

  arestasFiltradas.forEach((aresta) => {
    if (idsPrincipais.has(aresta.from)) idsVisiveis.add(aresta.to);
    if (idsPrincipais.has(aresta.to)) idsVisiveis.add(aresta.from);
  });

  if (!termo && tipo === "todos") {
    arestasFiltradas.forEach((aresta) => {
      idsVisiveis.add(aresta.from);
      idsVisiveis.add(aresta.to);
    });

    if (relacao === "todas") {
      DADOS_NOS.forEach((no) => idsVisiveis.add(no.id));
    }
  }

  nos.update(
    DADOS_NOS.map((no) => ({
      id: no.id,
      hidden: !idsVisiveis.has(no.id)
    }))
  );

  arestas.update(
    DADOS_ARESTAS.map((aresta, indice) => ({
      id: indice + 1,
      hidden:
        !(relacao === "todas" || aresta.label === relacao) ||
        !idsVisiveis.has(aresta.from) ||
        !idsVisiveis.has(aresta.to)
    }))
  );

  const totalVisivel = idsVisiveis.size;
  atualizarStatus(totalVisivel, relacao, tipo, termo);

  if (totalVisivel > 0) {
    rede.fit({
      animation: {
        duration: 500,
        easingFunction: "easeInOutQuad"
      }
    });
  }

  if (termo && idsPrincipais.size === 1) {
    const id = [...idsPrincipais][0];
    const no = DADOS_NOS.find((item) => item.id === id);
    rede.selectNodes([id]);
    rede.focus(id, {
      scale: 1.35,
      animation: true
    });
    mostrarDetalhes(no);
  }
}

function restaurarTudo() {
  nos.update(DADOS_NOS.map((no) => ({ id: no.id, hidden: false })));
  arestas.update(
    DADOS_ARESTAS.map((_, indice) => ({ id: indice + 1, hidden: false }))
  );

  rede.unselectAll();
  mostrarEstadoVazio();
  document.getElementById("statusVisualizacao").textContent =
    "Mostrando toda a ontologia";

  rede.fit({ animation: true });
}

function mostrarDetalhes(no) {
  const painel = document.getElementById("detalhesNo");
  const relacoes = DADOS_ARESTAS.filter(
    (aresta) => aresta.from === no.id || aresta.to === no.id
  );

  const campos = [];

  if (no.titulo) campos.push(["Título", no.titulo]);
  if (no.nome) campos.push(["Nome", no.nome]);
  if (no.ano) campos.push(["Ano", no.ano]);
  if (no.nota !== undefined) campos.push(["Nota", no.nota.toFixed(1)]);
  if (no.duracaoMinutos !== undefined) {
    campos.push(["Duração", `${no.duracaoMinutos} minutos`]);
  }
  if (no.numeroTemporadas !== undefined) {
    campos.push(["Temporadas", no.numeroTemporadas]);
  }
  if (no.classificacaoIndicativa) {
    campos.push(["Classificação", no.classificacaoIndicativa]);
  }

  const linhas = campos
    .map(
      ([rotulo, valor]) => `
        <div class="linha-detalhe">
          <span>${rotulo}</span>
          <strong>${valor}</strong>
        </div>
      `
    )
    .join("");

  const listaRelacoes = relacoes.length
    ? relacoes
        .map((aresta) => {
          const outroId = aresta.from === no.id ? aresta.to : aresta.from;
          const outroNo = DADOS_NOS.find((item) => item.id === outroId);
          const direcao = aresta.from === no.id ? "→" : "←";
          return `<li><strong>${aresta.label}</strong> ${direcao} ${outroNo.label}</li>`;
        })
        .join("")
    : "<li>Nenhuma relação individual declarada.</li>";

  painel.innerHTML = `
    <article class="cartao-no">
      <div class="cartao-no__topo" style="background:${CORES[no.tipo]}">
        <span>${nomeDoTipo(no.tipo)}</span>
        <strong>${no.label}</strong>
      </div>

      <div class="cartao-no__corpo">
        ${linhas || '<p>Este indivíduo não possui propriedades de dados.</p>'}

        <div class="relacoes-no">
          <h3>Relacionamentos (${relacoes.length})</h3>
          <ul>${listaRelacoes}</ul>
        </div>
      </div>
    </article>
  `;
}

function mostrarEstadoVazio() {
  document.getElementById("detalhesNo").innerHTML = `
    <div class="estado-vazio">
      <div class="icone-vazio">◉</div>
      <p>Clique em um nó para visualizar seus dados e relacionamentos.</p>
    </div>
  `;
}

function atualizarStatus(total, relacao, tipo, termo) {
  const partes = [];

  if (tipo !== "todos") partes.push(nomeDoTipo(tipo));
  if (relacao !== "todas") partes.push(relacao);
  if (termo) partes.push(`busca “${termo}”`);

  const complemento = partes.length ? ` — ${partes.join(" · ")}` : "";
  document.getElementById("statusVisualizacao").textContent =
    `${total} nós visíveis${complemento}`;
}

function nomeDoTipo(tipo) {
  const nomes = {
    Filme: "Filme",
    Serie: "Série",
    Ator: "Ator",
    Diretor: "Diretor",
    Genero: "Gênero",
    Plataforma: "Plataforma"
  };

  return nomes[tipo] || tipo;
}

function corDaRelacao(relacao) {
  const cores = {
    possuiAtor: "#8065c8",
    possuiDiretor: "#c98721",
    temGenero: "#2f9166",
    disponivelEm: "#bd4b8d"
  };

  return cores[relacao] || "#8793a5";
}

function clarearCor(hex, percentual) {
  const numero = parseInt(hex.replace("#", ""), 16);
  const quantidade = Math.round(2.55 * percentual);
  const r = Math.min(255, (numero >> 16) + quantidade);
  const g = Math.min(255, ((numero >> 8) & 0x00ff) + quantidade);
  const b = Math.min(255, (numero & 0x0000ff) + quantidade);

  return `#${(0x1000000 + r * 0x10000 + g * 0x100 + b)
    .toString(16)
    .slice(1)}`;
}

function escurecerCor(hex, percentual) {
  return clarearCor(hex, -percentual);
}
