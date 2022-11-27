import React, { Component } from 'react'
import '../App.css';
import DataFieldset from './DataFieldset.js' ;
import CurriculumFieldset from './CurriculumFieldset.js' 
// import Enviar from './Enviar.js';

const initialState = {
  nome: '',
  email: '',
  cpf: '',
  endereco: '',
  cidade: '',
  estado: 'AC',
  residencia: 'Casa',
  cv: '',
  cargo: '',
  descricao: ''
};

class Form extends Component {
  constructor() {
    super();
    this.state = initialState;

    this.handleChange = this.handleChange.bind(this);
    this.validateCity = this.validateCity.bind(this);
    this.showDataFilled = this.showDataFilled.bind(this);
    this.cleanData = this.cleanData.bind(this);
  }

  verificarComponente(name, value) {
    switch (name) {
      case 'nome':
        return value.toUpperCase();

      case 'endereco':
        // Remover caractere especial -https://blog.dbins.com.br/remover-acentos-e-caracteres-especiais-com-javascript#:~:text=Se%20voc%C3%AA%20tem%20uma%20string,acentos%20por%20caracteres%20sem%20acentua%C3%A7%C3%A3o.&text=A%20fun%C3%A7%C3%A3o%20%22normalize%22%20utiliza%20a,converter%20os%20caracteres%20com%20acentos.

        // Bonus - formating email with regex
        return value.replace(/^[a-z0-9.]+@gmail+\.[a-z]{3,}$/g)
      
      default:
        return value;
    }
  }

  handleChange({ target }) {
    const { name } = target;

    const value = this.verificarComponente(name, target.value);
    // nome pra uppercase

    this.setState({
      [name]: value,
    })
  }

  validateCity({ target }) {

    // Checar se tem número - https://stackoverflow.com/questions/5778020/check-whether-an-input-string-contains-a-number-in-javascript
    const startsWithNumber = /\d/.test(target.value[0]);

    if (startsWithNumber) {
      this.setState({
        cidade: '',
      })
    }
  }
  showDataFilled(event) {
    // preventDefault - https://www.w3schools.com/jsref/event_preventdefault.asp#:~:text=The%20preventDefault()%20method%20cancels,link%20from%20following%20the%20URL
    event.preventDefault();
    
    const { nome, email, cpf, endereco, cidade, estado, residencia, cv, cargo, descricao } = this.state;

    // cleaning form
    event.target.innerHTML = '';

    // showing data
    return event.target.nextSibling.innerHTML = `Nome: ${nome}\n 
    Email: ${email}\n
    CPF: ${cpf}\n
    Endereço: ${endereco}
    Cidade:  ${cidade}
    Estado: ${estado}
    Residência: ${residencia}
    CV: ${cv}
    Cargo: ${cargo}
    Descrição: ${descricao}
    `;
  }

  cleanData(event) {
    this.setState(initialState);
    event.target.previousSibling.innerHTML = '';
  }

  render() {

    const { nome, email, cpf, endereco, cidade, estado, residencia, cv, cargo, descricao } = this.state;
    return (
      <>
        <form onSubmit={this.showDataFilled} className="form">
        <div className="fieldsets">
          <DataFieldset nome={nome} email={email} cpf={cpf} endereco={endereco} cidade={cidade} estado={estado} residencia={residencia} handleChange={this.handleChange} />
          
          <CurriculumFieldset cv={cv} cargo={cargo} descricao={descricao} handleChange={this.handleChange} />
        </div>

        <button type="submit">Enviar</button>
      </form>

      <div className="data"></div> 
      <button onClick={this.cleanData}>Limpar</button>

      </>
    )
  }
}

export default Form;
