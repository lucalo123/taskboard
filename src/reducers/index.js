import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import tasks from './taskReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  tasks
});

export default rootReducer;
