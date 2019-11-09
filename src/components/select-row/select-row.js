import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getValueSelectInput } from '../../actions';

const SelectRow = ({ selectInputVal, getValueSelectInput }) => {
  const getValue = e => {
    console.log(e.target.value);
    getValueSelectInput(e.target.value);
    localStorage.setItem('valSelectInput', e.target.value);
  };

  return (
    <div className="input-wraper">
      <div className="form-group">
        <label htmlFor="Select1">Example select</label>
        <select
          className="form-control"
          id="Select1"
          onChange={e => getValue(e)}
          defaultValue={localStorage.getItem('valSelectInput')}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
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
