import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'dashboard-section',
    template: require('./dashboard.section.html')
})
export class DashboardSectionComponent {
    @Input() text:string;
    @Output() sectionClicked: EventEmitter<string> = new EventEmitter<string>();
}
