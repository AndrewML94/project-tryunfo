import React, { Component } from 'react';

class ThirdCardAttribute extends Component {
  render() {
    return (
      <form>
        <label htmlFor="thirdAttribute">
          Atributo 3
          <input
            data-testid="attr3-input"
            type="number"
            id="thirdAttribute"
          />
        </label>
      </form>
    );
  }
}

export default ThirdCardAttribute;
