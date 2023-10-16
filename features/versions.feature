Feature: Supporting both versions
  # Demo tests
  Scenario: web
    Given I open 'https://rp.epam.com' url
    Then I wait until current url to be equal 'https://rp.epam.com/ui/#login'

  Scenario: local
    Given I open 'http://localhost:8080/' url
    Then I wait until current url to be equal 'http://localhost:8080/ui/#login'