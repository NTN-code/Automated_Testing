describe('Cloud google1', () => {
  it('test google 1', () => {
    cy.visit('https://cloud.google.com/');
    
    // cy.get('[aria-label="Open search"]').click();
    cy.get('input[aria-label="Search"]').click();

    cy.get('input[aria-label="Search"]').type("Google Cloud Platform Pricing Calculator{enter}");
    cy.wait(3000);
    
    cy.visit('https://cloud.google.com/products/calculator');

    // cy.wait(5000);
    // cy.frameLoaded('[src="https://cloudpricingcalculator.appspot.com"]');

    
    cy.visit('https://cloudpricingcalculator.appspot.com/');
    cy.get('#input_90').type("4");

    cy.get('md-select[placeholder="Series"]').click();
    cy.get('#select_option_201').click();
    
    cy.get('md-select[placeholder="Instance type"]').click();
    cy.contains("n1-standard-8").eq(0).click();
    
    cy.get('md-checkbox[aria-label="Add GPUs"]').eq(1).click();
    
    cy.get('md-select[placeholder="GPU type"]').click();
    cy.contains("NVIDIA Tesla V100").click()

    // cy.get('md-select[placeholder="Number of GPUs"]').click();
    // cy.get('#select_option_477').click();

    cy.get('md-select[placeholder="Local SSD"]').eq(0).click();
    cy.contains("2x375 GB").click();

    cy.get('md-select[placeholder="Datacenter location"]').eq(0).click();
    cy.get('#select_option_228').click();

    cy.get('md-select[placeholder="Committed usage"]').eq(0).click();
    cy.get('#select_option_128').click();

    cy.get('button[aria-label="Add to Estimate"]').eq(0).click();

  })
})