import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("que eu estou na página inicial do Governo da Paraíba", () => {
  cy.viewport(1920, 1080);
  cy.visit("https://paraiba.pb.gov.br/");

  cy.get('[name="collective.disclaimer.ok"]', { timeout: 10000 })
    .should("be.visible")
    .click();
});

When("eu clico em Contatos", () => {
  cy.get('.links_form_search > :nth-child(3) > a')
    .should("be.visible")
    .click();
});

When("eu clico no setor {string}", (setor) => {
  if (setor === "Governador") {
    cy.get('#accordion-f1df8a67-ce02-4d2f-8c18-6bf7c9d50b71 > .accordion-simple > .accordion-heading > .accordion-toggle')
      .should("be.visible")
      .click();
  }

  if (setor === "Secretaria Executiva da Casa Civil") {
    cy.get('#accordion-e9607e11-4385-4221-859e-cac894e057e1 > .accordion-simple > .accordion-heading > .accordion-toggle')
      .should("be.visible")
      .click();
  }
});

Then("está exibindo na tela o texto {string}", (texto) => {
  cy.contains(texto, { timeout: 10000 })
    .should("be.visible");
});