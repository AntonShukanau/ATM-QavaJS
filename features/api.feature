Feature: API test feature

  # QavaJS API client library based on fetch()
  # Playwright API client library based on playwright.fetch()

  # · For GET: 1 Positive test, 1 Negative tests
  # · For POST: 1 positive test, 1 Negative tests
  # · For PUT: 1 positive test, 1 Negative tests
  # · For DELETE: 1 positive test, 1 Negative tests
    
  Scenario: GET - User is able to get all launches via GET request - QavaJS - positive
    When I create 'GET' request 'request'
      And I add '$functions.defaultHeader()' headers to '$request'
      And I add '{$url}{$endpoints.launches}' url to '$request'
      And I send '$request' request and save response as 'response'
    Then I expect '$response.status' to be equal '200'

  Scenario: GET - User is able to get all launches via GET request - QavaJS - negative (without headers)
    When I create 'GET' request 'request'
      And I add '{$url}{$endpoints.launches}' url to '$request'
      And I send '$request' request and save response as 'response'
    Then I expect '$response.status' to be equal '401'

  Scenario: GET - User is able to get all launches via GET request - Playwright - positive
    When I send 'GET' request to '{$url}{$endpoints.launches}' via Playwright with headers '$functions.defaultHeader()' and save response as 'response'
    Then I expect '$response.status()' to be equal '200'

  Scenario: GET - User is able to get all launches via GET request - Playwright - negative (without headers)
    When I send 'GET' request to '{$url}{$endpoints.launches}' via Playwright with headers '' and save response as 'response'
    Then I expect '$response.status()' to be equal '401'

  Scenario: POST - User is able to start launch - positive
    When I create 'POST' request 'request'
      And I add '$functions.postHeader()' headers to '$request'
      And I add '$js(JSON.stringify({description: "string",mode: "DEFAULT",name: "string",startTime: "2023-11-27T10:07:29.200Z"}))' body to '$request'
      And I add '{$url}{$endpoints.launches}' url to '$request'
      And I send '$request' request and save response as 'response'
    Then I expect '$response.status' to be equal '201'

  Scenario: POST - User is able to start launch - negative (without payload)
    When I create 'POST' request 'request'
      And I add '$functions.postHeader()' headers to '$request'
      And I add '{$url}{$endpoints.launches}' url to '$request'
      And I send '$request' request and save response as 'response'
    Then I expect '$response.status' to be equal '400'
  
  Scenario: PUT - User is able to force finish launch - positive
    When I add launch
      And I force finish launch with id '$launch.payload.id' and save response as 'response'
    Then I expect '$response.status()' to be equal '200'


  # This is am example of patch request, in final result step-definition will contain method: "PUT" for request
  # This functionallity is blocked from PATCH requests, getting 405 with error message that saying "Allow: PUT"

  Scenario: PATCH - User is able to force finish launch - positive
    When I add launch
      And I force finish launch with id '$launch.payload.id' and save response as 'response'
    Then I expect '$response.status()' to be equal '405'
  
  Scenario: PUT - User is able to force finish launch - negative (without id)
    When I add launch
      And I force finish launch with id '' and save response as 'response'
    Then I expect '$response.status()' to be equal '405'
  
  Scenario: DELETE - User is able to remove launch by id - positive
    When I add launch
      And I force finish launch with id '$launch.payload.id' and save response as 'finishResponse'
      And I parse '$finishResponse' body as json
      And I delete launch with id '$finishResponse.payload.link' and save response as 'deleteResponse'
    Then I expect '$deleteResponse.status()' to be equal '200'

  Scenario: DELETE - User is able to remove launch by id - negative (without id)
    When I add launch
      And I force finish launch with id '$launch.payload.id' and save response as 'finishResponse'
      And I parse '$finishResponse' body as json
      And I delete launch with id '' and save response as 'deleteResponse'
    Then I expect '$deleteResponse.status()' to be equal '400'