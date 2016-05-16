import "reflect-metadata";
import 'zone.js/dist/zone';
import { bootstrap }    from "@angular/platform-browser-dynamic";
import { ROUTER_PROVIDERS } from "@angular/router-deprecated";
import { AppComponent } from "./app.component";
import { HTTP_PROVIDERS } from "@angular/http";
import { provideStore ,Store } from "@ngrx/store";
import { personsReducer } from "./reducer/personsReducer";
//import { provide } from "@angular/core";
//import { MyDataServiceMock } from "./dataservice/my-data-service-mock.ts";
//import { MyDataService } from "./dataservice/my-data-service.ts";
import "./css/app";


import { Devtools, instrumentStore, devtoolsConfig } from "@ngrx/devtools";

let globalProviders = [
                       ROUTER_PROVIDERS,
                       HTTP_PROVIDERS,
    provideStore(
        {
            persons: personsReducer
        },
        {
            persons:[]
        }
    )
];

//TODO: disable devtools on prod
globalProviders.push(instrumentStore());
globalProviders.push(devtoolsConfig({
            position: 'right',
            visible: false,
            size: 0.3
        }));

bootstrap(AppComponent, 
[   
    globalProviders
    ,ROUTER_PROVIDERS, HTTP_PROVIDERS, ]).catch((error: Error) => console.error(error));

