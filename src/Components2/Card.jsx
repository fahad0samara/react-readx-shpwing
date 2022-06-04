import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
const Card = ({item}) => {
  return (
    <div>

    <img
      className="d-block w-100"
     sre={item.image}
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>{item.name}</h5>
      <p>{item.price}.</p>
    </Carousel.Caption>
 

    </div>
  )
}

export default Card