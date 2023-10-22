import { $, Component } from "@qavajs/po-playwright";

export default class TestCasePage extends Component {
  CurrentLaunch = $('span[class*=breadcrumb__link-item] span');
  DefectFilter = $('div[class*=fieldFilterEntity] span[class*=inputDropdown__value]');
}