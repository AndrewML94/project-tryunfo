import React, { Component } from 'react';

class SecondCardAttribute extends Component {
  render() {
    return (
      <form>
        <label htmlFor="secondAttribute">
          Atributo 2
          <input
            data-testid="attr2-input"
            type="number"
            id="secondAttribute"
          />
        </label>
      </form>
    );
  }
}

export default SecondCardAttribute;
