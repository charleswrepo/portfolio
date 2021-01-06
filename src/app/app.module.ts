import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobHistoryComponent } from './jobs/job-history.component';
import { QualificationListComponent } from './qualifications/qualification-list.component';

@NgModule({
  declarations: [
    AppComponent,
    JobHistoryComponent,
    QualificationListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
