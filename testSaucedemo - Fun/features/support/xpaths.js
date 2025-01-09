// XPATHS.JS

module.exports = {
  // ======================== LOGIN PAGE XPATHS ========================= \\

  XPATH_FOR_USERNAME_FIELD: "//input[@id='user-name']", // USERNAME FIELD
  XPATH_FOR_PASSWORD_FIELD: "//input[@id='password']",   // PASSWORD FIELD
  XPATH_LOGIN_BUTTON: "//*[@id='login-button']",         // LOGIN BUTTON
  XPATH_ERROR_MESSAGE: "//div[@class='error-message-container error']", // ERROR MESSAGE CONTAINER

  // ======================== HOME PAGE XPATHS ========================== \\

  XPATH_IVENTORY_HOME_PAGE: "(//div[@id='inventory_container'])[1]", 
  XPATH_ADD_TO_CART: "//button[contains(@id, 'add-to-cart')]",      
  XPATH_GO_TO_CART: "//div[contains(@id, 'cart')]",
  XPATH_ITEM_NAME: "//div[@class='inventory_item_name']",
  XPATH_ITEM_PRICE: "//div[contains(@class, 'inventory_item_price')]",

  // ========================= CART PAGE XPATHS ========================= \\

  XPATH_REMOVE_BUTTON: "//button[contains(@id, 'remove')]"          // REMOVE ITEM BUTTON
};