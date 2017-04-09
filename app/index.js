import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexRedirect } from 'react-router'
import App from './components/App'
import ResultsPage from './components/ResultsPage'


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="companies" component={ResultsPage} />
  </Router>
  , document.getElementById('application'))
