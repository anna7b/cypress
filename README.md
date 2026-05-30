# 🧪 Automação de Testes E2E com Cypress + Cucumber
Projeto apresentado para obtenção de nota na disciplina Qualidade de Software  
Curso: IESP - Sistemas para Internet  
Aluna: Ana Paula Ferreira Oliveira  
Turma: P5A - Noite  

Este projeto realiza automação de testes end-to-end (E2E) utilizando Cypress com Cucumber (BDD) no portal do Governo da Paraíba.

Os testes validam funcionalidades como navegação, acessibilidade, exibição de informações institucionais e comportamento da interface.

---

## 🚀 Tecnologias utilizadas

- Cypress
- Cucumber (BDD - Gherkin)
- JavaScript
- Node.js

---

## 📁 Estrutura do projeto

cypress/  
├── e2e/  
│   ├── features/        # Arquivos .feature (cenários Gherkin)  
│   └── steps/           # Implementação dos steps (Cypress + Cucumber)  
├── support/  
│   └── e2e.js           # Configurações globais do Cypress  

---

## ⚙️ Pré-requisitos

- Node.js (versão 16 ou superior)
- npm

Verifique com:
```
node -v
npm -v
```
---

## 📦 Instalação
```
git clone <URL_DO_REPOSITORIO>

cd <NOME_DO_PROJETO>

npm install
```
---

## ▶️ Como executar os testes
```
npx cypress open
```
---

## 🧪 Cenários automatizados

1) Qual é o app?   
- Portal do Governo da Paraíba (https://paraiba.pb.gov.br/)  

2) Iremos testar o que?
- Navegação no portal -> Entrar em páginas e validar redirecionamento
- Acessibilidade -> Mudar configurações do site e validar comportamento do site por atributo HTML
- Acessibilidade -> Mudar configurações do site e validar comportamento do site por atributo CSS
- Navegação por elementos/menus -> Entrar em elementos da página e validar exibição

3) Cenários    
- Cenário 1\
**Funcionalidade:** Consulta das Gerências Regionais de Educação\
**Cenário:** Visualizar a 1ª Regional de Educação  

- Cenário 2\
**Funcionalidade:** Acessibilidade - Aumento de fonte\
**Cenário:** Aumentar fonte do site  

- Cenário 3\
**Funcionalidade:** Ativação do modo alto contraste\
**Cenário:** Ativar alto contraste  

- Esquema de Cenário\
**Funcionalidade:** Consulta de contatos do Governo da Paraíba\
**Esquema do Cenário:** Validar e-mails de contato por setor  


4) Casos de teste

**🔹 CT01 - Consultar dados da 1ª Regional de Educação**\
    Dado que eu estou na página inicial do Governo da Paraíba\
    Quando eu clico em Secretarias\
    E eu clico em Educação\
    E eu clico em Gerências\
    Então está exibindo na tela o texto "1ª Regional - João Pessoa"

**🔹 CT02 - Acessibilidade (Aumento de fonte / zoom)**\
    Dado que estou na página inicial\
    Quando clico 3x em Aumentar Fonte\
    Então o zoom deve ser aplicado (ex: zoom: 1.3)

**🔹 CT03 - Acessibilidade (Ativação de alto contraste)**\
    Dado que eu estou na página inicial do Governo da Paraíba\
    Quando eu clico em Alto Contraste\
    Então o fundo da página deve ficar preto

**🔹 CT04 - Validar contatos de setores**\

**CT04.1 - Validar contato do Governador**\
        Dado que estou na página inicial\
        Quando clico em Contatos\
        E clico em Governador\
        Então deve exibir: spg@palacio.pb.gov.br\

**CT04.2 - Validar contato da Secretaria Executiva da Casa Civil**\
        Dado que estou na página inicial\
        Quando clico em Contatos\
        E clico em Secretaria Executiva da Casa Civil\
        Então deve exibir: gabccg@casacivil.pb.gov.br\
