import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pageTitle: string = 'My Portfolio';
}
