import { defineConfig } from 'cypress';
import { tagify } from 'cypress-tags';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      //config.env.CYPRESS_USE_INCLUDE_EXCLUDE_EXPRESSIONS = true;
      //config.env.CYPRESS_INCLUDE_EXPRESSION = "group AND validate";
      on('file:preprocessor', tagify(config));
      return config;
    },
    "defaultBrowser": "chrome",
  },
});