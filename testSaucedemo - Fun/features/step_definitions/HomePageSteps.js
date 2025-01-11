// ========================== HOME PAGE FUNCTIONS ============================ \\
const { When } = require('@cucumber/cucumber');
const { By, until } = require('selenium-webdriver');
const { getDriver } = require('../support/driver');
const xpathsHomePage = require('../support/xpathsHomePage');
const timeout = 80000;

When('I add {string} to the cart', async function (productName) {
  const driver = await getDriver();
  const addToCartButton = await driver.wait(
    until.elementLocated(By.xpath(xpathsHomePage.XPATH_ADD_TO_CART)),
    timeout
  );
  await addToCartButton.click();
});

When('I navigate to the cart by clicking the cart icon in the top right corner', async function () {
  const driver = await getDriver();
  const cartIcon = await driver.wait(
    until.elementLocated(By.xpath(xpathsHomePage.XPATH_GO_TO_CART)),
    timeout
  );
  await cartIcon.click();
});