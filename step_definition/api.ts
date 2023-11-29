import { When } from "@cucumber/cucumber";
import { BrowserContext, Page } from "@playwright/test";
import memory from "@qavajs/memory";

declare global {
  var context: BrowserContext
  var page: Page
}

When('I send {string} request to {string} via Playwright with headers {string} and save response as {string}', async function (requestMethod: string, requestUrl: string, requestHeaders: string, responseKey: string) {
  const url = await memory.getValue(requestUrl);
  const headers = await memory.getValue(requestHeaders);
  const response = await context.request.fetch(url, { headers, method: requestMethod });
  memory.setValue(responseKey, response);
});

When('I force finish launch with id {string} and save response as {string}', async function (launchIDKey: string, responseKey: string) {
  const launchID = await memory.getValue(launchIDKey);
  const url = await memory.getValue(`{$url}{$endpoints.launches}${launchID}/finish`);
  const headers = await memory.getValue('$functions.postHeader()');
  const response = await context.request.fetch(url, { headers, data: JSON.stringify({ endTime: new Date().toISOString(), status: "STOPPED" }),  method: "PUT" })
  memory.setValue(responseKey, response);
})

When('I delete launch with id {string} and save response as {string}', async function (launchIDKey: string, responseKey: string) {
  const launchID = await memory.getValue(launchIDKey);
  const linkID = await launchID.split('/').pop()
  const url = await memory.getValue(`{$url}{$endpoints.launches}${linkID}`);
  const headers = await memory.getValue('$functions.postHeader()');
  const response = await context.request.fetch(url, { headers, method: "DELETE" })
  memory.setValue(responseKey, response);
})