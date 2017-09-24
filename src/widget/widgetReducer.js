import {CHANGE_WIDGET_ORDER, LOAD_WIDGETS_SUCCESS} from '../constants/actionTypes';
import initialState from '../store/initialState';

export default function loadTasksReducer(state = initialState.widgets, action) {
  switch(action.type) {
    case LOAD_WIDGETS_SUCCESS:
      return action.widgets;
    case CHANGE_WIDGET_ORDER:
      const fromWidget = state[action.from];
      const toWidget = state[action.to];
      let newState = state.slice();
      newState[action.from] = toWidget;
      newState[action.to] = fromWidget;
      return newState;
    default:
      return state;
  }
}

