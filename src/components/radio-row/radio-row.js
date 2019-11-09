import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getValueRadioInput } from '../../actions';

const RadioRow = ({ arrRadioInput, radioInputVal, getValueRadioInput }) => {
  return (
    <div className="input-wraper">
      {arrRadioInput.map((el, idx) => {
        return (
          <div key={idx} className="form-check">
            <input
              checked={el.check}
              onChange={e => getValueRadioInput(e.target.value)}
              className="form-check-input"
              type="radio"
              name="Radios"
              id={idx}
              value={el.val}
            ></input>
            <label className="form-check-label" htmlFor={idx}>
              {el.label}
            </label>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = ({ radioInputVal, arrRadioInput }) => {
  return {
    radioInputVal,
    arrRadioInput,
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
