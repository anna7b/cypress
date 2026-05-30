#language: pt

Funcionalidade: Consulta das Gerências Regionais de Educação
Eu, como cidadão
Quero acessar a página de Gerências da Secretaria de Educação
Para verificar as Gerências Regionais de Educação.

Contexto: Estar na página inicial do Governo da Paraíba
    Dado que eu estou na página inicial do Governo da Paraíba

Cenário: Visualizar a 1ª Regional de Educação
    Quando eu clico em Secretarias
    E eu clico em Educação
    E eu clico em Gerências
    Então está exibindo na tela o texto "1ª Regional - João Pessoa"
