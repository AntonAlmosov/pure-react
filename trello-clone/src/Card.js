import React from 'react'

const Card = ({id, name}) =>

  <div key={id} className='card'>
    {name}
  </div>

export default Card
