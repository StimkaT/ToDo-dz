import { Component } from '@angular/core';
import {ToDoListComponent} from "../../../ui/to-do-list/to-do-list.component";
import {getTaskList, selectFeature} from "../../state/todo/todo.selectors";
import {select, Store} from "@ngrx/store";
import {AsyncPipe} from "@angular/common";
import {deleteTask, loadState, setComplete} from "../../state/todo/todo.actions";
import {Router} from "@angular/router";
import {filter} from "rxjs";

export const TASK_LOCALSTORAGE_KEY = 'task'

@Component({
  selector: 'to-do-list-container',
  standalone: true,
  imports: [
    ToDoListComponent,
    AsyncPipe,
  ],
  templateUrl: './to-do-list-container.component.html',
  styleUrl: './to-do-list-container.component.scss'
})
export class ToDoListContainerComponent {
  tasksList$ = this.store$.select(getTaskList);

  isInit = false;

  constructor(
    private store$: Store,
    private router: Router,
  ) {}

  private loadStorage: boolean = false;

  ngOnInit() {
    if (this.loadStorage) {
      return
    }

    this.loadStorage = true;

    this.loadFromStorage();
  }

  private loadFromStorage() {
    const storageState = localStorage.getItem(TASK_LOCALSTORAGE_KEY);
    console.log('из локала получили', storageState);
    if (storageState) {
      this.store$.dispatch(loadState({loadState: JSON.parse(storageState)}));
    }
  }


  events($event: any) {

    if ($event.event === 'ToDoComponent:buttonClick' && $event.rout === 'main') {
      this.router.navigate(['']);
    }

    if ($event.event === 'DeleteTask:buttonClick') {
      this.store$.dispatch(deleteTask({id: $event.task}));
    }

    if ($event.event === 'SetComplete:buttonClick') {
      this.store$.dispatch(setComplete({id: $event.task}));
    }

    this.store$.pipe(
      select(selectFeature),
      filter(state => !!state)
    ).subscribe(state => {
      localStorage.setItem(TASK_LOCALSTORAGE_KEY, JSON.stringify(state));
    })

  }
}
