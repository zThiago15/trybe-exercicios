import React from 'react';
import './App.css';

class App extends React.Component {

  constructor() {
    super(); // executar constructor da classe pai(React.Component)!
    this.state = {
      quantidadeClickBotao1: 0,
      quantidadeClickBotao2: 0,
      quantidadeClickBotao3: 0,
      quantidadeClickSaudacao: 0,
    }

    this.clickBotao1 = this.clickBotao1.bind(this);
    this.clickBotao2 = this.clickBotao2.bind(this);
    this.clickBotao3 = this.clickBotao3.bind(this);
    this.verificarSeEPar = this.verificarSeEPar.bind(this);

    this.clickBotaoSaudacao = this.clickBotaoSaudacao.bind(this);
  }

  verificarSeEPar(stateProperty) {
    if(this.state[stateProperty] % 2 === 0) {
      console.log('cor verde');
    }
  }

  clickBotao1(event) {
    this.setState((estadoAnterior, _props) => ({
      quantidadeClickBotao1: estadoAnterior.quantidadeClickBotao1 + 1,
    }));

    console.log(this.state);
    this.verificarSeEPar('quantidadeClickBotao1');
  }
  
  clickBotao2() {
    this.setState((estadoAnterior) => ({
      quantidadeClickBotao2: estadoAnterior.quantidadeClickBotao2 + 1,
    }));

    console.log(this.state);
    this.verificarSeEPar('quantidadeClickBotao2');
  }
  
  clickBotao3() {
    this.setState((estadoAnterior) => ({
      quantidadeClickBotao3: estadoAnterior.quantidadeClickBotao3 + 1
    }))

    console.log(this.state);
    this.verificarSeEPar('quantidadeClickBotao2');
  }

  clickBotaoSaudacao() {
    // No primeiro click, estadoAnterior não terá um valor. Logo, .setState não será executado.
    this.setState((estadoAnterior) => ({
      quantidadeClickSaudacao: estadoAnterior.quantidadeClickSaudacao + 1,
    }));
    console.log(this.state);
    console.log('Olá!');
  }

  render() {
    return (
      <div>
        <button onClick={this.clickBotao1} className="App">{this.state.quantidadeClickBotao1}</button>
        <button onClick={this.clickBotao2} className="App">{this.state.quantidadeClickBotao2}</button>
        <button onClick={this.clickBotao3} className="App">{this.state.quantidadeClickBotao3}</button> 
        <button onClick={(event) => this.clickBotaoSaudacao(event)}>{this.state.quantidadeClickSaudacao}</button>
      </div>
    )
  }
}

export default App;
