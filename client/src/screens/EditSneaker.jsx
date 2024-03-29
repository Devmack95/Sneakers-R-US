import React, { Component } from 'react'

class EditSneaker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      postData: {
        brand: '',
        name: '',
        description: '',
        image: '',
        price: '',
        id: ''
      },
      selectedSneaker: ''
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

  onChange = (e) => {
    this.setState({
      selectedSneaker: e.target.value
    })
    this.props.sneakers.map((sneaker) => {
      if (e.target.value === sneaker.name) {
        this.setState({
          postData: {
            brand: sneaker.brand,
            name: sneaker.name,
            description: sneaker.description,
            image: sneaker.image,
            price: sneaker.price,
            id: sneaker.id
          }
        })
      }
    })
  }

  sneakersOptions = () => {
    return this.props.sneakers.map((sneaker) => {
      if (this.props.User.id === sneaker.user_id) {
        return (
          <option key={sneaker.id} value={sneaker.name}>{sneaker.name}</option>
        )
      } else {
        return null
      }
    })
  }

  render() {

    return (
      <div className='editPost'>
        <div className='postForm'>
          <h1>Did Something Change?</h1>

          <select value={this.state.selectedSneaker} onChange={this.onChange}>
            <option>Select an Item</option>
            {this.sneakersOptions()}
          </select>

          <form onSubmit={(e) => {
            e.preventDefault()
            this.props.putSneaker(this.state.postData)
          }}>

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

export default EditSneaker