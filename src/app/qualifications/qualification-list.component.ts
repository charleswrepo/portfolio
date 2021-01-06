import { Component } from '@angular/core';

@Component({
    selector: 'mp-qualifications',
    templateUrl: './qualification-list.component.html',
    styleUrls: ['./qualification-list.component.scss']
})

export class QualificationListComponent {
    pageTitle: string = 'Qualification List';
    qualifications: any[];
    
}