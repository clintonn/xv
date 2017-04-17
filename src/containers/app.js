import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCurrentUser } from '../actions/userActions'
import { bindActionCreators } from 'redux'

class XV extends Component {

  componentDidMount() {
    if (document.cookie && Object.keys(this.props.currentUser).length === 0) {
      this.props.getCurrentUser(document.cookie)
    }
  }

  render() {
    console.log(this.props.currentUser)
    return (
      <div className="xv-container">{this.props.children}</div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ getCurrentUser }, dispatch)

const mapStateToProps = store => { return {
  currentUser: store.users.currentUser
}}

export default connect(mapStateToProps, mapDispatchToProps)(XV)
