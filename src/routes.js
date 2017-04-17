import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import Main from './containers/main'
import LoginContainer from './containers/loginContainer'
import SignupContainer from './containers/signupContainer'
import Dashboard from './containers/dashboard'
import UserProfile from './containers/userProfile'
import ResumeEditor from './containers/resumeEditor'
import Unauthorized from './containers/unauthorized'
import XV from './containers/app'

export default (
    <Router history={browserHistory}>
      <div>
        <Route component={XV}>
          <Route exact path="/" component={Main} />
          <Route path="/login" component={LoginContainer} />
          <Route path="/register" component={SignupContainer} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/401" component={Unauthorized} />
          <Route path="/resumes/:id/edit" component={ResumeEditor} />
          <Route path="/u/:id" component={UserProfile} />
        </Route>
      </div>
    </Router>
)
