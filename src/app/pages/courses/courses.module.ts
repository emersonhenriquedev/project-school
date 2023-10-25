import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { CoursesMatModule } from '@app/shared/material/courses-mat.module';
import { SharedModule } from '@app/shared/shared.module';


@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    CoursesMatModule,
    SharedModule,
  ]
})
export class CoursesModule { }
