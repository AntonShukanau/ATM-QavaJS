require('dotenv').config();
import Memory from "./memory";
import App from "./page_object";

export default {
  defaultTimeout: 120000,
  parallel: 4,
  paths: ["features/**/*.feature"],
  require: ["step_definition/*.ts", "node_modules/@qavajs/steps-playwright/index.js", "node_modules/@qavajs/steps-memory/index.js", 'node_modules/@qavajs/steps-api/index.js'],
  requireModule: ["@qavajs/template"],
  format: ["@qavajs/console-formatter", "@qavajs/html-formatter:report/report.html"],
  formatOptions: {
    rpConfig: {
      enable: true,
      debug: false,
      apiKey: process.env.TOKEN,
      endpoint: 'http://reportportal.epam.com/api/v2',
      description: 'Description',
      tags: ['Tag'],
      project: 'anton_shukanau_personal',
      launch: 'Automation Testing Mentoring',
      mode: 'DEFAULT',
      retry: 1,
      ignoreErrors: false, 
      showLaunchURL: true, 
      tagsAsAttributes: true
    },
  },
  // @ts-ignore
  memory: new Memory(),
  pageObject: new App(),
  browser: {
    capabilities: {
      browserName: "chromium",
      //channel: 'chrome',
      headless: true,
      viewport: { height: 720, width: 1366 }
    },
    timeout: {
      page: 20000
    }
  },
  templates: ["templates/*.feature"]
}
