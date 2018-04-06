import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';

import Projects from './Components/Projects.js';
import Actions from './Components/Actions.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Route exact path="/projects" component={Projects} />
      </div>
    );
  }
}

export default App;
