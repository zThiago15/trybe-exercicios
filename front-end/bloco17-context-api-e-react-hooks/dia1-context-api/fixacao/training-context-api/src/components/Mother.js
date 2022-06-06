import React, { Component } from 'react'
import Daughter from './Daughter'

export default class Mother extends Component {
  render() {
    return (
      <div>
        <p>Mãe</p>
        <Daughter />
      </div>
    )
  }
}
