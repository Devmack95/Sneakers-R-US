import React from 'react'

export default function Sneakers(props){

  const { sneakers } = props
  console.log(sneakers)

  const show = () => {
    return sneakers.map((sneaker) => {
      return (
        <div className='sneakers_box' key={sneaker.id}>
          <p>{sneaker.brand}</p>
          <p>{sneaker.name}</p>
          <p>{sneaker.description}</p>
          <p>${sneaker.price}</p>
          <img src={sneaker.image} />
        </div>
      )
    })
  }

  return (
    <>
      <h1>Sneakers Page</h1>
      {show()}
    </>
  )
}