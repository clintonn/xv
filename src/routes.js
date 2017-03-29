import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Main from './containers/main'

export default (
    <Router>
      <Route path="/" component={Main} />
    </Router>
)
