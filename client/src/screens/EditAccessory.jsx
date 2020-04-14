import React, { Component } from 'react'
import { updateAccessory } from '../services/api-helper'

class EditAccessory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      postData: {
        name: '',
        description: '',
        image: '',
        price: ''
      },
      selectedAccessory: ''
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

  updateAccessory = async (accessoryItem) => {
    const updatedAccessory = await updateAccessory(this.state.postData, accessoryItem.id)
    this.setState(prevState => ({
      accessorys: prevState.accessorys.map(accessory => {
        return accessory.id === accessoryItem.id ? updatedAccessory : accessory
      })
    }))
    this.props.history.push('/user-page')
  }

  onChange = (e) => {
    this.setState({
      selectedAccessory: e.target.value
    })
    this.props.accessories.map((accessory) => {
      if (this.state.selectedAccessory === accessory.name) {
        this.setState({
          postData: {
            name: accessory.name,
            description: accessory.description,
            image: accessory.image,
            price: accessory.price
          }
        })
      }
    })
  }

  accessoriesOptions = () => {
    return this.props.accessories.map((accessory) => {
      return (
        <option key={accessory.id} value={accessory.name}>{accessory.name}</option>
      )
    })
  }

  render() {

    return (
      <div className='editPost'>
        <div className='postForm'>
          <h1>Did Something Change?</h1>

          <select value={this.state.selectedAccessory} onChange={this.onChange}>
            <option>Select an Item</option>
            {this.accessoriesOptions()}
          </select>

          <form onSubmit={(e) => {
            e.preventDefault()
            this.updateSneaker(this.selectedAccessory)
          }}>

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

export default EditAccessory