/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/Users/dene/Documents/Projects/Angular2Starter";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {"use strict";
	var port = process.env.port || 8080;
	//import * as http from "http";
	//import * as qs from "querystring";
	var webpackconfig = __webpack_require__(8);
	var webpack = __webpack_require__(4);
	var webpackMiddleware = __webpack_require__(14);
	var history = __webpack_require__(12);
	var path = __webpack_require__(3);
	var express = __webpack_require__(13);
	var bodyParser = __webpack_require__(11);
	// Angular 2 Universal
	__webpack_require__(10);
	var angular2_universal_1 = __webpack_require__(9);
	// Application
	var app_component_1 = __webpack_require__(5);
	var app = express();
	//enableProdMode();
	// Express View
	app.engine('.html', angular2_universal_1.expressEngine);
	app.set('view engine', 'html');
	app.use(bodyParser.json());
	function ngApp(file, req, res) {
	    var baseUrl = '/';
	    var url = req.originalUrl || '/';
	    var config = {
	        directives: [app_component_1.AppComponent],
	        platformProviders: [
	            angular2_universal_1.provide(angular2_universal_1.ORIGIN_URL, { useValue: 'http://localhost:' + port }),
	            angular2_universal_1.provide(angular2_universal_1.BASE_URL, { useValue: baseUrl }),
	        ],
	        providers: [
	            angular2_universal_1.provide(angular2_universal_1.REQUEST_URL, { useValue: url }),
	            angular2_universal_1.NODE_ROUTER_PROVIDERS,
	            angular2_universal_1.NODE_HTTP_PROVIDERS,
	        ],
	        async: true,
	        preboot: { appRoot: 'app' } //your top level app component selector, false to disable
	    };
	    res.render(file, config);
	}
	var APPROOT = path.join(path.resolve(__dirname, './app'));
	//
	app.get('/*/*.html', function (request, response) {
	    response.sendFile(APPROOT + '/' + request.params[0] + '/' + request.params[1] + '.html');
	});
	//magic for serving right files for every route
	app.use(history({}));
	//main index-rendering
	app.get('/index.html', function (request, response) {
	    ngApp(APPROOT + '/index.html', request, response);
	});
	app.use(webpackMiddleware(webpack(webpackconfig)));
	var server = app.listen(port, function () {
	    var host = server.address().address;
	    console.log('ProducerPro listening at http://%s:%s', host, port);
	});

	/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("angular2/core");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("angular2/router");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("webpack");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(2);
	var navbar_component_1 = __webpack_require__(7);
	var dashboard_component_1 = __webpack_require__(6);
	var About = (function () {
	    function About() {
	    }
	    About = __decorate([
	        core_1.Component({
	            selector: 'about',
	            template: "\n  <div>This is the \"About\" page</div>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], About);
	    return About;
	}());
	exports.About = About;
	/*
	@Component({
	    //templateUrl:"dashboard/dashboard.component.html"
	    template:`
	    <div class="col-sm-4 gray text-center">
	        <h2>Angular2-Starter</h2>
	        <p>Lorem ipsum dolor sit. Donec erat nulla.</p>
	        <button class="btn btn-default">Test</button>
	    </div>
	    `
	    ,
	     directives:[ROUTER_DIRECTIVES]
	})
	export class DashboardComponent {
	}*/
	var AppComponent = (function () {
	    function AppComponent() {
	    }
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: 'app',
	            template: "\n\n    <nav-bar></nav-bar>\n    <router-outlet></router-outlet>\n\n  ",
	            directives: [navbar_component_1.NavbarComponent, router_1.ROUTER_DIRECTIVES]
	        }),
	        router_1.RouteConfig([
	            { path: '/', name: 'Dashboard', component: dashboard_component_1.DashboardComponent, useAsDefault: true },
	            { path: '/about', component: About, name: 'About' },
	        ]), 
	        __metadata('design:paramtypes', [])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(2);
	var DashboardComponent = (function () {
	    function DashboardComponent() {
	    }
	    DashboardComponent = __decorate([
	        core_1.Component({
	            //enable external dashboard-file to see how much slower the routeroutlet is visible
	            //templateUrl:"dashboard/dashboard.component.html"
	            template: "\n    <div class=\"col-sm-4 gray text-center\">\n        <h2>Angular2-Starter</h2>\n        <p>Lorem ipsum dolor sit. Donec erat nulla.</p>\n        <button class=\"btn btn-default\">Test</button>\n    </div>\n    ",
	            directives: [router_1.ROUTER_DIRECTIVES]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], DashboardComponent);
	    return DashboardComponent;
	}());
	exports.DashboardComponent = DashboardComponent;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var router_1 = __webpack_require__(2);
	var NavbarComponent = (function () {
	    function NavbarComponent() {
	    }
	    NavbarComponent = __decorate([
	        core_1.Component({
	            selector: "nav-bar",
	            templateUrl: "navigation/navbar.html",
	            template: "\n        <div class=\"navigation\">\n            <div class=\"container\">\n                <nav class=\"navbar navbar-inverse\" role=\"navigation\">\n                    <div class=\"navbar-header\">\n                        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar-collapse\">\n                            <span class=\"sr-only\">Toggle Navigation</span>\n                            <span class=\"icon-bar\"></span>\n                            <span class=\"icon-bar\"></span>\n                            <span class=\"icon-bar\"></span>\n                        </button>\n                        <a class=\"navbar-brand\" [routerLink]=\"['Dashboard']\">\n                        </a>\n                        <a [routerLink]=\"['Dashboard']\" class=\"navbar-text\">Angular2-Starter</a>\n                    </div>\n\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-collapse\">\n                        <ul class=\" pull-right nav navbar-nav\">\n                            <li><a [routerLink]=\"['Dashboard']\">Dashboard</a></li>\n                            <li><a [routerLink]=\"['About']\">About</a></li>\n                            <!--li><a [routerLink]=\"['CreateAlbum']\">Create Album</a></li-->\n                            <li><a href=\"#\" class=\"\">Log out</a></li>\n                        </ul>\n\n                        <ul class=\"nav navbar-nav navbar-right\">\n                            <li class=\"loader\" if.bind=\"router.isNavigating\">\n                                <i class=\"fa fa-spinner fa-spin fa-2x\"></i>\n                            </li>\n                        </ul>\n                    </div>\n\n                </nav>\n            </div>\n        </div>\n        ",
	            directives: [router_1.ROUTER_DIRECTIVES],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], NavbarComponent);
	    return NavbarComponent;
	}());
	exports.NavbarComponent = NavbarComponent;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {"use strict";
	var LiveReloadPlugin = __webpack_require__(15), webpack = __webpack_require__(4), path = __webpack_require__(3);
	var config;
	config = {
	    resolve: {
	        extensions: ['', '.scss', '.ts', '.js', '.woff2', '.tff', '.eot', '.svg']
	    },
	    plugins: [
	        new LiveReloadPlugin(),
	        new webpack.HotModuleReplacementPlugin()
	    ],
	    entry: './app/boot.ts',
	    output: {
	        path: __dirname + "/.build/app",
	        filename: "bundle.js"
	    },
	    devtool: 'source-map',
	    module: {
	        loaders: [
	            {
	                test: /\.ts$/,
	                loader: 'ts-loader'
	            },
	            {
	                test: /\.scss$/,
	                loader: 'style!css!sass-loader'
	            },
	            {
	                test: /\.css$/,
	                loader: 'style!css'
	            },
	            { test: /\.(woff|woff2)$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
	            { test: /\.ttf$/, loader: "file-loader" },
	            { test: /\.eot$/, loader: "file-loader" },
	            { test: /\.svg$/, loader: "file-loader" }
	        ]
	    }
	};
	module.exports = config;

	/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("angular2-universal");

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("angular2-universal/polyfills");

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = require("connect-history-api-fallback");

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = require("webpack-dev-middleware");

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = require("webpack-livereload-plugin");

/***/ }
/******/ ]);