import { $ } from "@qavajs/po-playwright";
import LoginPage from "./pages/login-page";
import LaunchesPage from "./pages/launches-page";
import DeleteModal from "./components/delete-modal";
import CompareModal from "./components/compare-modal";
import TestCasePage from "./pages/testcase-page";

export default class App {
  // Pages
  LoginPage = $(new LoginPage());
  LaunchesPage = $(new LaunchesPage());
  TestCasePage = $(new TestCasePage());

  //Modals
  DeleteModal = $(new DeleteModal('div[class*=modalLayout__modal-window]'));
  CompareModal = $(new CompareModal('div[class*=modalLayout__modal-window]'));
}
