import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardRarity extends Component {
  render() {
    const { cardRare, onInputChange } = this.props;
    return (
      <form>
        <label htmlFor="rarity">
          Raridade
          <select
            name="select"
            id="rarity"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
      </form>
    );
  }
}

CardRarity.propTypes = {
  cardRare: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default CardRarity;
