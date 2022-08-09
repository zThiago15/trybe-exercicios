import React, { useEffect } from 'react'

export default function BestPokemon() {

  // willUnmount
  useEffect(() => () => console.log('desmontou'), []);

  return (
    <div>
      <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png" alt="Chairmander" />
    </div>
  )
}
