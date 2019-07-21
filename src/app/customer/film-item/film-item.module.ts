import { NgModule } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FilmItemComponent } from './film-item.component';
import { MaterialModule } from 'src/app/_Core/Modules/material/material.module';
import { ComponentModule } from 'src/app/_Core/Modules/component/component.module';


@NgModule({
  declarations: [FilmItemComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ComponentModule,
    RouterModule
  ],
  exports: [
    FilmItemComponent
  ]
})
export class FilmItemModule { }
