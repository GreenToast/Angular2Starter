import 'angular2-universal/polyfills';

import {bootstrap, enableProdMode, BROWSER_ROUTER_PROVIDERS, BROWSER_HTTP_PROVIDERS} from 'angular2-universal';

import {AppComponent} from './app.component';

enableProdMode();

bootstrap(AppComponent, [
  ...BROWSER_ROUTER_PROVIDERS,
  ...BROWSER_HTTP_PROVIDERS
]);

/*import "reflect-metadata";
import 'zone.js/dist/zone';
import { bootstrap }    from "angular2/platform/browser";
import { ROUTER_PROVIDERS } from "angular2/router";
import { AppComponent } from "./app.component";
import { HTTP_PROVIDERS } from "angular2/http";
import "./css/app";

bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS]);*/