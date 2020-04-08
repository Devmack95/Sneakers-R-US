import React, { Component } from 'react'

class CreatePost extends Component {
  constructor() {
    super();
    this.state = {
      brand: '',
      name: '',
      description: '',
      price: '',
      image: ''
    }
  }

  render() {
    return (
      <div className='createPost'>
        <h1>Selling An Item?</h1>

        <form>
          <h3>Brand</h3>
          <input
            name='brand'
            type='text'
            value='brand'
          />

          <h3>Name</h3>
          <input
            name='name'
            type='text'
            value='name'
          />

          <h3>Description</h3>
          <input
            name='description'
            type='text'
            value='description'
          />

          <h3>Price</h3>
          <input
            name='price'
            type='number'
            value='price'
          />

          <h3>Image</h3>
          <input
            name='image'
            type='text'
            value='image'
          />
        </form>
      </div>
    )
  }
}

export default CreatePost