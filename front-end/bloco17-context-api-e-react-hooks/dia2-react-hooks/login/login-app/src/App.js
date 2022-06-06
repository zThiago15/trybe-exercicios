import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Jokes from './pages/Jokes';
import Login from './pages/Login';

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route path="/jokes" component={ Jokes } />
        </Switch>
        
      </BrowserRouter>
  );
}

export default App;
