import {LOAD_CATEGORIES_SUCCESS, CREATE_CATEGORY_SUCCESS, UPDATE_CATEGORY_SUCCESS, DELETE_CATEGORY_SUCCESS} from '../constants/actionTypes';
import initialState from './initialState';

export default function loadCategoriesReducer(state = initialState.categories, action) {
  switch(action.type) {
    case LOAD_CATEGORIES_SUCCESS:
      return action.categories;
    case CREATE_CATEGORY_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.category)
      ];
    case UPDATE_CATEGORY_SUCCESS:
      return state.map(item => {
        if(item.id === action.category.id) {
          return Object.assign({}, action.category);
        }
        return item;
      });
    case DELETE_CATEGORY_SUCCESS:
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
}
