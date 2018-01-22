import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './list/list.component';
import { RentalComponent } from './rental/rental.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports : [
    RentalComponent,
    ListComponent,
    ViewComponent
  ],
  declarations: [ ListComponent, RentalComponent, ViewComponent]
})
export class BoatModule { }
