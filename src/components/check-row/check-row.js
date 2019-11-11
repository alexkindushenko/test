import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getValueCheckInput } from '../../actions';

const CheckRow = ({ arrCheckInput, getValueCheckInput }) => {
  const getCheck = val => {
    localStorage.setItem('valCheckInput' + val, val);
    getValueCheckInput(val);
  };

  const mapCheck = arr => {
    return arr.map((el, idx) => {
      const myCheck = localStorage.getItem('valCheckInput' + el.val)
        ? true
        : false;
      return (
        <div key={idx} className="form-check">
          <input
            checked={myCheck}
            onChange={() => getCheck(el.val)}
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
