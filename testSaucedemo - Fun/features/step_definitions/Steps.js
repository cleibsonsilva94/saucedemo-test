const { Given, When, Then, After, Before } = require('@cucumber/cucumber');
const { Builder, By, until } = require('selenium-webdriver');
const xpaths = require('../support/xpaths');
let driver;
const timeout = 30000;

Before(async function () {
    driver = await new Builder().forBrowser('chrome').build(); 
});

After(async function () {
  await driver.quit(); 
});

Given('I am on the Swag Labs login page', async function () {
  await driver.get(xpaths.URL);
});

When('I click on the Username field and type {string}', async function (usernameFromFeature) {
  await driver.wait(until.elementLocated(By.xpath(xpaths.XPATH_FOR_USERNAME_FIELD)), 10000);
  await driver.findElement(By.xpath(xpaths.XPATH_FOR_USERNAME_FIELD)).sendKeys(usernameFromFeature);
});

When('I click on the Password field and type {string}', async function (passwordFromFeature) {
  await driver.wait(until.elementLocated(By.xpath('XPATH_FOR_PASSWORD_FIELD')), 10000);
  await driver.findElement(By.xpath('XPATH_FOR_PASSWORD_FIELD')).sendKeys(passwordFromFeature);
});

Then('I should be redirected to the homepage', async function () {
  const expectedUrlXPath = (xpaths.URLHOME);
  await driver.wait(until.elementLocated(By.xpath(expectedUrlXPath)), 10000);
  const currentUrl = await driver.getCurrentUrl();
  
  const expectedUrl = await driver.findElement(By.xpath(expectedUrlXPath)).getText();
  if (currentUrl !== expectedUrl) {
    throw new Error('Login failed, not redirected to homepage');
  }
});