Feature: API test feature
  
  # These scenarios will duplicate itselves, it was done because of the task, the reason is to show the possibility of working with 2 different API clients

  # QavaJS API client library based on fetch()
  # Playwright API client library based on playwright.<method>()
  

  # Now there is a problem with logging into the Report Portal on the web version of the application; there would be no problems with the local one
  # These test cases are shown as an example of how it should work

  Background:
    Given I login to RP

  Scenario: User is able to get all launches via GET request - QavaJS - positive
    When I send 'GET' request to '{$url}{$endpoints.launches}' with headers '$functions.defaultHeader' and save response as 'response'
    Then I expect '$response.status' to be equal '200'

  Scenario: User is able to get all launches via GET request - QavaJS - negative (without headers)
    When I send 'GET' request to '{$url}{$endpoints.launches}' with headers '' and save response as 'response'
    Then I expect '$response.status' to be equal '401'

  Scenario: User is able to get all launches via GET request - Playwright - positive
    When I send 'GET' request to '{$url}{$endpoints.launches}' via Playwright with headers '$functions.defaultHeader' and save response as 'response'
    Then I expect '$response.status' to be equal '200'

  Scenario: User is able to get all launches via GET request - Playwright - negative (without headers)
    When I send 'GET' request to '{$url}{$endpoints.launches}' via Playwright with headers '' and save response as 'response'
    Then I expect '$response.status' to be equal '401'

  

