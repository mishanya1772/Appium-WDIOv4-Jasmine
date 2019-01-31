const { config } = require('../wdio.conf');

config.specs = ['./specs_mobile/*.js'];
config.capabilities = [
  {
    automationName: 'UiAutomator2',
    deviceName: 'Nexus_5_7.1.1',
    platformName: 'Android',
    platformVersion: '7.1.1',
    browserName: 'chrome',
    newCommandTimeout: 240,
  },
];

exports.config = config;
