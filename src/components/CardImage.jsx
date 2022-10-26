import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardImage extends Component {
  render() {
    const { cardImage, onInputChange } = this.props;
    return (
      <form>
        <label htmlFor="image">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            id="image"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
      </form>
    );
  }
}

CardImage.propTypes = {
  cardImage: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default CardImage;
