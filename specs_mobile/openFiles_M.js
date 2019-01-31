const actions = new (require('../pageobjects/actions'))();
const testData = require('../testData/testData');

describe('Check github files', () => {
  it('README.md file should open after clicking on this', () => actions.openReadmeFile('mobile', testData.protractor, testData.readmeURL));
});
