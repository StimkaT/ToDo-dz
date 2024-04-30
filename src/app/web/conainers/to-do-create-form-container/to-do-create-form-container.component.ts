import { Component } from '@angular/core';
import {ToDoCreateFormComponent} from "../../../ui/to-do-create-form/to-do-create-form.component";
import {select, Store} from "@ngrx/store";
import {addNewTask, loadState} from "../../state/todo/todo.actions";
import {Router} from "@angular/router";
import {selectFeature} from "../../state/todo/todo.selectors";
import {filter} from "rxjs";
import {TASK_LOCALSTORAGE_KEY} from "../to-do-list-container/to-do-list-container.component";

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
    if ($event.titleToDo) {
      this.store$.dispatch(addNewTask({titleToDo: $event.titleToDo, descriptionToDo: $event.descriptionToDo}));
    }

    if ($event.event === 'ToDoComponent:buttonClick' && $event.rout === 'list') {
      this.router.navigate(['/list']);
    }

    this.loadFromStorage();

    this.store$.pipe(
      select(selectFeature),
      filter(state => !!state)
    ).subscribe(state => {
      localStorage.setItem(TASK_LOCALSTORAGE_KEY, JSON.stringify(state));
    })

  }
}
