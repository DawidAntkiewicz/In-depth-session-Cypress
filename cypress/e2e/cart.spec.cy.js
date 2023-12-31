import CartPageObject from '../pages/cartPages.js';
import '../support/commands.js';

const cartPage = new CartPageObject();

const user = {
  username: "standard_user",
  password: "secret_sauce",
  firstName: "testUser",
  lastName: "testUserl",
  postalCode: "52-131",
}

beforeEach(() => {
    cy.login(user.username, user.password);
    cy.addProduct('Sauce Labs Bike Light');
})

describe('cart spec', () => {
  it('passes', () => {
    //proceed to checkout
    cartPage.checkoutBtn.should('contain.text', 'Checkout');
    cartPage.checkoutBtn.click();
    //url assertion
    cy.url().should('include', '/checkout-step-one.html');
  })
})