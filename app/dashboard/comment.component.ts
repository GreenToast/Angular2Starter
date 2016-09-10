import { Component, Input } from "@angular/core";
import { FormGroup, FormControl, Validators, REACTIVE_FORM_DIRECTIVES } from "@angular/forms";
import { UpdateCommentAction } from "../reducer/comments.reducer";
import { Store } from "@ngrx/store";

@Component({
    selector: "comment",
    template: require('./comment.component.html'),
    directives: [REACTIVE_FORM_DIRECTIVES]
})
export class CommentComponent {
    
    
    constructor( private store:Store<any>){
    }

    edit: boolean = false;

    commentForm: FormGroup;
    _comment:any;

    @Input() set comment(comment){
        this.commentForm = new FormGroup(
            {
                headline: new FormControl(comment.headline, Validators.required),
                text: new FormControl(comment.text, Validators.required)
            
            });
            console.log(this.commentForm);
            this._comment = comment;
    };

    get comment(){
        return this._comment;
    }
    
    toggleEdit(){
        this.edit = !this.edit;
    }

    submit(comment){
        this.store.dispatch(new UpdateCommentAction(comment));
    }
}
