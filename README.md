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

- Consulta de despesas públicas -> Acessar a página de despesas e validar informações do órgão selecionado
- Ordenação de resultados -> Ordenar a listagem de despesas pelo maior valor
- Exportação de consulta -> Acionar a opção de exportação dos dados da consulta
- Filtro por período -> Informar períodos específicos e validar a exibição das despesas correspondentes

3. Cenários

- Cenário 1\
  **Funcionalidade:** Consulta de despesas públicas no Portal da Transparência\
  **Cenário:** Consultar despesas por órgão

- Cenário 2\
  **Funcionalidade:** Ordenação de despesas públicas no Portal da Transparência\
  **Cenário:** Ordenar despesas por valor

- Cenário 3\
  **Funcionalidade:** Exportação de consultas de despesas no Portal da Transparência\
  **Cenário:** Exportar resultado da consulta

- Esquema de Cenário\
  **Funcionalidade:** Filtro de despesas por período no Portal da Transparência\
  **Esquema do Cenário:** Filtrar despesas por período

4. Casos de teste

**🔹 CT01 - Consultar despesas por órgão**\
 Dado que acesso a página de despesas públicas\
 Quando seleciono um órgão da Administração Federal\
 Então devo visualizar informações detalhadas das despesas do órgão selecionado

**🔹 CT02 - Ordenar despesas por valor**\
 Dado que acesso uma listagem de despesas\
 Quando solicito a ordenação pelo maior valor\
 Então os registros devem ser exibidos em ordem decrescente de valor

**🔹 CT03 - Exportar resultado da consulta**\
 Dado que realizei uma consulta de despesas\
 Quando clico na opção de exportação dos dados\
 Então o sistema deve disponibilizar um arquivo para download

**🔹 CT04 - Filtrar despesas por período**\
 Dado que acesso a página de despesas públicas\
 Quando informo o período "2024"\
 E aplico o filtro\
 Então devo visualizar despesas referentes ao período selecionado

**🔹 CT05 - Filtrar despesas por outro período**\
 Dado que acesso a página de despesas públicas\
 Quando informo o período "2025"\
 E aplico o filtro\
 Então devo visualizar despesas referentes ao período selecionado
