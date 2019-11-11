import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import { clearState, hasWarnOff } from '../../actions';

import './buttons-row.css';

class ButtonsRow extends React.Component {
  state = {
    redirect: false,
  };
  render() {
    const {
      clearState,
      textInputVal,
      textInputTwoVal,
      selectInputVal,
      radioInputVal,
      checkInputVal,
      hasWarnOff,
    } = this.props;

    const onSubmit = () => {
      axios
        .post('http://localhost:3004/api/formData/', {
          textInputVal,
          textInputTwoVal,
          selectInputVal,
          radioInputVal,
          checkInputVal,
        })
        .then(() => {
          clearState();
          this.setState({ redirect: true });
        });
    };

    const onSubmitClick = () => {
      if (
        !textInputVal ||
        !textInputTwoVal ||
        !radioInputVal ||
        !checkInputVal
      ) {
        hasWarnOff();
      } else {
        onSubmit();
      }
    };
    if (this.state.redirect) {
      return <Redirect to="/answer" />;
    }

    return (
      <div className="d-flex justify-content-center buttons-row">
        <button
          type="button"
          className="btn btn-outline-info"
          onClick={() => clearState()}
        >
          Сброс
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={onSubmitClick}
        >
          Отправить
        </button>
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
      clearState,
      hasWarnOff,
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(ButtonsRow);
