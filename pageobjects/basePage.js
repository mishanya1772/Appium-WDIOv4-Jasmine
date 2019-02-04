class Page {
  constructor() {
    this.menuButton = '.js-details-target';
    this.menuButtonMobile = '.octicon-three-bars.notification-indicator';
    this.loginButton = '[href="/login"]';
    this.searchField = '.js-site-search-focus';
    this.angularProtractorLink = '[href="/angular/protractor"]';
    this.readmeFileLink = '[href="/angular/protractor/blob/master/README.md"]';
    this.usernameField = '[id="user[login]"]';
  }

  inputText(field, text) {
    return browser.clearElement(field)
      .addValue(field, text);
  }

  clickButton(button) {
    browser.waitForVisible(button);
    return browser.click(button);
  }
}

module.exports = Page;
