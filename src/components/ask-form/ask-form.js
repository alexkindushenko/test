import React, { Fragment } from 'react';

import './ask-form.css';
import ButtonsRow from '../buttons-row';
import TextRow from '../text-row';
import SelectRow from '../select-row';
import RadioRow from '../radio-row';
import CheckRow from '../check-row';
import TextRowTwo from '../text-row-two';

const AskForm = () => {
  return (
    <Fragment>
      <h1 className="display-4 head-ask">Опросник с истории</h1>
      <div className="ask-form">
        <form>
          <TextRow />
          <TextRowTwo />
          <SelectRow />
          <RadioRow />
          <CheckRow />
          <ButtonsRow />
        </form>
      </div>
    </Fragment>
  );
};

export default AskForm;
