const { defineConfig } = require("cypress");
module.exports = (on, config) => {
  on('before:browser:launch', (browser = {}, launchOptions) => {
    if (browser.name === 'electron') {
      launchOptions.args.push('--disable-gpu', '--no-sandbox');
    }
    return launchOptions;
  });
};

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'End to End Testing',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      
    },
    specPattern:"cypress/integration/**/*.{js,jsx,ts,tsx}"
  },
  env:{
    URL:"https://thinking-tester-contact-list.herokuapp.com/"
  }
});
