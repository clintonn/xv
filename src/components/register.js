import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createUser } from '../actions/userActions'

class Register extends Component {

  constructor() {
    super()
    this.state = {
      user: {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        passwordConfirmation: "",
      },
      alerts: {
      usernameInfo: "",
      emailInfo: "",
      passwordAlert: "Longer than 8 characters"
    }}
  }

  handleChange(e) {
    let stateKey = e.target.dataset.val
    this.setState({...this.state, user: {...this.state.user, [stateKey]: e.target.value}})
  }

  validateEmail(e) {
    return true
  }

  validateUsername(e) {
    // TODO: async validation goes here
  }

  validatePassword(e) {
    return true
  }

  finalValidation() {
    return true
  }

  handleRegistration(e) {
    e.preventDefault()
    // TODO: add final validations before submission here...
    this.props.createUser(this.state.user)
  }

  render() {
    return (
      <div className="register flex_wrap">
        <form className="register_form" onChange={this.handleChange.bind(this)} onSubmit={this.handleRegistration.bind(this)}>
            <label>First Name: <input type="text" className="register_form__input" data-val="firstName" autoFocus={true} value={this.state.user.firstName} placeholder="John" /></label>

            <label>Last Name: <input type="text" className="register_form__input" data-val="lastName" value={this.state.user.lastName} placeholder="Doe" /></label>

            <label>Username: <input type="text" className="register_form__input" data-val="username" value={this.state.user.username} onBlur={this.validateUsername.bind(this)} placeholder="johndoe" /></label>
            <div className="register_form__reminder">Shows up as xv.cv/{this.state.user.username || "yourusername"} <span></span></div>

            <label>Email: <input type="text" className="register_form__input" data-val="email" value={this.state.user.email} placeholder="plz@hire.me" onChange={this.validateEmail.bind(this)} /></label>
            <div className="register_form__reminder">{this.state.alerts.emailInfo}</div>

            <label>Password: <input type="password" className="register_form__input" data-val="password" value={this.state.user.password} onChange={this.validatePassword.bind(this)} /></label>
            <div className="register_form__reminder">{this.state.alerts.passwordAlert}</div>

            <label>Password Confirmation: <input type="password" className="register_form__input" data-val="passwordConfirmation" value={this.state.user.passwordConfirmation} /></label>

          <button className="register_form__button">Register</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({createUser}, dispatch )

export default connect(null, mapDispatchToProps)(Register)
