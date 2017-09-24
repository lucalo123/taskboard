import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as types from '../constants/actionTypes';
import * as actions from './widgetActions';
import assert from 'assert';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Widget>Actions', () => {
  const initialState = {
		widgets: []
	};
	let store = mockStore(initialState);

	afterEach(() => {
		store.clearActions();
  });
  
  it('should load widgets', () => {
      let result = store.dispatch(actions.loadWidgets([{name: 'Widget 1', description: 'Widget description', order: 0}]));
      assert.equal(result.type, types.LOAD_WIDGETS_SUCCESS);
      assert(result.widgets.length > 0, 'Widgets length > 0, length');
      /*
      return store.dispatch(actions.loadWidgets())
        .then(() => {
          const result = store.getActions();
          assert.equal(result[1].type, types.LOAD_TASKS_SUCCESS);
          assert(result[1].tasks.length > 5, 'Tasks length > 0');
        });
        */
      
      });
});
