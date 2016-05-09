import "reflect-metadata";
import 'zone.js/dist/zone';
import { bootstrap }    from "@angular/platform-browser-dynamic";
import { ROUTER_PROVIDERS } from "@angular/router-deprecated";
import { AppComponent } from "./app.component";
import { HTTP_PROVIDERS } from "@angular/http";
import "./css/app";

bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS]).catch((error: Error) => console.error(error));


