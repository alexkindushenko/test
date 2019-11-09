import React from 'react';

import AskForm from '../ask-form';
import Popup from '../popup';

class AskPage extends React.Component {
  state = {
    hasWarn: false,
  };

  turnOff = () => this.setState({ hasWarn: false });

  render() {
    if (this.state.hasWarn) return <Popup turnOff={this.turnOff} />;
    return <AskForm />;
  }
}

export default AskPage;
