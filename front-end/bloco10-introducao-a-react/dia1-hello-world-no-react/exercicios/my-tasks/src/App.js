import logo from './logo.svg';
import './App.css';

const Task = (value) => {

  return (
      <li>{value}</li>
  );
}


function App() {
  const commitments = ['Estudar React', 'Lavar louça', 'Pagar contas', 'Ir no dentista'];

  return (
    
    <div className="App">
      <header className="App-header">
        <div>{commitments.map((item) => Task(item))}</div>
        
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
