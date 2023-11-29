Feature: Templates
  
  Scenario: I add launch
    When I create 'POST' request 'request'
      And I add '$functions.postHeader()' headers to '$request'
      And I add '$js(JSON.stringify({description: "string",mode: "DEFAULT",name: "string",startTime: "2023-11-27T10:07:29.200Z"}))' body to '$request'
      And I add '{$url}{$endpoints.launches}' url to '$request'
      And I send '$request' request and save response as 'launch'
      And I parse '$launch' body as json
  
  Scenario: I receive all launches info
    When I create 'GET' request 'request'
      And I add '$functions.defaultHeader()' headers to '$request'
      And I add '{$url}{$endpoints.launches}' url to '$request'
      And I send '$request' request

