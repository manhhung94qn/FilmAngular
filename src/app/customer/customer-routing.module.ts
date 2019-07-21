import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CustomerComponent } from './customer.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';

const routes: Routes = [
  {path: "", 
    component: CustomerComponent,
    children: [
      {path: "", component: IndexComponent},
      {path: "detail/:id", component: FilmDetailComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
