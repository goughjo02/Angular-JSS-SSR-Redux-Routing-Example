import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [MyCounterComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MyCounterComponent
  ]
})
export class SharedModule { }
