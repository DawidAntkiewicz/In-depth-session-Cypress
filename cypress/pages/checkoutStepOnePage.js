class CheckoutStepOnePageObject {
    fillFirstName(firstname) {
        cy.get('[placeholder="First Name"]').type(firstname);
    }
    fillLastName(lastname) {
        cy.get('[placeholder="Last Name"]').type(lastname);
    }
    fillPostalCode(postalCode) {
        cy.get('[placeholder="Zip/Postal Code"]').type(postalCode);
    }
    get continue() {
       return cy.get('input').contains('Continue').click();
    }

}

export default CheckoutStepOnePageObject;