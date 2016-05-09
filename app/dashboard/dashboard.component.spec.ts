
import {
  describe,
  it,
  inject,
  injectAsync,
  beforeEach,
  beforeEachProviders
} from '@angular/core/testing';

import { TestComponentBuilder, ComponentFixture } from '@angular/compiler/testing'
import {Router} from '@angular/router-deprecated';
import { LocationStrategy,Location} from '@angular/common';
import {SpyLocation, MockLocationStrategy} from '@angular/common/testing';
import {RootRouter} from '@angular/router-deprecated/src/router';
import {RouteRegistry, ROUTER_PRIMARY_COMPONENT} from '@angular/router-deprecated';
import {provide} from '@angular/core';
import {AppComponent} from '../app.component';

//load implementations that should be tested
import {DashboardComponent} from "./dashboard.component";


describe("AppComponent", () => {
    
    let router : Router, location: Location;
    beforeEachProviders(() => [
        RouteRegistry,
        provide(Location, {useClass: SpyLocation}),
        provide(LocationStrategy, {useClass: MockLocationStrategy}),
        provide(ROUTER_PRIMARY_COMPONENT, {useValue: null}),
        provide(Router, {useClass: RootRouter}),
        DashboardComponent
    ]);
    
    beforeEach(inject([Router, Location], (rtr, loc) => {
      router = rtr;
      location = loc;
    }));

    it("should be defined after injection", inject([TestComponentBuilder], (tbc) => {     
        tbc.createAsync(DashboardComponent).then((dashboardComponent:DashboardComponent) => expect(dashboardComponent).toBeDefined())
    }));

});

//router-test-setup copied from https://www.codatlas.com/github.com/angular/angular/g3_v2_0/modules/angular2/test/router/router_spec.ts