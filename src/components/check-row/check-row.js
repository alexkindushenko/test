import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getValueCheckInput } from '../../actions';

const CheckRow = ({ arrCheckInput, getValueCheckInput }) => {
  const mapCheck = arr => {
    return arr.map((el, idx) => {
      return (
        <div key={idx} className="form-check">
          <input
            checked={el.check}
            onChange={() => getValueCheckInput(el.val)}
            className="form-check-input"
            type="checkbox"
            id={el.val}
          ></input>
          <label className="form-check-label" htmlFor={el.val}>
            {el.val}
          </label>
        </div>
      );
    });
  };

  return (
    <div className="input-wraper">
      <p>Начало и конец второй мировой войны?</p>
      {mapCheck(arrCheckInput)}
    </div>
  );
};

const mapStateToProps = ({ checkInputVal, arrCheckInput }) => {
  return {
    checkInputVal,
    arrCheckInput,
  };
};

const mapDispachToProps = dispatch => {
  return bindActionCreators(
    {
      getValueCheckInput,
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(CheckRow);
