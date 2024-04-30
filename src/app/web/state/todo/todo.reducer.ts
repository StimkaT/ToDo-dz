import {createReducer, on} from '@ngrx/store';
import * as ToDoActions from './todo.actions';
import {loadState} from "./todo.actions";

export const TO_DO_FEATURE_KEY = 'toDo';

export interface IToDo {
  id: number;
  titleToDo: string;
  descriptionToDo: string;
  completed: boolean;
}

export interface ToDoState {
  implementId: number;
  tasks: IToDo[];
}

export const initialState: ToDoState = {
  implementId: 1,
  tasks: [],
};

export const toDoReducer = createReducer(
  initialState,
  on(ToDoActions.addNewTask, (state, { titleToDo, descriptionToDo }) => ({
    ...state,
    implementId: state.implementId + 1,
    tasks: [...state.tasks, {
      id: state.implementId,
      titleToDo: titleToDo,
      descriptionToDo: descriptionToDo,
      completed: false }],

  })),
  on(ToDoActions.deleteTask, (state, { id }) => ({
    ...state,
      tasks: state.tasks.filter((task) => task.id !== id),
  })),
  on(ToDoActions.setComplete, (state, { id }) => ({
    ...state,
      tasks: state.tasks.map((task) => task.id === id ? {
        ...task,
        completed: !task.completed,
      } : task ),
  })),
  on(ToDoActions.loadState, (state, {loadState}) => ({...state, ...loadState})),
);
