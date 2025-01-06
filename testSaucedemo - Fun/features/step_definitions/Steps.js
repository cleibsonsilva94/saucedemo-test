const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { Builder, By, until } = require('selenium-webdriver');
const xpaths = require('../support/xpaths');
let driver;
const timeout = 5000;

Before(async function () {
  driver = await new Builder().forBrowser('chrome').build();
});

After(async function () {
  await driver.quit();
});

Given('I am on the Swag Labs login page', async function () {
  await driver.get(xpaths.URL);
});

When('I click on the Username field and type {string}', async function (username) {
  await driver.wait(until.elementLocated(By.xpath(xpaths.XPATH_FOR_USERNAME_FIELD)), timeout);
  await driver.findElement(By.xpath(xpaths.XPATH_FOR_USERNAME_FIELD)).sendKeys(username);
});

When('I click on the Password field and type {string}', async function (password) {
  await driver.wait(until.elementLocated(By.xpath(xpaths.XPATH_FOR_PASSWORD_FIELD)), timeout);
  await driver.findElement(By.xpath(xpaths.XPATH_FOR_PASSWORD_FIELD)).sendKeys(password);
});

When('I click on login', async function () {
  await driver.wait(until.elementLocated(By.xpath(xpaths.XPATH_LOGIN_BUTTON)), timeout);
  await driver.findElement(By.xpath(xpaths.XPATH_LOGIN_BUTTON)).click();
});

Then('I should be redirected to the homepage {string}', async function (expectedUrl) {
  try {
    await driver.wait(until.elementLocated(By.xpath(xpaths.XPATH_IVENTORY_HOME_PAGE)), timeout);
    const currentUrl = await driver.getCurrentUrl();
    console.log(`Current URL: ${currentUrl}`);
    if (currentUrl !== expectedUrl) {
      throw new Error(`Expected URL to be ${expectedUrl}, but got ${currentUrl}`);
    }
    console.log(`Successfully redirected to the homepage: ${currentUrl}`);
  } catch (error) {
    console.log(`Error: Element with XPath '${xpaths.XPATH_IVENTORY_HOME_PAGE}' not found`);
    throw error;
  }
});

Then('I should see the error message {string}', async function (expectedMessage) {
  const currentUrl = await driver.getCurrentUrl();
  const homepageUrl = 'https://www.saucedemo.com/inventory';

  if (currentUrl === homepageUrl) {
    throw new Error('The user was redirected to the homepage with invalid credentials.');
  }

  console.log('The user was not redirected to the homepage.');
  const errorElement = await driver.wait(
    until.elementLocated(By.xpath(xpaths.XPATH_ERROR_MESSAGE)),
    timeout
  );
  const actualMessage = await errorElement.getText();
  if (actualMessage !== expectedMessage) {
    throw new Error(`Expected error message to be "${expectedMessage}", but got "${actualMessage}"`);
  }
  console.log(`Error message displayed as expected: "${actualMessage}"`);
});

When('I add {string} to the cart', async function (productName) {
  const addToCartButton = await driver.wait(
    until.elementLocated(By.xpath(xpaths.XPATH_ADD_TO_CART)),
    timeout
  );
  await addToCartButton.click();
});

When('I navigate to the cart by clicking the cart icon in the top right corner', async function () {
  const cartIcon = await driver.wait(
    until.elementLocated(By.xpath(xpaths.XPATH_GO_TO_CART)),
    timeout
  );
  await cartIcon.click();
});

Then('I should see the product in the cart with the name {string}', async function (expectedProductName) {
  const itemNameElement = await driver.wait(
    until.elementLocated(By.xpath(xpaths.XPATH_ITEM_NAME)),
    timeout
  );
  const actualProductName = await itemNameElement.getText();
  if (actualProductName.trim() === expectedProductName.trim()) {
    console.log(`Produto "${actualProductName}" foi adicionado ao carrinho.`);
  } else {
    throw new Error(
      `Erro ao verificar o carrinho! Nome esperado: "${expectedProductName}", Nome encontrado: "${actualProductName}".`
    );
  }
});