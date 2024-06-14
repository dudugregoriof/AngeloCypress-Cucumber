Feature: Search functionality on Gov website

Scenario: Searching for imposto
  Given I visit the Gov website
  When I close the popup if it appears
  When I search for "imposto"
  Then I should see search results