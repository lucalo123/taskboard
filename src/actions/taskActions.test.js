import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as types from '../constants/actionTypes';
import * as actions from './taskActions';
import assert from 'assert';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Task>Actions', () => {
	const initialState = {
		tasks: []
	};
	let store = mockStore(initialState);

	afterEach(() => {
		store.clearActions();
	});

	it('should create new task', () => {
		const task = {
			name: 'Task #1',
			category: 'Daily chore'
		};

		const expectedActions = [
			{type: types.BEGIN_AJAX_CALL},
			{
				type: types.CREATE_TASK_SUCCESS,
				task: {
					name: 'Task #1',
					category: 'Daily chore',
					category_id: undefined,
					completed: false,
					id: 1
				}
			}
		];

		return store.dispatch(actions.saveTask(task))
			.then(() => {
				assert.deepEqual(store.getActions(), expectedActions);
			});

	});

	it('should update task', () => {

		const task = {
			id: 0,
			completed: true,
			name: 'Drowning',
			category: 'Exercise'
		};

		const expectedActions = [
			{type: types.BEGIN_AJAX_CALL},
			{type: types.UPDATE_TASK_SUCCESS, task}
		];

		return store.dispatch(actions.saveTask(task))
			.then(() => {
				assert.deepEqual(store.getActions(), expectedActions);
			});

	});

	it('should load tasks', () => {

		return store.dispatch(actions.loadTasks())
			.then(() => {
				const result = store.getActions();
				assert.equal(result[1].type, types.LOAD_TASKS_SUCCESS);
				assert(result[1].tasks.length > 0, 'Tasks length > 0');
			});
	});

	it('should delete task', () => {
		const expectedActions = [
			{type: types.BEGIN_AJAX_CALL},
			{type: types.DELETE_TASK_SUCCESS, id: 0}
		];

		return store.dispatch(actions.deleteTask(0))
			.then(() => {
				const result = store.getActions();
				assert.deepEqual(result, expectedActions);
			});
	});

	it('should dereference categories by id', () => {
		const expectedActions = [
			{type: types.EMPTY_CATEGORIES_SUCCESS, id: 0}
		];

		store.dispatch(actions.emptyCategories(0));
		const result = store.getActions();
		assert.deepEqual(result, expectedActions);
	});


});
