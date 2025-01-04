#npx cucumber-js --tags @feature
#npx cucumber-js --tags @TestName
Feature: Login

    @validLogin
    Scenario: performLoginWithValidCredentials
        Given I am on the Swag Labs login page
        And I click on the Username field and type "performance_glitch_user"
        And I click on the Password field and type "secret_sauce"
        Then I should be redirected to the homepage "https://www.saucedemo.com/inventory.html"

    @invalidLogin
    Scenario: attemptingToLogInWithInvalidCredentials
        Given I am on the Swag Labs login page
        And I click on the Username field and type "performance_glitch_user"
        And I click on the Password field and type "wrong_password"
        Then I should see the error message "Username and password do not match any user in this service"

    @emptyUsername
    Scenario: AttemptingToLogInWithoutEnteringAUsername
        Given I am on the Swag Labs login page
        And I leave the Username field empty
        And I click on the Password field and type "secret_sauce"
        Then I should see the error message "Username is required"

    @emptyPassword
    Scenario: AttemptingToLogInWithoutEnteringAPassword
        Given I am on the Swag Labs login page
        And I click on the Username field and type "performance_glitch_user"
        And I leave the Password field empty
        Then I should see the error message "Password is required"