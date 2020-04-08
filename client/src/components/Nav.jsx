import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => {
  console.log(props.User)
  return (
    <div className='nav'>
      <Link to='/'> <h1>Sneakers R' Us</h1> </Link>
      <Link to='/sneakers'>Sneakers</Link>
      <Link to='/accessories'>Accessories</Link>
      {
      
      }
      <Link to='/login'>Login</Link>
      <hr />
    </div>
  )
}

export default Nav