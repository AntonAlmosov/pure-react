import React from 'react'

import ListTittle from './ListTittle'
import Card from './Card'
import AddCard from './AddCard'

const List = ({list}) =>

  <div className="listWrapper">
      <ListTittle listName={list.listName}/>
      {list.cards.map(card =>
        <Card id={card.id} name={card.cardName}/>
      )}
      <AddCard />
  </div>


export default List
