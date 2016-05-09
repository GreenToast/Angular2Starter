
import { Component } from "@angular/core";
import { RouteConfig, RouterOutlet, Route} from "@angular/router-deprecated";
import { NavbarComponent } from "./navigation/navbar.component";
import { DashboardComponent } from "./dashboard/dashboard.component";


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
  new Route({path: '/', component: DashboardComponent, name: 'Dashboard'})
])
export class AppComponent {

}