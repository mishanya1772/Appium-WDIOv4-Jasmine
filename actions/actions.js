const assert = require('assert');
const testData = require('../testData/testData');
const basePage = new (require('../pageobjects/basePage'))();
const loginPage = new (require('../pageobjects/loginPage'))();

class Actions {
  signInSystem(login, password) {
    browser.url(testData.initialURL);
    basePage.clickButton(basePage.menuButton);
    basePage.clickButton(basePage.loginButton);
    loginPage.signInSystem(login, password);
    return assert.equal(browser.getUrl(), testData.initialURL);
  }

  openReadmeFileDesktop(searchData, urlData) {
    browser.url(testData.initialURL);
    try {
      basePage.clickButton(basePage.menuButton);
    } catch (mobile) {
      basePage.clickButton(basePage.menuButtonMobile);
    }
    basePage.inputText(basePage.searchField, testData.protractor).keys('\uE007');
    basePage.clickButton(basePage.angularProtractorLink);
    basePage.clickButton(basePage.readmeFileLink);
    return assert.equal(browser.getUrl(), urlData);
  }
}

module.exports = Actions;
