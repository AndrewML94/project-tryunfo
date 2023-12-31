import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FilterRare extends Component {
  render() {
    const { filterRare, onInputChange, filterTrunfo } = this.props;
    return (
      <div>
        <label htmlFor="filterRare">
          Raridade
          <select
            name="filterRare"
            id="filterRare"
            data-testid="rare-filter"
            value={ filterRare }
            onChange={ onInputChange }
            disabled={ filterTrunfo }
          >
            <option value="todas">todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
      </div>
    );
  }
}

FilterRare.propTypes = {
  filterRare: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  filterTrunfo: PropTypes.bool.isRequired,
};

export default FilterRare;
