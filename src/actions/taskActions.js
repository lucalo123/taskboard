import * as types from '../constants/actionTypes';

export function loadTasks() {
  return function (dispatch) {
    return dispatch({
      type: types.LOAD_TASKS_SUCCESS,
      tasks: ['Task #1', 'Task #2']
    });
  };
}
