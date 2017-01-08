import * as types from '../constants/actionTypes';

export function beginAjaxCall() {
	return { type: types.BEGIN_AJAX_CALL };
}
