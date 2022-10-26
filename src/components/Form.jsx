import React, { Component } from 'react';
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
  render() {
    return (
      <>
        <h2>Adicione nova carta</h2>
        <CardName />
        <CardDescription />
        <FirstCardAttribute />
        <SecondCardAttribute />
        <ThirdCardAttribute />
        <CardImage />
        <CardRarity />
        <CardSuper />
        <SubmitButton />
      </>
    );
  }
}

export default Form;
