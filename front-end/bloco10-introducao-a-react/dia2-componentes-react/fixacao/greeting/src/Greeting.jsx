import React from 'react';
import PropTypes from 'prop-types';

class Greeting extends React.Component {
  render() {
    return <h1>Hey, {this.props.firstName} {this.props.lastName}</h1>
  }
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
}

export default Greeting;