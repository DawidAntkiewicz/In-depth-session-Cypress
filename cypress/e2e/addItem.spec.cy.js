import InventoryPageObject from '../pages/inventoryPage.js';
import '../support/commands.js';

const inventoryPage = new InventoryPageObject();

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
    //add product to the Cart
    inventoryPage.addToCart('Sauce Labs Bike Light');
    //shopiing basge assertion
    inventoryPage.getShoppingCartBadgeCount;
    //go to the Cart
    inventoryPage.goToShoppingCart;
    //url assertion
    cy.url().should('include', 'cart.html');
  })
})