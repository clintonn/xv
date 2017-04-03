import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Main from './containers/main'
import LoginContainer from './containers/loginContainer'
import SignupContainer from './containers/signupContainer'
import Dashboard from './containers/dashboard'

export default (
    <Router>
      <div>
        <Route exact path="/" component={Main} />
        <Route path="/login" component={LoginContainer} />
        <Route path="/register" component={SignupContainer} />
        <Route path="/dashboard" component={Dashboard} />
      </div>
    </Router>
)
