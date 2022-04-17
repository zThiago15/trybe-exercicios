import './App.css';
import pokemons from './data';
import React from 'react';
import Pokemon from './Pokemon';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemons: pokemons,
      index: 0,
      typePokemon: 'Fire',
    }
  }

  mudarPokemon() {
    // Verificar se é o último pokemon

    this.setState((estadoAnterior) => ({
      index: estadoAnterior.index + 1,
      valorEstadoAnterior: estadoAnterior,
    }))
  }

  filterPokemonByType() {
    const filteredPokemons = pokemons.filter((pokemon) => pokemon.type === this.state.typePokemon);
    filteredPokemons.forEach((pokemon) => {
      // <Pokemon pokemon={pokemon} />
    })
  }

  render() {
    const { pokemons, index, typePokemon } = this.state;

    return (
      <div className='App'>
        {<Pokemon pokemon={pokemons[index]}/>}
        <button onClick={this.mudarPokemon.bind(this)}> Próximo Pokemon </button>
        <hr />

        {/* <button onClick={this.filterPokemonByType}>Fire</button>
        <button>Psychic</button> */}

      </div>
    );
  }
}

export default App;
