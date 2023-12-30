class InventoryPageObject {
    addToCart (itemName) {
        cy.get('.inventory_item_description').contains(itemName).click();
        cy.get('button').contains('Add to cart').click();
    }
    get getShoppingCartBadgeCount() {
        cy.get('.shopping_cart_badge').should('contain', '1');
    }
    get goToShoppingCart() {
        cy.get('.shopping_cart_link').click();
    }
}

export default InventoryPageObject;