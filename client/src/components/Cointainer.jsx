import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../screens/Home'
import Sneakers from '../screens/Sneakers'
import Accessories from '../screens/Accessories'
import Auth from './Auth'

import { getAllSneakers, getAllAccessories } from '../services/api-helper'

class Cointainer extends Component {
  constructor() {
    super();
    this.state = {
      sneakers: '',
      accessories: ''
    }
  }

  componentDidMount() {
    this.getSneakers()
    this.getAccessories()
  }

  getSneakers = async () => {
    const sneakers = await getAllSneakers()
    this.setState({ sneakers })
  }

  getAccessories = async () => {
    const accessories = await getAllAccessories()
    this.setState({ accessories })
  }

  render() {
    return (
      <main>
        <Switch>

          {this.state.sneakers && this.state.accessories &&
            <Route exact path={'/'} render={(props) => (
              <Home
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


        </Switch>
      </main>
    )
  }
}

export default Cointainer