import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Project Replays</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Replays</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create New Replay</Link>
          </li>
          <li className="navbar-item">
          <Link to="/search" className="nav-link">Search Replay</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}
