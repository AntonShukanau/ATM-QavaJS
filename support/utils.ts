import { Response } from "playwright";

export function isSuccessful(url: string, response: Response) {
    return response.url().includes(url) && response.status() === 200 || 201 || 202;
}