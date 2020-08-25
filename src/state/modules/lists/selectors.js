import { createSelector } from 'reselect';

export const getListsById = (state) => state.root.lists.byId;

export const getAllLists = (state) => state.root.lists.all;

export const selectAllLists = createSelector(
  getListsById,
  getAllLists,
  (byId, ids) => ids.map((id) => ({ id, ...byId[id] })),
);
