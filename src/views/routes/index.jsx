import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Default from './default';
import { ListsPage } from './lists';
import { NotFound } from './404';
import { CreateFirstList } from './create-first-list';

const Router = () => (
  <Switch>
    <Route exact path="/" component={Default} />

    <Route path="/create-first-list" component={CreateFirstList} />
    <Route exact path="/lists" component={ListsPage} />
    <Route exact path="/lists/:listId" component={ListsPage} />

    <Route path="*" component={NotFound} />
  </Switch>
);

export default Router;
