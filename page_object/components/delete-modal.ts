import { $, Component } from "@qavajs/po-playwright";

export default class DeleteModal extends Component {
  DeleteButton = $('button[class*=tomato]');
}