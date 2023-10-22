import { Response } from "playwright";

export function isSuccessful(url: string, response: Response) {
    return response.url().includes(url) && response.status() === 200 || 201 || 202;
}

export function titleSpaceReplacer(str: string) {
  let parts = str.split("#");
  parts[0] = parts[0] + " ";
  str = parts.join("#");
}