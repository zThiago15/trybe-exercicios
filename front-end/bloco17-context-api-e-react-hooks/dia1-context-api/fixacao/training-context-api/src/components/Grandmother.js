import React, { Component } from 'react'
import Mother from './Mother'

export default class Grandmother extends Component {
  render() {
    return (
      <div>
        <p>Vó</p>
        <Mother />
      </div>
    )
  }
}
