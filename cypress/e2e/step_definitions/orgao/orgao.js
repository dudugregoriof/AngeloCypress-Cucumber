import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I visit the Gov website', () => {
  cy.visit('https://www.gov.br/pt-br');
});

When('I close the popup if it appears', () => {
  cy.get('body').click(10, 10);
})

Then('I click in the bar and "Orgãos do Governo"', () => {
  cy.get('span.fa.fa-bars').click();
  cy.wait(3000)
  cy.contains('a.plain', "Órgãos do Governo").click();
});


Then('I should be redirected to another page', () => {
  cy.url('[href=https://www.gov.br/pt-br/orgaos-do-governo]').should('include', '/orgaos-do-governo');
});
