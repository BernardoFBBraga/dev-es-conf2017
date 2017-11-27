import React, { Component } from 'react';
import Clock from './Clock';
import Avatar from './Avatar';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Clock date={this.props.date}/>
        <Avatar picture="https://graph.facebook.com/761497832/picture?type=large"/>
      </div>
    );
  }
}

export default App;
