Feature: Clicking agricultura on Gov website

Scenario: Clicking in agricultura
  Given I visit the Gov website
  When I close the popup if it appears
  When I click in "AGRICULTURA E PECUÁRIA"
  Then I should see "Agricultura e Pecuária"