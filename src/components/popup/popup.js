import React from 'react';

import './popup.css';

const Popup = ({ turnOff }) => {
  return (
    <div className="popup">
      <div className="popup-text">
        <h2 className="text-center">
          Каждый незаполненый ответ считается ошибочным.
        </h2>
        <h2 className="display-4 text-center">Продолжить?</h2>
      </div>

      <div className="d-flex justify-content-around">
        <button
          type="button"
          className="btn btn-outline-info"
          onClick={turnOff}
        >
          Назад
        </button>
        <button type="button" className="btn btn-outline-secondary">
          Продолжить
        </button>
      </div>
    </div>
  );
};

export default Popup;
