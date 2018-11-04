import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <br/>
          <a 
            className="App-link"
            href="http://i.imgur.com/i6JqI0Y.gif"
            target="_blank"
            rel="noopener noreferrer">
            Or Learn Angular or Vue.js
          </a>
        </header>
      </div>
    );
  }
}

export default App;
