import {LOAD_TASKS_SUCCESS} from '../constants/actionTypes';
import initialState from './initialState';

export default function loadTasksReducer(state = initialState.tasks, action) {
  switch(action.type) {
    case LOAD_TASKS_SUCCESS:
      return action.tasks;
    default:
      return state;
  }
}
