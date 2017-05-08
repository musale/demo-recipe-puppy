import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, DefaultRoute} from 'react-router';
import Home from '../components/Home';
import { IndexRoute } from 'react-router';

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Home}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
);

export default routes;
