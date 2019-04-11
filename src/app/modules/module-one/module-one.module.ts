import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleOneRoutingModule } from './module-one-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
    ModuleOneRoutingModule,
    SharedModule
  ]
})
export class ModuleOneModule { }
