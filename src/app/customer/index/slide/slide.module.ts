import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideComponent } from './slide.component';
import { MaterialModule } from 'src/app/_Core/Modules/material/material.module';

@NgModule({
  declarations: [SlideComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    SlideComponent
  ]
})
export class SlideModule { }
