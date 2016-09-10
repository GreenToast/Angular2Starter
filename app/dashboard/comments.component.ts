import { Component, Input } from "@angular/core";
import { CommentComponent } from "./comment.component";

@Component({
    selector: "comments",
    template: require('./comments.component.html'),
    directives:[ CommentComponent ]
})
export class CommentsComponent {
    
    
    constructor(){
    }

    @Input() comments;
    
}
