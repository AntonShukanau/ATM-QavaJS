import Memory from "./memory";
import App from "./page_object";
require('dotenv').config();
export default {
  defaultTimeout: 60000,
  parallel: 8,
  paths: ["features/**/*.feature"],
  require: ["step_definition/*.ts","node_modules/@qavajs/steps-playwright/index.js","node_modules/@qavajs/steps-memory/index.js"],
  requireModule: ["@qavajs/template"],
  format: ["@qavajs/console-formatter","@qavajs/html-formatter:report/report.html"],
  //@ts-ignore
  memory: new Memory(),
  pageObject: new App(),
  browser: {
    capabilities: {
      browserName: "chromium",
      channel: 'chrome',
      headless: true,
      viewport: { height: 720, width: 1366 }
    },
    timeout: {
      page: 20000
    }
  },
  templates: ["templates/*.feature"]
}
