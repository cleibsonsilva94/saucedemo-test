#npx cucumber-js --tags @feature
#npx cucumber-js --tags @TestName
@login
Feature: Login
    
    @validLogin
    #Test Number:CT001
    Scenario: performLoginWithValidCredentials
        Given I am on the Swag Labs login page
        And I click on the Username field and type "standard_user"
        And I click on the Password field and type "secret_sauce"
        When I click on login
       Then I should be redirected to the homepage "https://www.saucedemo.com/inventory.html"

    #Test Number:CT002
    @invalidLogin
    Scenario: attemptingToLogInWithInvalidCredentials
        Given I am on the Swag Labs login page
        And I click on the Username field and type "standard_user"
        When I click on the Password field and type "wrong_password"
        Then I should see the error message "Username and password do not match any user in this service"
    
    #Test Number:CT003
    @emptyUsername
    Scenario: AttemptingToLogInWithoutEnteringAUsername
        Given I am on the Swag Labs login page
        And I leave the Username field empty
        When I click on the Password field and type "secret_sauce"
        Then I should see the error message "Username is required"
    
    #Test Number:CT004
    @emptyPassword
    Scenario: AttemptingToLogInWithoutEnteringAPassword
        Given I am on the Swag Labs login page
        And I click on the Username field and type "standard_user"
        When I leave the Password field empty
        Then I should see the error message "Password is required"