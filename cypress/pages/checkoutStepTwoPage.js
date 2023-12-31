class CheckoutStepTwoPageObject {
    get finishBtn() {
        return cy.get('button').contain('Finish');
    }

    clickFinishBtn() {
        cy.get('button').contains('Finish').click();
    }
}

export default CheckoutStepTwoPageObject;