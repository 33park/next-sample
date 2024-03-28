// actions.ts
import { Todo } from './reducer';

export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: Todo;
}

export interface CompleteTodoAction {
  type: typeof COMPLETE_TODO;
  payload: number;
}

export interface DeleteTodoAction {
  type: typeof DELETE_TODO;
  payload: number;
}

export type TodoActionTypes = AddTodoAction | CompleteTodoAction | DeleteTodoAction;

export const addTodo = (todo: Todo): AddTodoAction => ({
  type: ADD_TODO,
  payload: todo,
});

export const completeTodo = (id: number): CompleteTodoAction => ({
  type: COMPLETE_TODO,
  payload: id,
});

export const deleteTodo = (id: number): DeleteTodoAction => ({
  type: DELETE_TODO,
  payload: id,
});
