import React, { Component } from 'react'
import { connect } from 'react-redux'

class Login extends Component {
  render() {
    return (
      <form className="login__form">
        <label>
          Email: <input type="text" placeholder="youre@hired.com" />
        </label>
        <label>
          Password: <input type="password" />
        </label>
      </form>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    users: store.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
