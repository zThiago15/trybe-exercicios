import React, { Component } from 'react'
import "./App.css";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      opcao: '',  
      inputText: '',
      textArea: ''
    }
    this.handleTextInput = this.handleTextInput.bind(this);
  }

  handleTextInput(event) {
    this.setState({
      inputText: event.target.value,
    })
  }

  render() {
    return (
      <form>
        <select>
          <option> opção 1</option>
          <option> opção 2</option>
          <option> opção 3</option>
        </select>

        <input type="text" value={this.state.inputText} onChange={this.handleTextInput}/>
        <textarea></textarea>
        <input type="button" value="Enviar"/>

      </form>
    )
  }
}

export default Form;
