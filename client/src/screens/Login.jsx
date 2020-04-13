import React from 'react';
import { Link } from 'react-router-dom';

const Login = (props) => {

  return (
    <div className='login-auth'>

      <div className='forms'>

        <h2>Welcome Back!</h2>

        <form onSubmit={(e) => {
          e.preventDefault();
          props.handleLogin();
        }} >

          <h3>Username</h3>
          <input
            name="username"
            type="text"
            value={props.formData.username}
            onChange={props.handleChange}
          />
          <h3>Password</h3>
          <input
            name="password"
            type="password"
            value={props.formData.password}
            onChange={props.handleChange}
          />

          <br />
          <button>Login</button>

          <p>Not a user sign up here!</p>
          <Link to="/register">Register</Link>

        </form>

      </div>

    </div>
  );
}

export default Login;