
import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router";
import { NavbarComponent } from "./navigation/navbar.component";


@Component({
	selector: 'app',
	template: `

    <nav-bar></nav-bar>
    <router-outlet></router-outlet>

  `,
	directives:[NavbarComponent,
	ROUTER_DIRECTIVES
	]
})
export class AppComponent {


	public comments = [
        {
            headline: "I wanted to ask a question",
            text: "My example text"
        },
        {
            headline: "Even the best thing was fine",
            text: "No one knew what was coming"
        }
    ]

}