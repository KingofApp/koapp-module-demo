describe('demo controller', function() {
  beforeAll(function() {
    browser.driver.manage().window().setSize(400, 666);
    browser.get('http://localhost:9001/#/menu-abcd/demo-abcd');
  });

  it('should load module', function() {
    expect(element(by.css('.demo'))).toBeDefined();
  });
  
});
