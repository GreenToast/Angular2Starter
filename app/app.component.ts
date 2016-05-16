import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "RxJS/Observable";
import { Person, ExampleFriends } from "./reducer/personsData";
@Component({
	selector: 'app',
	template: `

    <div class="panel panel-default">
			<div class="panel-body">
					<div class="col-sm-4 gray text-center">
							<table>
							<tr><th>firstname</th></tr>
							<tr *ngFor="let person of (persons | async)">
								<td>person.firstName</td>
								<td>person.lastName</td>
							</tr>
							<button class="btn btn-default">Add</button>
					</div>
			</div>
	</div>

  `
})
export class AppComponent {
		persons: Observable<Person[]> = Observable.create(ExampleFriends);
		
		//appStateStore.select('persons');
		constructor(appStateStore:Store<any>){
			
		}
}