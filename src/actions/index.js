const getValueTextInput = value => {
  return {
    type: 'GET_VALUE_TEXT_INPUT',
    payload: value,
  };
};
const getValueTextInputTwo = value => {
  return {
    type: 'GET_VALUE_TEXT_INPUT_TWO',
    payload: value,
  };
};

const getValueSelectInput = value => {
  return {
    type: 'GET_VALUE_SELECT_INPUT',
    payload: value,
  };
};

const getValueRadioInput = value => {
  return {
    type: 'GET_VALUE_RADIO_INPUT',
    payload: value,
  };
};

const getValueCheckInput = id => {
  return {
    type: 'GET_VALUE_CHECK_INPUT',
    payload: id,
  };
};

const clearState = () => {
  return {
    type: 'CLEAR_STATE',
  };
};

const hasWarnOff = () => {
  return {
    type: 'HAS_WARN',
  };
};

export {
  getValueTextInput,
  getValueTextInputTwo,
  getValueSelectInput,
  getValueRadioInput,
  getValueCheckInput,
  clearState,
  hasWarnOff,
};
