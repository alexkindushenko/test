import React from 'react';
import { connect } from 'react-redux';

import AskForm from '../ask-form';
import Popup from '../popup';

const AskPage = ({ hasWarn }) => {
  if (hasWarn) return <Popup />;
  return <AskForm />;
};

const mapStateToProps = ({ hasWarn }) => {
  return {
    hasWarn,
  };
};

export default connect(mapStateToProps)(AskPage);
