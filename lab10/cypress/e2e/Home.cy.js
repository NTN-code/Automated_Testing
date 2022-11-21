import HomePage from "./PageObjects/HomePage"

describe('HomePage', () => {
  it('visit homepage apple', () => {
    HomePage.visit();
  });

  it('choose a country', () => {
    HomePage.visit();
    HomePage.takeCountry();
    cy.location('href').should("be.equal", `${Cypress.config("baseUrl")}/choose-country-region/`)
  });

  it("close choose a country", () => {
    HomePage.visit();
    HomePage.closeTakeCountry();
  });

  it("take first default search", () => {
    HomePage.visit();
    HomePage.openSearch();
    HomePage.searchFirstElement()
  });

  it("find iphone 14", () => {
    HomePage.visit();
    HomePage.openSearch();
    HomePage.searchInfo("iphone 14");
  });

  it("see my bag", () => {
    HomePage.visit();
    HomePage.openSelectMenu();
    HomePage.openBag();
    cy.location('href').should("be.equal", `${Cypress.config("baseUrl")}/shop/bag`)
  })

})