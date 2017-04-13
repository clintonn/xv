import React, { Component } from 'react'
class ResumeEditor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      created: false,
      resume: {
        title: "Name your resume",
        works: []
      }
    }
  }
  render() {
    return (
      <div className="reditor">
        <form className="reditor_form">
          <label className="reditor_form__label"><input type="text" className="reditor_form__input" placeholder="Title" />
          </label>
        </form>
      </div>
    )
  }
}

export default ResumeEditor
