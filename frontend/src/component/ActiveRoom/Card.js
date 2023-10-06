import React from 'react'
import './activeroom.css'
const Card = (props) => {
  return (
    <div className='card'>
    {props.description}
    </div>
  )
}

export default Card
