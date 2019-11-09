import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getValueTextInput } from '../../actions';

const TextRow = ({ textInputVal, getValueTextInput }) => {
  let textVal = textInputVal
    ? textInputVal
    : localStorage.getItem('valTextInput') || '';

  const getValue = e => {
    localStorage.setItem('valTextInput', e.target.value);
    getValueTextInput(e.target.value);
  };

  return (
    <div className="input-wraper">
      <div className="form-group">
        <label htmlFor="textRow">Кто был президентом США в 1945 году?</label>
        <input
          onChange={e => getValue(e)}
          type="email"
          className="form-control"
          id="textRow"
          placeholder="Президент США"
          value={textVal}
        ></input>
      </div>
    </div>
  );
};

const mapStateToProps = ({ textInputVal }) => {
  return {
    textInputVal,
  };
};

const mapDispachToProps = dispatch => {
  return bindActionCreators(
    {
      getValueTextInput,
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(TextRow);
