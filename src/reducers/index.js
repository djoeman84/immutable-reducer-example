import { combineReducers } from 'redux'
import { todoReducer as todos } from './todos';

export const reducers = combineReducers({
  todos
});
