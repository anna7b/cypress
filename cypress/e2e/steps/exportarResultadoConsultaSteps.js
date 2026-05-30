import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const BASE_URL = "https://portaldatransparencia.gov.br";

Given("que realizei uma consulta de despesas", () => {
  cy.viewport(1366, 768);
  cy.visit(`${BASE_URL}/despesas`, { failOnStatusCode: false });
  cy.contains("Busca específica", { timeout: 20000 }).scrollIntoView();
  cy.contains("Órgão").should("be.visible");
});

When("clico na opção de exportação dos dados", () => {
  cy.contains(/Ver mais opções|Exportar|Baixar|Download|CSV|XLSX/i, {
    timeout: 20000,
  })
    .scrollIntoView()
    .click({ force: true });
});

Then("o sistema deve disponibilizar um arquivo para download", () => {
  cy.contains(/Baixar|Download|CSV|XLS|PNG|PDF/i, { timeout: 20000 })
    .should("be.visible");
});
