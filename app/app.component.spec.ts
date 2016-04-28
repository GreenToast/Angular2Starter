import {
  describe,
  it,
  inject,
  injectAsync,
  beforeEach,
  beforeEachProviders,
  TestComponentBuilder
} from 'angular2/testing';
import {Router,LocationStrategy,Location} from 'angular2/router';
import {SpyLocation} from 'angular2/src/mock/location_mock';
import {MockLocationStrategy} from 'angular2/src/mock/mock_location_strategy';
import {RootRouter} from 'angular2/src/router/router';
import {RouteRegistry, ROUTER_PRIMARY_COMPONENT} from 'angular2/src/router/route_registry';
import {provide} from 'angular2/core';
import { Http, HTTP_PROVIDERS, Connection, ConnectionBackend, Response, ResponseOptions, BaseRequestOptions } from "angular2/http";
import { MockBackend,MockConnection } from "angular2/http/testing";
//load implementations that should be tested
import {AppComponent} from './app.component.ts';
describe('AppComponent', () => {

    let router : Router, location: Location;
    beforeEachProviders(() => [
        RouteRegistry,
        provide(Location, {useClass: SpyLocation}),
        provide(LocationStrategy, {useClass: MockLocationStrategy}),
        provide(ROUTER_PRIMARY_COMPONENT, {useValue: AppComponent}),
        provide(Router, {useClass: RootRouter}),
        HTTP_PROVIDERS,
        BaseRequestOptions,
        provide(ConnectionBackend, {useClass: MockBackend}),
        Http,
        TestComponentBuilder
    ]);

    beforeEach(inject([Router, Location], (rtr, loc) => {
      router = rtr;
      location = loc;
    }));

    it('should be defined after injection', inject([TestComponentBuilder], (tbc) => {
        tbc.createAsync(AppComponent).then((appComponent:AppComponent) => expect(appComponent).toBeDefined())
    }));

    it('should initialize Dashboard-route in Router', () =>{
        var instruction = router.generate(['Dashboard']);
        var path = instruction.toRootUrl();
        expect(path).toEqual('');
    });

});

//router-test-setup copied from https://www.codatlas.com/github.com/angular/angular/g3_v2_0/modules/angular2/test/router/router_spec.ts