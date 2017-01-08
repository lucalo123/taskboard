import * as types from '../constants/actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

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
	return dispatch => {
		dispatch(beginAjaxCall());
		return api.getTasks().then(tasks => dispatch(loadTasksSuccess(tasks)))
	};
}

export function saveTask(task) {

	return dispatch => {
		dispatch(beginAjaxCall());
		if (task.id != null) {
			// Update existing task
			return api.updateTask(task).then(task => dispatch(updateTaskSuccess(task)));
		}
		// Create new task
		return api.createTask(task).then(task => dispatch(createTaskSuccess(task)));
	}
}

export function deleteTask(id) {
	return dispatch => {
		dispatch(beginAjaxCall());
		return api.deleteTask(id).then(success => dispatch(deleteTasksSuccess(id)));
	}
}
