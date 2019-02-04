const homePage = require('../pageObjects/homePage');
const loginPage = require('../pageObjects/loginPage');
const basicActions = new (require('../pageObjects/basicActions'))();
const data = require('../testData/testData');

describe('Interacting with a login form,', () => {
  it('Should be able login successfully', () => {
    basicActions.waitForVisibleElement(homePage.loginButtonBar);
    basicActions.clickOnElement(homePage.loginButtonBar);
    basicActions.waitForVisibleElement(loginPage.inputEmailField);
    basicActions.inputText(loginPage.inputEmailField, data.login);
    basicActions.inputText(loginPage.inputPasswordField, data.password);
    basicActions.clickOnElement(loginPage.loginButton);
  });
});
