import * as types from './types';

export const addTodo = (text, listId) => ({
  type: types.ADD_TODO,
  text,
  listId,
});

export const toggleTodo = (id) => ({
  type: types.TOGGLE_TODO,
  id,
});

export const removeTodo = (id) => ({
  type: types.REMOVE_TODO,
  id,
});
