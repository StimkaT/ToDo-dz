import {createFeatureSelector, createSelector} from '@ngrx/store';
import {TO_DO_FEATURE_KEY, ToDoState} from './todo.reducer';

export const selectFeature = createFeatureSelector<ToDoState>(TO_DO_FEATURE_KEY);

export const getTaskList = createSelector(
  selectFeature,
  (state: ToDoState) => state.tasks
);
