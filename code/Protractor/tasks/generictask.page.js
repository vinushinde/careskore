 
 var btime, tom
generictask = function() {
	
	 browser.driver.ignoreSynchronization = false;
	 browser.driver.sleep(5000);
	 element(by.id("li-tasks")).click();
	 browser.driver.sleep(5000);
	 element(by.css('[ng-click="tasksCtrl.createTaskModel()"]')).click();
	 browser.driver.sleep(5000);
	 element(by.css('[ng-model="$ctrl.selectedTitle"]')).sendKeys("Primary");
	 browser.driver.sleep(5000);
	 element(by.css('[ng-model="$ctrl.task.owner"]')).sendKeys("Gaury");
	 browser.driver.sleep(5000);
	 element(by.xpath("//div[@class = 'input-group']/input[2]")).sendKeys("503717");
	 browser.driver.sleep(5000);
	 element(by.xpath("//div[@class = 'input-group']/input[2]")).sendKeys(protractor.Key.TAB);
	 browser.driver.sleep(5000);
	 element(by.css('[ng-model="$ctrl.task.dueDate"]')).sendKeys("8/20/2017");
	 browser.driver.sleep(5000);
	 element(by.css('[ng-model="$ctrl.task.dueDate"]')).sendKeys(protractor.Key.TAB);
	 browser.driver.sleep(5000);
	 element(by.css('[ng-model="$ctrl.task.action"]')).sendKeys("Test");
	 browser.driver.sleep(5000);
	 element(by.css('[ng-click="$ctrl.taskHandler(taskcomponent)"]')).click();
	 browser.driver.sleep(5000);

};

module.exports = {
		generictask: generictask
}

