import React from 'react'

const CreatePost = (props) => {

  return (
    <div className='createPost'>

      <div className='postForm'>

        <h1>Selling An Item?</h1>

        <form>

          <h3>What Are You Selling</h3>
          <select>
            <option value='Sneaker'>Sneaker</option>
            <option value='Accessory'>Accessory</option>
          </select>

          <h3>Brand</h3>
          <input
            name='brand'
            type='text'
            value={props.postData.brand}
            onChange={props.handleChange}
          />

          <h3>Name</h3>
          <input
            name='name'
            type='text'
            value={props.postData.name}
            onChange={props.handleChange}
          />

          <h3>Description</h3>
          <input
            name='description'
            type='text'
            value={props.postData.description}
            onChange={props.handleChange}
          />

          <h3>Price</h3>
          <input
            name='price'
            type='number'
            value={props.postData.price}
            onChange={props.handleChange}
          />

          <h3>Image</h3>
          <input
            name='image'
            type='text'
            value={props.postData.image}
            onChange={props.handleChange}
          />

          <br />
          <button>Create</button>
        </form>
      </div>
    </div>
  )
}

export default CreatePost