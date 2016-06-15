import { Component } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { Router } from "@angular/router-deprecated";
import "rxjs/add/operator/do";
import {MODAL_DIRECTVES} from 'ng2-bootstrap/components/modal';
import { ComponentsHelper } from "ng2-bootstrap/components/utils/components-helper.service";
@Component({
    template: require('./dashboard.component.html'),
    directives: [MODAL_DIRECTVES],
    providers: [ComponentsHelper]
})
export class DashboardComponent {
     private deleteAlbum: Subject<any> = new Subject<any>();
     constructor(private router: Router){
        this.deleteAlbum.do(()=>console.log('delete')).subscribe(()=>this.router.navigate(["About"]));
     }
}
