import * as types from '../constants/actionTypes';

function loadWidgetsSuccess(widgets) {
  return {type: types.LOAD_WIDGETS_SUCCESS, widgets};
}

function changeOrderSuccess(from, to) {
  return {type: types.CHANGE_WIDGET_ORDER, from, to};
}

export function changeOrder(from, to) {
	return dispatch => dispatch(changeOrderSuccess(from, to));
}

export function loadWidgets(widgets) {
  return dispatch => dispatch(loadWidgetsSuccess(widgets));
}