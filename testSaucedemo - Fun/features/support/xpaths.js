// xpaths.js
module.exports = {
  URL: "https://www.saucedemo.com/",
  XPATH_FOR_USERNAME_FIELD: "//input[@id='user-name']",
  XPATH_FOR_PASSWORD_FIELD: "//input[@id='password']",
  XPATH_LOGIN_BUTTON: "//*[@id='login-button']",
  XPATH_IVENTORY_HOME_PAGE: "(//div[@id='inventory_container'])[1]",
  URLHOME: "https://www.saucedemo.com/inventory.html",
  XPATH_ERROR_MESSAGE: "//div[@class='error-message-container error']",
  XPATH_GO_TO_CART: "//div[contains(@id, 'cart')]",
  XPATH_ADD_TO_CART: "//button[contains(@id, 'add-to-cart')]",
  XPATH_ITEM_NAME: "//div[@class='inventory_item_name']",
  XPATH_ITEM_PRICE: "//div[contains(@class, 'inventory_item_price')]",
  XPATH_REMOVE_BUTTON: "//button[contains(@id, 'remove')]"
};