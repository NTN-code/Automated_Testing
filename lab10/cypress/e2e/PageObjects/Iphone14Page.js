class Iphone14Page {
    static visit (){
        cy.visit(`${Cypress.config("baseUrl")}/iphone-14-pro/`);
    }

    static buyIphone(){
        cy.get(".ac-ln-action-button").click();
    }

    static buyIphone14Pro(){
        cy.get('[data-autom="dimensionScreensize6_1inch"]').click();
    }

    static buyIphone14ProMax(){
        cy.get('[data-autom="dimensionScreensize6_7inch"]').click();
    }

    static selectColor(color) {
        let colorMapper = {
            "deeppurple": 0,
            "gold": 1,
            "silver": 2,
            "spaceblack": 3
        };
        cy.get('.colornav-items').children().eq(colorMapper[color]).click(0);

    }


}


export default Iphone14Page;
