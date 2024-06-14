Feature: Switching between screen modes

Scenario: Switching screen mode
  Given I visit the Gov website
  When I close the popup if it appears
  Then I click in the mode button
  Then The screen should be adjusted