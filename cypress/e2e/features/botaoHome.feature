#language: pt

Funcionalidade: Voltar para página inicial do Portal da Transparência
    Eu, como cidadão
    Quero retornar para a página inicial
    Para continuar a navegação no portal

Contexto:
    Dado que eu acesso o site https://portaldatransparencia.gov.br/

Cenário: Voltar para home a partir do painel de servidores
    Quando eu clico em Servidores e Pensionistas
    E eu clico no botão de voltar
    Então devo ser redirecionado para a url "https://portaldatransparencia.gov.br/"