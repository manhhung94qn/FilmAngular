import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';
import { IconPlayComponent } from './icon-play/icon-play.component';

@NgModule({
  declarations: [ModalDialogComponent, IconPlayComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ModalDialogComponent,
    IconPlayComponent
  ]
})
export class ComponentModule { }
