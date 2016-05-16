import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Rx";
import { Person, ExampleFriends } from "./reducer/personsData";
import { AddPersonAction, RemovePersonAction } from "./reducer/personsReducer";
import { Devtools } from "@ngrx/devtools";
@Component({
	selector: 'app',
	template: require('./app.html'),
	directives: [Devtools]
})
export class AppComponent {
	
		persons:Observable<Person[]>;
		
		constructor(private appStateStore:Store<any>){
			this.persons = <Observable<Person[]>>this.appStateStore.select('persons');			
		}
		
		onAdd(){
			let randomPerson = ExampleFriends[Math.floor(Math.random() * ExampleFriends.length)]; 
			this.appStateStore.dispatch(new AddPersonAction(randomPerson));
		}
		
		onRemove(person:Person){
			this.appStateStore.dispatch(new RemovePersonAction(person));
		}
}