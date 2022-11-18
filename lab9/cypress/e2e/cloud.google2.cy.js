import { recurse } from 'cypress-recurse'

describe('Cloud google2', () => {
  it('test google 2', () => {
    cy.visit('https://cloudpricingcalculator.appspot.com/');
    cy.get('#input_90').type("4");

    cy.get('md-select[placeholder="Series"]').click();
    cy.get('#select_option_201').click();
    
    cy.get('md-select[placeholder="Instance type"]').click();
    cy.contains("n1-standard-8").eq(0).click();
    
    cy.get('md-checkbox[aria-label="Add GPUs"]').eq(1).click();
    
    cy.get('md-select[placeholder="GPU type"]').click();
    cy.contains("NVIDIA Tesla V100").click()

    cy.get('md-select[placeholder="Number of GPUs"]').click();
    cy.get('#select_option_479').click();

    cy.get('md-select[placeholder="Local SSD"]').eq(0).click();
    cy.contains("2x375 GB").click();

    cy.get('md-select[placeholder="Datacenter location"]').eq(0).click();
    cy.get('#select_option_228').click();

    cy.get('md-select[placeholder="Committed usage"]').eq(0).click();
    cy.get('#select_option_128').click();

    cy.get('button[aria-label="Add to Estimate"]').eq(0).click();

    cy.get("#email_quote").click();

    // groitretravoka-9580@yopmail.com
    recurse(
      // the commands to repeat, and they yield the input element
      () => cy.get('#input_543').clear().type("groitretravoka-9580@yopmail.com"),
      // the predicate takes the output of the above commands
      // and returns a boolean. If it returns true, the recursion stops
      ($input) => $input.val() === "groitretravoka-9580@yopmail.com",
    )

    // cy.get('#input_543').type("groitretravoka-9580@yopmail.com");
    cy.get('button[aria-label="Send Email"]').click();

  
  })
})