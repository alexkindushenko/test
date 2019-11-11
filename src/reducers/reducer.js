const getValueTextInput = (state, value) => {
  return {
    ...state,
    textInputVal: state.textInputVal = value,
  };
};

const getValueTextInputTwo = (state, value) => {
  return {
    ...state,
    textInputTwoVal: state.textInputTwoVal = value,
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
  const myArr = state.arrCheckInput.map(el =>
    el.val === value ? { ...el, check: !el.check } : el
  );

  myArr.filter(el =>
    el.val === value && !el.check
      ? localStorage.removeItem('valCheckInput' + value)
      : null
  );
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
    textInputTwoVal: '',
    selectInputVal: '1912',
    radioInputVal: null,
    arrRadioInput: [
      { label: '1914', check: false, val: '1914' },
      { label: '1916', check: false, val: '1916' },
      { label: '1918', check: false, val: '1918' },
    ],
    checkInputVal: [],
    arrCheckInput: [
      { val: '1941', check: false, id: 'check1' },
      { val: '1939', check: false, id: 'check2' },
      { val: '1945', check: false, id: 'check3' },
    ],
    hasWarn: false,
  };
};

const hasWarnOff = state => {
  return {
    ...state,
    hasWarn: !state.hasWarn,
  };
};
const initialState = () => {
  const getRadio = () => localStorage.getItem('textDadiotVal');

  return {
    textInputVal: localStorage.getItem('textInputVal') || '',
    textInputTwoVal: localStorage.getItem('textInputTwoVal') || '',
    selectInputVal: localStorage.getItem('textSelectVal') || '1912',
    radioInputVal: localStorage.getItem('textDadiotVal') || null,
    arrRadioInput: [
      {
        label: '1914',
        check: getRadio() === '1914' ? true : false,
        val: '1914',
      },
      {
        label: '1916',
        check: getRadio() === '1916' ? true : false,
        val: '1916',
      },
      {
        label: '1918',
        check: getRadio() === '1918' ? true : false,
        val: '1918',
      },
    ],
    checkInputVal: [
      localStorage.getItem('valCheckInput1941'),
      localStorage.getItem('valCheckInput1939'),
      localStorage.getItem('valCheckInput1945'),
    ].filter(el => (el ? el : null)),
    arrCheckInput: [
      {
        val: '1941',
        check: localStorage.getItem('valCheckInput1941') ? true : false,
        id: 'check1',
      },
      {
        val: '1939',
        check: localStorage.getItem('valCheckInput1939') ? true : false,
        id: 'check2',
      },
      {
        val: '1945',
        check: localStorage.getItem('valCheckInput1945') ? true : false,
        id: 'check3',
      },
    ],
    hasWarn: false,
  };
};

const reducer = (state = initialState(), action) => {
  switch (action.type) {
    case 'GET_VALUE_TEXT_INPUT':
      return getValueTextInput(state, action.payload);
    case 'GET_VALUE_TEXT_INPUT_TWO':
      return getValueTextInputTwo(state, action.payload);
    case 'GET_VALUE_SELECT_INPUT':
      return getValueSelectInput(state, action.payload);
    case 'GET_VALUE_RADIO_INPUT':
      return getValueRadioInput(state, action.payload);
    case 'GET_VALUE_CHECK_INPUT':
      return getValueCheckInput(state, action.payload);
    case 'CLEAR_STATE':
      return clearState(state);
    case 'HAS_WARN':
      return hasWarnOff(state);

    default:
      return state;
  }
};

export default reducer;
