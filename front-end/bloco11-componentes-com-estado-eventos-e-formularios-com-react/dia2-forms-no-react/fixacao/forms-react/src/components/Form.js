import React, { Component } from 'react'
import "../App.css";
import Name from './Name';
import Textarea from './Textarea';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      sucoFavorito: 'Maracujá',  
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
    }, /* () => this.handleError() */)
    // Ajuda do gabarito

    this.handleError();
  }

  handleError() {
    const { sucoFavorito, primeiroNome, txtApresentacao } = this.state;
    const errorsCase = [!sucoFavorito.length, !primeiroNome.length, !txtApresentacao];
    console.log(!sucoFavorito.length);

    const hasError = errorsCase.some((error) => error === true);
    this.setState({
      formularioComErros: hasError,
    })
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

          <Name value={this.state.primeiroNome} handleChange={this.handleChange} />
          <Textarea value={this.state.txtApresentacao} handleChange={this.handleChange} />
        </fieldset>
        
        <label htmlFor="">Irá comparecer no evento?</label>
        <input name="vaiComparecer" type="checkbox" onChange={this.handleChange}/>
        <input  type="file"/>

        <input type="button" value="Enviar"/>

      </form>
    )
  }
}

export default Form;
