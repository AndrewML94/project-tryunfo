import React, { Component } from 'react';

class FirstCardAttribute extends Component {
  render() {
    return (
      <form>
        <label htmlFor="firstAttribute">
          Atributo 1
          <input
            data-testid="attr1-input"
            type="number"
            id="firstAttribute"
          />
        </label>
      </form>
    );
  }
}

export default FirstCardAttribute;
