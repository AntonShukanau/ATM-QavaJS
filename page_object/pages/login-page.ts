import { $, Component } from "@qavajs/po-playwright";

export default class LoginPage extends Component {
  LoginInput = $('[name="login"]');
  PasswordInput = $('[name="password"]');
  SubmitButton = $('[type="submit"]');
}