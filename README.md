# Angular2 - Starter
uses Angular 2 app using Webpack and Bootstrap 3

##Preparations##
Install node, https://nodejs.org/.


Then run:
```
$ npm install -g typings
```

##Configuration##
Enable/Disable options in server/server-config.js for dev and production
- (prodmode: false/true, is not working completely in client-side-code)
- renderServerSide: false/true,
- webWorker: false/true,

##Setup##

```
$ npm install
$ npm start // compiles and starts a local dev server
```
##Test##
```
// unit tests
$ npm run test

// e2e-tests
$ npm run e2e
```

##Release##

The following steps are done on each release build
```
$ npm install
$ npm test
$ gulp build:release
($ npm run install:release)
$ cd .release
$ cd npm run startprod

```
If any of the steps fail, the build will fail.
