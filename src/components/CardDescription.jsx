import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardDescription extends Component {
  render() {
    const { cardDescription, onInputChange } = this.props;
    return (
      <form>
        <label htmlFor="description">
          Descrição
          <input
            data-testid="description-input"
            type="textarea"
            id="description"
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
      </form>
    );
  }
}

CardDescription.propTypes = {
  cardDescription: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default CardDescription;
