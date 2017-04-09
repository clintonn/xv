import React from 'react'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/userActions'

const Nav = props => {
  return (
    <div className="nav">
      <link rel="stylesheet" type="text/css" href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />
      <div className="nav__icons">
        <Link to="/resumes/new"><i className="icon ion-android-add-circle" /></Link>
        <Link to="/" onClick={e => {
          e.preventDefault()
          props.logoutUser()
        }}><i className="icon ion-log-out" /></Link>
      </div>
    </div>
  )
}

const mapStateToProps = store => {
  return {
    currentUser: store.users.currentUser
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ logoutUser }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
