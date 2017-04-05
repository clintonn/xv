import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../actions/userActions'
import { bindActionCreators } from 'redux'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: ""
    }
  }

  updateCreds(e) {
    this.setState({...this.state, [e.target.dataset.val]: e.target.value})
  }


  render() {
    return (
      <div className="register flex_wrap">
        <form className="register_form" onSubmit={e => {
          e.preventDefault()
          this.props.loginUser(this.state)
        }} onChange={this.updateCreds.bind(this)}>
          <label>
            Email: <input type="text" className="register_form__input" data-val="email" placeholder="youre@hired.com" autoFocus />
          </label>
          <label>
            Password: <input type="password" className="register_form__input" data-val="password" />
          </label>
          <button className="register_form__button">Log In</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ loginUser }, dispatch)

export default connect(null, mapDispatchToProps)(Login)
