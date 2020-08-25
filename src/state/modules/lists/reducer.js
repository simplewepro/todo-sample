import * as types from './types';
import { createReducer } from '../../utils';
import { uniq } from '../../../utilities';

const initialState = {
  byId: {},
  all: [],
};

const listsReducer = createReducer(initialState)({
  [types.ADD_LIST]: (state, { id, name }) => {
    return {
      ...state,
      byId: {
        ...state.byId,
        [id]: {
          name,
        },
      },
      all: uniq([...state.all, id]),
    };
  },

  [types.REMOVE_LIST]: (state, { id }) => {
    const { [id]: listToRemove, ...byId } = state.byId;

    return {
      ...state,
      byId,
      all: state.all.filter((list) => list !== id),
    };
  },
});

export default listsReducer;
