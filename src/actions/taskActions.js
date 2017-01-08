import * as types from '../constants/actionTypes';
import MockApi from '../api/mockApi';

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

function deleteTasksSuccess(id) {
	return {
		type: types.DELETE_TASK_SUCCESS,
		id
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

export function deleteTask(id) {
	return dispatch => api.deleteTask(id).then(success => dispatch(deleteTasksSuccess(id)));
}
