import React, { Component } from 'react';
import Login from '../screens/Login'
import Register from '../screens/Register'
import {Route} from 'react-router-dom'

import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken
} from '../services/api-helper';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      authFormData: {
        email: "",
        username: "",
        password: ""
      }
    };
  }

  componentDidMount = () => {
    this.handleVerify();
  }

  handleLoginButton = () => {
    this.props.history.push("/login")
  }

  handleLogin = async () => {
    const currentUser = await loginUser(this.state.authFormData);
    this.setState({ currentUser })
  }

  handleRegister = async (e) => {
    e.preventDefault();
    const currentUser = await registerUser(this.state.authFormData);
    this.setState({ currentUser })
  }

  handleVerify = async () => {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({ currentUser })
    }
  }

  handleLogout = () => {
    localStorage.removeItem("jwt");
    this.setState({
      currentUser: null
    })
    removeToken();
  }

  authHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value
      }
    }));
  }

  render() {
    return (
      <>
        <Route exact path="/login" render={(props) => (
          <Login
            handleLogin={this.handleLogin}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} />)} />

        <Route exact path="/register" render={(props) => (
          <Register
            handleRegister={this.handleRegister}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} />)} />
      </>
    );
  }
}

export default Landing;