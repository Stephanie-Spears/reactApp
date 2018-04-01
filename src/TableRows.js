// TableRows.js
import logo from './img/logo.svg';


import React, { Component } from 'react';

class TableRows extends Component {
    render() {
        return (
            <tr>

                <td>{this.props.name}</td>
                <td>{this.props.value}</td>
                {/*<td><img src="./img/logo.svg" className="App-logo" alt="" /></td>*/}
            </tr>
        );
    }
}

export default TableRows;