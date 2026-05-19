#language: pt

Funcionalidade: Logins válidos e inválidos
    Eu, como usuário de sistema
    Quero testar diferentes cenários de login.
    Para garantir que o sistema autentique corretamente.

    Contexto: Estar na página de login do saucedemo
        Dado que eu estou na página de login do saucedemo
    
    Cenário: Login válido - Usuário Padrão
        Quando eu insiro o usuário e a senha correta
        E clico no botão login
        Então está exibindo na tela o texto "Products"

    Cenário: Login inválido - Usuário inválido
        Quando eu insiro o usuário "user_ivalid"
        E insiro a senha "senhaQualquer"
        E clico no botão login
        Então está exibindo no campo de erro o texto "Epic sadface: Username and password do not match any user in this service"


    Cenário: Login inválido - Senha inválida
        Quando eu insiro o usuário "standard_user"
        E insiro a senha "senhaInvalida"
        E clico no botão login
        Então está exibindo no campo de erro o texto "Epic sadface: Username and password do not match any user in this service"

 Cenário: Login inválido - Sanha em branco
        Quando eu insiro o usuário "standard_user"
        E clico no botão login
        Então está exibindo na tela o texto "Epic sadface: Password is require"

Cenário: Login inválido - User em branco
        Quando insiro a senha "senhaInvalida"
        E clico no botão login
        Então está exibindo na tela o texto "Epic sadface: Username is required"

Esquema do Cenário: Logins inválidos
        Quando inserir o usuário <username>
        E inserir a senha <password>
        E clico no botão login
        Então está exibindo na tela o texto <mensagem>
        Exemplos:
            | username         | password       | mensagem                                                                 |
            | "user_ivalid"   | "senhaQualquer"  | "Epic sadface: Username and password do not match any user in this service"         |
            | "standard_user" | "senhaInvalida"  | "Epic sadface: Username and password do not match any user in this service"        |
            | ""              | "senhaInvalida"  | "Epic sadface: Username is required"                                                  |
            | "standard_user"   | ""               | "Epic sadface: Password is require"                                                     |