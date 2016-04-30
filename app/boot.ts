import 'angular2-universal/polyfills';
import 'es6-shim';
import 'es6-promise';
import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';
import {AppComponent} from './app.component';

import {bootstrap, enableProdMode, BROWSER_ROUTER_PROVIDERS, BROWSER_HTTP_PROVIDERS} from 'angular2-universal';


enableProdMode();

bootstrap(AppComponent, [
  ...BROWSER_ROUTER_PROVIDERS,
  ...BROWSER_HTTP_PROVIDERS
]);
/*
import 'es6-shim';
import 'es6-promise';
import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';

import { platform, ComponentRef, Injector } from 'angular2/core';
import { BROWSER_PROVIDERS, BROWSER_APP_PROVIDERS, } from 'angular2/platform/browser';
import { ROUTER_PROVIDERS, Router } from 'angular2/router';

platform(BROWSER_PROVIDERS).application(BROWSER_APP_PROVIDERS).bootstrap(AppComponent, [
  ROUTER_PROVIDERS
])
.then((compRef: ComponentRef) => {
  const injector: Injector = compRef.injector;
  const router:   Router   = injector.get(Router);

  return (<any> router)._currentNavigation;
})
.then(() => {
  document.dispatchEvent(new Event('BootstrapComplete'));
});*/

/*import "reflect-metadata";
import 'zone.js/dist/zone';
import { bootstrap }    from "angular2/platform/browser";
import { ROUTER_PROVIDERS } from "angular2/router";
import { AppComponent } from "./app.component";
import { HTTP_PROVIDERS } from "angular2/http";
import "./css/app";

bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS]);*/