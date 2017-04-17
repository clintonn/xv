import React from 'react'
import { connect } from 'react-redux'

const ResumeIndex = props => {
  return (
    <div className="resume_index">
      { (props.resumes.length > 1) ? (
        <h3 className="center resume_index__header">Here Are Your Resumes</h3>
      ) : (
        <h3 className="center resume_index__header">You have no resumes. Click the button above to add one.</h3>
      )}
    </div>
  )
}

const mapStateToProps = store => {
  return {
    resumes: store.users.currentUser.resumes
  }
}

export default connect(mapStateToProps)(ResumeIndex)
