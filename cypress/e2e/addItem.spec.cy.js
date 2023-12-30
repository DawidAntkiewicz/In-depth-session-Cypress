import InventoryPageObject from '../pages/inventoryPage.js';
import LoginPageObject from '../pages/loginPage.js';
import '../support/commands.js'

const inventoryPage = new InventoryPageObject();
const loginPage = new LoginPageObject();

const user = {
  username: "standard_user",
  password: "secret_sauce",
  firstName: "testUser",
  lastName: "testUserl",
  postalCode: "52-131",
}

beforeEach(() => {
    cy.login(user.username, user.password);
})

describe('inventory spec', () => {
  it('passes', () => {
    inventoryPage.addToCart('Sauce Labs Bike Light');
    inventoryPage.getShoppingCartBadgeCount;
    inventoryPage.goToShoppingCart;
    cy.url().should('include', 'cart.html');
  })
})