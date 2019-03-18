import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class TitlePage extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <h2>Tic Tac Toe</h2>
          </p>
          <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
          >
            Play
          </a>
        </header>
      </div>
    );
  }
}

export default TitlePage;
