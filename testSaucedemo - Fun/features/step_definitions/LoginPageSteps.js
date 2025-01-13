// =================================== LOGIN PAGE FUNCTIONS ===================================== \\

const { Given, When, Then } = require('@cucumber/cucumber');
const { By, until } = require('selenium-webdriver');
const { getDriver } = require('../support/driver');
const xpathsLoginPage = require('../support/xpathsLoginPage');
const url = require('../support/url');
const timeout = 80000;

Given('I am on the Swag Labs login page', async function () {
  const driver = await getDriver();
  await driver.get(url.UrlLogin);
});

When('I click on the Username field and type {string}', async function (username) {
  const driver = await getDriver();
  await driver.wait(until.elementLocated(By.xpath(xpathsLoginPage.XPATH_FOR_USERNAME_FIELD)), timeout);
  await driver.findElement(By.xpath(xpathsLoginPage.XPATH_FOR_USERNAME_FIELD)).sendKeys(username);
});

When('I click on the Password field and type {string}', async function (password) {
  const driver = await getDriver();
  await driver.wait(until.elementLocated(By.xpath(xpathsLoginPage.XPATH_FOR_PASSWORD_FIELD)), timeout);
  await driver.findElement(By.xpath(xpathsLoginPage.XPATH_FOR_PASSWORD_FIELD)).sendKeys(password);
});

When('I click on login', async function () {
  const driver = await getDriver();
  await driver.wait(until.elementLocated(By.xpath(xpathsLoginPage.XPATH_LOGIN_BUTTON)), timeout);
  await driver.findElement(By.xpath(xpathsLoginPage.XPATH_LOGIN_BUTTON)).click();
});

Then('I should be redirected to the homepage {string}', async function (expectedUrl) {
  const driver = await getDriver();
  try {
    await driver.wait(until.elementLocated(By.xpath(xpathsLoginPage.XPATH_IVENTORY_HOME_PAGE)), timeout);
    const currentUrl = await driver.getCurrentUrl();
    if (currentUrl !== expectedUrl) {
      throw new Error(`Expected URL to be ${expectedUrl}, but got ${currentUrl}`);
    }
    console.log(`Successfully redirected to the homepage: ${currentUrl}`);
  } catch (error) {
    console.log(`Error: Element with XPath '${xpathsLoginPage.XPATH_IVENTORY_HOME_PAGE}' not found`);
    throw error;
  }
});

Then('I should see the error message {string}', async function (expectedMessage) {
  const driver = await getDriver();
  const currentUrl = await driver.getCurrentUrl();
  const homepageUrl = 'https://www.saucedemo.com/inventory';

  if (currentUrl === homepageUrl) {
    throw new Error('The user was redirected to the homepage with invalid credentials.');
  }

  console.log('The user was not redirected to the homepage.');
  const errorElement = await driver.wait(
    until.elementLocated(By.xpath(xpathsLoginPage.XPATH_ERROR_MESSAGE)),
    timeout
  );
  const actualMessage = await errorElement.getText();
  if (actualMessage !== expectedMessage) {
    throw new Error(`Expected error message to be "${expectedMessage}", but got "${actualMessage}"`);
  }
  console.log(`Error message displayed as expected: "${actualMessage}"`);
});
