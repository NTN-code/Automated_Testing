import Iphone14Page from "./PageObjects/Iphone14Page";

describe('Iphone14Page', () => {
  it('visit iphone 14', () => {
    Iphone14Page.visit();
  });

  it('buy iphone14', () => {
    Iphone14Page.visit();
    Iphone14Page.buyIphone();
    cy.location('href').should("be.equal", `${Cypress.config("baseUrl")}/shop/buy-iphone/iphone-14-pro`)
  })

  it('select iphone14 pro', () => {
    Iphone14Page.visit();
    Iphone14Page.buyIphone();
    Iphone14Page.buyIphone14Pro();
  })  

  
  it('select iphone14 pro max', () => {
    Iphone14Page.visit();
    Iphone14Page.buyIphone();
    Iphone14Page.buyIphone14ProMax();
  })  

  it('select all color', () => {
    Iphone14Page.visit();
    Iphone14Page.buyIphone();
    Iphone14Page.buyIphone14ProMax();
    Iphone14Page.selectColor('deeppurple');
    Iphone14Page.selectColor('gold');
    Iphone14Page.selectColor('silver');
    Iphone14Page.selectColor('spaceblack');
  })



})