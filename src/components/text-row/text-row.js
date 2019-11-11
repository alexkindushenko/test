import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getValueTextInput } from '../../actions';

const TextRow = ({ textInputVal, getValueTextInput }) => {
  const getValue = e => {
    getValueTextInput(e.target.value);
    localStorage.setItem('textInputVal', e.target.value);
  };
  return (
    <div className="input-wraper">
      <div className="form-group">
        <label htmlFor="textRow">
          Кто был президентом США в 1933-1945 годах?
        </label>
        <input
          onChange={e => getValue(e)}
          type="text"
          className="form-control"
          id="textRow"
          placeholder="Президент США"
          value={textInputVal || ''}
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
