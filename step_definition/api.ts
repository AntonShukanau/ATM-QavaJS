import PlaywrightClient from "../support/api/playwright-client";
import { When } from "@cucumber/cucumber";
import memory from "@qavajs/memory";

When('I send {string} request to {string} via Playwright with headers {string} and save response as {string}', async function (requestMethod: string, requestUrl: string, requestHeaders: string, responseKey: string) {
  const url = await memory.getValue(requestUrl);
  const waitForCertainResponse = await memory.getValue('$functions.waitForCertainResponse')
  const options = await memory.getValue(requestHeaders);
  let response;
  switch (requestMethod.toLowerCase()) {
    case 'post':
      response = await PlaywrightClient.post(url, options);
      break;
    case 'put':
      response = await waitForCertainResponse(
        async () => {
          return await PlaywrightClient.put(url, options);
        },
        (resp: any) => {
          return resp._initializer.status == 201 || resp._initializer.status == 200;
        },
        `Entity ${url} was not updated`,
      );
      break;
    case 'get':
      response = await PlaywrightClient.get(url, options);
      break;
    case 'delete': 
      response = await PlaywrightClient.delete(url, options);
      break;
  }
  memory.setValue(responseKey, response);
});