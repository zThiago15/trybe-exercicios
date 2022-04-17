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
      <Route exact path="/" component={Home} />
      <Route path="/contact" component={Contact}/>
      <Route path="/profile">
        <Profile />
      </Route>

    </BrowserRouter>
  );
}

export default App;
