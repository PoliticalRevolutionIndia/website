import { PoliticalPartyPage } from './app.po';

describe('political-party App', () => {
  let page: PoliticalPartyPage;

  beforeEach(() => {
    page = new PoliticalPartyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
