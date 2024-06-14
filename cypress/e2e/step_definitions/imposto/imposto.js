import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I visit the Gov website', () => {
    cy.visit("https://www.gov.br/pt-br")
})

When('I close the popup if it appears', () => {
    cy.get('body').click(10, 10);
})

When('I search for "imposto"', () =>{
    cy.get('#searchtext-input').type('imposto')
    cy.get('.aa-SubmitButton').click()
})

Then('I should see search results', () =>{
    cy.wait(3000);
    cy.get('h2.totalTermo').should('contain.text', 'imposto');
})