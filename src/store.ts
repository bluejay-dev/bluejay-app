import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { devToolsEnhancer } from 'redux-devtools-extension';
import rootReducer from './reducers/index';

export const history = createHistory();

const initialState = {};
const enhancers = [devToolsEnhancer({})];
const middleware = [routerMiddleware(history)];
const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

export default createStore(rootReducer, initialState, composedEnhancers);
