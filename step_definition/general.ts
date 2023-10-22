import { When } from "@cucumber/cucumber";
import { Page, Browser } from "playwright";
import memory from '@qavajs/memory';
import endpoints from "../memory/endpoints";

declare global {
  var page: Page
  var browser: Browser;
}

When('I create demo data', async function () {
  // need to be re-written - very slow generation demo data, probably would be needed workaround
  // await Promise.all([
  //   page.waitForResponse(resp => resp.url().includes(endpoints.generate) && resp.status() === 200, { timeout: 120000 }),
  //   page.evaluate(([envUrl, endpoint]) => {
  //     return fetch(`${envUrl}${endpoint}`, {
  //       method: "POST",
  //       headers: {
  //         "Accept": "application/json, text/plain, */*",
  //         // @ts-ignore
  //         "Authorization": 'Bearer ' + JSON.parse(localStorage.getItem(Object.keys(localStorage).find(key => key.includes('token')))).value,
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify({ launchIds: [33, 34, 35, 36, 37] })
  //     })
  //   }, [process.env.ENV, endpoints.generate])]);
});

When('I print {string} to console', async function (response: string) {
  console.log(await memory.getValue(response));
});

