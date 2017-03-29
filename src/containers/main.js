import React, { Component } from 'react'
import Splash from './splash'

export default class Main extends Component {
  render() {
    return (
    <div>
      { this.props.children }
      Hello main
      <Splash />
    </div>
  )}
}
