 
 var btime = '';
 var tom = '';
 var newtom = '';
 var cmnfunc   = require("../common/functions/common_functions.js");

 
Selectccm = function() {
	
	 browser.driver.ignoreSynchronization = false;
	 browser.driver.sleep(5000);
	 element(by.id("ccm")).click();
	 browser.driver.sleep(5000);
	 browser.driver.sleep(5000);
	 element(by.cssContainingText('label', 'Enrolled')).click();
	 browser.driver.sleep(5000);
	 var secondCat = element(by.repeater('patient in patientsData.patients').row(0));
	 secondCat.click();
	 browser.driver.sleep(5000);
	 element(by.cssContainingText('span', 'Care Plans ')).click();
	 browser.driver.sleep(5000);
	 element(by.cssContainingText('label', 'Started:')).click();
	 browser.driver.sleep(5000);
	 dvr.findElement(By.xpath("//div[@class = 'dropdown-padding dropdown']/button")).click();
	 browser.driver.sleep(5000);
     var thirdcat = element(by.repeater('cpt in newEncCtrl.cptCodes').row(0));
	 thirdcat.click();
	 browser.driver.sleep(5000);
	 element.all(by.repeater('itask in ccmTrackerCtrl.renderTasks | ccmTasks')).then(function(ccmtaskbefore) {
			var titleElementold = ccmtaskbefore[0].element(by.css('[ng-if="!task.logTime"]'));   
			titleElementold.getText().then(function(btime){
				element(by.css('[ng-click="newEncCtrl.playNpause()"]')).click();
				browser.driver.sleep(10000);
				browser.driver.sleep(5000);
				dvr.findElement(By.xpath("//div[@class='pull-right']/button[3]")).click();
				browser.driver.sleep(5000);
				var thirdcat = element(by.repeater('enc in newEncCtrl.encounters | encounterType: newEncCtrl.getTimelineFilter()').row(0));
				thirdcat.click();
				browser.driver.sleep(5000);
				var tom = element(by.css('.time.ng-binding')).getText();
				tom.then(function(tom){
				browser.driver.sleep(5000);
				element.all(by.repeater('itask in ccmTrackerCtrl.renderTasks | ccmTasks')).then(function(ccmtaskexp) {
					var titleElementnew = ccmtaskexp[0].element(by.css('[ng-if="!task.logTime"]'));   
					var newt = titleElementnew.getText();
					newt.then(function(newt){
						var newtparsed = newt.substr(0,5);
						var oldtime = btime.substr(0,5);
						var tumtum = cmnfunc.addTimes(oldtime,tom);
						expect(newtparsed).toEqual(tumtum);
						});
					});
				});
			});
	 });	

};


module.exports = {
		Selectccm: Selectccm
}

