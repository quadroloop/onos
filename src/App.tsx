import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Responder from './components/Responder';
import User from './components/User';
import io from 'socket.io-client';
import { API_URL } from './components/Utilities';
import swal from 'sweetalert2'

const socket = io(API_URL)

function App() {

  socket.on("report", (data) => {
    localStorage.currentIncident = JSON.parse(data)
    swal.fire({
      "icon": "error",
      "title": "New Incident Report",
      "text": "there is a new incident report! please recheck the incidents tab to review"
    })
  })


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
