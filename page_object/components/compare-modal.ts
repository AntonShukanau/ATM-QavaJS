import { $, Component } from "@qavajs/po-playwright";

export default class CompareModal extends Component {
  Title = $('span[class*=title]');
}