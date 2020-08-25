import * as types from './types';

export const addList = (id, name) => ({
  type: types.ADD_LIST,
  id,
  name,
});

export const removeList = (id) => ({
  type: types.REMOVE_LIST,
  id,
});
