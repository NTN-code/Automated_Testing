describe('Test header link', () => {
  it('Tape store link', () => {   
    cy.visit('https://www.apple.com/');
    cy.get(".ac-gn-store").click();
    cy.location('href').should("be.equal", `${Cypress.config("baseUrl")}/store`)
  }),
  it('Tape mac link', () => {
    cy.get(".ac-gn-mac").click();
    cy.location('href').should("be.equal", `${Cypress.config("baseUrl")}/mac/`)
  })
  it('Tape ipad link', () => {
    cy.get(".ac-gn-ipad").click();
    cy.location('href').should("be.equal", `${Cypress.config("baseUrl")}/ipad/`)
  }),
  it('Tape iphone link', () => {
    cy.get(".ac-gn-iphone").click();
    cy.location('href').should("be.equal", `${Cypress.config("baseUrl")}/iphone/`)
  }),
  it('Tape watch link', () => {
    cy.get(".ac-gn-watch").click();
    cy.location('href').should("be.equal", `${Cypress.config("baseUrl")}/watch/`)
  }),
  it('Tape airpods link', () => {
    cy.get(".ac-gn-airpods").click();
    cy.location('href').should("be.equal", `${Cypress.config("baseUrl")}/airpods/`)
  }),
  it('Tape tv-home link', () => {
    cy.get(".ac-gn-tvhome").click();
    cy.location('href').should("be.equal", `${Cypress.config("baseUrl")}/tv-home/`)
  }),
  it('Tape onlyonapple link', () => {
    cy.get(".ac-gn-link-onlyonapple").click();
    cy.location('href').should("be.equal", `${Cypress.config("baseUrl")}/services/`)
  }),
  it('Tape accessories link', () => {
    // weired url
    cy.get(".ac-gn-link-accessories").click();
    cy.location('href').should("be.equal", `${Cypress.config("baseUrl")}/accessories/all/`)
  })
  it('Tape support link', () => {
    cy.get(".ac-gn-link-support").click();
    cy.location('href').should("be.equal", `${Cypress.config("baseUrl")}/support/`)
  }),
  it("Tape search and test it", () => {
    cy.visit('https://www.apple.com/');
    cy.get("#ac-gn-link-search").click();
    cy.get("#ac-gn-searchform-input").type("iphone 13{enter}");
    cy.contains("iPhone 13 and iPhone 13 mini");
  })
})