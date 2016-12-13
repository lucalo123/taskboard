import React from 'react';
import { Route, IndexRoute } from 'react-router';

import HomePage from './components/home/HomePage';
import App from './components/App';
import NotFoundPage from './components/NotFoundPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
		<Route path="*" component={NotFoundPage}/>
  </Route>
);
