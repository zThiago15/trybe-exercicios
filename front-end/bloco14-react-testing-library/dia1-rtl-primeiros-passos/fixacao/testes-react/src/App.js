import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      saveEmail: '',
    }
  }

  handleClick = (email) => {
    this.setState({
      saveEmail: email, 
      email: '',
    })
  }

  handleChange = ({target: { value }}) => {
    this.setState({
      email: value,
    })
  }

  render() {

    const { saveEmail, email } = this.state;
    return (
      <div className="App">
        <label>
          Email
          <input onChange={ this.handleChange } type="email" value={ email } />
        </label>
  
        <button data-testid="id-send" value="Enviar" onClick={() => this.handleClick(email) }>Enviar</button>
        <button data-testid="back-btn" value="Voltar">Voltar</button>

        <h2 data-testid="id-email-user">{`Valor: ${saveEmail}`}</h2>
      </div>
    );
  }
}

export default App;
