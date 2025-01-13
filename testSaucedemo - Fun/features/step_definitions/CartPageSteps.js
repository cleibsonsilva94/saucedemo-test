// ============================================ CART PAGE FUNCTIONS ===============================================\\

const { When, Then } = require('@cucumber/cucumber');
const { By, until } = require('selenium-webdriver');
const { getDriver } = require('../support/driver');
const xpathsCartPage = require('../support/xpathsCartPage'); 
const xpathsHomePage = require('../support/xpathsHomePage');

const timeout = 80000;

Then('I should see the product in the cart with the name {string} and price {string}', async function (expectedProductName, expectedPrice) {
  const driver = await getDriver();
  const itemNameElement = await driver.wait(
    until.elementLocated(By.xpath(xpathsHomePage.XPATH_ITEM_NAME)),
    timeout
  );
  const actualProductName = await itemNameElement.getText();
  const itemPriceElement = await driver.wait(
    until.elementLocated(By.xpath(xpathsHomePage.XPATH_ITEM_PRICE)),
    timeout
  );
  const actualPrice = await itemPriceElement.getText();

  if (actualProductName.trim() !== expectedProductName.trim()) {
    throw new Error(`Cart verification failed! Expected product name: "${expectedProductName}", Found: "${actualProductName}".`);
  }
  if (actualPrice.trim() !== expectedPrice.trim()) {
    throw new Error(`Cart verification failed! Expected price: "${expectedPrice}", Found: "${actualPrice}".`);
  }
  console.log(`Product "${actualProductName}" with price "${actualPrice}" found in the cart successfully.`);
});

When('I click on "Remove"', async function () {
  const driver = await getDriver();
  await driver.wait(
    until.elementLocated(By.xpath(xpathsCartPage.XPATH_REMOVE_BUTTON)),
    timeout
  );
  await driver.findElement(By.xpath(xpathsCartPage.XPATH_REMOVE_BUTTON)).click();
});

Then('the product {string} should be removed from the cart immediately', async function (productName) {
  const driver = await getDriver();
  const productInCart = await driver.findElements(By.xpath(`//div[contains(text(), '${productName}')]`));
  if (productInCart.length > 0) {
    throw new Error(`Product "${productName}" was not removed from the cart.`);
  }
  console.log(`Product "${productName}" has been successfully removed from the cart.`);
});