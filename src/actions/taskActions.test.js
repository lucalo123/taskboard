import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as types from '../constants/actionTypes';
import * as actions from './taskActions';
import assert from 'assert';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('Task>Actions', () => {
  const initialState = {
    tasks: []
  };

  it('should create new task', () => {
    const task = {
      name: 'Task #1',
      type: 'Daily chore'
    };

    const expectedActions = [{
      type: types.CREATE_TASK_SUCCESS,
      task: {
        name: 'Task #1',
        type: 'Daily chore',
        completed: false,
        id: 0
      }
    }];

    const store = mockStore(initialState);

    return store.dispatch(actions.saveTask(task))
      .then(() => {
        assert.deepEqual(store.getActions(), expectedActions);
      });

  });

  it('should update task', () => {

		const store = mockStore({
			tasks: [{
				id: 0,
				completed: false,
				name: 'Swimming',
				type: 'Exercise'
			}]
		});

		const updatedTask = {
			id: 0,
			completed: true,
			name: 'Drowning',
			type: 'Exercise'
		};

		const expectedActions = [{
			type: types.UPDATE_TASK_SUCCESS,
			task: updatedTask
		}];

		return store.dispatch(actions.saveTask(updatedTask))
			.then(() => {
				assert.deepEqual(store.getActions(), expectedActions);
			});

	});

  it('should load tasks', () => {
    const loadedTasks = [
      {
        id: 0,
        name: 'Task #1',
        type: 'Daily chore',
        completed: false
      },
      {
        id: 1,
        name: 'Task #2',
        type: 'House chore',
        completed: true
      }
    ];

    const store = mockStore(initialState);

    const expectedActions = [{
      type: types.LOAD_TASKS_SUCCESS,
      tasks: loadedTasks
    }];

    return store.dispatch(actions.loadTasks())
      .then(() => {
        assert.deepEqual(store.getActions(), expectedActions);
      });
  });
});
