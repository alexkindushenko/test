import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getValueTextInputTwo } from '../../actions';

const TextRow = ({ textInputTwoVal, getValueTextInputTwo }) => {
  return (
    <div className="input-wraper">
      <div className="form-group">
        <label htmlFor="textRow">
          Кто был премьер-министром Великобритании 1940-1945 годах?
        </label>
        <input
          onChange={e => getValueTextInputTwo(e.target.value)}
          type="email"
          className="form-control"
          id="textRow"
          placeholder="Премьер великобритании"
          value={textInputTwoVal || ''}
        ></input>
      </div>
    </div>
  );
};

const mapStateToProps = ({ textInputTwoVal }) => {
  return {
    textInputTwoVal,
  };
};

const mapDispachToProps = dispatch => {
  return bindActionCreators(
    {
      getValueTextInputTwo,
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(TextRow);
