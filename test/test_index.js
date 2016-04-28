var test =  require('angular2/testing');
var context = require('angular2/platform/testing/browser');
test.setBaseTestProviders(context.TEST_BROWSER_PLATFORM_PROVIDERS,
                     context.TEST_BROWSER_APPLICATION_PROVIDERS);
var testsContext = require.context(".", true, /.spec.ts$/);
var testsContext = require.context("../app", true, /.spec.ts$/);
testsContext.keys().forEach(testsContext);