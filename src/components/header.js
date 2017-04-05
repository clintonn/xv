import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import resume from '../resume.svg'
import logo from '../logo_white.svg'

const Header = props => {
  return (
    <header className="header">
      <div className="header__nav">
        <Link to="/"><img src={logo} alt="xv logo" className="header__logo" /></Link>
        <div className="header__links">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </div>
      <div className="header__resume"><img src={resume} className="resume" alt="Example resume for xv" /></div>
    </header>
  )
}

const mapStateToProps = store => { return { currentUser: store.users.currentUser }}

export default connect(mapStateToProps)(Header)
