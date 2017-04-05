import React from 'react'
import ResumeIndex from './resumeIndex'
import Nav from '../components/nav'

export default () => {
  return (
    <div className="dashboard">
      <Nav />
      <ResumeIndex />
      <button className="dashboard__create">Create a new resume</button>
    </div>
  )
}
