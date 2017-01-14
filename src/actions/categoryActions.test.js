import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as types from '../constants/actionTypes';
import * as actions from './categoryActions';
import assert from 'assert';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Category>Actions', () => {
	const initialState = {
		categories: []
	};

	it('should load categories', () => {
		const store = mockStore(initialState);

		return store.dispatch(actions.loadCategories())
			.then(() => {
				const result = store.getActions();
				assert.equal(result[1].type, types.LOAD_CATEGORIES_SUCCESS);
				assert.ok(result[1].categories.length > 0, 'No categories returned');
			});
	});
});
