import {
    describe,
    it,
    inject,
    beforeEach,
    beforeEachProviders,
    TestComponentBuilder    
} from "angular2/testing";

import {RouteRegistry, ROUTER_PRIMARY_COMPONENT} from 'angular2/src/router/route_registry';
import {Router,LocationStrategy,Location} from 'angular2/router';
import {SpyLocation} from 'angular2/src/mock/location_mock';
import {MockLocationStrategy} from 'angular2/src/mock/mock_location_strategy';
import {RootRouter} from 'angular2/src/router/router';
import { ROUTER_DIRECTIVES } from "angular2/router";
import { NavbarComponent } from "./navbar.component.ts";
import {provide} from 'angular2/core';
import {AppComponent} from '../app.component.ts';

describe("NavbarComponent", () => {
    beforeEachProviders(() => [
        RouteRegistry,
        provide(Location, {useClass: SpyLocation}),
        provide(LocationStrategy, {useClass: MockLocationStrategy}),
        provide(ROUTER_PRIMARY_COMPONENT, {useValue: AppComponent}),
        provide(Router, {useClass: RootRouter}),
        NavbarComponent
    ]);
    
    it("should be defined after injection", inject([NavbarComponent], (navbarComponent:NavbarComponent) => {
        expect(navbarComponent).toBeDefined();
    }));
});