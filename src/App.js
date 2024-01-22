import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RegistrationContainer from './containers/RegistrationContainer';

const App = () => {
  return (
    <Router>
      <Route path="/" component={RegistrationContainer} />
    </Router>
  );
};

export default App;
