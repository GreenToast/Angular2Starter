
import {
  describe,
  it,
  inject,
  beforeEach,
  beforeEachProviders,
  TestComponentBuilder
} from "angular2/testing";
                     
import {Router,LocationStrategy,Location} from "angular2/router";
import {SpyLocation} from "angular2/src/mock/location_mock";
import {MockLocationStrategy} from "angular2/src/mock/mock_location_strategy";
import {RootRouter} from "angular2/src/router/router";
import {RouteRegistry, ROUTER_PRIMARY_COMPONENT} from "angular2/src/router/route_registry";
import {provide} from "angular2/core";

//load implementations that should be tested
import {DashboardComponent} from "./dashboard.component.ts";


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