
import { Component, ViewContainerRef } from "@angular/core";
import { RouteConfig, RouterOutlet, Route} from "@angular/router-deprecated";
import { NavbarComponent } from "./navigation/navbar.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

@Component({
	template: `

    <h1>About</h1>

  `,
	directives:[NavbarComponent,
	RouterOutlet
	]
})
export class AboutComponent {

}

@Component({
	selector: 'app',
	template: `

    <nav-bar></nav-bar>
    <router-outlet></router-outlet>

  `,
	directives:[NavbarComponent,
	RouterOutlet
	]
})

@RouteConfig([
  new Route({path: '/', component: DashboardComponent, name: 'Dashboard'}),
	new Route({path: '/about', component: AboutComponent, name: 'About'})
])
export class AppComponent {

	constructor(private viewContainerRef:ViewContainerRef){}
}