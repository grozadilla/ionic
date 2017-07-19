import { PrimeraAPPPage } from './app.po';

describe('primera-app App', () => {
  let page: PrimeraAPPPage;

  beforeEach(() => {
    page = new PrimeraAPPPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
