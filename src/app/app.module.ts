import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WorkJobComponent } from './works/work-job/work-job.component';
import { ResumeWorkComponent } from './resume/resume-work/resume-work.component';
import { TableComponent } from './fun/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkJobComponent,
    ResumeWorkComponent,
    TableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
