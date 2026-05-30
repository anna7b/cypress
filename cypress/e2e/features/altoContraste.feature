#language: pt

Funcionalidade: Ativação do modo alto contraste
Eu, como cidadão
Quero ativar o alto contraste do portal
Para melhorar a acessibilidade da página.

Contexto: Estar na página inicial do Governo da Paraíba
    Dado que eu estou na página inicial do Governo da Paraíba

Cenário: Ativar alto contraste
    Quando eu clico em Alto Contraste
    Então o fundo da página deve ficar preto

