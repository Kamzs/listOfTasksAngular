import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lista-zadan';

  task: string;
  listOfTasks: Array<string> = [];
  listOfTasksDone: Array<string> = [];

  constructor() {}

  addToList() {
    this.listOfTasks.push(this.task);
    this.task = '';
  }

  remove(element: string){
    this.listOfTasks = this.listOfTasks.filter( elListy => elListy !== element);
  }

  done(element: string){
    this.listOfTasksDone.push(element);
    this.listOfTasks = this.listOfTasks.filter( elListy => elListy !== element);
  }

}
