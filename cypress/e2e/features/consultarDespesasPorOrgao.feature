#language: pt

Funcionalidade: Consulta de despesas públicas no Portal da Transparência
    Eu, como cidadão
    Quero consultar despesas por órgão
    Para acompanhar a execução dos gastos públicos federais.

    Cenário: Consultar despesas por órgão
        Dado que acesso a página de despesas públicas
        Quando seleciono um órgão da Administração Federal
        Então devo visualizar informações detalhadas das despesas do órgão selecionado
