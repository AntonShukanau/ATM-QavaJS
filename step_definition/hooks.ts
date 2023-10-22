import { Before } from "@cucumber/cucumber";
import { Page, Browser } from "playwright";

declare global {
  var page: Page
  var browser: Browser;
}

Before(async function () {
  // This is an example of hooks implementation, would be extended(changed) in future(if needed)
});
