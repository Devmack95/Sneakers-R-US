import React from 'react'
import { Link } from 'react-router-dom'

const UserPage = (props) => {

  const { accessories, sneakers } = props

  const showSneakers = () => {
    return sneakers.map((sneaker) => {
      if (props.User.id === sneaker.user_id) {
        return (
          <div className='items-box' key={sneaker.id}>
            <img src={sneaker.image} alt={sneaker.name} />
            <br />
            <button onClick={() => {props.deleteSneaker(sneaker)}}>Delete</button>
          </div>
        )
      } else {
        return null
      }
    })
  }

  const showAccessories = () => {
    return accessories.map((accessory) => {
      if (props.User.id === accessory.user_id) {
        return (
          <div className='items-box' key={accessory.id}>
            <img src={accessory.image} alt={accessory.name} />
            <br />
            <button onClick={() => { props.deleteAccessory(accessory) }}>Delete</button>
          </div>
        )
      } else {
        return null
      }
    })
  }

  return (
    <>
      <div className='users_nav'>
        <Link to={'/create-sneaker'}><button>New Sneaker</button></Link>
        <Link to={'/create-accessory'}><button>New Accessory</button></Link>
        <Link to={'edit-sneaker'}><button>Edit Sneaker</button></Link>
        <Link to={'edit-accessory'}><button>Edit Accessory</button></Link>
      </div>

      <div className='items-container'>
        {showSneakers()}
        {showAccessories()}
      </div>
    </>
  )
}

export default UserPage