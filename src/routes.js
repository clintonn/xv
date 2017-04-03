import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import Main from './containers/main'
import LoginContainer from './containers/loginContainer'
import SignupContainer from './containers/signupContainer'
import Dashboard from './containers/dashboard'

export default (
    <Router history={browserHistory}>
      <div>
        <Route exact path="/" component={Main} />
        <Route path="/login" component={LoginContainer} />
        <Route path="/register" component={SignupContainer} />
        <Route path="/dashboard" component={Dashboard} />
      </div>
    </Router>
)
