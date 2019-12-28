import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  listOfTasks: Array<Task> = [];
  listOfTasksDone: Array<Task> = [];
  listOfChanges: Array<Task> = [];

  changedListOfTasks = new BehaviorSubject<Array<Task>>([]);
  changedListOfTasksDone = new BehaviorSubject<Array<Task>>([]);
  changes = new BehaviorSubject<Array<Task>>([]);

  constructor() {
    this.listOfTasks = [
      {name: 'nauka angulara', created: new Date()},
      {name: 'nauka springa', created: new Date()},
      {name: 'nauka algorytmow', created: new Date()}
    ];
    this.changedListOfTasks.next(this.listOfTasks);
    this.listOfChanges = this. listOfTasks;
    this.changes.next(this.listOfChanges);
  }

  addToList(task: Task) {
    this.listOfTasks.push(task);
    this.changedListOfTasks.next(this.listOfTasks);

    this.listOfChanges.push(task);
    this.observeChanges(this.listOfChanges);
  }

  remove(element: Task) {
    this.listOfTasks = this.listOfTasks.filter( elListy => elListy !== element);
    this.changedListOfTasks.next(this.listOfTasks);

    element.removed = new Date();
    this.listOfChanges.push(element);
    this.observeChanges(this.listOfChanges);
  }

  done(element: Task) {
    this.listOfTasksDone.push(element);
    this.remove(element);
    this.changedListOfTasksDone.next(this.listOfTasksDone);

    element.done = new Date();
    this.listOfChanges.push(element);
    this.observeChanges(this.listOfChanges);
  }

  observeChanges(element: Array<Task>) {
    this.changes.next(element);
  }

  getChangedListOfTasks(): Observable<Array<Task>> {
    return this.changedListOfTasks.asObservable();
  }
  getChangedListOfTasksDone(): Observable<Array<Task>> {
    return this.changedListOfTasksDone.asObservable();
  }

  getChanges(): Observable<Array<Task>> {
    return this.changes.asObservable();
  }
}
