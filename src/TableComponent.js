// TableComponent.js

// //
// import logo from './img/logo.svg';
// import logo2 from './img/logo2.svg';
// import logo3 from './img/mukku.png';
// import logo4 from './img/gachaDino.ico';

import React, { Component } from 'react';
import TableRows from './TableRows';

class TableComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            lists: [
                {
                    name: 'Gachapin',
                    value: './img/logo.svg',
                    id: 1
                },
                {
                    name: 'Mukku',
                    value: './img/mukku.png',
                    id: 2
                },
                {
                    name: 'React',
                    value: './img/logo2.svg',
                    id: 3
                },
                {
                    name: 'GachaDino',
                    value: './img/gachaDino.ico',
                    id: 4
                },]
        }
    }
    render() {
        return (
            <table>
                <thead>
                <tr>
                    <td><b>Name</b></td>
                    <td><b>Value</b></td>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.lists.map(list => {return <TableRows name={list.name}
                                                                    value={list.value}
                                                                    key={list.id} />})
                }
                </tbody>
            </table>
        );
    }
}

export default  TableComponent;
