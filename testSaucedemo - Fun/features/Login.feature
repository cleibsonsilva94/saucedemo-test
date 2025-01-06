# npx cucumber-js --tags @feature
# npx cucumber-js --tags @TestName
@login
Feature: Login

    @validLogin
    # Test Number: CT001
    Scenario: performLoginWithValidCredentials
        Given I am on the Swag Labs login page
        And I click on the Username field and type "standard_user"
        And I click on the Password field and type "secret_sauce"
        When I click on login
        Then I should be redirected to the homepage "https://www.saucedemo.com/inventory.html"

    @invalidLogin
    # Test Number: CT002
    Scenario: attemptingToLogInWithInvalidCredentials
        Given I am on the Swag Labs login page
        And I click on the Username field and type "standard_user"
        And I click on the Password field and type "wrong_password"
        When I click on login
        Then I should see the error message "Epic sadface: Username and password do not match any user in this service"

    @emptyUsername
    # Test Number: CT003
    Scenario: AttemptingToLogInWithoutEnteringAUsername
        Given I am on the Swag Labs login page
        And I click on the Password field and type "secret_sauce"
        When I click on login
        Then I should see the error message "Epic sadface: Username is required"

    @emptyPassword
    # Test Number: CT004
    Scenario: AttemptingToLogInWithoutEnteringAPassword
        Given I am on the Swag Labs login page
        And I click on the Username field and type "standard_user"
        When I click on login
        Then I should see the error message "Epic sadface: Password is required"