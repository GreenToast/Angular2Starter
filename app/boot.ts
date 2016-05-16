import "reflect-metadata";
import 'zone.js/dist/zone';
import { bootstrap }    from "@angular/platform-browser-dynamic";
import { ROUTER_PROVIDERS } from "@angular/router-deprecated";
import { AppComponent } from "./app.component";
import { HTTP_PROVIDERS } from "@angular/http";
//import { provide } from "@angular/core";
//import { MyDataServiceMock } from "./dataservice/my-data-service-mock.ts";
//import { MyDataService } from "./dataservice/my-data-service.ts";
import "./css/app";

bootstrap(AppComponent, 
[   
    //MyDataService
    ,ROUTER_PROVIDERS, HTTP_PROVIDERS, ]).catch((error: Error) => console.error(error));


