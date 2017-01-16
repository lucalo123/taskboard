import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as types from '../constants/actionTypes';
import * as actions from './categoryActions';
import assert from 'assert';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Category>Actions', () => {

	let store = mockStore({categories: []});

	afterEach(() => {
		store.clearActions();
	});

	it('should create new category', () => {
		const expectedActions = [
			{type: types.BEGIN_AJAX_CALL},
			{
				type: types.CREATE_CATEGORY_SUCCESS,
				category: {
					name: 'New category',
					id: 0
				}
			}
		];

		return store.dispatch(actions.saveCategory({name: 'New category'}))
			.then(() => {
				assert.deepEqual(store.getActions(), expectedActions);
			});
	});

	it('should load categories', () => {

		return store.dispatch(actions.loadCategories())
			.then(() => {
				const result = store.getActions();
				assert.equal(result[1].type, types.LOAD_CATEGORIES_SUCCESS);
				assert.ok(result[1].categories.length > 0, 'No categories returned');
			});
	});

	it('should delete category', () => {
		const expectedActions = [
			{type: types.BEGIN_AJAX_CALL},
			{type: types.DELETE_CATEGORY_SUCCESS, id: 0}
		];

		return store.dispatch(actions.deleteCategory(0))
			.then(() => {
				const result = store.getActions();
				assert.deepEqual(result, expectedActions);
			});
	});

	it('should update existing category', () => {

		const category = {
			id: 0,
			name: 'Learning'
		};

		const expectedActions = [
			{type: types.BEGIN_AJAX_CALL},
			{type: types.UPDATE_CATEGORY_SUCCESS, category}
		];

		return store.dispatch(actions.saveCategory(category))
			.then(() => {
				assert.deepEqual(store.getActions(), expectedActions);
			});
	});
});
