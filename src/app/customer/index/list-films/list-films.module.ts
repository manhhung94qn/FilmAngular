import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFilmsComponent } from './list-films.component';
import { MaterialModule } from 'src/app/_Core/Modules/material/material.module';
import { FilmItemModule } from '../../film-item/film-item.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ListFilmsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FilmItemModule,
    RouterModule
  ],
  exports: [
    ListFilmsComponent,
  ]
})
export class ListFilmsModule { }
