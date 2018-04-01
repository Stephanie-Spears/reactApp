
import React, { Component } from 'react';
import Delay from 'react-delay';

import logo from './img/logo.svg';
import logo2 from './img/logo2.svg';
import logo3 from './img/mukku.png';
import logo4 from './img/gachaDino.ico';
import TableComponent from './TableComponent';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            tables: [
                {
                    table_title: 'TABLE ONE',
                    id: 1,
                }
            ]
        }
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
            <Delay wait={10000}>
                <img src={logo3} className="App-logo" alt="logo" />
            </Delay>

            <Delay wait={5000}>
                <img src={logo2} className="App-logo" alt="logo" />
            </Delay>

                <img src={logo} className="App-logo" alt="logo" />

            <Delay wait={5000}>
            <img src={logo2} className="App-logo" alt="logo" />
            </Delay>

            <Delay wait={10000}>
                <img src={logo4} className="App-logo" alt="logo" />
            </Delay>
            <h1 className="App-title">Gachapin! What you doing!</h1>
        </header>
        <p className="App-intro">
          Gachapin, you so silly. Where you going?
        </p>
          <div className='TableComponent'>
              <h1>{this.state.tables.table_title}</h1>

          </div>
          <div className = "TableComponent">
              {this.state.tables.map(tables => {return <TableComponent table_title={tables.table_title}
                                                                              key={tables.id}/>
              })}
          </div>
      </div>

    );
  }

}



export default App;
