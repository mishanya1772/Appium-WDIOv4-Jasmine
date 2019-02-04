exports.config = {
  runner: 'local',
  framework: 'jasmine',
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
  },
  sync: true,
  logLevel: 'silent',
  deprecationWarnings: false,
  bail: 0,
  waitforTimeout: 1000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  reporters: ['dot', 'spec'],
  services: ['appium'],
  appium: {
    args: {
      commandTimeout: '11000',
    },
  },
  port: 4723,
  maxInstances: 1,
  beforeSession() {
    require('babel-register');
  },
  before() {
    browser.addCommand('isKeyboardShown', () => browser.requestHandler.create({
      path: `/session/${browser.session().sessionId}/appium/device/is_keyboard_shown`,
      method: 'GET',
    }).then(result => result.value));
  },
};
