import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  listOfTasks: Array<Task> = [];
  listOfTasksDone: Array<Task> = [];

  changedListOfTasks = new BehaviorSubject<Array<Task>>([]);
  changedListOfTasksDone = new BehaviorSubject<Array<Task>>([]);

  constructor() {
    this.listOfTasks = [
      {name: 'nauka angulara', created: new Date()},
      {name: 'nauka springa', created: new Date()},
      {name: 'nauka algorytmow', created: new Date()}
    ];
    this.changedListOfTasks.next(this.listOfTasks);
  }

  addToList(task: Task) {
    this.listOfTasks.push(task);
    this.changedListOfTasks.next(this.listOfTasks);
  }

  remove(element: Task) {
    this.listOfTasks = this.listOfTasks.filter( elListy => elListy !== element);
    this.changedListOfTasks.next(this.listOfTasks);
  }

  done(element: Task) {
    this.listOfTasksDone.push(element);
    this.remove(element);
    this.changedListOfTasksDone.next(this.listOfTasksDone);
  }

  getChangedListOfTasks(): Observable<Array<Task>> {
    return this.changedListOfTasks.asObservable();
  }
  getChangedListOfTasksDone(): Observable<Array<Task>> {
    return this.changedListOfTasksDone.asObservable();
  }
}
