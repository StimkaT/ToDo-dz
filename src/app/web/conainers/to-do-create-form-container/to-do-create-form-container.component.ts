import { Component } from '@angular/core';
import {ToDoCreateFormComponent} from "../../../ui/to-do-create-form/to-do-create-form.component";
import {Store} from "@ngrx/store";
import {addNewTask} from "../../state/todo/todo.actions";
import {Router} from "@angular/router";

@Component({
  selector: 'create-form-container',
  standalone: true,
  imports: [
    ToDoCreateFormComponent,
  ],
  templateUrl: './to-do-create-form-container.component.html',
  styleUrl: './to-do-create-form-container.component.scss'
})
export class ToDoCreateFormContainerComponent {

  constructor(
    private store: Store,
    private router: Router,
  ) {}

  events($event: any) {
    if ($event.titleToDo) {
      this.store.dispatch(addNewTask({titleToDo: $event.titleToDo, descriptionToDo: $event.descriptionToDo}));
    }

    if ($event.event === 'ToDoComponent:buttonClick' && $event.rout === 'list') {
      this.router.navigate(['/list']);
    }
  }
}
