import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrailerVideoComponent } from './trailer-video.component';
import { ComponentModule } from 'src/app/_Core/Modules/component/component.module';

@NgModule({
  declarations: [TrailerVideoComponent],
  imports: [
    CommonModule,
    ComponentModule
  ],
  exports: [
    TrailerVideoComponent
  ]
})
export class TrailerVideoModule { }
