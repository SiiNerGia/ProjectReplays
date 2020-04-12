import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import ReplaysList from "./components/replays-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateReplay from "./components/create-replay.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">

        
        <br/>
        <Route path="/" exact component={ReplaysList} />
        <Route path="/edit/:id" exact component={EditExercise} />
        <Route path="/create" exact component={CreateReplay} />
        <Route path="/user" exact component={CreateUser} />
      </div>

    </Router>
  );
}

export default App;
