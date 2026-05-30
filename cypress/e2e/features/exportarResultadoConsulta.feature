#language: pt

Funcionalidade: Exportação de consultas de despesas no Portal da Transparência
    Eu, como cidadão
    Quero exportar os resultados de uma consulta
    Para analisar os dados fora do portal.

    Cenário: Exportar resultado da consulta
        Dado que realizei uma consulta de despesas
        Quando clico na opção de exportação dos dados
        Então o sistema deve disponibilizar um arquivo para download
