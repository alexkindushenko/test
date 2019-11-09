import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { AskPage, AnswerPage } from '../pages';

const App = () => {
  return (
    <div className="container">
      <Switch>
        <Route path="/" component={AskPage} exact />
        <Route path="/answer" component={AnswerPage} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </div>
  );
};

export default App;
