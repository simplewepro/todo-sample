import React from 'react';
import { Container, Icon, Header, Segment } from 'semantic-ui-react';

export const NotFound = () => {
  return (
    <Container fluid>
      <Segment textAlign="center" vertical>
        <Icon size="massive" name="settings" />
        <Header as="h1">404</Header>
        <Header as="h3">Not found</Header>
      </Segment>
    </Container>
  );
};
