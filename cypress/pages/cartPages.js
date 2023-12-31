class CartPageObject {
    get checkoutBtn() {
        return cy.get('button').contains('Checkout');
    }

    proceedToCheckout() {

    }
}

export default CartPageObject;