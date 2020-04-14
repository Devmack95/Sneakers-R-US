import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => {

  return (
    <div className='nav'>

      <div className='logo'>
        <Link to='/'><img src='https://i.imgur.com/NTqnblE.png' alt="Sneakers R' Us" /></Link>
      </div>

      <div className='links'>
        <Link to='/sneakers'>Sneakers</Link>
        <Link to='/accessories'>Accessories</Link>

        {props.User ?
          <>
            <Link to='/user-page'>{props.User.username}</Link>
            <button onClick={props.signOut}>LogOut</button>
          </>
          :
          <Link to='/login'>Login</Link>
        }
      </div>

    </div>
  )
}

export default Nav