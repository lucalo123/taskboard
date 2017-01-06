import * as types from '../constants/actionTypes';
import reducer from '././taskReducer';
import assert from 'assert';

import mockData from '../utils/mockData.js';

describe('Task>Reducers', () => {
  const act = {
    type: types.CREATE_TASK_SUCCESS,
    task: {
      name: 'New Task',
      type: 'New'
    }
  };
  it('should create new task', () => {
		const result = reducer([], act);
		assert.ok(result.length > 0);
	});

	it('should update existing task', () => {
		const updatedTask = {
			id: 0,
			name: 'Drowning',
			type: 'Exercise',
			completed: true
		};

		const act = {
			type: types.UPDATE_TASK_SUCCESS,
			task: updatedTask
		};

		const result = reducer([ updatedTask ], act);
		assert.deepEqual(result[0], updatedTask);
	});

  it('should load tasks', () => {
    const act = {
      type: types.LOAD_TASKS_SUCCESS,
      tasks: mockData.tasks
    };
    const result = reducer([], act);
    assert.deepEqual(result, mockData.tasks);
  });
});
