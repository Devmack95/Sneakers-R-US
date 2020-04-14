import React, { Component } from 'react'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom'
import Login from '../screens/Login'
import Register from '../screens/Register'
import Home from '../screens/Home'
import Sneakers from '../screens/Sneakers'
import Accessories from '../screens/Accessories'
import CreateSneaker from '../screens/CreateSneaPage'
import CreateAccessory from '../screens/CreateAccPage'
import EditSneaker from '../screens/EditSneaker'
import EditAccessory from '../screens/EditAccessory'
import UserPage from '../screens/UserPage'
import Nav from './Nav'

import {
  getAllSneakers,
  getAllAccessories,
  verifyUser,
  loginUser,
  registerUser,
  removeToken,
  postSneaker,
  destroySneaker,
  postAccessory,
  destroyAccessory,
  updateSneaker,
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
    this.handleVerify();
  }
  handleLoginButton = () => {
    this.props.history.push("/login")
  }

  handleLogin = async () => {
    const currentUser = await loginUser(this.state.authFormData);
    this.setState({ currentUser })
    this.props.history.push('/user-page')
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
    localStorage.removeItem('authToken');
    this.setState({
      currentUser: null
    })
    removeToken();
    this.props.history.push('/')
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
    this.props.history.push('/user-page')
  }

  deleteAccessory = async (accessories) => {
    await destroyAccessory(accessories.id)
    this.setState(prevState => ({
      accessories: prevState.accessories.filter(singleAccessory => singleAccessory.id !== accessories.id)
    }))
  }

  putAccessory = async (accessoryItem) => {
    const updatedAccessory = await updateAccessory(accessoryItem, accessoryItem.id)
    this.setState(prevState => ({
      accessories: prevState.accessories.map(accessory => {
        return accessory.id === updatedAccessory.id ? updatedAccessory : accessory
      })
    }))
    this.props.history.push('/user-page')
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
    this.props.history.push('/user-page')
  }

  deleteSneaker = async (sneakers) => {
    await destroySneaker(sneakers.id)
    this.setState(prevState => ({
      sneakers: prevState.sneakers.filter(singleSneaker => singleSneaker.id !== sneakers.id)
    }))
  }

  putSneaker = async (sneakerItem) => {
    console.log(sneakerItem)
    const updatedSneaker = await updateSneaker(sneakerItem, sneakerItem.id)
    this.setState(prevState => ({
      sneakers: prevState.sneakers.map(sneaker => {
        return sneaker.id === updatedSneaker.id ? updatedSneaker : sneaker
      })
    }))
    this.props.history.push('/user-page')
  }

  render() {

    return (
      <main>

        <Nav
          User={this.state.currentUser}
          signOut={this.handleLogout}
        />

        <Switch>

          {this.state.sneakers && this.state.accessories &&
            <Route exact path={'/'} render={(props) => (
              <Home
                accessories={this.state.accessories}
                sneakers={this.state.sneakers} />
            )} />
          }

          <Route path="/login" render={(props) => (
            <Login
              handleLogin={this.handleLogin}
              handleChange={this.authHandleChange}
              formData={this.state.authFormData} />)} />

          <Route path="/register" render={(props) => (
            <Register
              handleRegister={this.handleRegister}
              handleChange={this.authHandleChange}
              formData={this.state.authFormData} />)} />

          {this.state.sneakers && this.state.accessories &&
            <Route path={'/user-page'} render={(props) => (
              <UserPage
                accessories={this.state.accessories}
                sneakers={this.state.sneakers}
                deleteSneaker={this.deleteSneaker}
                deleteAccessory={this.deleteAccessory} />
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

          {this.state.sneakers && this.state.accessories &&
            <Route path={'/edit-sneaker'} render={(props) => (
              <EditSneaker
                putSneaker={this.putSneaker}
                sneakers={this.state.sneakers}
                // accessories={this.state.accessories}
                postData={this.state.postData}
                handleChange={this.postChange} />
            )} />
          }

          {this.state.accessories &&
            <Route path={'/edit-accessory'} render={(props) => (
              <EditAccessory
              accessories={this.state.accessories}
              postData={this.state.postData}
              putAccessory={this.putAccessory}/>
            )} />
          }

          <Route render={() => <Redirect to={{ pathname: "/" }} />} />

        </Switch>
      </main>
    )
  }
}

export default withRouter(Cointainer)