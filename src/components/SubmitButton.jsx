import React, { Component } from 'react';

class SubmitButton extends Component {
  render() {
    return (
      <button data-testid="save-button" type="submit">Salvar</button>
    );
  }
}

export default SubmitButton;
