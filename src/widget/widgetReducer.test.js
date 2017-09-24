import * as types from '../constants/actionTypes';
import reducer from './widgetReducer';
import assert from 'assert';

import mockData from '../api/mockData';

describe('Widget>Reducers', () => {
  it('should load widgets', () => {
    const act = {
      type: types.LOAD_WIDGETS_SUCCESS,
      widgets: mockData.widgets
    };
    const newState = reducer([], act);
    assert.deepEqual(newState, mockData.widgets);
  });
});
