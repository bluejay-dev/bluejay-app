import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import AppReducer from './app';

const rootReducer = combineReducers({
  app: AppReducer,
  router: routerReducer,
});

export default rootReducer;
