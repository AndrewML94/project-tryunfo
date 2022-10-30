import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FirstCardAttribute extends Component {
  render() {
    const { cardAttr1, onInputChange } = this.props;
    return (
      <form>
        <label htmlFor="firstAttribute">
          Atributo 1
          <input
            data-testid="attr1-input"
            type="number"
            id="firstAttribute"
            name="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
      </form>
    );
  }
}

FirstCardAttribute.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default FirstCardAttribute;
