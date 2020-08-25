import React, { useMemo } from 'react';
import cx from 'classnames';
import {
  Menu,
  Checkbox,
  Header,
  Segment,
  Button,
  Icon,
} from 'semantic-ui-react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import {
  makeTodosSelector,
  addTodo,
  removeTodo,
  toggleTodo,
} from '../../../state/modules/todos';
import { AddItem } from '../AddItem/AddItem';

import './Todos.styles.scss';

export const Todos = () => {
  const { listId } = useParams();
  const todosSelector = useMemo(makeTodosSelector, []);

  const dispatch = useDispatch();

  const todos = useSelector((state) => todosSelector(state, listId));

  return (
    <Segment vertical>
      {todos.length ? (
        <Menu secondary vertical fluid>
          {todos.map(({ id, text, completed }) => (
            <Menu.Item
              key={id}
              className={cx('m-todo-item', 'f-row', 'f-items-center', {
                completed,
              })}
            >
              <Checkbox
                checked={completed}
                onChange={() => dispatch(toggleTodo(id))}
                label={text}
                className="flex"
              />

              <Button
                icon
                onClick={() => {
                  dispatch(removeTodo(id));
                }}
              >
                <Icon name="trash" />
              </Button>
            </Menu.Item>
          ))}
        </Menu>
      ) : (
        <Header className="f-row" textAlign="center">
          Add some todos to this list!
        </Header>
      )}

      <AddItem
        placeholder="Enter Todo text..."
        onAdd={(text) => dispatch(addTodo(text, listId))}
      />
    </Segment>
  );
};
