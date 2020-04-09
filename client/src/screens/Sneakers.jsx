import React from 'react'

const Sneakers = (props) => {

  const { sneakers } = props

  const show = () => {
    return sneakers.map((sneaker) => {
      return (
        <div className='items-box' key={sneaker.id}>
          <p>{sneaker.brand}</p>
          <p>{sneaker.name}</p>
          <p>{sneaker.description}</p>
          <p>${sneaker.price}</p>
          <img src={sneaker.image} alt={sneaker.name} />
        </div>
      )
    })
  }

  return (
    <>
      <h1>Sneakers Page</h1>

      <div className='items-container'>
        {show()}
      </div>
    </>
  )
}

export default Sneakers