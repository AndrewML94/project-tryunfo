import React, { Component } from 'react';

class CardRarity extends Component {
  render() {
    return (
      <form>
        <label htmlFor="rarity">
          Raridade
          <select name="select" id="rarity" data-testid="rare-input">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
      </form>
    );
  }
}

export default CardRarity;
