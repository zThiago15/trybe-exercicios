import React, { Component } from 'react'
import "./App.css";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      sucoFavorito: '',  
      inputText: '',
      textArea: '',
      vaiComparecer: false,
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;

    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
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

          <input type="text" name="inputText" value={this.state.inputText} onChange={this.handleChange}/>
          <textarea name="textArea" onChange={this.handleChange}></textarea>

        </fieldset>
        
        <label id="vaiComparecer">Irá comparecer no evento?</label>
        <input id="vaiComparecer" name="vaiComparecer" type="checkbox" onChange={this.handleChange}/>
        <input  type="file"/>

        <input type="button" value="Enviar"/>

      </form>
    )
  }
}

export default Form;
