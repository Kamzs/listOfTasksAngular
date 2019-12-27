import { Component, OnInit, Input } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-presenter',
  templateUrl: './presenter.component.html',
  styleUrls: ['./presenter.component.css']
})
export class PresenterComponent{

  doneTasks: Array<Task>;

  constructor(private service: TasksService) {
    this.service.getChangedListOfTasksDone().subscribe(updated => {this.doneTasks = updated; });
  }


  checkIfOdd(i: number): boolean{
    if  (i % 2 === 0 ) { return false; } else { return true; }
  }

}
