import { createSelector } from 'reselect';

export const getTodosById = (state) => state.root.todos.byId;

export const getAllTodos = (state, listId) => state.root.todos[listId] || [];

export const makeTodosSelector = () =>
  createSelector(getTodosById, getAllTodos, (byId, ids) =>
    ids.map((id) => ({ id, ...byId[id] })),
  );
