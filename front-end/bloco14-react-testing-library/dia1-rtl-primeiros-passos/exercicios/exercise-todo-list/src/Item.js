import React from 'react';
import PropTypes from 'prop-types';

class Item extends React.Component {
  constructor() {
    super();
    this.state = {
      btnRemoveDisabled: true,
    };
  }

  onSelectClick = () => {
    this.setState({
      btnRemoveDisabled: false,
    });
  }

  removeItem = ({ target }) => {
    const liParent = target.parentElement.parentElement;

    // remove element from document - https://www.w3schools.com/jsref/met_element_remove.asp
    liParent.remove();
  }

  render() {
    const { content } = this.props;
    const { btnRemoveDisabled } = this.state;

    return (
      <div className="Item">
        <button type="button" onClick={ this.onSelectClick }>Selecionar</button>
        { content }
        <button
          type="button"
          onClick={ this.removeItem }
          disabled={ btnRemoveDisabled }
        >
          Remover
        </button>
      </div>
    );
  }
}

export default Item;

Item.propTypes = {
  content: PropTypes.string.isRequired,
};
