import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { connect } from 'react-redux'
import Dashboard from './dashboard'

const Main = props => {
  return Object.keys(props.currentUser).length > 1 ? <Dashboard /> : (
  <div className="splashpage">
    <Header />
    <div className="brochure center">
      <link rel="stylesheet" href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />
      <div className="brochure__item">
      <h3 className="brochure__header">
        Make dead simple sharable resumes in minutes.
      </h3>
      <i className="icon ion-ios-paper-outline"></i>
      </div>
      <div className="brochure__item">
      <h3 className="brochure__header">
        Duplicate it and tailor copies for any job.
      </h3>
      <i className="icon ion-ios-albums-outline"></i>
    </div>
  </div>
  <Footer />
  </div>
  )
}

const mapStateToProps = store => {
  return {
    currentUser: store.users.currentUser
  }
}

export default connect(mapStateToProps)(Main)
