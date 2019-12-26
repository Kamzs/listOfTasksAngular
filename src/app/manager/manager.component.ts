import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  @Input()
  tasksActive: Array<string>;

  @Output()
  removeEvent = new EventEmitter<string>();

  @Output()
  doneEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  remove(el: string) {
    this.removeEvent.emit(el);
  }

  done(el: string) {
    this.doneEvent.emit(el);
  }

}
