import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import BestPokemon from './components/BestPokemon';

function App() {

  const [listPokemons, setListPokemons] = useState([]);
  const [limit, setLimit] = useState(10);

  const [bestPokemon, setBestPokemon] = useState(false);

  // 1- executar a função que simula um 'life cycle', e o array tem as dependencias. Com o array vazio, executará apenas uma vez.

  // didMount + didUpdate
  useEffect(() => {
    const getPokemons = async () => {
      const api = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
      const response = await api.json();
      setListPokemons(response.results);
    }
    getPokemons();
  }, [limit])  
  
  // didUpdate
  useEffect(() => console.log('atualizou'));

  const addLimit = () => {
    setLimit(limit + 10);
  }

  return (
    
    <div className="App">

      <button onClick={ () => setBestPokemon(!bestPokemon) }>Mostrar melhor pokemon</button>
      {bestPokemon && <BestPokemon />}

      <ul>
        { listPokemons.map(({ name, url }, index) => (
          <div key={ name }>
            <li>{ name }</li>
            <p>{`Clique aqui para obter mais informações ${url}`}</p>
          </div>
        )) }
      </ul>
      <button onClick={ addLimit }>Get more pokemons!</button>
    </div>
  );
}

export default App;
