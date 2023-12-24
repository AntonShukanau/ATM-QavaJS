import { When } from "@cucumber/cucumber";
import { Page, Browser } from "playwright";
import memory from '@qavajs/memory';
import endpoints from "../memory/endpoints";

declare global {
  var page: Page
  var browser: Browser;
}

When('I login to RP', async function() {
  await this.executeStep('I open "$url" url')
  if(process.env.ENV === 'web') {
    await this.executeStep(`I set 'token' local storage value as '${process.env.LOCAL_TOKEN}'`);
    await this.executeStep(`I refresh page`);
  }
})

When('I print {string} to console', async function (response: string) {
  console.log(await memory.getValue(response));
});

