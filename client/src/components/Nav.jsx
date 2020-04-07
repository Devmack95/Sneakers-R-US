import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav'>
      <h1>Sneakers R' Us</h1>
      <Link to='/sneakers'>Sneakers</Link>
      <Link to='/accessories'>Accessories</Link>
      <Link to='/login'>Login</Link>
    </div>
  )
}

export default Nav