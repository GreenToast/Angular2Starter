import { Reducer,Action } from "@ngrx/store";
import { Person } from "./personsData";

export const ADD_PERSON = "ADD_PERSON";

export class AddPersonAction implements Action {
    type:string = ADD_PERSON;
    constructor(public payload: Person){}
}

export const UPDATE_PERSON = "UPDATE_PERSON";

export class UpdatePersonAction implements Action {
    type:string = UPDATE_PERSON;
    constructor(public payload: Person){}
}

export const REMOVE_PERSON = "REMOVE_PERSON";

export class RemovePersonAction implements Action {
    type:string = REMOVE_PERSON;
    constructor(public payload: Person){}
}

export const personsReducer:Reducer<Person[]> = (state=[], {type,payload}) => {
    let person:Person = <Person>payload;
    switch(type){
        case ADD_PERSON:{
            return [...state.concat(person)];
        }
        case REMOVE_PERSON:{
             let x = state.filter((_person:Person)=> person.firstName==_person.firstName && person.lastName==_person.lastName);
             return x;
        }
    }
    return state;
}