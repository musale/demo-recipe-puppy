import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, DefaultRoute} from 'react-router';
import App from '../containers/App';
import { IndexRoute } from 'react-router';

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={App} />
    </Route>
  </Router>
);

export default routes;
