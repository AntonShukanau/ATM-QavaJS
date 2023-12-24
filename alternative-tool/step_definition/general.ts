import { Then, When } from "@cucumber/cucumber"
import { po } from '@qavajs/po';

declare global {
  // @ts-ignore
  var browser: WebdriverIO.Browser;
}

When('I login to RP', async function() {
  await this.executeStep('I open "$url" url')
  if(process.env.ENV === 'web') {
    await this.executeStep(`I set 'token' local storage value as '${process.env.LOCAL_TOKEN}'`);
    await this.executeStep(`I refresh page`);
  }
})

/**
 * Drag&Drop one element to another
 * @param {string} elementAlias - element to drag
 * @param {string} targetAlias - target
 * @example I drag and drop 'Bishop' to 'E4' element
 */
When('I drag and drop {string} to {string} element', async function (elementAlias, targetAlias) {
  const element = await po.getElement(elementAlias);
  const target = await po.getElement(targetAlias);
  // @ts-ignore
  await browser.execute(([element, target]) => element.dragAndDrop(target), [element, target])
});

/**
 * Element resize (hardcode, could be x,y could be passed as parameters into func, this is just example)
 * @param {string} elementAlias - element to drag
*/
When('I resize {string} element', async function (alias) {
  const element = await po.getElement(alias);
  await browser.execute((element: any) => {
    element.style.width = '500px';
    element.style.height = '500px';
}, element);

})

/**
 * Scroll to element
 * @param {string} alias - alias of element
 * @example I scroll to 'Element'
 */
When('I scroll to {string}', async function (alias) {
  const element = await po.getElement(alias);
  await browser.execute((element: any) => element.scrollIntoView(), element)
});

/**
 * Verification if element is scrolled into view (dirty)
 * @param {string} alias - alias of element
 * @example I expect 'Element' is in viewport
 */
Then('I expect {string} is in viewport', async function (alias) {
  const element = await po.getElement(alias);
  const isDisplayed = await element.isDisplayed();
  const location = await element.getLocation();
  const viewportHeight = await browser.execute('return window.innerHeight');
  const isElementInViewport = location.y >= 0 && location.y <= viewportHeight && isDisplayed;
  if (isElementInViewport) {
    return true
  }
})

/**
 * Click element
 * @param {string} alias - alias of element
 */
When('I click on {string}', async function(alias) {
  const element = await po.getElement(alias);
  await element.click()
})

/**
 * Hover to element
 * @param {string} alias - alias of element
 */
When('I hover to {string}', async function(alias) {
  const element = await po.getElement(alias);
  await element.moveTo();
})