import React, { Component } from 'react'
import { getCurrentUser } from '../actions/adapters/userAdapter'
import { fetchResume } from '../actions/adapters/resumeAdapter'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

class ResumeEditor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      fullName: "",
      contacts: [],
      /*
        Contact JSON obj will come back like this:
        {id: ###, type: "", value: ""}
        No endpoint will be made for contacts, so they'll be secure so long as the read for resume is auth'd
      */
    }
  }

  renderContacts() {
    return this.state.contacts.map(contact => { return (
      <form onChange={this.handleContactChange.bind(this)} data-contact-id={contact.id}>
        <select name={`contact-type-${contact.id}`}>
          <option>Email</option>
          <option>Phone</option>
          <option>Site</option>
          <option>Twitter</option>
          <option>Blog</option>
        </select>
        <input type="text" placeholder="value"></input>
      </form>
    )}
  )}

  componentWillMount() {
    if (!this.props.currentUser.resumes.filter(resume => resume.hashUrl === this.props.params.id)) {
      browserHistory.push({
        pathname: "/401",
        state: { flash: "You're not authorized to edit that resume." }
      })
    }
  }

  async getUser() {

  }

  componentDidMount() {
    // ajax call to fetch resume details into state
  }

  render() {
    return (
      <div className="reditor">
        <form className="reditor_form">
          <label className="reditor_form__label"><input type="text" className="reditor_form__input" placeholder="Title" />
          <div className="reditor_form__contacts">

          </div>
          </label>
        </form>
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    currentUser: store.users.currentUser
  }
}

export default connect(mapStateToProps)(ResumeEditor)
