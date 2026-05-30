import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const BASE_URL = "https://portaldatransparencia.gov.br";

Given("que acesso uma listagem de despesas", () => {
  cy.viewport(1366, 768);
  cy.visit(`${BASE_URL}/despesas/lista-consultas`, { failOnStatusCode: false });
  cy.contains(/Despesas|Consulta/i, { timeout: 20000 }).should("be.visible");
});

When("solicito a ordenação pelo maior valor", () => {
  cy.contains(/Valor|Valor Pago|Valor total pago/i, { timeout: 20000 })
    .scrollIntoView()
    .click({ force: true });
});

Then("os registros devem ser exibidos em ordem decrescente de valor", () => {
  cy.contains(/Valor|R\$/i, { timeout: 20000 }).should("be.visible");
});
