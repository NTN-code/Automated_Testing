describe('Buy workflow', () => {
  it('Add iphone to cart', () => {
    cy.visit('https://www.apple.com/shop/buy-iphone/iphone-13/');
    cy.get('[data-autom="dimensionScreensize6_1inch"]').click();
    cy.get('.colornav-items').children().eq(2).click(0);
    cy.get('[data-autom="dimensionCapacity256gb"]').click();
    cy.get('[data-autom="choose-noTradeIn"]').click();
    cy.get('[data-autom="purchaseGroupOptionfullprice"]').click();
    cy.get('[data-autom="carrierModelUNLOCKED/US"]').click();
    cy.get('[data-autom="applecareplus_59_noapplecare"]').click();
    cy.wait(2000);
    
    cy.get('[data-autom="add-to-cart"]').click();
    cy.location('href').should("be.equal", `${Cypress.config("baseUrl")}/shop/buy-iphone/iphone-13?bfil=2&cppart=UNLOCKED/US&product=MLMU3LL/A&purchaseOption=fullPrice&step=attach`)
    cy.wait(2000);

    cy.get('[data-autom="proceed"]').click();
    cy.wait(2000);

    cy.location('href').should("be.equal", `${Cypress.config("baseUrl")}/shop/bag`);
    cy.wait(2000);

    cy.get('[data-autom="checkout"]').eq(0).click();
    cy.wait(10000);

    cy.get('[data-autom="guest-checkout-btn"]').click();
    cy.wait(2000);

    cy.get('[data-autom="fulfillment-option-RETAIL"]').click();
    cy.get('[data-autom="bag-storelocator-input"]').type("75002");
    cy.wait(2000);
    
    cy.get('[data-autom="checkout-cityState-apply"]').click();
    cy.get('.rt-storelocator-store-group').eq(0).click();
    cy.get('[data-autom="pickup-availablewindow-dropdown"]').click();
    cy.get('[data-autom="pickup-availablewindow-dropdown"]').children().eq(1).click();
    cy.get('[data-autom="fulfillment-continue-button"]').click();
    cy.wait(2000);

    cy.get('[data-autom="form-field-firstName"]').type("Alex");
    cy.get('[data-autom="form-field-lastName"]').type("Larkin");
    cy.get('[data-autom="form-field-emailAddress"]').type("test@gmail.com");
    cy.get('[data-autom="form-field-fullDaytimePhone"]').type("3243243243");
    cy.get('[data-autom="continue-button-label"]').click();
    cy.wait(2000);

    cy.get('[data-autom="checkout-billingOptions-CREDIT"]').click();
    cy.wait(2000);
    
    cy.get('[data-autom="card-number-input"]').type("4111111111111111");
    cy.get('[data-autom="expiration-input"]').type("1124");
    cy.get('[data-autom="security-code-input"]').type("111");
    cy.get('[data-autom="form-field-firstName"]').type("Alex");
    cy.get('[data-autom="form-field-lastName"]').type("Larkin");
    cy.get('[data-autom="form-field-street"]').type("Washington");
    cy.get('[data-autom="form-field-postalCode"]').type("99301");
    cy.wait(2000);
    
    cy.get('[data-autom="continue-button-label"]').click();
    cy.wait(2000);

    cy.get('[data-autom="continue-button-label"]').click();
    

  })
})