import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("que eu acesso a página de consulta de dados", () => {
  cy.visit("https://portaldatransparencia.gov.br/");
});

When("eu clico em Consulte dados", () => {
  cy.get(
    ":nth-child(3) > .center-block > a > .br-card > .card-footer > .d-flex > div > .br-button",
    { timeout: 10000 }
  )
    .should("be.visible")
    .click();
});

When("eu clico em Limpar filtros", () => {
  cy.get("#btnLimparFiltrosSumario", { timeout: 10000 })
    .should("be.visible")
    .click();
});

When("eu clico em Atualizar", () => {
  cy.contains("Atualizar", { timeout: 10000 })
    .should("be.visible")
    .click();
});

Then("deve aparecer o texto {string}", (texto) => {
  cy.get("body", { timeout: 15000 })
    .should("contain.text", texto);
});