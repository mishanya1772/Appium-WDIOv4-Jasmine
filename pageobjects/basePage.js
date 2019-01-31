class Page {
  constructor() {
    this.menuButton = '.octicon.octicon-three-bars.text-white';
    this.desc_menuButton = '.octicon.octicon-three-bars.notification-indicator';
    this.loginButton = '[href="/login"]';
    this.searchField = '.form-control.input-contrast.width-full';
    this.desk_searchField = '[placeholder="Search or jump to…"]';
    this.angularProtractorLink = '[href="/angular/protractor"]';
    this.viewAllReadmeMD = ':nth-child(8) > div.bubble-actions';
    this.readmeFileLink = '[title="README.md"]';
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
