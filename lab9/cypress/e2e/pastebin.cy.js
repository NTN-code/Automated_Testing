describe('Pastebin', () => {
  it('test input field', () => {
    cy.visit('https://pastebin.com');
    cy.get('#postform-text').type("Hello from cypress");
    cy.get("#select2-postform-expiration-container").click();
    cy.wait(2000);
    cy.get("#select2-postform-expiration-results").contains("10 Minutes").click();
    cy.get("#postform-name").type("Hello web");
    cy.get(".form-btn-container").within(()=>{
      cy.get("button").click();
    })
  })
})