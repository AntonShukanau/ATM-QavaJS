import Memory from "./memory";
import App from "./page_object";

export default {
  defaultTimeout: 60000,
  parallel: 4,
  paths: [
    "features/**/*.feature"
  ],
  require: [
    "step_definition/*.ts",
    "node_modules/@qavajs/steps-playwright/index.js",
    "node_modules/@qavajs/steps-memory/index.js"
  ],
  requireModule: [
    "@qavajs/template"
  ],
  format: [
    "@qavajs/console-formatter",
    "@qavajs/html-formatter:report/report.html"
  ],
  memory: new Memory(),
  pageObject: new App(),
  browser: {
    capabilities: {
      browserName: "chromium",
      headless: true,
      viewport: { height: 720, width: 1366 }
    }
  },
  templates: [
    "templates/*.feature"
  ],
}
