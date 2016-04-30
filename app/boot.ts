import 'angular2-universal/polyfills';
import 'es6-shim';
import 'es6-promise';
import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';
import { AppComponent } from './app.component';

import {bootstrap, enableProdMode, BROWSER_ROUTER_PROVIDERS, BROWSER_HTTP_PROVIDERS} from 'angular2-universal';

if(ENABLEPRODMODE){
  enableProdMode();
}

bootstrap(AppComponent, [
  ...BROWSER_ROUTER_PROVIDERS,
  ...BROWSER_HTTP_PROVIDERS
]);