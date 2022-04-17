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
      typePokemon: '',
      filteredPokemons: pokemons,
      nextBtnDisabled: false,
    }

    this.filterPokemonByType = this.filterPokemonByType.bind(this);
    this.renderBtnOfPokemonTypes = this.renderBtnOfPokemonTypes.bind(this);
  }

  mudarPokemon() {
    // Verificar se é o último pokemon
    const { filteredPokemons } = this.state;

    const lengthFilteredPokemons = filteredPokemons.length;
    
    this.setState((prevState) => {
      const { index } = prevState;
      let nextIndex = index + 1;

      if (index === lengthFilteredPokemons - 1) 
        nextIndex = 0;

      return {
        index: nextIndex,
        valorEstadoAnterior: prevState,
      }

    });
  }

  filterPokemonByType({target}) {

    const { innerHTML } = target;
    const { pokemons } = this.state;

    this.setState(() => {
      let filteredPokemons = pokemons.filter((pokemon) => pokemon.type === innerHTML);
      let nextBtnDisabled = false;

      // Se existir um tipo de pokemon, desabilitar 'Proximo Pokemon'
      if (filteredPokemons.length === 1) {
        nextBtnDisabled = true;
      } else if (filteredPokemons.length === 0) {
        filteredPokemons = pokemons;
      }

      return {
        index: 0,
        typePokemon: innerHTML,
        filteredPokemons: filteredPokemons,
        nextBtnDisabled: nextBtnDisabled,
      }
    });
  }

  renderBtnOfPokemonTypes() {
    const { pokemons } = this.state;
    // Vídeo do professor Gabriel Espindola
    const types = [...new Set(pokemons.map((pokemon) => pokemon.type))];

    return types;
  }

  render() {
    const { index, filteredPokemons, nextBtnDisabled } = this.state;

    const pokemonTypes = this.renderBtnOfPokemonTypes();
    return (
      <div className='App'>

        { <Pokemon key={filteredPokemons[index].id} pokemon={filteredPokemons[index]} />}
        <button onClick={this.mudarPokemon.bind(this)} disabled={nextBtnDisabled}> Próximo Pokemon </button>
        <hr />

        <div className="btnTypesPokemon">
          <button onClick={this.filterPokemonByType}>All</button>
          {pokemonTypes.map((element) => <button key={element} onClick={this.filterPokemonByType}>{element}</button>)}
        </div>

      </div>
    );
  }
}

export default App;
