import { DataTablesPage } from './app.po';

describe('data-tables App', function() {
  let page: DataTablesPage;

  beforeEach(() => {
    page = new DataTablesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
