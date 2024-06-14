import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I visit the Gov website', () => {
    cy.visit("https://www.gov.br/pt-br")
})

When('I close the popup if it appears', () => {
    cy.get('body').click(10, 10);
})

When('I click in "AGRICULTURA E PECUÁRIA"', () =>{
    cy.get('a.list-item[href="https://www.gov.br/pt-br/categorias?id=agricultura-e-pecuaria"]').click()
})

Then('I should see "Agricultura e Pecuária"', () =>{
    cy.wait(3000);
    cy.get('.title').should('contain.text', 'Agricultura e Pecuária');
})