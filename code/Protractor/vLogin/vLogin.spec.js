/**
 * 
 */
var loginPage       = require("../vLogin/vlogin.page.js");
var testData = require("../Data/vlogindata.json");

var origFn = browser.driver.controlFlow().execute;
browser.driver.controlFlow().execute = function() {
  var args = arguments;

  // queue time in ms wait
  origFn.call(browser.driver.controlFlow(), function() {
    return protractor.promise.delayed(50);
  });

  return origFn.apply(browser.driver.controlFlow(), args);
};

/**
function to verify login functionality
**/
describe("login", function() {
	'use strict';

	it('should Login to EPS',function(){
	   loginPage.loginEPS(testData.username,testData.password);
	   //	expect(dvr.getCurrentUrl()).toContain('/eps-web/index.html#!/patients');
    });


});
