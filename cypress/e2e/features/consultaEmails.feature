#language: pt

Funcionalidade: Consulta de contatos do Governo da Paraíba
    Eu, como cidadão
    Quero acessar os contatos institucionais
    Para validar os e-mails corretos de cada setor.

    Contexto: Estar na página inicial do Governo da Paraíba
        Dado que eu estou na página inicial do Governo da Paraíba

    Esquema do Cenário: Validar e-mails de contato por setor
        Quando eu clico em Contatos
        E eu clico no setor "<setor>"
        Então está exibindo na tela o texto "<email>"

        Exemplos:
            | setor                              | email                          |
            | Governador                        | spg@palacio.pb.gov.br         |
            | Secretaria Executiva da Casa Civil | gabccg@casacivil.pb.gov.br    |