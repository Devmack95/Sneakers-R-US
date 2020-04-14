import React from 'react'
import { Link } from 'react-router-dom'

const UserPage = (props) => {

  const { accessories, sneakers } = props

  const showSneakers = () => {
    return sneakers.map((sneaker) => {
      return (
        <div className='items-box' key={sneaker.id}>
          <img src={sneaker.image} alt={sneaker.name} />
          <Link to={'edit-post'}><button>Edit Post</button></Link>
          <button onClick={() => {props.deleteSneaker(sneaker)}}>Delete</button>
        </div>
      )
    })
  }

  const showAccessories = () => {
    return accessories.map((accessory) => {
      return (
        <div className='items-box' key={accessory.id}>
          <img src={accessory.image} alt={accessory.name} />
          <Link to={'edit-post'}><button>Edit Post</button></Link>
          <button onClick={() => {props.deleteAccessory(accessory)}}>Delete</button>
        </div>
      )
    })
  }

  return (
    <>
      <div className='users_nav'>
        <h1>User Page</h1>
        <Link to={'/create-sneaker'}><button>New Sneaker</button></Link>
        <Link to={'/create-accessory'}><button>New Accessory</button></Link>
      </div>

      <div className='items-container'>
        {showSneakers()}
        {showAccessories()}
      </div>
    </>
  )
}

export default UserPage