import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexRedirect } from 'react-router'
import App from './components/App'
import ResultsPage from './components/ResultsPage'
import CompanyProfile from './components/CompanyProfile'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path=":state" component={ResultsPage}/>
    <Route path="/:state/:company_id" component={ResultsPage} />
  </Router>
  , document.getElementById('application'))
