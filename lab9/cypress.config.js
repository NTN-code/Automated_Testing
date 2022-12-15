const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.apple.com",
    experimentalModifyObstructiveThirdPartyCode: true,
    modifyObstructiveCode: false,
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})