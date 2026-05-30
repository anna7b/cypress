import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("que eu acesso o site https://portaldatransparencia.gov.br/", () => {
  cy.visit("https://portaldatransparencia.gov.br/");

  // Aceitar cookies
  cy.get("#accept-all-btn", { timeout: 10000 })
    .should("be.visible")
    .click();
});

When("eu clico em Servidores e Pensionistas", () => {
  cy.get(
    ":nth-child(2) > :nth-child(3) > .flipcard > .flipcard-wrap > .card-front > .card-body > .pl-3",
    { timeout: 10000 }
  )
    .should("be.visible")
    .click();
});

When("eu clico em Acessar painel", () => {
  cy.get("#button-painel-servidores", { timeout: 10000 })
    .should("be.visible")
    .click();
});

Then("devo ver o texto {string}", (texto) => {
  cy.contains(texto, { timeout: 15000 })
    .should("be.visible");
});