import { Component } from '@angular/core';
import {ToDoListComponent} from "../../../ui/to-do-list/to-do-list.component";
import {getTaskList} from "../../state/todo/todo.selectors";
import {Store} from "@ngrx/store";
import {AsyncPipe} from "@angular/common";
import {deleteTask} from "../../state/todo/todo.actions";
import {Router} from "@angular/router";

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


  constructor(
    private store$: Store,
    private router: Router,
  ) {}

  events($event: any) {

    if ($event.event === 'ToDoComponent:buttonClick' && $event.rout === 'main') {
      this.router.navigate(['']);
    }

    if ($event.event === 'DeleteTask:buttonClick') {
      this.store$.dispatch(deleteTask({id: $event.task}));
    }

  }
}
