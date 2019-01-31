class BasicActions {
  waitForVisibleElement(element) {
    return browser.waitForVisible(element);
  }

  clickOnElement(button) {
    return $(button).click();
  }

  inputText(element, text) {
    return $(element).setValue(text);
  }
}

module.exports = BasicActions;
