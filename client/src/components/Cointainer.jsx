import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import Auth from './Auth'
import Login from '../screens/Login'
import Register from '../screens/Register'
import Home from '../screens/Home'
import Sneakers from '../screens/Sneakers'
import Accessories from '../screens/Accessories'
import CreateSneaker from '../screens/CreateSneaPage'
import CreateAccessory from '../screens/CreateAccPage'
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
  removeToken,
  postSneaker,
  destroySneaker,
  updateSneaker,
  postAccessory,
  destroyAccessory,
  updateAccessory
}
  from '../services/api-helper'

class Cointainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sneakers: '',
      accessories: '',
      user_data: '',
      currentUser: '',
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

  user = async () => {
    const user_data = await getUserById()
    this.setState({ user_data })
  }

  //================================== Accessories =====================================

  getAccessories = async () => {
    const accessories = await getAllAccessories()
    this.setState({ accessories })
  }

  createAccessory = async (id, accessoryData) => {
    const newAccessory = await postAccessory(id, accessoryData)
    this.setState(prevState => ({
      accessories: [newAccessory, ...prevState.accessories]
    }))
    this.props.history.push('/accessories')
  }

  deleteAccessory = async (accessories) => {
    await destroySneaker(accessories.id)
    this.setState(prevState => ({
      accessories: prevState.accessories.filter(singleAccessory => singleAccessory.id !== accessories.id)
    }))
  }

  //==================================== Sneakers =====================================

  getSneakers = async () => {
    const sneakers = await getAllSneakers()
    this.setState({ sneakers })
  }

  createSneaker = async (id, sneakerData) => {
    const newSneaker = await postSneaker(id, sneakerData)
    this.setState(prevState => ({
      sneakers: [newSneaker, ...prevState.sneakers]
    }))
    this.props.history.push('/sneakers')
  }

  deleteSneaker = async (sneakers) => {
    await destroySneaker(sneakers.id)
    this.setState(prevState => ({
      sneakers: prevState.sneakers.filter(singleSneaker => singleSneaker.id !== sneakers.id)
    }))
  }

  // updateSneaker = async (sneakerItem) => {
  //   const updatedSneaker = await updateSneaker(id, sneakers)
  //   this.setState(prevState => ({
  //     sneakers: prevState.sneakers.map(sneaker => {
  //       return sneaker.id === sneakers.id ? updatedSneaker : sneaker
  //     })
  //   }))
  //   this.props.history.push('/user-page')
  // }

  render() {

    // console.log(this.state.currentUser)

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
                sneakers={this.state.sneakers}
                deleteSneaker={this.deleteSneaker} />
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

          <Route path={'/create-sneaker'} render={(props) => (
            <CreateSneaker
              id={this.state.currentUser.id}
              handleSubmit={this.createSneaker} />
          )} />

          <Route path={'/create-accessory'} render={(props) => (
            <CreateAccessory
              id={this.state.currentUser.id}
              handleSubmit={this.createAccessory} />
          )} />

          {this.state.sneakers &&
            <Route path={'/edit-post'} render={(props) => (
              <EditPost
                sneakers={this.state.sneakers}
                postData={this.state.postData}
                handleChange={this.postChange} />
            )} />
          }

          {this.state.currentUser &&
            <Nav
              User={this.state.currentUser}
              signOut={this.handleLogout}
            />
          }

        </Switch>
      </main>
    )
  }
}

export default withRouter(Cointainer)