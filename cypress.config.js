const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.commbank.com.au',
    video: true,
    videoUploadOnPasses: false,
    videosFolder: 'cypress/videos',
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 20000,
    supportFile: 'cypress/support/e2e.js',
    chromeWebSecurity: false,
    retries: {
      runMode: 2,
      openMode: 0
    },
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'CommBank Navigation Tests Report',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
  },
}) 