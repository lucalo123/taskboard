import * as types from '../constants/actionTypes';
import reducer from './taskReducer';
import assert from 'assert';

import moment from 'moment';

import mockData from '../api/mockData';

describe('Task>Reducers', () => {

	const mockTasks = [
			{
				id: 0,
				name: 'Drowning',
				category: 'Exercise',
				completed: false
			}
		];
  
  it('should create new task', () => {
		const act = {
			type: types.CREATE_TASK_SUCCESS,
			task: {
				name: 'New Task',
				category: 'Exercise'
			}
		};
		const newState = reducer([], act);
		assert(newState.length === 1, 'Tasks length === 1');
	});

	it('should update existing task', () => {
		const updatedTask = {
			id: 0,
			name: 'Drowning',
			category: 'Exercise',
			completed: true
		};

		const act = {
			type: types.UPDATE_TASK_SUCCESS,
			task: updatedTask
		};

		const newState = reducer(mockTasks, act);
		assert.deepEqual(newState[0], updatedTask);
	});

  it('should load tasks', () => {
    const act = {
      type: types.LOAD_TASKS_SUCCESS,
      tasks: mockData.tasks
    };
    const newState = reducer([], act);
    assert.deepEqual(newState, mockData.tasks);
  });

	it('should delete task', () => {
		const act = {
			type: types.DELETE_TASK_SUCCESS,
			id: 0
		};
		const initial = [
			{
				id: 0,
				name: 'Drowning',
				category: 'Exercise',
				completed: true
			}
		];
		const newState = reducer(initial, act);
		assert.ok(newState.length === 0, 'Expected tasks array to be empty');
	});

	it('should dereference categories', () => {
		const act = {
			type: types.EMPTY_CATEGORIES_SUCCESS,
			id: 1
		};
		const t = [
			{
				id: 0,
				name: 'Drowning',
				category: 'Exercise',
				category_id: 1,
				completed: false
			}
		];
		const updatedTask = {
			id: 0,
			name: 'Drowning',
			category: '- None -',
			category_id: 0,
			completed: false
		};
		const newState = reducer(t, act);
		assert.deepEqual(newState[0], updatedTask);
	});
});
