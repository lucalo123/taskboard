import * as types from '../constants/actionTypes';
import reducer from '././taskReducer';
import assert from 'assert';

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
    assert.deepEqual(result, [ { name: 'New Task', type: 'New', completed: false } ]);
  });

  it('should load tasks', () => {
    const mockData = require('../utils/mockData.json');
    const act = {
      type: types.LOAD_TASKS_SUCCESS,
      tasks: mockData.tasks
    };
    const result = reducer([], act);
    assert.deepEqual(result, mockData.tasks);
  });
});
