import React from 'react';
import { Sidebar, Segment, Header, Icon } from 'semantic-ui-react';

import Lists from '../components/Lists';

import '../styles/l-lists.scss';
import Todos from '../components/Todos';

export const ListsPage = ({
  match: {
    params: { listId },
  },
}) => {
  return (
    <div className="l-lists flex f-column">
      <Sidebar.Pushable>
        <Sidebar
          width="wide"
          className="m-sidebar"
          visible
          animation="slide along"
        >
          <Segment vertical className="head">
            <Header>
              <Icon name="list alternate" />
              My lists
            </Header>
          </Segment>

          <Segment vertical>
            <Lists />
          </Segment>
        </Sidebar>

        <Sidebar.Pusher className="f-column">
          <div className="l-todos flex f-column">
            <Sidebar.Pushable className="flex">
              <Sidebar
                visible={!!listId}
                width="very wide"
                className="m-sidebar"
                animation="slide along"
              >
                <Segment vertical className="head">
                  <Header>
                    <Icon name="check" />
                    Todos
                  </Header>
                </Segment>

                <Segment vertical>
                  <Todos />
                </Segment>
              </Sidebar>
            </Sidebar.Pushable>
          </div>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
};
