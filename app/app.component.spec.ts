import {
  describe,
  it,
  xit,
  inject,
  injectAsync,
  beforeEach,
  beforeEachProviders,
  MockApplicationRef
} from '@angular/core/testing';

import { ROUTER_FAKE_PROVIDERS } from '@angular/router/testing';
import { TestComponentBuilder, ComponentFixture } from '@angular/compiler/testing'
import {LocationStrategy,Location} from '@angular/common';
import {SpyLocation, MockLocationStrategy } from '@angular/common/testing';
import {RootRouter} from '@angular/router-deprecated/src/router';
import {RouteRegistry} from '@angular/router-deprecated/src/route_registry';
import { ROUTER_PRIMARY_COMPONENT, Router } from "@angular/router-deprecated";
import {provide, ApplicationRef} from '@angular/core';
import { Http, HTTP_PROVIDERS, Connection, ConnectionBackend, Response, ResponseOptions, BaseRequestOptions } from "@angular/http";
import { MockBackend,MockConnection } from "@angular/http/testing";
//load implementations that should be tested
import {AppComponent} from './app.component.ts';
describe('AppComponent', () => {

    let router : Router, location: Location;
    beforeEachProviders(() => [
        ROUTER_FAKE_PROVIDERS,
        RouteRegistry,
        provide(Location, {useClass: SpyLocation}),
        provide(LocationStrategy, {useClass: MockLocationStrategy}),
        provide(ROUTER_PRIMARY_COMPONENT, {useValue: AppComponent}),
        provide(Router, {useClass: RootRouter}),
        HTTP_PROVIDERS,
        BaseRequestOptions,
        provide(ConnectionBackend, {useClass: MockBackend}),
        Http,
        provide(ApplicationRef, { useClass: MockApplicationRef }),
        TestComponentBuilder
    ]);

    beforeEach(inject([Router, Location], (rtr, loc) => {
      router = rtr;
      location = loc;
    }));

    it('should be defined after injection', inject([TestComponentBuilder], (tbc) => {
        tbc.createAsync(AppComponent).then((fixture:ComponentFixture<AppComponent>) => expect(fixture.componentRef).toBeDefined())
    }));

    xit('should initialize Dashboard-route in Router', () =>{
        var instruction = router.generate(['Dashboard']);
        var path = instruction.toRootUrl();
        expect(path).toEqual('');
    });

});

//router-test-setup copied from https://www.codatlas.com/github.com/angular/angular/g3_v2_0/modules/@angular/test/router/router_spec.ts