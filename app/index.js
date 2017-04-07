import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexRedirect } from 'react-router'
import App from './components/App'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
  </Router>
  , document.getElementById('application'))
