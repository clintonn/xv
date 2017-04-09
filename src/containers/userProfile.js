import React from 'react'
import { connect } from 'react-redux'

const UserProfile = props => {
  return (
    <div className="profile">
      Here's Your Profile Dude
    </div>
  )
}

const mapStateToProps = store => {
  return {
    currentUser: store.users.currentUser
  }
}
export default connect(mapStateToProps)(UserProfile)
