import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import tasks from '../task/taskReducer';
import categories from '../category/categoryReducer';
import widgets from '../widget/widgetReducer';
import ajaxCallsInProgress from '../ajax/ajaxStatusReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  tasks,
  categories,
  widgets,
	ajaxCallsInProgress
});

export default rootReducer;
