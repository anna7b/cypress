import { When, Then } from "cypress-cucumber-preprocessor/steps";

When("informo o período {string}", (periodo) => {
  cy.contains("Destaque dos valores de despesas públicas", { timeout: 20000 })
    .scrollIntoView();
  cy.contains(periodo).click({ force: true });
});

When("aplico o filtro", () => {
  cy.get("body").then(($body) => {
    const botaoFiltro = [...$body.find("button, a")]
      .find((el) => /aplicar|filtrar/i.test(el.innerText));

    if (botaoFiltro) {
      cy.wrap(botaoFiltro).click({ force: true });
    }
  });
});

Then("devo visualizar despesas referentes ao período selecionado", () => {
  cy.contains(/Orçamento atualizado da despesa|Valor total pago|Despesas Públicas/i, {
    timeout: 20000,
  }).should("be.visible");
});
