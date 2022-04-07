import React from 'react';
import './App.css'
import PropTypes from 'prop-types';

class Pokemon extends React.Component {

  render() {
    const { name, type, averageWeight: {value, measurementUnit}, image } = this.props.pokemon;
    console.log(JSON.stringify(value));

    return <div className='Pokemon'>
      <div className='PokemonAttributes'>
        <p>{name}</p>
        <p>{type}</p>
        <p>Average weight: {value}{measurementUnit}</p>
      </div>

      <img src={image} alt={'Image of the ' + name}/>
    </div>
  }
}

Pokemon.propTypes

export default Pokemon;