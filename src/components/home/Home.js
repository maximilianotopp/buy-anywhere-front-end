import React, {Component} from 'react';
import {Button} from 'semantic-ui-react';

import logo from './logo.svg';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          <h1>Buy Anywhere Frontend</h1>
          <Button primary>Hello from semantic</Button>
          <img src={logo} className="Home-logo" alt="logo"/>
          <p>
            Edit
            <code>src/Home.js</code>
            and save to reload.
          </p>
          <a
            className="Home-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
          <br/>
          <a
            className="Home-link"
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

export default Home;
