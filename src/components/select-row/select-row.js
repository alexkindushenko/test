import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getValueSelectInput } from '../../actions';

const SelectRow = ({ selectInputVal, getValueSelectInput }) => {
  const getValue = e => {
    getValueSelectInput(e.target.value);
    localStorage.setItem('textSelectVal', e.target.value);
  };

  return (
    <div className="input-wraper">
      <div className="form-group">
        <label htmlFor="Select1">В каком году началась 1 мировая война?</label>
        <select
          className="form-control"
          id="Select1"
          onChange={e => getValue(e)}
          value={selectInputVal}
        >
          <option value={'1912'}>1912</option>
          <option value={'1914'}>1914</option>
          <option value={'1916'}>1916</option>
          <option value={'1918'}>1918</option>
          <option value={'1920'}>1920</option>
        </select>
      </div>
    </div>
  );
};

const mapStateToProps = ({ selectInputVal }) => {
  return {
    selectInputVal,
  };
};

const mapDispachToProps = dispatch => {
  return bindActionCreators(
    {
      getValueSelectInput,
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(SelectRow);
