import React, { useEffect, useState } from 'react'

export default function usePokemonSprite() {

  const [pokemonImg, setPokemonImg] = useState('');
  const [pokemonURL, setPokemonURL] = useState('');
  
  useEffect(() => {
    const getPokemonImage = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/1');
      const { sprites: { front_default } } = await response.json();
      console.log(front_default);
      setPokemonImg(front_default);
    }

    if (pokemonURL) { getPokemonImage() }
  }, [pokemonURL])

  return [pokemonImg, setPokemonURL];
}
