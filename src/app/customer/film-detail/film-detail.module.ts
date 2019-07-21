import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmDetailComponent } from './film-detail.component';
import { MaterialModule } from 'src/app/_Core/Modules/material/material.module';

@NgModule({
  declarations: [FilmDetailComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    FilmDetailComponent
  ]
})
export class FilmDetailModule { }
