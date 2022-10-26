import React, { Component } from 'react';

class CardImage extends Component {
  render() {
    return (
      <form>
        <label htmlFor="image">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            id="image"
          />
        </label>
      </form>
    );
  }
}

export default CardImage;
