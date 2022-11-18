describe('Pastebin2', () => {
  it('test git', () => {
    cy.visit('https://pastebin.com');
    
    cy.get('#postform-text').type(`
      git config --global user.name  "New Sheriff in Town"\n
      git reset $(git commit-tree HEAD^{tree} -m "Legacy code")\n
      git push origin master --force\n
    `, {parseSpecialCharSequences: false});
    
    cy.get("#select2-postform-format-container").click();
    cy.wait(2000);
    cy.get("#select2-postform-format-results").contains("Bash").click();

    cy.get("#select2-postform-expiration-container").click();
    cy.wait(2000);
    cy.get("#select2-postform-expiration-results").contains("10 Minutes").click();


    cy.get("#postform-name").type("How to gain dominance among developers");
    cy.get(".form-btn-container").within(()=>{
      cy.get("button").click();
    })

    cy.wait(3000);

    cy.contains("How to gain dominance among developers");
    cy.contains("git config")

  })
})