import React, { Component } from 'react';
import logo from './logo.svg';
import TableComponent from './TableComponent'
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            lists: [
                {
                    name: 'STEPH',
                    value: 'BOSS LADY'
                },
            ]
        }
    }

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
          <div className = "TableComponent">
              {this.state.lists.map(table => {
                  return <TableComponent name={this.name} value={this.value}/>
              } )}
          </div>
      </div>

    );
  }
}

export default App;
