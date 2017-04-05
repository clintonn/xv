import React from 'react'
import Login from '../components/login'
import { Link } from 'react-router'
import logo from '../logo_white.svg'

export default () => {
  return (
    <div className="center full_height darkbckgr">
      <div className="logoform flex_wrap_center">
        <Link to="/"><img src={logo} alt="xv logo" style={{marginTop: "10vh"}}/></Link>
      </div>
        <Login />
    </div>
  )
}
