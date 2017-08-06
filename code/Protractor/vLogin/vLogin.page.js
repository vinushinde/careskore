/**
 * 
 */
 loginEPS = function(un,pw) {
	var self = this;

	dvr.ignoreSynchronization = true;
	browser.getProcessedConfig().then(function(config) {
		dvr.get(config.baseUrl);
	});
	dvr.findElement(by.css('[ng-model="user"]')).sendKeys(un);
	dvr.findElement(by.css('[ng-model="pass"]')).sendKeys(pw);
	dvr.findElement(by.css('[ng-submit="submit()"]')).click();
 browser.driver.ignoreSynchronization = false;
};

module.exports = {
loginEPS: loginEPS
}