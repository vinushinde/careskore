/**
 * http://usejsdoc.org/
 */
var HtmlScreenshotReporter = require("protractor-jasmine2-screenshot-reporter");
var today = new Date();
var timeStamp = today.getFullYear() + "-" + today.getMonth() + 1 + "-" + today.getDate() + " " + today.getHours() + "h:" + today.getMinutes() + "m";
var reporter = new HtmlScreenshotReporter({
	consolidateAll: true,
	dest: "../TestResult/screenshots",
	filename: "eps-conf.html",
	filePrefix: "index -" + timeStamp,
	showSummary: true,
	preserveDirectory: false,
	reportTitle: "EPS-conf",
	timeStamp: true,
	takeScreenShotsForSkippedSpecs: true,
	takeScreenShotsOnlyForFailedSpecs: true,
	pathBuilder: function(currentSpec, suites) {
		return currentSpec.fullName;
	}
});

capabilities: [{
		
	}, {
		"browserName": "chrome",
		"count": 1,
		 'chromeOptions': {
	            // Allowing unsecure HTTPS connections.
	            'args': ['disable-web-security', 'use-fake-ui-for-media-stream'],
	            // Allowing all browser notifications by default - http://goo.gl/RM1Q3n
	            prefs: {'profile.managed_default_content_settings.notifications': 1}
	        },
	        prefs: {
	            'VideoCaptureAllowedUrls': ['https://room.presencetest.com']
	        }
	}],

	
	exports.config = {
		framework: "jasmine2",
		seleniumAddress: "http://localhost:4444/wd/hub",
		
		specs: ['*spec.js', '**/*spec.js'],
		  exclude: ['node_modules/**/*spec.js','./CreateProgram/*spec.js'],
     
      beforeLaunch: function() {
     return new Promise(function(resolve){
       reporter.beforeLaunch(resolve);
     });
    },

  
    onPrepare: function() {
     
    		//define the driver as dvr
    	  global.dvr = browser.driver; //for chrome and fireFox
    	  global.EC = protractor.ExpectedConditions;
    	  allScriptsTimeout = 100000;
    	  

      // Add new jasmine2 screenshot reporter:
  	  // Assign the test reporter to each running instance
    	  

        jasmine.getEnv().addReporter(reporter);
             dvr.manage().window().maximize();
        
        
        var disableNgAnimate = function() {
            angular
                .module('disableNgAnimate', [])
                .run(['$animate', function($animate) {
                    $animate.enabled(false);
                }]);
        };

        var disableCssAnimate = function() {
            angular
                .module('disableCssAnimate', [])
                .run(function() {
                    var style = document.createElement('style');
                    style.type = 'text/css';
                    style.innerHTML = '* {' +
                        '-webkit-transition: none !important;' +
                        '-moz-transition: none !important' +
                        '-o-transition: none !important' +
                        '-ms-transition: none !important' +
                        'transition: none !important' +
                        '}';
                    document.getElementsByTagName('head')[0].appendChild(style);
                });
        };

        browser.addMockModule('disableNgAnimate', disableNgAnimate);
        browser.addMockModule('disableCssAnimate', disableCssAnimate);
     },
     suites: {
    		test: "test.js",
    		db: "TestDB/connect.js",
    		login: "Login/login.spec.js",
    		vlogin: "vLogin/vLogin.spec.js",
    		search: [
    			"Login/login.spec.js",
    			"PatientSearch/patientSearch.spec.js",
    			"TestDB/patientsearchdb.js"
    		],
    		
    		page : [
    			"Login/login.spec.js",
    			"PatientSearch/patientSearch.spec.js",
    			"PatientPage/patientPage.spec.js"
    		],
    		
     		header : ["Login/login.spec.js",
     			"Header/header.spec.js"
     			]
     		
    	},
    	
    	 jasmineNodeOpts: {
    	    	//*************lots of nodeOpts are no longer valid in jasmine2
    	    	// https://github.com/angular/protractor/blob/master/docs/jasmine-upgrade.md
    	    	
    	        // onComplete will be called just before the driver quits.
    	        onComplete: null,
    	        // If true, display spec names.
    	        isVerbose: true,
    	        // If true, print colors to the terminal.
    	        showColors: true,
    	        // If true, include stack traces in failures.
    	        includeStackTrace: true,
    	        // Default time to wait in ms before a test fails.
    	        defaultTimeoutInterval: 90000,
    	        
    	        
    	    },
    	    
    	    // Close the report after all tests finish
    	    afterLaunch: function(exitCode) {
    	        browser.driver.ignoreSynchronization = false;

    	        return new Promise(function (resolve) {
    	            reporter.afterLaunch(resolve.bind(this, exitCode));
    	        });

    	    }
	
	};

