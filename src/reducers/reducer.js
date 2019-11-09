const getValueTextInput = (state, value) => {
  return {
    ...state,
    textInputVal: state.textInputVal = value,
  };
};

const getValueSelectInput = (state, value) => {
  return {
    ...state,
    selectInputVal: state.selectInputVal = value,
  };
};

const getValueRadioInput = (state, value) => {
  console.log(value);
  return {
    ...state,
    radioInputVal: state.radioInputVal = value,
  };
};

const getValueCheckInput = (state, val) => {
  const elem = state.arrCheckInput.filter(el => el.val === val);
  if (elem[0].check) {
    localStorage.removeItem('valCheckInput' + val);
  }

  let newArr = state.arrCheckInput;
  // if (
  //   localStorage.getItem('valCheckInput' + val) === val + '' &&
  //   elem[0].check === false
  // ) {
  //   console.log(1);
  //   newArr = state.arrCheckInput.map(el =>
  //     el.val === val ? { ...el, check: true } : el
  //   );
  //   console.log(newArr);
  // }

  return {
    ...state,
    arrCheckInput: newArr.map(el =>
      el.val === val ? { ...el, check: !el.check } : el
    ),
  };
};

const initialState = {
  textInputVal: '',
  selectInputVal: null,
  radioInputVal: null,
  checkInputVal: [],
  arrCheckInput: [
    { val: 1941, check: false, id: 'check1' },
    { val: 1939, check: false, id: 'check2' },
    { val: 1945, check: false, id: 'check3' },
  ],
};

const reducer = (state = initialState, action) => {
  console.log(action.type);

  switch (action.type) {
    case 'GET_VALUE_TEXT_INPUT':
      return getValueTextInput(state, action.payload);
    case 'GET_VALUE_SELECT_INPUT':
      return getValueSelectInput(state, action.payload);
    case 'GET_VALUE_RADIO_INPUT':
      return getValueRadioInput(state, action.payload);
    case 'GET_VALUE_CHECK_INPUT':
      return getValueCheckInput(state, action.payload);

    default:
      return state;
  }
};

export default reducer;
