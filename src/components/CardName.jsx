import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardName extends Component {
  render() {
    const { cardName, onInputChange } = this.props;
    return (
      <form>
        <label htmlFor="name">
          Nome
          <input
            data-testid="name-input"
            type="text"
            id="name"
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
      </form>
    );
  }
}

CardName.propTypes = {
  cardName: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default CardName;
