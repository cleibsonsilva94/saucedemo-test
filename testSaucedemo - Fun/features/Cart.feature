# npx cucumber-js --tags @cart
# npx cucumber-js --tags @TestName

@cart
Feature: Cart

    @addProduct
    # Test Number: CT005
    Scenario: addProductToTheCart
        Given I am on the Swag Labs login page
        And I click on the Username field and type "standard_user"
        And I click on the Password field and type "secret_sauce"
        And I click on login
        And I add "Sauce Labs Backpack" to the cart
        When I navigate to the cart by clicking the cart icon in the top right corner
        Then I should see the product in the cart with the name "Sauce Labs Backpack" and price "$29.99"

    @removeProduct
    # Test Number: CT006
    Scenario: removeProductFromTheCart
        Given I am on the Swag Labs login page
        And I click on the Username field and type "standard_user"
        And I click on the Password field and type "secret_sauce"
        And I click on login
        And I add "Sauce Labs Backpack" to the cart
        And I navigate to the cart by clicking the cart icon in the top right corner
        When I click on "Remove"
        Then the product "Sauce Labs Backpack" should be removed from the cart immediately