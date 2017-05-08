import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes/index';
import configureStore from './redux/Store';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('app')
);
