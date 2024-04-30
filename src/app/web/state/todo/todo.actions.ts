import { createAction, props } from '@ngrx/store';
import {ToDoState} from "./todo.reducer";

export const addNewTask = createAction(
  `[todoList] addNewTask`,
  props<{ titleToDo: string, descriptionToDo: string }>()
);

export const deleteTask = createAction(
  `[todoList] deleteTask`,
  props<{ id: number }>()
);

export const setComplete = createAction(
  `[todoList] setComplete`,
  props<{ id: number }>()
);

export const loadState = createAction(
  `[todoList] loadState`,
  props<{ loadState: ToDoState }>()
);

export const markTask = createAction(
  `[todoList] markTask`,
  props<{ completed: boolean }>()
);
