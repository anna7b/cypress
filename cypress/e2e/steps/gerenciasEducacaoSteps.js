import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("que eu estou na página inicial do Governo da Paraíba", () => {
  cy.viewport(1920, 1080);
  cy.visit("https://paraiba.pb.gov.br/");
  cy.get("body").then(($body) => {
    if ($body.find('[name="collective.disclaimer.ok"]').length > 0) {
      cy.get('[name="collective.disclaimer.ok"]').click();
    }
  });
});

When("eu clico em Secretarias", () => {
  cy.get("#link-servicos").should("be.visible").click();
});

When("eu clico em Educação", () => {
  cy.get("#servicos-governo-barra > div > ul > :nth-child(13) > a")
    .should("be.visible")
    .click();
});

When("eu clico em Gerências", () => {
  cy.get(
    '#e1f828b3-81bd-4781-bfbe-4666a4ec1889 > .cover-richtext-tile > :nth-child(1) > .internal-link > .image-inline'
  )
    .should("be.visible")
    .click();
});

Then("está exibindo na tela o texto {string}", (texto) => {
  cy.contains(texto, { timeout: 10000 }).should("be.visible");
});
