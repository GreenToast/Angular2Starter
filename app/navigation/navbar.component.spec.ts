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
import { NavbarComponent } from './navbar.component';

describe("NavbarComponent", () => {
    beforeEachProviders(() => [
        RouteRegistry,
        provide(Location, {useClass: SpyLocation}),
        provide(LocationStrategy, {useClass: MockLocationStrategy}),
        provide(ROUTER_PRIMARY_COMPONENT, {useValue: null}),
        provide(Router, {useClass: RootRouter})
    ]);
    
    it('should be defined after injection', inject([TestComponentBuilder], (tbc) => {
        tbc.createAsync(NavbarComponent).then((fixture:ComponentFixture<NavbarComponent>) => expect(fixture.componentRef).toBeDefined())
    }));
});