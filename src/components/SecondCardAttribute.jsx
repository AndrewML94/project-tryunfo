import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SecondCardAttribute extends Component {
  render() {
    const { cardAttr2, onInputChange } = this.props;
    return (
      <form>
        <label htmlFor="secondAttribute">
          Atributo 2
          <input
            data-testid="attr2-input"
            type="number"
            id="secondAttribute"
            name="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
      </form>
    );
  }
}

SecondCardAttribute.propTypes = {
  cardAttr2: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default SecondCardAttribute;
