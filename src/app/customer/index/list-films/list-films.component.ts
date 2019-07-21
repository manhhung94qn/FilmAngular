import { Component, OnInit } from '@angular/core';
import {Observable, Observer} from 'rxjs';


export interface ExampleTab {
  label: string;
  content: string;
}

@Component({
  selector: 'app-list-films',
  templateUrl: './list-films.component.html',
  styleUrls: ['./list-films.component.scss']
})
export class ListFilmsComponent implements OnInit {

  asyncTabs: Observable<ExampleTab[]>;

  constructor() {
  }

  ngOnInit() {
  }



}
