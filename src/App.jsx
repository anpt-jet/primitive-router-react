import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { DetailsPage } from './pages/Details';

export const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/details/:id" component={DetailsPage} />
    </Switch>
  </Router>
);

export default App;
