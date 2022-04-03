const pokemons = [{
    name: 'Bulbasaur',
    type: 'Grass',
    ability: 'Razor Leaf',
  },
  {
    name: 'Charmander',
    type: 'Fire',
    ability: 'Ember',
  },
  {
    name: 'Squirtle',
    type: 'Water',
    ability: 'Water Gun',
  },
];

function getPokemonDetails(filter, callback) {
  setTimeout(() => {

    let findPokemon = pokemons.find((pokemon) => {
      return pokemon.name === filter;
    })

    if (findPokemon === undefined) {
      return callback(new Error('Não temos esse pokémon para você :('), null);
    }
    const pokemon = pokemons.find(filter);

    const {
      name,
      type,
      ability
    } = pokemon;

    const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;

    callback(null, messageFromProfOak);
  }, 2000);
}

getPokemonDetails('Squire', (error, result) => {
  console.log(error);
  console.log(result);
});

let filter = 'Squirtle'
// let findPokemon = pokemons.find((pokemon) => {
//   return pokemon.name === filter;
// })

// console.log(!findPokemon);
module.exports = getPokemonDetails;