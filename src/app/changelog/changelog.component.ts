import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-changelog',
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.css']
})
export class ChangelogComponent {

  changeOfTasks: Array<Task>;

  constructor(private service: TasksService) {
    this.service.getChanges().subscribe(changes => {
      this.changeOfTasks = changes;
    });
  }


}
