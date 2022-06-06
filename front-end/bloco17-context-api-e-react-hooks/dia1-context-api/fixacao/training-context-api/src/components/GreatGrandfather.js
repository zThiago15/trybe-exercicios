import React, { Component } from 'react'
import MyContext from '../context-api/myContext'
import Grandmother from './Grandmother'

export default class GreatGrandfather extends Component {
  state = {
    heritance: 1000000,
  }

  spendMoney = () => {
    this.setState((prevState) => ({
      heritance: prevState.heritance - 100,
    }))
  }

  render() {
    const contextValue = {
      myMoney: this.state.heritance,
      spendMoney: this.spendMoney
    }
    return (
      <MyContext.Provider value={contextValue}>
        <p>Bisavô</p>
        <Grandmother />
      </MyContext.Provider>
    )
  }
}
