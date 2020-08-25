import React from 'react';
import { Segment, Header, Transition } from 'semantic-ui-react';

import CreateList from '../components/CreateList';

import '../styles/l-create-first-list.scss';

export const CreateFirstList = () => {
  return (
    <div className="l-create-first-list">
      <Segment vertical textAlign="center">
        <Transition animation="fade up" transitionOnMount duration={2000}>
          <Header inverted size="huge">
            You have no lists yet
          </Header>
        </Transition>

        <Transition animation="fade up" transitionOnMount duration={3000}>
          <Header inverted size="huge">
            Create your first list
          </Header>
        </Transition>

        <CreateList />
      </Segment>
    </div>
  );
};
