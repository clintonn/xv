import React from 'react'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/userActions'

const Nav = props => {
  return (
    <div className="nav">
      <div className="nav__links">
        <Link to="/">Profile</Link>
        <Link to="/logout" onClick={props.logoutUser}>Logout</Link>
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

export default connect()
