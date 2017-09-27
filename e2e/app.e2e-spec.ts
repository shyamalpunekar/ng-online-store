import { OnlineStorePracticePage } from './app.po';

describe('online-store-practice App', () => {
  let page: OnlineStorePracticePage;

  beforeEach(() => {
    page = new OnlineStorePracticePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
