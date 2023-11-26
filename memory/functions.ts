export default {
  titleSpaceReplacer: (string: string) => {
    return string.replace(/#(\d)/g, " #$1")
  },
  defaultHeader: () => {
    // @ts-ignore
    return { "Authorization": 'Bearer ' + JSON.parse(localStorage.getItem(Object.keys(localStorage).find(key => key.includes('token')))).value }
  },
  waitForCertainResponse: () => (
    request: any,
    condition: any,
    errorMessage: string,
    timeout = 50000,
  ) => {
    return new Promise(function (resolve, reject) {
      let payload;
      const interval = setInterval(async () => {
        try {
          payload = await request();
          if (condition(payload)) {
            clearInterval(interval);
            resolve(payload);
          }
        } catch (error) {
          clearInterval(interval);
          reject(error);
        }
      }, timeout / 10);
  
      setTimeout(() => {
        clearInterval(interval);
        reject(new Error(errorMessage));
      }, timeout);
    });
  }
}