import React, { Component } from 'react'
import './App.css';

class Textarea extends Component {
  render() {
    const { value, handleChange, handleError } = this.props;

    let error;
    if(value.length > 5) {
      error = "Erro: texto grande demais. Limite de 120 caracteres.";
      handleError()
    }

    return (
      <>
        <textarea name="txtApresentacao" value={value} onChange={handleChange}></textarea>
        <span className='Error' onChange={handleError}>{error}</span>
      </>
    )
  }
}

export default Textarea;