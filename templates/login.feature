Feature: Templates

  Scenario: I login to RP
    When I open '$url' url
      And I type '$js(process.env.LOGIN)' to 'Login Page > Login Input'
      And I type '$js(process.env.PASS)' to 'Login Page > Password Input'
      And I click 'Login Page > Submit Button'