import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import tasks from './taskReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  tasks,
	ajaxCallsInProgress
});

export default rootReducer;
