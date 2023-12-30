class LoginPageObject {
    get visit(){
        cy.visit('');
    }

    fillUsername(username) {
        cy.get('[placeholder="Username"]').type(username);
    }

    fillPassword(password) {
        cy.get('[placeholder="Password"]').type(password);
    }

    get submit() {
       return cy.get('#login-button').click();
    }
}

export default LoginPageObject;