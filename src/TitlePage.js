import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Popup from "reactjs-popup";

class TitlePage extends Component {
  render() {
    return (
          <div className="App">
            <header className="App-header">
              <p>
                  <h1>Tic Tac Toe</h1>
              </p>
                <Link className="LinkTitle" to="/game">Play</Link>
            </header>
          </div>
  );
  }
}

export default TitlePage;
