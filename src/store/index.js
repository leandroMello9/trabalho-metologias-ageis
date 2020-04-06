import { combineReducers } from 'redux';
import todoStore from './todo/reducers';

const store = combineReducers({
  todo: todoStore,
});

export default store;
