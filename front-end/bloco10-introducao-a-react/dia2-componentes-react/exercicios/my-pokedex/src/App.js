import logo from './logo.svg';
import './App.css';
import Pokemon from './Pokemon';
import pokemons from './data';


function App() {
  return (
    <div class='App'>
      {pokemons.map((pokemon, index) => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
    </div>
  );
}

export default App;
