import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleTwoRoutingModule } from './module-two-routing.module';
import { SecondPageComponent } from './second-page/second-page.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [SecondPageComponent],
  imports: [
    CommonModule,
    ModuleTwoRoutingModule,
    SharedModule
  ]
})
export class ModuleTwoModule { }
