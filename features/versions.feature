Feature: Supporting both versions
  # Demo tests
  Scenario: web
    Given I open '$url' url
    Then I wait until current url to be equal 'https://rp.epam.com/ui/#login'