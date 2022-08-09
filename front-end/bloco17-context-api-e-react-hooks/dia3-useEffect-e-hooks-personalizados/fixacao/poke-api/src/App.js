import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import BestPokemon from './components/BestPokemon';
import usePokemonSprite from './hooks/seekPokemonSprite';
import GenerateRandomNumber from './components/GenerateRandomNumber';

function App() {

  const [listPokemons, setListPokemons] = useState([]);
  const [limit, setLimit] = useState(10);

  const [bestPokemon, setBestPokemon] = useState(false);
  const [pokemonImg, setPokemonURL] = usePokemonSprite();

  const [showTimer, setShowTimer] = useState(true);

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

  // const [pokemonImg, setPokemonURL] = usePokemonSprite();
  // console.log(pokemonImg);

  return (
    
    <div className="App">

      <button onClick={ () => setBestPokemon(!bestPokemon) }>Mostrar melhor pokemon</button>
      {bestPokemon && <BestPokemon />}

      <div>
        <h2>Pokemon list</h2>
        <img src={ pokemonImg } />
      </div>


      <ul>
        { listPokemons.map(({ name, url }, index) => (

            <li key={ name } onClick={ () => setPokemonURL(url) }>{ url }</li>
      
        )) }
      </ul>
      <button onClick={ addLimit }>Get more pokemons!</button>


      <div>
        <button onClick={() => setShowTimer(!showTimer)}>Mostrar/esconder números aleatórios!</button>
        { showTimer && <GenerateRandomNumber />}
      </div>


    </div>
  );
}

export default App;
