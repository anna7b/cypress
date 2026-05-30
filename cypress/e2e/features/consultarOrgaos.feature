#language: pt

Funcionalidade: Consulta de órgãos no Portal da Transparência
    Eu, como cidadão
    Quero buscar órgãos públicos
    Para validar se o painel correto é exibido

Contexto: Estar na página inicial do Portal da Transparência
    Dado que eu acesso o site https://portaldatransparencia.gov.br/

Esquema do Cenário: Validar busca de órgãos
    Quando eu digito "<orgao>" no campo de busca
    Então deve aparecer o resultado "<resultado>"

    Exemplos:
        | orgao | resultado |
        | inss  | Painel do Órgão Instituto Nacional do Seguro Social |
        | ibge  | Painel do Órgão Fundação Instituto Brasileiro de Geografia e Estatística |