import CheckoutStepOnePageObject from '../pages/checkoutStepOnePage.js';
import CheckoutStepTwoPageObject from '../pages/checkoutStepTwoPage.js';
import '../support/commands.js';


const checkoutStepOnePage = new CheckoutStepOnePageObject();
const checkoutStepTwoPage = new CheckoutStepTwoPageObject();


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
    cy.proceedToCheckout();
})

describe('checkout spec', () => {
  it('passes', () => {
    //filling the form 
    checkoutStepOnePage.fillFirstName(user.firstName);
    checkoutStepOnePage.fillLastName(user.lastName);
    checkoutStepOnePage.fillPostalCode(user.postalCode);
    checkoutStepOnePage.continue;
    //url assertion
    cy.url().should('include', 'checkout-step-two.html');
    //finish the purchase
    checkoutStepTwoPage.clickFinishBtn();
    //url assertion
    cy.url().should('include', 'checkout-complete.html');

  })
})