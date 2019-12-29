import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-adder',
  templateUrl: './adder.component.html',
  styleUrls: ['./adder.component.css']
})
export class AdderComponent {

  task: string;

  constructor(private service: TasksService) { }

  pushUp() {
    const newTask: Task = { name: this.task, created : new Date().toLocaleString(), isDone: false };
    this.service.addToList(newTask);
    this.task = '';
  }

}
