import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardDescription from './inputs/CardDescription';
import CardImage from './inputs/CardImage';
import CardName from './inputs/CardName';
import CardRarity from './inputs/CardRarity';
import CardSuper from './inputs/CardSuper';
import FirstCardAttribute from './inputs/FirstCardAttribute';
import SecondCardAttribute from './inputs/SecondCardAttribute';
import SubmitButton from './inputs/SubmitButton';
import ThirdCardAttribute from './inputs/ThirdCardAttribute';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;

    return (
      <>
        <h2>Adicione nova carta</h2>
        <CardName
          cardName={ cardName }
          onInputChange={ onInputChange }
        />
        <CardDescription
          cardDescription={ cardDescription }
          onInputChange={ onInputChange }
        />
        <FirstCardAttribute
          cardAttr1={ cardAttr1 }
          onInputChange={ onInputChange }
        />
        <SecondCardAttribute
          cardAttr2={ cardAttr2 }
          onInputChange={ onInputChange }
        />
        <ThirdCardAttribute
          cardAttr3={ cardAttr3 }
          onInputChange={ onInputChange }
        />
        <CardImage
          cardImage={ cardImage }
          onInputChange={ onInputChange }
        />
        <CardRarity
          cardRare={ cardRare }
          onInputChange={ onInputChange }
        />
        <CardSuper
          cardTrunfo={ cardTrunfo }
          onInputChange={ onInputChange }
          hasTrunfo={ hasTrunfo }
        />
        <SubmitButton
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ onSaveButtonClick }
        />
      </>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
