import React from 'react'
import { connect } from 'react-redux'

const ResumeIndex = props => {
  console.log(props)
  return (
    <div className="resume_index">
      <h3>Here are all your resumes</h3>
      <h4>Hello {props.currentUser ? props.currentUser.first_name || "stranger" : "stranger"}</h4>
    </div>
  )
}

const mapStateToProps = store => {
  return {
    currentUser: store.users.currentUser
  }
}

export default connect(mapStateToProps)(ResumeIndex)
