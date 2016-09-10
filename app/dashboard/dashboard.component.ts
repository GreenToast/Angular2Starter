import { Component } from "@angular/core";
import { CommentsComponent } from "./comments.component";
import { Store } from "@ngrx/store";

@Component({
    template: require('./dashboard.component.html'),
    directives: [ CommentsComponent ]
})
export class DashboardComponent {
    
    
    constructor(private store:Store<any>){
    }

    comments$ = this.store.select("comments");
    
}
