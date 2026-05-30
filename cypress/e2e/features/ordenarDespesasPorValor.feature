#language: pt

Funcionalidade: Ordenação de despesas públicas no Portal da Transparência
    Eu, como cidadão
    Quero ordenar a listagem de despesas
    Para identificar os maiores valores registrados.

    Cenário: Ordenar despesas por valor
        Dado que acesso uma listagem de despesas
        Quando solicito a ordenação pelo maior valor
        Então os registros devem ser exibidos em ordem decrescente de valor
