import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FilterName extends Component {
  render() {
    const { filterName, onInputChange, filterTrunfo } = this.props;
    return (
      <div>
        <label htmlFor="FilterName">
          Nome da Carta:
          <input
            type="text"
            id="FilterName"
            name="filterName"
            value={ filterName }
            onChange={ onInputChange }
            data-testid="name-filter"
            disabled={ filterTrunfo }
          />
        </label>
      </div>
    );
  }
}

FilterName.propTypes = {
  filterName: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  filterTrunfo: PropTypes.bool.isRequired,
};

export default FilterName;
