#language: pt

Funcionalidade: Consulta de dados com filtros
    Eu, como cidadão
    Quero limpar filtros e atualizar a consulta
    Para verificar o estado sem filtros aplicados

Cenário: Limpar filtros e atualizar consulta
    Dado que eu acesso a página de consulta de dados
    Quando eu clico em Consulte dados
    E eu clico em Limpar filtros
    E eu clico em Atualizar
    Então deve aparecer o texto "Nenhum filtro aplicado"