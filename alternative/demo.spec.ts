import { test, expect } from '@playwright/test';
import { po } from '@qavajs/po-playwright';
import PoMap from '../page_object';
import memory from '@qavajs/memory';
import MemoryMap from '../memory';
import functions from '../memory/functions';

// All of these hooks could be splitted to a different custom methods. NOTE: it's an example
test.beforeEach(async ({ page }) => {
  // @ts-ignore
  memory.register(new MemoryMap());
  po.init(page, { timeout: 10000 });
  po.register(new PoMap());
  const urlValue = await memory.getValue('{$url}/ui/#superadmin_personal/launches/all');
  await page.goto(urlValue);
})

/*
  This suite is an example of using different runner (all tests are written in BDD, these tests would be as example)
*/
test.describe('that user is able to move to appropriate launch view clicking on Launch name/total/passed/failed/skipped/to investigate places', async () => {
  test.beforeEach(async ({ }) => {
    const loginInput = await po.getElement('Login Page > Login Input');
    const passwordInput = await po.getElement('Login Page > Password Input');
    const submitButton = await po.getElement('Login Page > Submit Button');
    const title = await po.getElement('Launches Page > #4 of Launches > Title');
    await loginInput.fill(process.env.LOGIN as string);
    await passwordInput.fill(process.env.PASS as string);
    await submitButton.click();
    await title.waitFor({ state: 'visible' });
  })

  test('should check if the user is able to move to appropriate launch view - Launch name', async ({ }) => {
    const title = await po.getElement('Launches Page > #4 of Launches > Title');
    const titleText = functions.titleSpaceReplacer(await title.innerText());
    const actualTitle = await po.getElement('Test Case Page > Current Launch');
    await title.click();
    await expect(actualTitle).toHaveText(titleText);
  })

  test('should check if the user is able to move to appropriate launch view - Total', async ({ }) => {
    const title = await po.getElement('Launches Page > #4 of Launches > Title');
    const titleText = functions.titleSpaceReplacer(await title.innerText());
    const total = await po.getElement('Launches Page > #4 of Launches > #1 of Status Counters');
    const actualTitle = await po.getElement('Test Case Page > Current Launch');
    await total.click();
    await expect(actualTitle).toHaveText(titleText);
  })

  test('should check if the user is able to move to appropriate launch view - Product bug', async ({ }) => {
    const title = await po.getElement('Launches Page > #4 of Launches > Title');
    const titleText = functions.titleSpaceReplacer(await title.innerText());
    const productBug = await po.getElement('Launches Page > #4 of Launches > #1 of Defect Status Counters');
    const actualTitle = await po.getElement('Test Case Page > Current Launch');
    await productBug.click();
    await expect(actualTitle).toHaveText(titleText);
  })
})