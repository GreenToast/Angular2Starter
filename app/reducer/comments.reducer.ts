import { ActionReducer,Action } from "@ngrx/store";

export const ADD_COMMENT = "ADD_COMMENT";

export class AddCommentAction implements Action {
    type:string = ADD_COMMENT;
    constructor(public payload: Comment){}
}

export const UPDATE_COMMENT = "UPDATE_COMMENT";

export class UpdateCommentAction implements Action {
    type:string = UPDATE_COMMENT;
    constructor(public payload: Comment){}
}

export const REMOVE_COMMENT = "REMOVE_COMMENT";

export class RemoveCommentAction implements Action {
    type:string = REMOVE_COMMENT;
    constructor(public payload: Comment){}
}

export const commentsReducer:ActionReducer<Comment[]> = (state=[], {type,payload}) => {
    let comment = <any>payload;
    switch(type){
        case ADD_COMMENT:{
            return [...state.concat(comment)];
        }
        case UPDATE_COMMENT:{
            return state.map((_comment:any) => comment.Id === _comment.Id ? Object.assign({}, _comment, comment) : _comment);
        }
        case REMOVE_COMMENT:{
             let x = state.filter((_comment:any)=> comment.Id != _comment.Id);
             return x;
        }
    }
    return state;
}