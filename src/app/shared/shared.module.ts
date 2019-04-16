import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCounterComponent } from './counter/counter.component';
import { MatButtonModule } from '@angular/material';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  declarations: [MyCounterComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    ColorPickerModule
  ],
  exports: [
    MyCounterComponent,
    MatButtonModule
  ]
})
export class SharedModule { }
