import React, { Component } from 'react';

class CardDescription extends Component {
  render() {
    return (
      <form>
        <label htmlFor="description">
          Descrição
          <input
            data-testid="description-input"
            type="textarea"
            id="description"
          />
        </label>
      </form>
    );
  }
}

export default CardDescription;
