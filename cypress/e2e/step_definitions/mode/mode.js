import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I visit the Gov website', () => {
    cy.visit("https://www.gov.br/pt-br")
})

When('I close the popup if it appears', () => {
    cy.get('body').click(10, 10);
})

When('I click in the mode button', () =>{
    cy.get('span.fa-adjust.fas').click()
})

Then('The screen should be adjusted', () =>{
    cy.get('body').should('have.class', 'contraste');
})