import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Main from './containers/main'
import LoginContainer from './containers/loginContainer'
import SignupContainer from './containers/signupContainer'

export default (
    <Router>
      <div>
        <Route exact path="/" component={Main} />
        <Route path="/login" component={LoginContainer} />
        <Route path="/register" component={SignupContainer} />
      </div>
    </Router>
)
