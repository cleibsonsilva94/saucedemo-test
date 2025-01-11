// steps.js
const { Before, After } = require('@cucumber/cucumber');
const { getDriver, closeDriver } = require('../support/driver');

Before(async function () {
  await getDriver();
});

After(async function () {
  await closeDriver();
});