import { BrowserContext } from 'playwright';

declare global {
  var context: BrowserContext;
}

export default class PlaywrightClient {

  static async get(url: string, params?: any): Promise<any> {
    try {
      const response = await global.context.request.get(url, {
        headers: {
          Accept: '*/*',
          ContentType: 'application/json;charset=UTF-8',
        },
        params: params,
      });
      console.log(`Response: ${JSON.stringify(response)}`);
      return await response.json();
    } catch (error) {
      return error;
    }
  }

  static async post(url: string, data: any) {
    try {
      const response = await global.context.request.post(url, {
        headers: {
          Accept: '*/*',
          ContentType: 'application/json;charset=UTF-8',
        },
        data: data,
      });
      console.log(`Response: ${JSON.stringify(response)}`);
      return response;
    } catch (error) {
      return error;
    }
  }

  static async put(url: string, data: any) {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await global.context.request.put(url, {
        headers: {
          Accept: '*/*',
          ContentType: 'multipart/form-data',
        },
        data: data,
      });
      console.log(`Response: ${JSON.stringify(response)}`);
      return response;
    } catch (error) {
      throw error;
    }
  }

  static async delete(url: string, data?: any) {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await global.context.request.delete(url, {
        headers: {
          Accept: '*/*',
        },
        params: data,
      });
      console.log(`Response: ${JSON.stringify(response)}`);
      return response;
    } catch (error) {
      throw error;
    }
  }
}