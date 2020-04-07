import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../screens/Home'
import Sneakers from '../screens/Sneakers'
import Accessories from '../screens/Accessories'
import Auth from './Auth'

import { getAllSneakers } from '../services/api-helper'

class Cointainer extends Component {
  constructor() {
    super();
    this.state = {
      sneakers: ''
    }
  }

  componentDidMount() {
    this.getSneakers()
  }

  getSneakers = async () => {
    const sneakers = await getAllSneakers()
    this.setState({ sneakers })
  }

  render() {
    return (
      <main>
        <Switch>

          <Route exact path={'/'} component={Home} />

          { this.state.sneakers &&
            <Route path={'/sneakers'} render={(props) => (
              <Sneakers
                sneakers={this.state.sneakers}
              />
            )} />
          }


          <Route path={'/login'} component={Auth} />
          <Route path={'/register'} component={Auth} />

          <Route path={'/accessories'} component={Accessories} />

        </Switch>
      </main>
    )
  }
}

export default Cointainer