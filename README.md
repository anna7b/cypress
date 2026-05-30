# 🧪 Automação de Testes E2E com Cypress + Cucumber

Projeto apresentado para obtenção de nota na disciplina Qualidade de Software  
Curso: IESP - Sistemas para Internet  
Aluna: Anna Luiza Britto de Lima
Turma: P5A - Noite

Este projeto realiza automação de testes end-to-end (E2E) utilizando Cypress com Cucumber (BDD) no Portal da Transparência.

Os testes validam funcionalidades relacionadas à consulta de despesas públicas, incluindo seleção por órgão, ordenação por valor, exportação dos resultados e filtro por período.

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
│ ├── features/ # Arquivos .feature (cenários Gherkin)  
│ └── steps/ # Implementação dos steps (Cypress + Cucumber)  
├── support/  
│ └── e2e.js # Configurações globais do Cypress

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

1. Qual é o app?

- Portal da Transparência (https://portaldatransparencia.gov.br/)

2. Iremos testar o que?

- Voltar para a página inicial a partir do painel de servidores e pensionistas.
- Buscar órgãos públicos e validar o resultado exibido.
- Acessar o painel de servidores e pensionistas e verificar a exibição de informações.
- Limpar filtros e atualizar a consulta para verificar o estado sem filtros.

3. Testes atuais implementados

- `botaoHome.feature` / `botaoHome.js` — valida o retorno à página inicial do Portal da Transparência ao clicar em "Servidores e Pensionistas" e depois no botão de voltar.
- `consultarOrgaos.feature` / `consultarOrgaos.js` — valida a busca por órgãos no campo de pesquisa e a exibição do resultado esperado para termos como "inss" e "ibge".
- `consultarServidores.feature` / `consultarServidores.js` — valida o acesso ao painel "Servidores e Pensionistas" e a exibição do texto "Quantidade de servidores".
- `limparFiltros.feature` / `limparFiltros.js` — valida a limpeza de filtros e a atualização da consulta, confirmando que o estado sem filtros é exibido.

---

## 📌 Observação

O README agora contém apenas a descrição dos testes atualmente implementados na pasta `cypress/e2e/features` e suas respectivas implementações em `cypress/e2e/steps`. Os cenários anteriores foram removidos.

