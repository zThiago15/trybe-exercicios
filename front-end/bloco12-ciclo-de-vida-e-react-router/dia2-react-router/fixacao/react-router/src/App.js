import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import ComponentePai from './Components/ComponentePai';
import Contact from './Components/Contact';
import Home from './Components/Home'
import Profile from './Components/Profile';

function App() {
  return (
    <BrowserRouter>
      <ComponentePai>
        <p>SUPIMPA!</p>
        <p>Testando <small>props.children</small> no componente filho</p>
      </ComponentePai>

      <Route exact path="/" component={Home} />
      <Route path="/contact" component={Contact}/>
      <Route path="/profile">
        <Profile />
      </Route>
    </BrowserRouter>
  );
}

export default App;
