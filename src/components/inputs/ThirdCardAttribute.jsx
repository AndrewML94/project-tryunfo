import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ThirdCardAttribute extends Component {
  render() {
    const { cardAttr3, onInputChange } = this.props;
    return (
      <form>
        <label htmlFor="thirdAttribute">
          Atributo 3
          <input
            data-testid="attr3-input"
            type="number"
            id="thirdAttribute"
            name="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
      </form>
    );
  }
}

ThirdCardAttribute.propTypes = {
  cardAttr3: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default ThirdCardAttribute;
