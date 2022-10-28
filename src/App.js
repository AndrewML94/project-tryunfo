import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    deck: [],
  };

  inputValidation = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
    } = this.state;

    const minValue = 0;
    const maxValue = 90;
    const amount = 210;

    const validateText = cardName.length > 0 && cardDescription.length > 0
      && cardImage.length > 0;
    const validateNumber1 = cardAttr1.valueOf() >= minValue
      && cardAttr1.valueOf() <= maxValue;
    const validateNumber2 = cardAttr2.valueOf() >= minValue
      && cardAttr2.valueOf() <= maxValue;
    const validateNumber3 = cardAttr3.valueOf() >= minValue
      && cardAttr3.valueOf() <= maxValue;
    const validateTotalNumber = (Number(cardAttr1)
      + Number(cardAttr2) + Number(cardAttr3)) <= amount;

    return !(validateText && validateTotalNumber && validateNumber1 && validateNumber2
    && validateNumber3);
  };

  onInputChange = ({ target }) => {
    const { name, value, type, checked } = target;
    const valor = type === 'checkbox' ? checked : value;
    this.setState({ [name]: valor });
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();

    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
    } = this.state;

    const cardList = {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
    };

    this.setState((prevState) => ({
      deck: [...prevState.deck, cardList],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    }), (() => {
      const { deck } = this.state;
      const trunfo = deck.find((element) => element.cardTrunfo === true);
      if (trunfo) {
        this.setState({
          hasTrunfo: true,
        });
      }
    }));
  };

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
      deck,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ this.inputValidation() }
          onSaveButtonClick={ this.onSaveButtonClick }
          onInputChange={ this.onInputChange }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <ul>
          { deck.map((card) => <li key={ Math.random() }>{ Object.values(card) }</li>) }
        </ul>
      </div>
    );
  }
}

export default App;
