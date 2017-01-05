import {LOAD_TASKS_SUCCESS, CREATE_TASK_SUCCESS} from '../constants/actionTypes';
import initialState from './initialState';

export default function loadTasksReducer(state = initialState.tasks, action) {
  switch(action.type) {
    case LOAD_TASKS_SUCCESS:
      return action.tasks;
    case CREATE_TASK_SUCCESS:
      return [
        ...state,
        Object.assign({ completed: false }, action.task)
      ];
    default:
      return state;
  }
}
