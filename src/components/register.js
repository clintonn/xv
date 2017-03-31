import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

export default class Register extends Component {

  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirmation: ""
    }
  }

  handleChange(e) {

  }

  checkEmail(e) {

  }

  render() {
    return (
      <div className="register flex_wrap">
        <form className="register_form" onChange={this.handleChange.bind(this)}>
            <label>First Name: <input type="text" className="register_form__input" autoFocus={true} value={this.state.firstName} placeholder="John" /></label>

            <label>Last Name: <input type="text" className="register_form__input" value={this.state.lastName} placeholder="Doe" /></label>

            <label>Email: <input type="text" className="register_form__input" value={this.state.email} placeholder="plz@hire.me" onChange={this.checkEmail.bind(this)} /></label>

            <label>Password: <input type="password" className="register_form__input" value={this.state.password} onChange={this.handleChange.bind(this)}/></label>

            <label>Password Confirmation: <input type="password" className="register_form__input" value={this.state.passwordConfirmation} onChange={this.handleChange.bind(this)} /></label>

          <button className="register_form__button">Register</button>
        </form>
      </div>
    )
  }
}

// const mapDispatchToProps = bindActionCreators()

// export default connect(null, mapDispatchToProps)(Register)
