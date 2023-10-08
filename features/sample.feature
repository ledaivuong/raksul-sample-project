@Regression
Feature: The Raksul Sample

  @main
  Scenario Outline: As a user, I can submit form
    Given I am on the page test
    When I input email <email>
    When I input first name <first name>
    When I input last name <last name>
    When I select info source <info source>
    When I select services of interest <service of interest>
    When I select type of association <type of association>
    When I input explanation "Just a test"
    When I click on submit button
    Then I expect the success message display "Your inquiry has been submitted successfully!"

    Examples:
      | email         | first name      | last name      | info source             | service of interest | type of association |
      | "abc@abc.com" | "firstNameTest" | "lastNameTest" | "Search engines"        | "Printing"          | "Prospect"          |
      | "abc@abc.com" | "firstNameTest" | "lastNameTest" | "Recommended by friend" | "Logistics"         | "Partner"           |
      | "abc@abc.com" | "firstNameTest" | "lastNameTest" | "Social media"          | "Advertisement"     | "Reseller"          |
      | "abc@abc.com" | "firstNameTest" | "lastNameTest" | "Email marketing"       | "Printing"          | "Vendor"            |
      | "abc@abc.com" | "firstNameTest" | "lastNameTest" | "Other"                 | "Logistics"         | "Other"             |

  @invalidEmail
  Scenario: As a user, I get notice when I input invalid email
    Given I am on the page test
    When I input email "abc"
    Then I expect the empty email validation "display" "'email' is not a valid email"
    When I input email "abc@abc.com"
    When I click on submit button
    Then I expect the empty email validation "disappear" ""

  @emptyEmail
  Scenario: As a user, I get notice when I input empty email
    Given I am on the page test
    When I click on submit button
    Then I expect the empty email validation "display" "'email' is required"
    When I input email "abc@abc.com"
    When I click on submit button
    Then I expect the empty email validation "disappear" ""

  @emptyLastName
  Scenario: As a user, I get notice when I input empty last name
    Given I am on the page test
    When I click on submit button
    Then I expect the empty lastName validation "display" "'lastName' is required"
    When I input last name "lastName"
    When I click on submit button
    Then I expect the empty lastName validation "disappear" ""

  @emptyFirstName
  Scenario: As a user, I get notice when I input empty first name
    Given I am on the page test
    When I click on submit button
    Then I expect the empty firstName validation "display" "'firstName' is required"
    When I input first name "firstName"
    When I click on submit button
    Then I expect the empty firstName validation "disappear" ""

  @emptyInfoSource
  Scenario: As a user, I get notice when I do not select info source
    Given I am on the page test
    When I click on submit button
    Then I expect the empty infoSource validation "display" "'infoSource' is required"
    When I select info source "Search engines"
    When I click on submit button
    Then I expect the empty infoSource validation "disappear" ""

  @emptyAssociation
  Scenario: As a user, I get notice when I do not select association
    Given I am on the page test
    When I click on submit button
    Then I expect the empty association validation "display" "'typeOfAssociation' is required"
    When I select type of association "Prospect"
    When I click on submit button
    Then I expect the empty association validation "disappear" ""

  @emptyInterestSevices
  Scenario: As a user, I get notice when I do not select interest services
    Given I am on the page test
    When I click on submit button
    Then I expect the empty interest services validation "display" "'servicesOfInterest' is required"
    When I select services of interest "Printing"
    When I click on submit button
    Then I expect the empty interest services validation "disappear" ""

