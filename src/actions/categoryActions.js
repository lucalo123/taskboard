import * as types from '../constants/actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

import MockApi from '../api/mockApi';
const api = new MockApi();

function loadCategoriesSuccess(categories) {
	return {type: types.LOAD_CATEGORIES_SUCCESS, categories};
}

export function loadCategories() {
	return dispatch => {
		dispatch(beginAjaxCall());
		return api.getCategories()
			.then(categories => dispatch(loadCategoriesSuccess(categories)))
			.catch(error => dispatch(ajaxCallError(error)));
	};
}
