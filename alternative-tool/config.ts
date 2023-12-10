require('dotenv').config();
import Memory from "../memory";
import App from "../page_object";

export default {
  paths: ["features/**/*.feature"],
  parallel: 4,
  require: ["step_definition/*.ts", "node_modules/@qavajs/steps-wdio/index.js", "node_modules/@qavajs/steps-memory/index.js"],
  requireModule: ["@qavajs/template"],
  format: ["@qavajs/console-formatter", "@qavajs/html-formatter:report/report.html"],
  // @ts-ignore
  memory: new Memory(),
  pageObject: new App(),
  browser: {
    // capabilities: {
    //   browserName: "chrome"
    // }
    protocol: 'https',
    hostname: 'hub.browserstack.com',
    path: '/wd/hub',
    logLevel: 'debug',
    user: "bsuser_nXbBjN",
    key: 'dDHzqqqBsoBv1jHJLsB6',
    port: 443,
    timeout: {
      present: 5000
    },
    capabilities: {
      browserName: 'chrome',
      "goog:chromeOptions": {
        args: ['--window-size=1366,768']
      }
    }
  },

  templates: ["../templates/*.feature"],
}
