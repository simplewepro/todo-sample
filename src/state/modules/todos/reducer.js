import { v4 } from 'uuid';
import * as types from './types';
import { createReducer } from '../../utils';
import { uniq } from '../../../utilities';

const initialState = {
  byId: {},
};

const todosReducer = createReducer(initialState)({
  [types.ADD_TODO]: (state, { text, listId }) => {
    const { [listId]: oldList = [] } = state;
    const id = v4();

    return {
      ...state,
      byId: {
        ...state.byId,
        [id]: {
          text,
          listId,
          completed: false,
        },
      },
      [listId]: uniq([...oldList, id]),
    };
  },

  [types.TOGGLE_TODO]: (state, { id }) => {
    const currentTodo = state.byId[id];
    return {
      ...state,
      byId: {
        ...state.byId,
        [id]: {
          ...currentTodo,
          completed: !currentTodo.completed,
        },
      },
    };
  },

  [types.REMOVE_TODO]: (state, { id }) => {
    const { [id]: todoToRemove, ...byId } = state.byId;

    return {
      ...state,
      byId,
      [todoToRemove.listId]: state[todoToRemove.listId].filter(
        (todo) => todo !== id,
      ),
    };
  },
});

export default todosReducer;
