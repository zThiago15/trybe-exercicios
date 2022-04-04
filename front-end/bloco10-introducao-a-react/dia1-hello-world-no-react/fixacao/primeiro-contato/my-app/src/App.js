import logo from './logo.svg';
import './App.css';

function fullName(firstName, middleName, lastName) {
  return `${firstName} ${middleName} ${lastName}`;
}

function multiplicao(num) {
  return num * num;
}

function textJSX(text) {
  const classe = 'hello-class';
  return <h1 className={classe}>Hello, {text}</h1> ;
}

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div>{textJSX('JSX')}</div>
        <p> Saudações {fullName('Thiago', 'Dias', 'Barboza')}</p>
        <p> Multiplicação de 5 por 5 é: {multiplicao(5)}</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
