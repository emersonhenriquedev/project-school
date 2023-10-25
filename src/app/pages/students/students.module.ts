import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { StudentsMatModule } from '@app/shared/material/students-mat.module';
import { SharedModule } from '@app/shared/shared.module';


@NgModule({
  declarations: [
    StudentsComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    StudentsMatModule,
    SharedModule
  ]
})
export class StudentsModule { }
