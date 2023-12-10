import { When } from "@cucumber/cucumber"

When('I login to RP', async function() {
  await this.executeStep('I open "$url" url')
  if(process.env.ENV === 'web') {
    await this.executeStep(`I set 'token' local storage value as '${process.env.LOCAL_TOKEN}'`);
    await this.executeStep(`I refresh page`);
  }
})