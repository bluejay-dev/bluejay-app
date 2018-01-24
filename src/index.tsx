import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import AppView from './containers/AppView';
import store, { history } from './store';
import registerServiceWorker from './registerServiceWorker';
// import './index.css';

const root = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path="/" component={AppView} />
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(root, document.getElementById('root') as HTMLElement);
registerServiceWorker();
