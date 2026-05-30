import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const BASE_URL = "https://portaldatransparencia.gov.br";

const aceitarCookiesSeExistir = () => {
  cy.get("body").then(($body) => {
    const botaoAceitar = [...$body.find("button, a")]
      .find((el) => /aceitar todos/i.test(el.innerText));

    if (botaoAceitar) {
      cy.wrap(botaoAceitar).click({ force: true });
    }
  });
};

Given("que acesso a página de despesas públicas", () => {
  cy.viewport(1366, 768);
  cy.visit(`${BASE_URL}/despesas`, { failOnStatusCode: false });
  aceitarCookiesSeExistir();
  cy.contains("h1, h2", "Despesas Públicas", { timeout: 20000 })
    .should("be.visible");
});

When("seleciono um órgão da Administração Federal", () => {
  cy.contains("Busca específica", { timeout: 20000 }).scrollIntoView();
  cy.contains("Órgão").should("be.visible");
  cy.contains("a, button", /^Buscar$/)
    .first()
    .click({ force: true });
});

Then("devo visualizar informações detalhadas das despesas do órgão selecionado", () => {
  cy.location("pathname", { timeout: 20000 }).should("include", "despesas");
  cy.contains(/Órgão|Despesas Públicas|Valor/i, { timeout: 20000 })
    .should("be.visible");
});
