import { browser, element, by } from 'protractor';

export class R2rFrontendPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('r2r-root h1')).getText();
  }
}
