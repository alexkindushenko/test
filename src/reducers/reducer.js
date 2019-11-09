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
  return {
    ...state,
    radioInputVal: state.radioInputVal = value,
    arrRadioInput: state.arrRadioInput.map(el =>
      el.val === value ? { ...el, check: true } : { ...el, check: false }
    ),
  };
};

const getValueCheckInput = (state, value) => {
  // const elem = state.arrCheckInput.filter(el => el.val === val);
  // if (elem[0].check) {
  //   localStorage.removeItem('valCheckInput' + val);
  // }
  const myArr = state.arrCheckInput.map(el =>
    el.val === value ? { ...el, check: !el.check } : el
  );
  // state.arrCheckInput.filter(el => el.check);

  return {
    ...state,
    arrCheckInput: myArr,
    checkInputVal: myArr.filter(el => el.check).map(el => el.val),
  };
};

const clearState = state => {
  localStorage.clear();
  return {
    ...state,
    textInputVal: '',
    selectInputVal: 1,
    radioInputVal: null,
    arrRadioInput: [
      { label: 'Default radio', check: false, val: '1' },
      { label: 'Second radio', check: false, val: '2' },
      { label: 'Disabled radio', check: false, val: '3' },
    ],
    checkInputVal: [],
    arrCheckInput: [
      { val: 1941, check: false, id: 'check1' },
      { val: 1939, check: false, id: 'check2' },
      { val: 1945, check: false, id: 'check3' },
    ],
  };
};
const initialState = {
  textInputVal: '',
  selectInputVal: 1,
  radioInputVal: null,
  arrRadioInput: [
    { label: 'Default radio', check: false, val: '1' },
    { label: 'Second default radio', check: false, val: '2' },
    { label: 'Disabled radio', check: false, val: '3' },
  ],
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
    case 'CLEAR_STATE':
      return clearState(state);

    default:
      return state;
  }
};

export default reducer;
