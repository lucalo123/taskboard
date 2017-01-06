import * as types from '../constants/actionTypes';
import MockApi from '../utils/mockApi';

const api = new MockApi();

function createTaskSuccess(task) {
  return {
    type: types.CREATE_TASK_SUCCESS,
    task
  };
}

function updateTaskSuccess(task) {
	return {
		type: types.UPDATE_TASK_SUCCESS,
		task
	};
}

function loadTasksSuccess(tasks) {
  return {
    type: types.LOAD_TASKS_SUCCESS,
    tasks
  };
}

export function loadTasks() {
  return dispatch => api.getTasks().then(tasks => dispatch(loadTasksSuccess(tasks)));
}

export function saveTask(task) {
	// Update existing task
	if(task.id != null) {
		return dispatch => api.updateTask(task).then(task => dispatch(updateTaskSuccess(task)));
	}
	// Create new task
  return dispatch => api.createTask(task).then(task => dispatch(createTaskSuccess(task)));
}
