import React from 'react';
import { Route, IndexRoute } from 'react-router';

import HomePage from './components/home/HomePage';
import TaskPage from './containers/TaskPage';
import CategoryPage from './containers/CategoryPage';
import App from './components/App';
import NotFoundPage from './components/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="tasks" component={TaskPage}/>
    <Route path="categories" component={CategoryPage}/>
		<Route path="*" component={NotFoundPage}/>
  </Route>
);
