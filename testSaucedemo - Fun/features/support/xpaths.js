// XPATHS.JS

module.exports = {
  // ======================== LOGIN PAGE XPATHS ========================= \\

  XPATH_FOR_USERNAME_FIELD: "//input[@id='user-name']",
  XPATH_FOR_PASSWORD_FIELD: "//input[@id='password']", 
  XPATH_LOGIN_BUTTON: "//*[@id='login-button']", 
  XPATH_ERROR_MESSAGE: "//div[@class='error-message-container error']",

  // ======================== HOME PAGE XPATHS ========================== \\

  XPATH_IVENTORY_HOME_PAGE: "(//div[@id='inventory_container'])[1]", 
  XPATH_ADD_TO_CART: "//button[contains(@id, 'add-to-cart')]",      
  XPATH_GO_TO_CART: "//div[contains(@id, 'cart')]",
  XPATH_ITEM_NAME: "//div[@class='inventory_item_name']",
  XPATH_ITEM_PRICE: "//div[contains(@class, 'inventory_item_price')]",

  // ========================= CART PAGE XPATHS ========================= \\

  XPATH_REMOVE_BUTTON: "//button[contains(@id, 'remove')]"
};
