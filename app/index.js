import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexRedirect } from 'react-router'
import App from './components/App'
import ResultsPage from './components/ResultsPage'
import ProfileDetails from './components/ProfileDetails'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path=":state" >
      <IndexRoute component={ResultsPage} />
      <Route path=":company" component={ProfileDetails} />
    </Route>
  </Router>
  , document.getElementById('application'))
