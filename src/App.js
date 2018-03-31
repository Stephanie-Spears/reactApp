import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Gachapin! What you doing!</h1>
        </header>
        <p className="App-intro">
          Gachapin, you so silly. Where you going?
        </p>
      </div>
    );
  }
}

export default App;
