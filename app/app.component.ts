
import { Component } from "angular2/core";
import { RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import { NavbarComponent } from "./navigation/navbar.component";
import { DashboardComponent } from "./dashboard/dashboard.component";


@Component({
	selector: 'app',
	template: `

    <nav-bar></nav-bar>
    <router-outlet></router-outlet>

  `,
	directives: [NavbarComponent,ROUTER_DIRECTIVES]
})
@RouteConfig([
	{ path: '/', name: 'Dashboard', component: DashboardComponent, useAsDefault: true }
])
export class AppComponent {

}