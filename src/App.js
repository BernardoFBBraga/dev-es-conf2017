import React, { Component } from 'react';
import Clock from './Clock';
import Boxes from './Boxes';
import Loading from './Loading';
import Avatar from './Avatar';
import logo from './logo.svg';
import './App.css';

import Perf from 'react-addons-perf';
window.Perf = Perf;

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
        <Loading date={this.props.date}/>
        <Avatar 
          picture="https://placeimg.com/90/60/animals"
          date={this.props.date.toDateString()}
        />
        <Boxes
          count={parseInt(this.props.date.getSeconds()/6,10)}
        />
      </div>
    );
  }
}

export default App;
