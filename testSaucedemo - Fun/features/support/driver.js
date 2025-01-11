// driver.js
const { Builder } = require('selenium-webdriver');
let driver;
const timeout = 80000;

async function getDriver() {
  if (!driver) {
    driver = await new Builder().forBrowser('chrome').build();
  }
  return driver;
}

async function closeDriver() {
  if (driver) {
    await driver.quit();
    driver = null;
  }
}

module.exports = { getDriver, closeDriver};