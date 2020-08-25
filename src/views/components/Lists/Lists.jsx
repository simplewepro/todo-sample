import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory, Redirect } from 'react-router-dom';
import { Menu, Button, Icon, Segment } from 'semantic-ui-react';
import { v4 } from 'uuid';

import {
  selectAllLists,
  removeList,
  addList,
} from '../../../state/modules/lists';
import { AddItem } from '../AddItem/AddItem';

import './Lists.styles.scss';

export const Lists = () => {
  const history = useHistory();
  const { listId } = useParams();

  const dispatch = useDispatch();

  const lists = useSelector(selectAllLists);

  if (!lists.length) return <Redirect to="/create-first-list" />;

  return (
    <Segment vertical>
      <Menu secondary vertical fluid>
        {lists.map((list) => (
          <Menu.Item
            key={list.id}
            active={listId === list.id}
            className="m-list-item f-row f-items-center"
            onClick={() => {
              history.push(`/lists/${list.id}`);
            }}
          >
            <span className="flex">{list.name}</span>

            <Button
              icon
              size="tiny"
              onClick={() => dispatch(removeList(list.id))}
            >
              <Icon name="trash" />
            </Button>
          </Menu.Item>
        ))}
      </Menu>

      <AddItem
        placeholder="Add List..."
        onAdd={(name) => dispatch(addList(v4(), name))}
      />
    </Segment>
  );
};
