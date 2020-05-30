import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Responder from './components/Responder';
import User from './components/User';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Responder />
        </Route>
        <Route path="/users">
          <User />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
