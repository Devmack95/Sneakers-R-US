import React, { Component } from 'react'
import Home from '../screens/Home'
import Nav from './Nav'
import Footer from './Footer'

class Cointainer extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <>
        <Nav />
        <Home />
        <Footer />
      </>
    )
  }
}

export default Cointainer