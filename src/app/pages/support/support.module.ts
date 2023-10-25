import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportRoutingModule } from './support-routing.module';
import { SupportComponent } from './support.component';
import { SupportMatModule } from '@app/shared/material/support-mat.module';
import { SharedModule } from '@app/shared/shared.module';


@NgModule({
  declarations: [
    SupportComponent
  ],
  imports: [
    CommonModule,
    SupportRoutingModule,
    SupportMatModule,
    SharedModule
  ]
})
export class SupportModule { }
