import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES} from "angular2/router";

@Component({
    //using external html leads to bug at 2nd load
    //templateUrl:"/dashboard/dashboard.component.html"
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
}