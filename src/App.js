import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TitlePage from "./TitlePage";
import Game from "./GamePage";


class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Route exact path="/" component={TitlePage} />
                    <Route path="/game" component={Game} />
                </div>
            </Router>
        );
    }
}

export default App;
