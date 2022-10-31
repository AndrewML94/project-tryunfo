import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FilterTrunfo extends Component {
  render() {
    const { filterTrunfo, onInputChange } = this.props;
    return (
      <label htmlFor="filterTrunfo">
        <input
          type="checkbox"
          name="filterTrunfo"
          id="filterTrunfo"
          data-testid="trunfo-filter"
          checked={ filterTrunfo }
          onChange={ onInputChange }
        />
        Super Trybe Trunfo
      </label>
    );
  }
}

FilterTrunfo.propTypes = {
  filterTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default FilterTrunfo;
