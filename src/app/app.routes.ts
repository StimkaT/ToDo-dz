import { Routes } from '@angular/router';
import { ToDoListContainerComponent } from "./web/conainers/to-do-list-container/to-do-list-container.component";
import { ToDoCreateFormContainerComponent } from "./web/conainers/to-do-create-form-container/to-do-create-form-container.component";

export const routes: Routes = [
  {
    path: '',
    component: ToDoCreateFormContainerComponent,
  },
  {
    path: 'list',
    component: ToDoListContainerComponent,
  },
];
