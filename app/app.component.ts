
import { Component } from "angular2/core";
import { RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import { NavbarComponent } from "./navigation/navbar.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

@Component({
  selector: 'about',
  template: `
  <div>This is the "About" page</div>
  `
})
export class About { }
/*
@Component({
	//templateUrl:"dashboard/dashboard.component.html"
    template:`
    <div class="col-sm-4 gray text-center">
        <h2>Angular2-Starter</h2>
        <p>Lorem ipsum dolor sit. Donec erat nulla.</p>
        <button class="btn btn-default">Test</button>
    </div>
    `
    ,
     directives:[ROUTER_DIRECTIVES]
})
export class DashboardComponent {
}*/

@Component({
	selector: 'app',
	template: `

    <nav-bar></nav-bar>
    <router-outlet></router-outlet>

  `,
	directives: [NavbarComponent,ROUTER_DIRECTIVES]
})
@RouteConfig([
	{ path: '/', name: 'Dashboard', component: DashboardComponent, useAsDefault: true },
	{ path: '/about', component: About, name: 'About' },
])
export class AppComponent {

}