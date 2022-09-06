import React from 'react'

function Products(props) {
  return (
    <div className="products-container">
      <img src={props.img} />
      <h3>{props.model}</h3>
      <p><b>Price: </b>{props.price}</p>
      <p><b>Category: </b>{props.category}</p>
    </div>
  )
}

export default Products