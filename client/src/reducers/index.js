import { combineReducers } from 'redux';
import list from './list';
import parks from './parks';

const rootReducer = combineReducers({
  list,
  parks, // shorthand for lists: lists
});

export default rootReducer;
