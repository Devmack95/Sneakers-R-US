import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Auth from './Auth'
import Login from '../screens/Login'
import Register from '../screens/Register'
import Home from '../screens/Home'
import Sneakers from '../screens/Sneakers'
import Accessories from '../screens/Accessories'
import CreatePost from '../screens/CreatePost'
import EditPost from '../screens/EditPost'
import UserPage from '../screens/UserPage'
import Nav from './Nav'

import {
  getAllSneakers,
  getAllAccessories,
  verifyUser,
  getUserById,
  loginUser,
  registerUser,
  removeToken
}
  from '../services/api-helper'

class Cointainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sneakers: '',
      accessories: '',
      user_data: '',
      currentUser: null,
      authFormData: {
        username: "",
        password: ""
      }
    }
  }

  componentDidMount() {
    this.getSneakers()
    this.getAccessories()
    this.user()
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

  getSneakers = async () => {
    const sneakers = await getAllSneakers()
    this.setState({ sneakers })
  }

  getAccessories = async () => {
    const accessories = await getAllAccessories()
    this.setState({ accessories })
  }

  user = async () => {
    const user_data = await getUserById()
    this.setState({ user_data })
  }

  render() {
    return (
      <main>
        <Switch>

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
          
          {this.state.sneakers && this.state.accessories &&
            <Route exact path={'/'} render={(props) => (
              <Home
                accessories={this.state.accessories}
                sneakers={this.state.sneakers} />
            )} />
          }

          {this.state.sneakers && this.state.accessories &&
            <Route exact path={'/user-page'} render={(props) => (
              <UserPage
                accessories={this.state.accessories}
                sneakers={this.state.sneakers} />
            )} />
          }

          {this.state.sneakers &&
            <Route path={'/sneakers'} render={(props) => (
              <Sneakers
                sneakers={this.state.sneakers} />
            )} />
          }

          {this.state.accessories &&
            <Route path={'/accessories'} render={(props) => (
              <Accessories
                accessories={this.state.accessories} />
            )} />

          }

          <Route path={'/login'} component={Auth} />
          <Route path={'/register'} component={Auth} />
          <Route path={'/create-post'} component={CreatePost} />
          <Route path={'/edit-post'} component={EditPost} />

          {this.state.user_data &&
            <Nav
              User={this.state.user_data}
            />
          }


        </Switch>
      </main>
    )
  }
}

export default Cointainer