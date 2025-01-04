#npx cucumber-js --tags @cart
#npx cucumber-js --tags @TestName
@cart
Feature: Cart

    @addProduct
    Test Number: CT005
    Scenario: addProductToTheCart
        Given I am logged into the Swag Labs website
        And I close the alert message "Change your password"
        And I add "Sauce Labs Backpack" to the cart
        And I navigate to the cart by clicking the cart icon in the top right corner
        Then I should see the product in the cart with the name "Sauce Labs Backpack"
        And the product should display the price "29.99"

    @removeProduct
    Test Number: CT006
    Scenario: removeProductFromTheCart
        Given I am logged into the Swag Labs website
        And I close the alert message "Change your password"
        And I add "Sauce Labs Backpack" to the cart
        And I navigate to the cart by clicking the cart icon in the top right corner
        And I click on "Remove"
        Then the product "Sauce Labs Backpack" should be removed from the cart immediately
