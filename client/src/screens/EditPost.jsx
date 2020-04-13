import React, { Component } from 'react'
import { updateSneaker } from '../services/api-helper'

class EditPost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      postData: {
        brand: '',
        name: '',
        description: '',
        image: '',
        price: ''
      }
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState(prevState => ({
      postData: {
        ...prevState.postData,
        [name]: value
      }
    }))
  }

  updateSneaker = async (sneakerItem) => {
    const updatedSneaker = await updateSneaker(this.state.postData, sneakerItem.id)
    this.setState(prevState => ({
      sneakers: prevState.sneakers.map(sneaker => {
        return sneaker.id === sneakerItem.id ? updatedSneaker : sneaker
      })
    }))
    this.props.history.push('/user-page')
  }

  show = () => {
    return this.props.sneakers.map((sneaker) => {
      return (
          <option value={sneaker.name}>{sneaker.name}</option>
      )
    })
  }

  render() {

    return (
      <div className='editPost'>
        <div className='postForm'>
          <h1>Did Something Change?</h1>
          <select>
            {this.show()}
          </select>
          <form>
            <h3>Brand</h3>
            <input
              name='brand'
              type='text'
              value={this.state.postData.brand}
              onChange={this.handleChange}
            />

            <h3>Name</h3>
            <input
              name='name'
              type='text'
              value={this.state.postData.name}
              onChange={this.handleChange}
            />

            <h3>Description</h3>
            <input
              name='description'
              type='text'
              value={this.state.postData.description}
              onChange={this.handleChange}
            />

            <h3>Price</h3>
            <input
              name='price'
              type='number'
              value={this.state.postData.price}
              onChange={this.handleChange}
            />

            <h3>Image</h3>
            <input
              name='image'
              type='text'
              value={this.state.postData.image}
              onChange={this.handleChange}
            />

            <br />
            <button>Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default EditPost