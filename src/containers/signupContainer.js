import React from 'react'
import Register from '../components/register'
import logo from '../logo_white.svg'
import { Link } from 'react-router'
export default () => {
  return (
    <div className="center full_height darkbckgr">
      <div className="logoform flex_wrap_center">
        <Link to="/"><img src={logo} alt="xv logo" style={{paddingTop: "6em"}}/></Link>
      </div>
        <Register />
  </div>
  )
}
