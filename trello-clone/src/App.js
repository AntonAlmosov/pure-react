import React, { Component } from 'react';
import uuid from 'uuid'
import './App.css';

import List from './List'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      lists: [{
        id: uuid.v4(),
        listName: 'Phone Features',
        cards:
          [{
            id: uuid.v4(),
            cardName: 'Subwoofer'
            },
            {
            id: uuid.v4(),
            cardName: 'Non porus, washable'
            },
            {
            id: uuid.v4(),
            cardName: 'Wings'
            },
            {
            id: uuid.v4(),
            cardName: 'Beveled Bezel'
            },
            {
            id: uuid.v4(),
            cardName: 'Beveled Bezel'
            },
            {
            id: uuid.v4(),
            cardName: 'Seedless'
            }]
      },
      {
        id: uuid.v4(),
        listName: 'Phone Features',
        cards:
          [{
            id: uuid.v4(),
            cardName: 'Subwoofer'
            },
            {
            id: uuid.v4(),
            cardName: 'Non porus, washable'
            },
            {
            id: uuid.v4(),
            cardName: 'Wings'
            },
            {
            id: uuid.v4(),
            cardName: 'Beveled Bezel'
            },
            {
            id: uuid.v4(),
            cardName: 'Beveled Bezel'
            },
            {
            id: uuid.v4(),
            cardName: 'Seedless'
            }]
      }
    ]}
  }

  render() {
    return (
      <div className="trelloContainer">
        {this.state.lists.map(list =>
          <List list={list} key={list.id}/>
        )}
      </div>
    );
  }
}

export default App;
