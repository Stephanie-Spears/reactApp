// TableComponent.js

import React, { Component } from 'react';
import TableRows from './TableRows';

class TableComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            lists: [
                {
                    name: 'Gachapin',
                    value: 'Coo Dino'
                },
                {
                    name: 'Mukku',
                    value: 'Coo mop'
                },
                {
                    name: 'MelonBear',
                    value: 'Yummy Tummy'
                }]
        }
    }
    render() {
        return (
            <table>
                <thead>
                <tr>
                    <td>Name</td>
                    <td>Value</td>
                </tr>
                </thead>
                <tbody>
                {this.state.lists.map(list => {
                    return <TableRows name={list.name} value={list.value} />
                })}
                </tbody>
            </table>
        );
    }
}

export default  TableComponent;
