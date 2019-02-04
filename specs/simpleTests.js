const actions = new (require('../actions/actions'))();
const testData = require('../testData/testData');

describe('Check github functionality', () => {
  it('Base page is opened after signing in system', () => actions.signInSystem(testData.login, testData.password));
  it('README.md file should open after clicking on this', () => actions.openReadmeFileDesktop(testData.protractor, testData.readmeURL));
});
