import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => {
  console.log(props)
  return (
    <div className='nav'>

      <div className='logo'>
        <Link to='/'> <h1>Sneakers R' Us</h1> </Link>
      </div>

      <div className='links'>
        <Link to='/sneakers'>Sneakers</Link>
        <Link to='/accessories'>Accessories</Link>
        <Link to='/login'>Login</Link>
      </div>

    </div>
  )
}

export default Nav