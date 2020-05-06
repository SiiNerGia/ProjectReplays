import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import ReplaysList from "./components/replays-list.component";
import CreateReplay from "./components/create-replay.component";
import SearchReplay from "./components/search-replay.component";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">

        
        <br/>
        <Route path="/" exact component={ReplaysList} />
        <Route path="/create" exact component={CreateReplay} />
        <Route path="/search" exact component={SearchReplay} />

      
      </div>

    </Router>
    // Hay que introducir un route que tenga los parametros posibles introducidos por un formulario
  );
}

export default App;
