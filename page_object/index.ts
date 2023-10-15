import { $, $$, Component } from "@qavajs/po-playwright";
export default class App {
  Body = $("body");
  GetStartedButton = $("a.button[href='/docs/intro']");
}
