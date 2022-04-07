import logo from './logo.svg';
import React from 'react';
import './App.css';

function clickBotao1() {
  console.log('Clicou em mim!');
}

function clickBotao2() {
  console.log('Que coceira');
}

function clickBotao3() {
  console.log('Quero café!');
}

class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={clickBotao1} className="App">Botão1</button>
        <button onClick={clickBotao2} className="App">Botão2</button>
        <button onClick={clickBotao3} className="App">Botão3</button> 
      </div>
    )
  }
}

export default App;
