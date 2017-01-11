(function() {
	'use strict';

  var helper = require('../../../../../e2e-tests/e2etest.service');

  describe('demo controller', function() {
    beforeAll(function() {
      browser.driver.manage().window().setSize(400, 666);
      browser.get('http://localhost:9001/#/menu-abcd/demo-abcd');
    });

    it('should load module', function(done) {
      expect(element(by.css('.demo'))).toBeDefined();

      done();
    });

    it('should show koa-badge', function(done) {
      helper.isPresent('#koabadge', true);

      done();
    });

    it('should generate koa-badge', function(done) {
      helper.isPresent('android-badge', true);

      done();
    });

    it('should show koa-button', function(done) {
      helper.isPresent('#koabutton', true);

      done();
    });

    it('should generate koa-button', function(done) {
      helper.isPresent('android-button', true);

      done();
    });

    it('should show koa-card', function(done) {
      helper.isPresent('#koacard', true);

      done();
    });

    it('should generate koa-card', function(done) {
      helper.isPresent('android-card', true);

      done();
    });

    it('should show koa-checkbox', function(done) {
      helper.isPresent('#koacheckbox', true);

      done();
    });

    it('should generate koa-checkbox', function(done) {
      helper.isPresent('android-checkbox', true);

      done();
    });

    it('it should click a checkbox and  it must be checked', function(done) {
      helper.clickElement('#checkboxContainer');
      expect(element.all(by.css('#checkboxtest')).first().getAttribute('checked')).toBeTruthy();

      done();
    });

  });

}());
