/**
 * http://usejsdoc.org/
 */
var headerPage = require("../Header/header.page.js");
var storeData = require("../Data/storeData.json");
/**
function to test header on each page
**/
describe("Header Check", function() {
	'use strict';
	/**
	function to verify store address
	**/
	it('should have store address',function(){
		expect(headerPage.storeAdderss()).toEqual(storeData.address);
	});
	/**
	function to verify store hours
	**/
	it('should have store hours',function(){
		headerPage.storehours().then(function(result){
			expect(storeData[result.day]).toEqual(result.schedule);
		});
	});
	/**
	function to verify thick client
	**/
	it('should have link to thick client',function(){
		expect(headerPage.epsThickClient()).toContain("Launch EPS");
	});
	/**
	function to verify logout url and functionality
	**/
	it('should logout of the web page',function(){
		expect(headerPage.storeLogout()).toContain('login.jsp');
	});

});
