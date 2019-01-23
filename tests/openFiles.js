const actions = new (require('../pageobjects/actions'))();
const testData = require('../testData/testData');
const basePage = new (require('../pageobjects/basePage'))();

describe('Check github files', () => {
  it('README.md file should open after clicking on this', () => actions.openReadmeFile(testData.protractor, basePage.angularProtractorLink, testData.readmeURL));
});
