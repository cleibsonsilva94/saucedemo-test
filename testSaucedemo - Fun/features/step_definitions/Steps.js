const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { Builder, By, until } = require('selenium-webdriver');
const xpaths = require('../support/xpaths');
let driver;
const timeout = 15000; // Definindo o timeout

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
  await driver.wait(async () => {
    const currentUrl = await driver.getCurrentUrl();
    return currentUrl === expectedUrl;
  }, timeout);
});