/**
 * http://usejsdoc.org/
 */
dvr.ignoreSynchronization = true;
/**
function return Store address
**/
storeAdderss = function() {
	var address =  element(by.id("store-registration")).getText();
	return address;
};

/**
function return array of Store hours
**/
storehours = function() {

	element(by.id("dropdownMenu1")).click();
	var storeSchedule = element.all(by.repeater("aDay in vm.storeDaysSchedule")).map(function(storedata) {
		return {
			day : storedata.element(by.className("store-schedule-dow ng-scope")).getText(),
			schedule : storedata.element(by.className("store-schedule-hours")).getText()
		}
	});

	return storeSchedule;
};
/**
function verify thick client button
**/
epsThickClient = function() {

	return element.all(by.id("launch-eps-button")).getText();
};
/**
function verify downloading the thick client on click of the button
**/
downloadThickClient = function () {
    $http.post(url,requestData, {responseType:'arraybuffer',headers:header
        })
            .success(function (response) {
                var file = new Blob([response], {type: 'application/jnlp'});

                var isChrome = !!window.chrome && !!window.chrome.webstore;
                var isIE = /*@cc_on!@*/false || !!document.documentMode;
                var isEdge = !isIE && !!window.StyleMedia;


                if (isChrome){
                    var url = window.URL || window.webkitURL;

                    var downloadLink = angular.element('<a></a>');
                    downloadLink.attr('href',url.createObjectURL(file));
                    downloadLink.attr('target','_self');
                    downloadLink.attr('download', 'eps2client.jnlp');
                    downloadLink[0].click();
                }
                else if(isEdge || isIE){
                    window.navigator.msSaveOrOpenBlob(file,'eps2client.jnlp');

                }
                else {
                    var fileURL = URL.createObjectURL(file);
                    window.open(fileURL);
                }

            })
};
/**
function to verify logout url. It returns url
**/
storeLogout = function() {
	element(by.id('logout-button')).click();
	element(by.id("logout")).click();
	this.ignoreSynchronization = true;
	return browser.driver.wait(function(){
		return browser.driver.getCurrentUrl().then(function(url){
			return url;
		})
	},1000, 'Timed out waiting for curent url');
};

module.exports = {
	epsThickClient : epsThickClient,
	storeLogout : storeLogout,
	storehours : storehours,
	storeAdderss : storeAdderss
};
