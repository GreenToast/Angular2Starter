import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router-deprecated";

@Component({
    selector: "nav-bar",
    template: require('./navbar.html'),
    directives: [ROUTER_DIRECTIVES],
    changeDetection:ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
}
