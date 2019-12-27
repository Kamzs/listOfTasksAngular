import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent {

  tasksActive: Array<Task>;

  constructor(private service: TasksService) {
    this.service.getChangedListOfTasks().subscribe((updated: Array<Task>) => {this.tasksActive = updated; });
  }

  remove(el: Task) {
    this.service.remove(el);
  }

  done(el: Task) {
    this.service.done(el);
  }

  getColor(): string {
    if (this.service.listOfTasks.length > 2) {
      return 'red';
    } else {
      return 'green'; }
  }

}
