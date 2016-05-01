# Angular2 - Starter
uses Angular 2 app using Webpack and Bootstrap 3

##Preparations##
Install node, https://nodejs.org/.


Then run:
```
$ npm install -g typings
```

##Setup##

```
$ npm install
$ npm start // compiles and starts a local dev server
```
##Test##
```
// unit tests
$ npm run test

KNOWN ISSUES: karma-tests have a problem with external htmls.

// e2e-tests
$ npm run e2e
```

##Release##

The following steps are done on each release build
```
$ npm install
$ npm test
$ gulp build:release
$ npm run install:release
$ gulp build:package
```
If any of the steps fail, the build will fail.
