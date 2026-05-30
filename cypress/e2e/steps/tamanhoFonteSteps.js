import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("que eu estou na página inicial do Governo da Paraíba", () => {
  cy.viewport(1920, 1080);
  cy.visit("https://paraiba.pb.gov.br/");

  cy.get('[name="collective.disclaimer.ok"]', { timeout: 10000 })
    .should("be.visible")
    .click();
});

When("eu clico em Aumentar Fonte", () => {
  const btn =
    ".header-transparencia-acessebilidade--buttons > :nth-child(2) > a";

  cy.get(btn).should("be.visible");

  cy.get(btn).click();
  cy.get(btn).click();
  cy.get(btn).click();
});

Then("a fonte da página deve aumentar", () => {
  cy.get("body, html")
    .should(($els) => {
      const hasZoom = [...$els].some((el) => {
        const style = el.getAttribute("style") || "";
        return style.includes("zoom: 1.3");
      });

      expect(hasZoom).to.be.true;
    });
});
