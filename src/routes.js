import React from 'react';
import { Route, IndexRoute } from 'react-router';

import HomePage from './home/HomePage';
import TaskPage from './task/TaskPage';
import CategoryPage from './category/CategoryPage';
import App from './App';
import NotFoundPage from './common/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="tasks" component={TaskPage}/>
    <Route path="categories" component={CategoryPage}/>
		<Route path="*" component={NotFoundPage}/>
  </Route>
);
