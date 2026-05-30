#language: pt

Funcionalidade: Filtro de despesas por período no Portal da Transparência
    Eu, como cidadão
    Quero filtrar despesas por período
    Para visualizar somente os registros do intervalo selecionado.

    Esquema do Cenário: Filtrar despesas por período
        Dado que acesso a página de despesas públicas
        Quando informo o período "<periodo>"
        E aplico o filtro
        Então devo visualizar despesas referentes ao período selecionado

        Exemplos:
            | periodo |
            | 2024    |
            | 2025    |
