const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'mkenke',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalStudio: true
  },
});
