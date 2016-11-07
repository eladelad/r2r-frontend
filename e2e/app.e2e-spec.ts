import { R2rFrontendPage } from './app.po';

describe('r2r-frontend App', function() {
  let page: R2rFrontendPage;

  beforeEach(() => {
    page = new R2rFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('r2r works!');
  });
});
