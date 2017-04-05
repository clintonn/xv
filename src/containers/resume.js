import React, { Component } from 'react'


export default class Resume extends Component {
  render() {
    return (
      <div className="resume">
        <h1 className="resume__name">Clinton Nguyen</h1>
        <section className="resume__contacts">

          <div className="resume__contact"><span className="resume__contact_label">Phone:</span>
          <span className="resume__contact_info"> 617-650-2456</span>
          </div>

        </section>
        <section className="resume__description">
          Etiam porta sem malesuada magna mollis euismod.
        </section>

        <section className="resume__body">
          {/* TODO: Add <ExperienceModule /> here */}
        </section>

      </div>
    )
  }
}
