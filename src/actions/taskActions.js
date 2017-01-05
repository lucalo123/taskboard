import * as types from '../constants/actionTypes';
import MockApi from '../utils/mockApi';

const api = new MockApi();

function createTaskSuccess(task) {
  return {
    type: types.CREATE_TASK_SUCCESS,
    task
  }
};
function loadTasksSuccess(tasks) {
  return {
    type: types.LOAD_TASKS_SUCCESS,
    tasks
  };
};

export function loadTasks() {
  return dispatch => {
    return api.getTasks().then(data => dispatch(loadTasksSuccess(data.tasks)));
  };
}

export function addTask(task) {
  return dispatch => {
    return api.saveTask(task).then(task => dispatch(createTaskSuccess(task)));
  };
}
