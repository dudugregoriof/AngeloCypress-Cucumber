Feature: Clicking assistencia on Gov website

Scenario: Clicking in assistnecia
  Given I visit the Gov website
  When I close the popup if it appears
  When I click in "ASSISTÊNCIA SOCIAL"
  Then I should see "Assistência Social"