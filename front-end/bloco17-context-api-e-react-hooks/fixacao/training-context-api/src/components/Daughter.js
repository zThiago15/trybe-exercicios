import React, { Component } from 'react'
import MyContext from '../context-api/myContext'

export default class Daughter extends Component {
  render() {
    return (
      <div>
        <p>Filha</p>
        <MyContext.Consumer>
          {(value) => (
            <>
              <p>{`Ganhei ${value.myMoney} do meu bisavô`}</p>
              <button type="button" onClick={value.spendMoney}>Pedir IFOOD</button>   
            </>

          )}
        </MyContext.Consumer>
      </div>
    )
  }
}
