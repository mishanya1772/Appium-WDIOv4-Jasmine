const BasePage = require('./basePage');

export default class LoginPage extends BasePage {
  constructor() {
    super();
    this.usernameField = '[name="login"]';
    this.passwordField = '[name="password"]';
    this.signinButton = '.btn-block';
  }

  signInSystem(login, password) {
    this.inputText(this.usernameField, login);
    this.inputText(this.passwordField, password);
    return this.clickButton(this.signinButton);
  }
}
