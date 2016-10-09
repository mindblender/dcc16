import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './components/container/App';
import Home from './components/container/Home';
import Search from './components/container/Search';

import './assets/styles/main.css';

injectTapEventPlugin();

ReactDOM.render(
  <div>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="search" component={Search}/>
      </Route>
    </Router>
  </div>,
  document.getElementById('container')
);