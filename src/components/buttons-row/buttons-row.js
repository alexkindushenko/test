import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { clearState } from '../../actions';

import './buttons-row.css';

const ButtonsRow = ({ clearState }) => {
  return (
    <div className="d-flex justify-content-center buttons-row">
      <button
        type="reset"
        className="btn btn-outline-info"
        onClick={() => clearState()}
      >
        Reset
      </button>
      <button type="button" className="btn btn-outline-secondary">
        Submit
      </button>
    </div>
  );
};

const mapDispachToProps = dispatch => {
  return bindActionCreators(
    {
      clearState,
    },
    dispatch
  );
};

export default connect(
  () => ({}),
  mapDispachToProps
)(ButtonsRow);
