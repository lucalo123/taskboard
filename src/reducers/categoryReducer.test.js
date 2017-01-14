import * as types from '../constants/actionTypes';
import reducer from '././taskReducer';
import assert from 'assert';

import mockData from '../api/mockData';

describe('Category>Reducers', () => {

  it('should load categories', () => {
    const act = {
      type: types.LOAD_CATEGORIES_SUCCESS,
      tasks: mockData.tasks
    };
    const result = reducer([], act);
    assert.deepEqual(result, mockData.categories);
  });
});
