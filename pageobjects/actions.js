const assert = require('assert');
const testData = require('../testData/testData');
const basePage = new (require('../pageobjects/basePage'))();
const loginPage = new (require('../pageobjects/loginPage'))();

class Actions {
  openReadmeFile(flag, searchData, urlData) {
    browser.url(testData.initialURL).scroll(50, 1);
    basePage.clickButton(basePage.menuButton);
    basePage.clickButton(basePage.loginButton);
    loginPage.signInSystem(testData.login, testData.password);

    if (flag === 'mobile') {
      basePage.inputText(basePage.searchField, testData.protractor).keys('\uE007');
      basePage.clickButton(basePage.angularProtractorLink);
      basePage.clickButton(basePage.viewAllReadmeMD);
    } else if (flag === 'desktop') {
      basePage.clickButton(basePage.desc_menuButton);
      basePage.inputText(basePage.desk_searchField, testData.protractor).keys('\uE007');
      basePage.clickButton(basePage.angularProtractorLink);
      basePage.clickButton(basePage.readmeFileLink);
    }

    return assert.equal(browser.getUrl(), urlData);
  }
}

module.exports = Actions;
