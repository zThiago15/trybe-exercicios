import React, { Component } from 'react';
import './App.css';

class Name extends Component {

  render() {
    const { value, handleChange } = this.props;
    
    let error;
    if (value.length > 20) {
      error = "Erro: nome muito grande. Limite de 20 caracteres";
    }
    
    return (
      <>
        <input name="primeiroNome" type="text" value={value} onChange={handleChange}/>
        <span className='Error'>{error}</span>
      </>
    )
  }
}

export default Name;