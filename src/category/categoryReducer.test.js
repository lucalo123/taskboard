import * as types from '../constants/actionTypes';
import reducer from '././categoryReducer';
import assert from 'assert';

import mockData from '../api/mockData';

describe('Category>Reducers', () => {

  it('should load categories', () => {
    const act = {
      type: types.LOAD_CATEGORIES_SUCCESS,
      categories: mockData.categories
    };
    const newState = reducer([], act);
    assert.deepEqual(newState, mockData.categories);
  });

  it('should create new category', () => {
    const act = {
      type: types.CREATE_CATEGORY_SUCCESS,
      category: {name: 'New category'}
    };
    const newState = reducer([], act);
    assert(newState.length === 1, 'Categories length === 1');
  });

  it('should delete category', () => {
		const act = {
			type: types.DELETE_CATEGORY_SUCCESS,
			id: 0
		};
		const newState = reducer([{id: 0, name: 'Exercise'}], act);
		assert.strictEqual(newState.length, 0, 'Categories length === 0');
	});

  it('should update existing category', () => {
    const updatedCategory = {id: 0, category: 'Change stuff'};

		const act = {
			type: types.UPDATE_CATEGORY_SUCCESS,
			category: updatedCategory
		};

		const newState = reducer([{id: 0, name: 'Exercise'}], act);
    assert.deepEqual(newState[0], updatedCategory);
	});
});
