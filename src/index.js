import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
//require('./favicon.ico');
import './styles/styles.scss';
import './styles/libs/bootstrap/bootstrap.min.css';
import './styles/libs/react-datetime/react-datetime.css';

import { syncHistoryWithStore } from 'react-router-redux';
import {loadTasks} from './task/taskActions';
import {loadCategories} from './category/categoryActions';
import {loadWidgets} from './widget/widgetActions';

const store = configureStore();
store.dispatch(loadTasks());
store.dispatch(loadCategories());
store.dispatch(loadWidgets([
  {name: 'Widget 1', description: 'Widget description', order: 0},
  {name: 'Widget 2', description: 'Widget description', order: 1},
  {name: 'Widget 3', description: 'Widget description', order: 2}
]));

if(process.env.NODE_ENV === 'development') {
  console.log('State', store.getState()); // eslint-disable-line no-console
}

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>, document.getElementById('app')
);
