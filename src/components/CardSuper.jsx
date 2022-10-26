import React, { Component } from 'react';

class CardSuper extends Component {
  render() {
    return (
      <form>
        <label htmlFor="super">
          <input
            data-testid="trunfo-input"
            type="checkbox"
            id="super"
          />
          Super Trybe Trunfo
        </label>
      </form>
    );
  }
}

export default CardSuper;
