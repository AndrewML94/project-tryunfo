import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardSuper extends Component {
  render() {
    const { cardTrunfo, onInputChange } = this.props;
    return (
      <form>
        <label htmlFor="super">
          <input
            data-testid="trunfo-input"
            type="checkbox"
            id="super"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
          Super Trybe Trunfo
        </label>
      </form>
    );
  }
}

CardSuper.propTypes = {
  cardTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default CardSuper;
