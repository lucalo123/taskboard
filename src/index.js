import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
//require('./favicon.ico');
import './styles/styles.scss';
import './styles/libs/bootstrap/bootstrap.min.css';
import { syncHistoryWithStore } from 'react-router-redux';
import {loadTasks} from './actions/taskActions';
import {loadCategories} from './actions/categoryActions';

const store = configureStore();
store.dispatch(loadTasks());
store.dispatch(loadCategories());

if(process.env.NODE_ENV === 'development') {
  console.log(store.getState(), 'State'); // eslint-disable-line no-console
}

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>, document.getElementById('app')
);
