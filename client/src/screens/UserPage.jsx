import React from 'react'
import { Link } from 'react-router-dom'

const UserPage = (props) => {

  const { accessories, sneakers } = props

  const showSneakers = () => {
    return sneakers.map((sneaker) => {
      return (
        <div className='sneakers_box' key={sneaker.id}>
          {/* <p>{sneaker.brand}</p>
          <p>{sneaker.name}</p>
          <p>{sneaker.description}</p>
          <p>${sneaker.price}</p> */}
          <img src={sneaker.image} alt={sneaker.name} />
        </div>
      )
    })
  }

  const showAccessories = () => {
    return accessories.map((accessory) => {
      return (
        <div className='accessory_box' key={accessory.id}>
          <img src={accessory.image} alt={accessory.name} />
          {/* <p>{accessory.name}</p>
          <p>{accessory.description}</p>
          <p>${accessory.price}</p> */}
        </div>
      )
    })
  }

  return (
    <>
      <div className='users_nav'>
        <Link to={'/create-post'}>Create Post</Link>
        <h1>User Page</h1>
        <p>Click a Item to Edit</p>
      </div>

      <div className='myitems'>
        {showSneakers()}
        {showAccessories()}
      </div>

    </>
  )
}

export default UserPage