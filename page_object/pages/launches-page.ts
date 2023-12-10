import { $, $$, Component } from "@qavajs/po-playwright";

export default class LaunchesPage extends Component {
  NoItemMessage = $('div[class*=noItemMessage__message]');
  PageHeader = $(new PageHeader('div[class*=gridHeader__grid-header]'))
  Launches = $$(new Launch('[class*=gridRow__grid-row-wrapper]'));
  ActionsDropdown = $(new ActionsDropdown('div[class*=ghostMenuButton__ghost-menu-button]'));
}

class PageHeader extends Component {
  SelectAll = $('div[class*=checkIcon]');
  StartTime = $('div[class*="sorting-active"]');
}

class ActionsDropdown extends Component {
  Options = $$('div[title]');
}

class Launch extends Component {
  Title = $('div[class*=itemInfo__item-info]:not([style]) div[class*=itemInfo__main-info]');
  Checkbox = $('div[class*=checkIcon]');
  StatusCounters = $$('div[class*=executionStatistics__execution] a');
  DefectStatusCounters = $$('div[class*=donutChart__total]');
}