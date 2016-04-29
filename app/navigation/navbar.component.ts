import { Component, ChangeDetectionStrategy } from "angular2/core";
import { ROUTER_DIRECTIVES } from "angular2/router";

@Component({
    selector: "nav-bar",
    templateUrl: "navigation/navbar.html",
    template: `
        <div class="navigation">
            <div class="container">
                <nav class="navbar navbar-inverse" role="navigation">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">
                            <span class="sr-only">Toggle Navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" [routerLink]="['Dashboard']">
                        </a>
                        <a [routerLink]="['Dashboard']" class="navbar-text">Angular2-Starter</a>
                    </div>

                    <div class="collapse navbar-collapse" id="navbar-collapse">
                        <ul class=" pull-right nav navbar-nav">
                            <li><a [routerLink]="['Dashboard']">Dashboard</a></li>
                            <li><a [routerLink]="['About']">About</a></li>
                            <!--li><a [routerLink]="['CreateAlbum']">Create Album</a></li-->
                            <li><a href="#" class="">Log out</a></li>
                        </ul>

                        <ul class="nav navbar-nav navbar-right">
                            <li class="loader" if.bind="router.isNavigating">
                                <i class="fa fa-spinner fa-spin fa-2x"></i>
                            </li>
                        </ul>
                    </div>

                </nav>
            </div>
        </div>
        `,
    directives: [ROUTER_DIRECTIVES],
    changeDetection:ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
}
