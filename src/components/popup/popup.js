import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import { hasWarnOff } from '../../actions';
import './popup.css';

class Popup extends React.Component {
  state = {
    redirect: false,
  };

  render() {
    const {
      textInputVal,
      textInputTwoVal,
      selectInputVal,
      radioInputVal,
      checkInputVal,
      hasWarnOff,
    } = this.props;

    const onSubmit = e => {
      e.preventDefault();
      axios
        .post('http://localhost:3004/api/formData/', {
          textInputVal,
          textInputTwoVal,
          selectInputVal,
          radioInputVal,
          checkInputVal,
        })
        .then(() => {
          this.setState({ redirect: true });
        });
    };

    if (this.state.redirect) {
      return <Redirect to="/answer" />;
    }
    return (
      <div className="popup">
        <div className="popup-text">
          <h2 className="text-center">
            Каждый незаполненый ответ считается неправильным.
          </h2>
          <h2 className="display-4 text-center">Хотите продолжить?</h2>
        </div>

        <div className="d-flex justify-content-around">
          <button
            type="button"
            className="btn btn-outline-info"
            onClick={() => hasWarnOff()}
          >
            Нет
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={e => onSubmit(e)}
          >
            Да
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({
  textInputVal,
  textInputTwoVal,
  selectInputVal,
  radioInputVal,
  checkInputVal,
}) => {
  return {
    textInputVal,
    textInputTwoVal,
    selectInputVal,
    radioInputVal,
    checkInputVal,
  };
};

const mapDispachToProps = dispatch => {
  return bindActionCreators(
    {
      hasWarnOff,
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(Popup);
