import React, { Component } from 'react'
import "./App.css";
import Name from './Name';
import Textarea from './Textarea';

const sla = () => {

}

class Form extends Component {
  constructor() {
    super();

    this.state = {
      sucoFavorito: '',  
      primeiroNome: '',
      txtApresentacao: '',
      vaiComparecer: false,
      formularioComErros: false
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;

    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    })
  }

  handleError() {
    this.setState({ formularioComErros: true})
  }

  render() {
    return (
      <form>

        <fieldset>
          <legend>Preenche os seus dados</legend>
          <select name="sucoFavorito" value={this.state.opcaoFavorita} onChange={this.handleChange}>
            <option disabled> Suco favorito </option>
            <option>Maracujá</option>
            <option>Limão</option>
            <option>Manga</option>
          </select>

          <Name value={this.state.primeiroNome} handleChange={this.handleChange}/>
          <Textarea value={this.state.txtApresentacao} handleChange={this.handleChange} handleError={this.handleError}/>
        </fieldset>
        
        <label>Irá comparecer no evento?</label>
        <input name="vaiComparecer" type="checkbox" onChange={this.handleChange}/>
        <input  type="file"/>

        <input type="button" value="Enviar"/>

      </form>
    )
  }
}

export default Form;
