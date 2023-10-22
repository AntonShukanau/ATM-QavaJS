Feature: Launches Page
  
  Background:
    Given I open '{$url}/ui/#superadmin_personal/launches/all' url
      And I login to RP

  Scenario Outline: user is able to move to appropriate launch view clicking on Launch name/total/passed/failed/skipped/to investigate places
    When I wait until 'Launches Page > #4 of Launches > Title' to be visible
      And I save text of 'Launches Page > #4 of Launches > Title' as 'launchTitleWithSpace'
      And I save '$functions.titleSpaceReplacer($launchTitleWithSpace)' to memory as 'launchTitle'
      And I click 'Launches Page > #4 of Launches > <optionToCheck>'
    Then I expect text of 'Test Case Page > Current Launch' to be equal '$launchTitle'

    Examples: 
      | optionToCheck                | 
      | Title                        |
      | #1 of Status Counters        |
      | #2 of Status Counters        |
      | #3 of Status Counters        |
      | #4 of Status Counters        |
      | #1 of Defect Status Counters |
      | #2 of Defect Status Counters |
      | #3 of Defect Status Counters |
      | #4 of Defect Status Counters |

  Scenario: each launch contains tests count data (TOTAL; PASSED; FAILED; SKIPPED; PRODUCT BUG; AUTO BUG; SYSTEM ISSUE; TO INVESTIGATE)
    When I wait until 'Launches Page > #4 of Launches' to be visible
    Then I expect text of 'Launches Page > #4 of Launches > #1 of Status Counters' to be equal '15'
      And I expect text of 'Launches Page > #4 of Launches > #2 of Status Counters' to be equal '5'
      And I expect text of 'Launches Page > #4 of Launches > #3 of Status Counters' to be equal '9'
      And I expect text of 'Launches Page > #4 of Launches > #4 of Status Counters' to be equal '1'
      And I expect text of 'Launches Page > #4 of Launches > #1 of Defect Status Counters' to be equal '1'
      And I expect text of 'Launches Page > #4 of Launches > #2 of Defect Status Counters' to be equal '5'
      And I expect text of 'Launches Page > #4 of Launches > #3 of Defect Status Counters' to be equal '4'
      And I expect text of 'Launches Page > #4 of Launches > #4 of Defect Status Counters' to be equal '8'

  Scenario: user is able to select several launches and compare them
    When I click 'Launches Page > #1 of Launches > Checkbox'
      And I click 'Launches Page > #2 of Launches > Checkbox'
      And I click 'Launches Page > Actions Dropdown'
      And I click 'Launches Page > Actions Dropdown > #Compare in Options'
      And I wait until 'Compare Modal' to be visible
    Then I expect text of 'Compare Modal > Title' to be equal 'COMPARE LAUNCHES'

  # this test should be skipped for (logic for uploading demo data is not correct, request is working in browser console, but the time is not appropriate)
  Scenario: user is able to remove launch(es)
    When I click 'Launches Page > Page Header > Select All'
      And I click 'Launches Page > Actions Dropdown'
      And I click 'Launches Page > Actions Dropdown > #Delete in Options'
      And I wait until 'Delete Modal' to be visible
      And I click 'Delete Modal > Delete Button'
      And I wait until 'Launches Page > No Item Message' to be visible
    Then I expect text of 'Launches Page > No Item Message' to be equal 'No results found'

