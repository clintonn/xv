import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import resume from '../resume.svg'
const Header = () => {
  return (
    <header className="header">
      <div className="header__nav">
        <h1 className="logo header__logo">xv</h1>
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
