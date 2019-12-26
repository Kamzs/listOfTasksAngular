import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-presenter',
  templateUrl: './presenter.component.html',
  styleUrls: ['./presenter.component.css']
})
export class PresenterComponent implements OnInit {

  @Input()
  doneTasks: Array<string>;

  constructor() { }

  ngOnInit() {
  }

}
