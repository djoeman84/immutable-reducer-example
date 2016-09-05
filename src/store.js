import { createStore, combineReducers } from 'redux'
import { userReducer } from 'redux-caller';

export const store = createStore(combineReducers({
  user: userReducer
}));