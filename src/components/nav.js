import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav__logo">xv</div>
      <div className="nav__links">
        <Link to={"/login"}>Login</Link>
      </div>
    </div>
  )
}

const mapStateToProps = store => { return { currentUser: store.users.currentUser }}

export default connect(mapStateToProps)(Nav)
