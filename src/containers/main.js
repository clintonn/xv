import React, { Component } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

export default class Main extends Component {
  render() {
    return (
    <div className="splashpage">
      <Header />
      <div className="brochure center">
        <div className="brochure__item">
        <h3 className="brochure__header">
          Make dead simple sharable resumes in minutes.
        </h3>
        <i className="icon ion-ios-paper-outline"></i>
        </div>
        <div className="brochure__item">
        <h3 className="brochure__header">
          Duplicate your resume and tailor it for any job.
        </h3>
        <i className="icon ion-ios-albums-outline"></i>
      </div>
    </div>
    <Footer />
    </div>
  )}
}
