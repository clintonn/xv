import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

export default class Register extends Component {
  render() {
    return (
      <form className="register_form">
        <label>First Name: <input type="text" placeholder="John" /></label>
        <label>Last Name: <input type="text" placeholder="Doe" /></label>
        <label>Email: <input type="text" placeholder="plz@hire.me" /></label>
        <label>Password: <input type="password" /></label>
        <button>Register</button>
      </form>
    )
  }
}

// const mapDispatchToProps = bindActionCreators()

// export default connect(null, mapDispatchToProps)(Register)
