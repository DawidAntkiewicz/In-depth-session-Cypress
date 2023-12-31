// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import LoginPageObject from "../pages/loginPage";
import InventoryPageObject from "../pages/inventoryPage";
import CartPageObject from "../pages/cartPages";

const loginPage = new LoginPageObject();
const inventoryPage = new InventoryPageObject();
const cartPage = new CartPageObject();

Cypress.Commands.add('login', (username, password) => {
    cy.visit('');
    loginPage.fillUsername(username);
    loginPage.fillPassword(password);
    loginPage.submit;
});

Cypress.Commands.add('addProduct', (itemName) => {
    inventoryPage.addToCart(itemName);
    inventoryPage.goToShoppingCart;
});

Cypress.Commands.add('proceedToCheckout', () => {
    cartPage.checkoutBtn.click();
});



