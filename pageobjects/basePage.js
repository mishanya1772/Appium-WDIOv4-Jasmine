export default class Page {
  constructor() {
    this.menuButton = '.octicon.octicon-three-bars.text-white';
    this.loginButton = '[href="/login"]';
    this.searchField = '.form-control.input-contrast.width-full';
    this.angularProtractorLink = '[href="/angular/protractor"]';
    this.viewAllReadmeMD = ':nth-child(8) > div.bubble-actions';
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
