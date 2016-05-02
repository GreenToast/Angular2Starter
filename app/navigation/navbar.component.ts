import { Component, ChangeDetectionStrategy } from "angular2/core";
import { ROUTER_DIRECTIVES } from "angular2/router";

@Component({
    selector: "nav-bar",
    templateUrl: "/navigation/navbar.html",    
    directives: [ROUTER_DIRECTIVES],
    changeDetection:ChangeDetectionStrategy.OnPush,
    //styles:[require("../css/app.scss")]
})
export class NavbarComponent {
}
