import React from 'react';

// This component handles our register form
const Register = (props) => {

  return (
    <div className='register-auth'>

      <div className='forms'>

        <h2>Join The Team!</h2>

        <form onSubmit={props.handleRegister}>

          <h3>Username</h3>
          <input
            name="username"
            type="text"
            value={props.formData.username}
            onChange={props.handleChange}
          />

          <h3>Email</h3>
          <input
            name="email"
            type="text"
            value={props.formData.email}
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
          <button className='register-button'>Register</button>
        </form>

      </div>

    </div>
  );
}

export default Register;