Feature: Login

    Test Number: CT001
    Scenario: performLoginWithValidCredentials
        Given I am on the Swag Labs login page
        And I click on the Username field and type "performance_glitch_user"
        And I click on the Password field and type "secret_sauce" (Verificar possibilidade de deixar credenciais em lugar a parte)
        Then I should be redirected to the homepage "https://www.saucedemo.com/inventory.html"

    Test Number: CT002
    Scenario: attemptingToLogInWithInvalidCredentials
        Given I am on the Swag Labs login page
        And I click on the Username field and type "performance_glitch_user"
        And I click on the Password field and type "wrong_password"
        Then I should see the error message "Username and password do not match any user in this service"

    Test Number: CT003
    Scenario: AttemptingToLogInWithoutEnteringAUsername
        Given I am on the Swag Labs login page
        And I leave the Username field empty
        And I click on the Password field and type "secret_sauce"
        Then I should see the error message "Username is required"

    Test Number: CT004
    Scenario: AttemptingToLogInWithoutEnteringAPassword
        Given I am on the Swag Labs login page
        And I click on the Username field and type "performance_glitch_user"
        And I leave the Password field empty
        Then I should see the error message "Password is required"