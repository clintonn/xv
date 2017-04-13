import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../actions/userActions'
import { bindActionCreators } from 'redux'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      creds: {
        email: "",
        password: ""
      },
      submittedLogin: false,
      flash: ""
    }
  }

  updateCreds(e) {
    this.setState({...this.state,
      creds: {
        ...this.state.creds,
        [e.target.dataset.val]: e.target.value
      }
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.setState({...this.state, submittedLogin: true})
    this.props.loginUser(this.state.creds).then(resp => {
      if (!resp.payload) {
        this.setState({
          ...this.state,
          submittedLogin: false,
          flash: "Incorrect login, try again."
        })
      }
    })
  }


  render() {
    return (
      <div className="register flex_wrap">
        <div className="flash">
          <div className="flash__text" style={this.state.flash ? {"display": "inline-block"} : {"display": "none"}}>{this.state.flash}</div>
        </div>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <form className="register_form" onSubmit={this.handleSubmit.bind(this)} onChange={this.updateCreds.bind(this)}>
          <label>
            Email: <input type="text" className="register_form__input" data-val="email" placeholder="youre@hired.com" autoFocus />
          </label>
          <label>
            Password: <input type="password" className="register_form__input" data-val="password" />
          </label>
          <button className="dark_form_button">{this.state.submittedLogin ? <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw" style={{ fontSize: "1.2em" }} /> : "Log In"}</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ loginUser }, dispatch)

export default connect(null, mapDispatchToProps)(Login)
