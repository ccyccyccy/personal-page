import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from './HomePage';
import SalesWhale from './SalesWhale';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/saleswhale">
          <SalesWhale />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
  </Router>
  );
}

export default App;

