import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../screens/Home'
import Sneakers from '../screens/Sneakers'
import Accessories from '../screens/Accessories'

class Cointainer extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <main>
        <Switch>

          <Route exact path={'/'} component={Home} />

          <Route path={'/sneakers'} component={Sneakers} />

          <Route path={'/accessories'} component={Accessories} />

        </Switch>
      </main>
    )
  }
}

export default Cointainer