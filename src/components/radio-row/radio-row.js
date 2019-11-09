import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getValueRadioInput } from '../../actions';

const RadioRow = ({ radioInputVal, getValueRadioInput }) => {
  const getValue = e => {
    localStorage.setItem('valRadioInput', e.target.value);
    getValueRadioInput(e.target.value);
  };
  const arr = ['Default radio', 'Second default radio', 'Disabled radio'];

  return (
    <div className="input-wraper">
      {arr.map((el, idx) => {
        const check =
          Number(localStorage.getItem('valRadioInput')) === idx + 1
            ? true
            : false;
        return (
          <div key={idx} className="form-check">
            <input
              checked={check}
              onChange={e => getValue(e)}
              className="form-check-input"
              type="radio"
              name="Radios"
              id={idx + 1}
              value={idx + 1}
            ></input>
            <label className="form-check-label" htmlFor={idx + 1}>
              {el}
            </label>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = ({ radioInputVal }) => {
  return {
    radioInputVal,
  };
};

const mapDispachToProps = dispatch => {
  return bindActionCreators(
    {
      getValueRadioInput,
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(RadioRow);
