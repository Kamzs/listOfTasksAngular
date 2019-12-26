import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-adder',
  templateUrl: './adder.component.html',
  styleUrls: ['./adder.component.css']
})
export class AdderComponent implements OnInit {

  @Output()
  eventProducer = new EventEmitter();

  task: string;

  constructor() { }

  ngOnInit() {
  }

  pushUp() {
    this.eventProducer.emit(this.task);
    this.task = '';
  }

}
