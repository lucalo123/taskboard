import * as types from '../constants/actionTypes';
import {beginAjaxCall, ajaxCallError} from '../ajax/ajaxStatusActions';
import {emptyCategories} from '../task/taskActions';

import MockApi from '../api/mockApi';
const api = new MockApi();

function loadCategoriesSuccess(categories) {
	return {type: types.LOAD_CATEGORIES_SUCCESS, categories};
}

function createCategorySuccess(category) {
	return {type: types.CREATE_CATEGORY_SUCCESS, category};
}

function updateCategorySuccess(category) {
	return {type: types.UPDATE_CATEGORY_SUCCESS, category};
}

function deleteCategorySuccess(id) {
	return {type: types.DELETE_CATEGORY_SUCCESS, id};
}

export function loadCategories() {
	return dispatch => {
		dispatch(beginAjaxCall());
		return api.getCategories()
			.then(categories => dispatch(loadCategoriesSuccess(categories)))
			.catch(error => dispatch(ajaxCallError(error)));
	};
}

export function saveCategory(category) {

	return dispatch => {
		dispatch(beginAjaxCall());
		if (category.id != null) {
			// Update existing category
			return api.updateCategory(category)
				.then(category => dispatch(updateCategorySuccess(category)))
				.catch(error => dispatch(ajaxCallError(error)));
		}
		// Create new category
		return api.createCategory(category)
			.then(category => dispatch(createCategorySuccess(category)))
			.catch(error => dispatch(ajaxCallError(error)));
	};
}

export function deleteCategory(id) {
	return dispatch => {
		dispatch(beginAjaxCall());
		return api.deleteCategory(id)
			.then(() => dispatch(deleteCategorySuccess(id)))
			.then(() => dispatch(emptyCategories(id)))
			.catch(error => dispatch(ajaxCallError(error)));
	};
}