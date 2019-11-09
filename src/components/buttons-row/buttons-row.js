import React from 'react';

import './buttons-row.css';

const ButtonsRow = () => {
  return (
    <div className="d-flex justify-content-center buttons-row">
      <button
        type="reset"
        className="btn btn-outline-info"
        onClick={() => localStorage.clear()}
      >
        Reset
      </button>
      <button type="button" className="btn btn-outline-secondary">
        Submit
      </button>
    </div>
  );
};

export default ButtonsRow;
