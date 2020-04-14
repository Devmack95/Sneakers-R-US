import React from 'react';

const Register = (props) => {

  const {handleChange, handleRegister, formData} = props

  return (
    <div className='register-auth'>

      <div className='forms'>

        <h2>Join The Team!</h2>

        <form onSubmit={handleRegister}>

          <h3>Username</h3>
          <input
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
          />

          <h3>Email</h3>
          <input
            name="email"
            type="text"
            value={formData.email}
            onChange={handleChange}
          />

          <h3>Password</h3>
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />

          <br />
          <button>Register</button>
        </form>

      </div>

    </div>
  );
}

export default Register;