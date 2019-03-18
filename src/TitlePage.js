import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class TitlePage extends Component {
  render() {
    return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                <h2>Tic Tac Toe</h2>
              </p>
                <Link to="/game">Play</Link>
            </header>
          </div>
  );
  }
}

export default TitlePage;
