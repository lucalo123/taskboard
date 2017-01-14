import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import tasks from './taskReducer';
import categories from './categoryReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  tasks,
  categories,
	ajaxCallsInProgress
});

export default rootReducer;
