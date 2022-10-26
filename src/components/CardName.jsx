import React, { Component } from 'react';

class CardName extends Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          Nome
          <input
            data-testid="name-input"
            type="text"
            id="name"
          />
        </label>
      </form>
    );
  }
}

export default CardName;
