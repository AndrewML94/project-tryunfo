import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardDescription from './CardDescription';
import CardImage from './CardImage';
import CardName from './CardName';
import CardRarity from './CardRarity';
import CardSuper from './CardSuper';
import FirstCardAttribute from './FirstCardAttribute';
import SecondCardAttribute from './SecondCardAttribute';
import SubmitButton from './SubmitButton';
import ThirdCardAttribute from './ThirdCardAttribute';

class Form extends Component {
  // onInputChange({ target }) {
  //   const { name } = target;
  //   const value = target.type === 'checkbox' ? target.checked : target.value;
  //   this.setState({
  //     [name]: value,
  //   });
  // }

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
      // hasTrunfo,
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
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
