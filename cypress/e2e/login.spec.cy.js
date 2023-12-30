import LoginPageObject from "../pages/loginPage";
import '../support/commands.js'

const loginPage = new LoginPageObject();

const user = {
  username: "standard_user",
  password: "secret_sauce",
  firstName: "testUser",
  lastName: "testUserl",
  postalCode: "52-131",
}

describe('login spec', () => {
  it('passes', () => {
    //login
    cy.login(user.username, user.password);
    //assertion
    cy.url().should('include', 'inventory.html')
  })
})