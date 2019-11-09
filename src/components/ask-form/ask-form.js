import React from 'react';

import './ask-form.css';
import ButtonsRow from '../buttons-row';
import TextRow from '../text-row';
import SelectRow from '../select-row';
import RadioRow from '../radio-row';
import CheckRow from '../check-row';

const AskForm = () => {
  return (
    <div className="ask-form">
      <form>
        <TextRow />
        <SelectRow />
        <RadioRow />
        <CheckRow />
        <ButtonsRow />
      </form>
    </div>
  );
};

export default AskForm;
