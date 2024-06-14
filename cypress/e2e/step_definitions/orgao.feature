Feature: Clicking in Orgaos do Governo

Scenario: Clicking in Orgaos do Governo
  Given I visit the Gov website
  When I close the popup if it appears
  Then I click in the bar and "Orgãos do Governo"
  Then I should be redirected to another page