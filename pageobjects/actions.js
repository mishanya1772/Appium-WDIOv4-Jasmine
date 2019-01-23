const testData = require('../testData/testData');
const basePage = new (require('../pageobjects/basePage'))();
const loginPage = new (require('../pageobjects/loginPage'))();

class Actions {
  openReadmeFile(searchData, link, urlData) {
    browser.url(testData.initialURL).scroll(50, 1);
    basePage.clickButton(basePage.menuButton);
    basePage.clickButton(basePage.loginButton);
    loginPage.signInSystem(testData.login, testData.password);
    basePage.inputText(basePage.searchField, testData.protractor).keys('\uE007');
    basePage.clickButton(link);
    basePage.clickButton(basePage.viewAllReadmeMD);
    return expect(browser.getUrl()).toEqual(urlData);
  }
}

module.exports = Actions;
