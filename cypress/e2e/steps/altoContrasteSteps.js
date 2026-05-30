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

When("eu clico em Alto Contraste", () => {
  cy.get("#siteaction-contraste > a").should("be.visible").click();
});

Then("o fundo da página deve ficar preto", () => {
  cy.get("body")
    .should("have.css", "background-color")
    .and("eq", "rgb(0, 0, 0)");
});
