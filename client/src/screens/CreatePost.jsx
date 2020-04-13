import React, { Component } from 'react'

export default class CreatePost extends Component {
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

  render() {
    return (
      <div className='createPost'>

        <div className='postForm'>

          <h1>Selling An Item?</h1>

          <form onSubmit={event => {
            event.preventDefault()
            this.props.handleSubmit(this.props.id, this.state.postData)
          }}>

            <h3>What Are You Selling</h3>
            {/* <select>
            <option value='Sneaker'>Sneaker</option>
            <option value='Accessory'>Accessory</option>
          </select> */}

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
            <button>Create</button>
          </form>
        </div>
      </div>
    )
  }
}