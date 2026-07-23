# Mini Projeto 3 – Ontologia de Plataforma de Streaming

## Equipe 
Maria Eloiza Monteiro de Souza
Jamilly Melo Fernandes

## Descrição

Este projeto consiste no desenvolvimento de uma ontologia para representar informações de uma plataforma de streaming de filmes e séries utilizando RDF, OWL e SPARQL.

A ontologia modela os principais elementos desse domínio, como filmes, séries, atores, diretores, gêneros e plataformas de streaming, permitindo a realização de consultas semânticas por meio da linguagem SPARQL.

---

# Tecnologias utilizadas

* Python 3
* RDFLib
* OWL
* RDF/Turtle (.ttl)
* SPARQL

---

# Estrutura do projeto

```
mini_projeto3/
│
├── base_filmes_series.ttl
├── consultas.py
├── README.md
├── requirements.txt
└── .gitignore
```

---

# Modelo da ontologia

A ontologia é composta pelas seguintes classes:

* ObraAudiovisual
* Filme
* Serie
* Pessoa
* Ator
* Diretor
* Genero
* Plataforma

### Object Properties

* possuiAtor
* atuaEm
* possuiDiretor
* dirige
* temGenero
* disponivelEm

### Datatype Properties

* titulo
* nome
* anoLancamento
* nota
* duracaoMinutos
* numeroTemporadas
* classificacaoIndicativa

---

# Dados cadastrados

A ontologia possui indivíduos representando:

### Gêneros

* Ação
* Aventura
* Drama
* Comédia
* Ficção Científica
* Suspense
* Fantasia
* Animação
* Terror
* Romance

### Plataformas

* Netflix
* Prime Video
* Max
* Disney+
* Apple TV+

### Diretores

* Christopher Nolan
* Lana Wachowski
* Bong Joon-ho
* Ryan Coogler
* Vince Gilligan
* Tim Burton

### Atores

* Leonardo DiCaprio
* Matthew McConaughey
* Keanu Reeves
* Joaquin Phoenix
* Chadwick Boseman
* Millie Bobby Brown
* Bryan Cranston
* Jenna Ortega

### Filmes

* A Origem
* Interestelar
* Matrix
* Parasita
* Coringa
* Pantera Negra

### Séries

* Stranger Things
* Breaking Bad
* Dark
* Wandinha
* Arcane
* The Last of Us

---

# Instalação

Crie um ambiente virtual:

```bash
python3 -m venv .venv
```

Ative o ambiente:

Linux/macOS

```bash
source .venv/bin/activate
```

Windows

```bash
.venv\Scripts\activate
```

Instale as dependências:

```bash
pip install -r requirements.txt
```

---

# Execução

Execute o arquivo de consultas:

```bash
python3 consultas.py
```

---

# Consultas implementadas

O projeto realiza as seguintes consultas SPARQL:

1. Listar todos os filmes.
2. Listar todas as séries.
3. Listar filmes de Ficção Científica.
4. Listar obras disponíveis na Netflix.
5. Listar filmes dirigidos por Christopher Nolan.
6. Listar filmes com nota superior a 8.5.
7. Listar séries com mais de 3 temporadas.
8. Listar todos os atores cadastrados.
9. Contar a quantidade de filmes.
10. Contar a quantidade de séries.

---

# Resultados

A ontologia foi validada com a biblioteca RDFLib, sendo carregada corretamente e contendo **248 triplas RDF**.

Todas as consultas SPARQL foram executadas com sucesso, retornando os resultados esperados.

---

