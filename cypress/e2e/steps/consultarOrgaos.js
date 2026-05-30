import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("que eu acesso o site https://portaldatransparencia.gov.br/", () => {
  cy.visit("https://portaldatransparencia.gov.br/");

  cy.get("#accept-all-btn", { timeout: 10000 })
    .should("be.visible")
    .click();
});

When("eu digito {string} no campo de busca", (orgao) => {
  cy.get('[name="termoBuscaPortal"]', { timeout: 10000 })
    .should("be.visible")
    .clear()
    .type(orgao);

  // geralmente busca é automática ou via Enter
  cy.get('[name="termoBuscaPortal"]').type("{enter}");
});

Then("deve aparecer o resultado {string}", (resultado) => {
  cy.get("body", { timeout: 15000 })
    .should("contain.text", resultado);
});
