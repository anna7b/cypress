/// <reference types="cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given('que eu estou na página de login do saucedemo', () => {
    cy.log('Acessando a página de login do saucedemo');
    cy.visit('https://www.saucedemo.com/');
});

And('clico no botão login', () => {
    cy.get('[data-test="login-button"]').click();
});

Then('eu devo ser redirecionado para a página de Produtos', () => {
    cy.get('[data-test="title"]').should('have.text', 'Products');
});

When('eu insiro o usuário e a senha correta', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
});

When('eu insiro o usuário {string}', (username) => {
    cy.get('[data-test="username"]').type(username);
});

When('insiro a senha {string}', (password) => {
    cy.get('[data-test="password"]').type(password);
});

Then('está exibindo no campo de erro o texto {string}', (text) => {
    cy.get('[data-test="error"]').should("be.visible").and('have.text', text);
});

When('inserir o usuário {string}', (username) => {
    cy.log(`Inserindo usuário: ${username}`);
    if (username == "") {
        cy.get('[data-test="username"]').clear();
        return;
    } else {
        cy.get('[data-test="username"]').clear().type(username);
    }
});

When('inserir a senha {string}', (password) => {
    cy.log(`Inserindo senha`);
    if (password == "") {
        cy.get('[data-test="password"]').clear()
        return;
    } else {
            cy.get('[data-test="password"]').clear().type(password);
    }
}); 