exports.config = {
  specs: ['./specs/*.js'],
  capabilities: [{
    maxInstances: 1,
    browserName: 'chrome',
  }],
  sync: true,
  logLevel: 'silent',
  coloredLogs: true,
  deprecationWarnings: true,
  bail: 0,
  screenshotPath: './errorShots/',
  baseUrl: 'http://localhost',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  services: ['selenium-standalone'],
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
  },
  beforeSession() {
    require('babel-register');
  },
};
