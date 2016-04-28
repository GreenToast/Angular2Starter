import "reflect-metadata";
import 'zone.js/dist/zone';
import { bootstrap }    from "angular2/platform/browser";
import { ROUTER_PROVIDERS } from "angular2/router";
import { AppComponent } from "./app.component";
import { HTTP_PROVIDERS } from "angular2/http";
import "./css/app";




bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS]);