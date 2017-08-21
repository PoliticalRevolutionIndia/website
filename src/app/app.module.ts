import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';

import 'hammerjs';
import { ViewsComponent } from './views/views.component';
import { EducationComponent } from './education/education.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DepartmentDetialComponent } from './department-detial/department-detial.component';

import { DepartmentService } from "./services/department.service";

@NgModule({
  declarations: [
    AppComponent,
    ViewsComponent,
    EducationComponent,
    DepartmentsComponent,
    DepartmentDetialComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [ 
  DepartmentService, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
