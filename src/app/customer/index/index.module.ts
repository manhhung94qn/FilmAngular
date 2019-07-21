import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { SlideModule } from './slide/slide.module';
import { ListFilmsModule } from './list-films/list-films.module';
import { TrailerVideoModule } from './trailer-video/trailer-video.module';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    IndexRoutingModule,
    SlideModule,
    ListFilmsModule,
    TrailerVideoModule
  ]
})
export class IndexModule { }
