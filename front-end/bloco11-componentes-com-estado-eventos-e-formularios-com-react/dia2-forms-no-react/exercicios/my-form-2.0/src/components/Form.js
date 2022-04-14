import React, { Component } from 'react'
import '../App.css';
import DataFieldset from './DataFieldset.js' ;
import CurriculumFieldset from './CurriculumFieldset.js' 
// import Enviar from './Enviar.js';

class Form extends Component {
  constructor() {
    super();
  }

  showDataFilled(e) {
    alert('oi');
  }

  render() {
    return (
      <form>
        <DataFieldset />
        <CurriculumFieldset />

        
        <button onClick={this.showDataFilled()}>Enviar</button>
        <button>Limpar</button>
      </form>
    )
  }
}

export default Form;
