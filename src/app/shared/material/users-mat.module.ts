import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  exports: [
    MatTabsModule,
    MatIconModule,
  ],
  declarations: [],
  providers: []
})
export class UsersMaterialModule { }