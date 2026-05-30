#language: pt

Funcionalidade: Consulta de servidores e pensionistas no Portal da Transparência
    Eu, como cidadão
    Quero acessar o painel de servidores e pensionistas
    Para visualizar informações sobre servidores públicos federais

Contexto: Estar na página inicial do Portal da Transparência
    Dado que eu acesso o site https://portaldatransparencia.gov.br/

Cenário: Acessar painel de servidores e pensionistas
    Quando eu clico em Servidores e Pensionistas
    E eu clico em Acessar painel
    Então devo ver o texto "Quantidade de servidores"