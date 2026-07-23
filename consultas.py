from rdflib import Graph

g = Graph()
g.parse("base_filmes_series.ttl", format="turtle")

PREFIX = """
PREFIX : <http://www.exemplo.org/streaming#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
"""

def executar_consulta(titulo, consulta):
    print(f"\n{titulo}")
    print("-" * len(titulo))

    resultados = g.query(PREFIX + consulta)

    for linha in resultados:
        print(*linha)

consulta1 = """
SELECT ?titulo
WHERE {
    ?filme rdf:type :Filme ;
           :titulo ?titulo .
}
"""

executar_consulta("Todos os filmes", consulta1)

consulta2 = """
SELECT ?titulo
WHERE {
    ?serie rdf:type :Serie ;
           :titulo ?titulo .
}
"""

executar_consulta("Todas as séries", consulta2)

consulta3 = """
SELECT ?titulo
WHERE {
    ?filme rdf:type :Filme ;
           :titulo ?titulo ;
           :temGenero :ficcaoCientifica .
}
"""

executar_consulta("Filmes de Ficção Científica", consulta3)

consulta4 = """
SELECT ?titulo
WHERE {
    ?obra :titulo ?titulo ;
          :disponivelEm :netflix .
}
"""

executar_consulta("Obras disponíveis na Netflix", consulta4)

consulta5 = """
SELECT ?titulo
WHERE {
    ?filme rdf:type :Filme ;
           :titulo ?titulo ;
           :possuiDiretor :christopherNolan .
}
"""

executar_consulta("Filmes de Christopher Nolan", consulta5)

consulta6 = """
SELECT ?titulo ?nota
WHERE {
    ?filme rdf:type :Filme ;
           :titulo ?titulo ;
           :nota ?nota .

    FILTER(?nota > 8.5)
}
ORDER BY DESC(?nota)
"""

executar_consulta("Filmes com nota maior que 8.5", consulta6)

consulta7 = """
SELECT ?titulo ?temporadas
WHERE {
    ?serie rdf:type :Serie ;
           :titulo ?titulo ;
           :numeroTemporadas ?temporadas .

    FILTER(?temporadas > 3)
}
ORDER BY DESC(?temporadas)
"""

executar_consulta("Séries com mais de 3 temporadas", consulta7)

consulta8 = """
SELECT ?nome
WHERE {
    ?ator rdf:type :Ator ;
          :nome ?nome .
}
ORDER BY ?nome
"""

executar_consulta("Atores cadastrados", consulta8)

consulta9 = """
SELECT (COUNT(?filme) AS ?quantidade)
WHERE {
    ?filme rdf:type :Filme .
}
"""

executar_consulta("Quantidade de filmes", consulta9)

consulta10 = """
SELECT (COUNT(?serie) AS ?quantidade)
WHERE {
    ?serie rdf:type :Serie .
}
"""

executar_consulta("Quantidade de séries", consulta10)