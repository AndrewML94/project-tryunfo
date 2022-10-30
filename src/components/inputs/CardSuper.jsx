import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardSuper extends Component {
  render() {
    const { cardTrunfo, onInputChange, hasTrunfo } = this.props;
    return (
      <form>
        { hasTrunfo
          ? (
            <span>Você já tem um Super Trunfo em seu baralho</span>
          ) : (
            <label htmlFor="super">
              <input
                data-testid="trunfo-input"
                type="checkbox"
                id="super"
                name="cardTrunfo"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />
              Super Trybe Trunfo
            </label>)}
      </form>
    );
  }
}

CardSuper.propTypes = {
  cardTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
};

export default CardSuper;
