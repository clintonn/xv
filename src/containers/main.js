import React, {Component} from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Dashboard from './dashboard'
import Loading from './loading'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCurrentUser } from '../actions/userActions'

class Main extends Component {

  componentDidMount() {
    if (document.cookie) {
      this.props.getCurrentUser()
    }
  }


  render() {
    return Object.keys(this.props.currentUser).length > 1 ? <Dashboard /> : (document.cookie ? <Loading /> : 
    <div className="splashpage">
      <Header />
      <div className="brochure center">
        <link rel="stylesheet" href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />
        <div className="brochure__item">
        <h3 className="brochure__header">
          Make dead simple sharable resumes in minutes.
        </h3>
        <i className="icon brochure__icon ion-ios-paper-outline"></i>
        </div>
        <div className="brochure__item">
        <h3 className="brochure__header">
          Duplicate it and tailor copies for any job.
        </h3>
        <i className="icon brochure__icon ion-ios-albums-outline"></i>
      </div>
    </div>
    <Footer />
    </div>
  )}
}

const mapStateToProps = store => {
  return {
    currentUser: store.users.currentUser
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ getCurrentUser }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Main)
