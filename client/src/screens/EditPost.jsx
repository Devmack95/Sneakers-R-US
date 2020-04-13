import React from 'react'

const EditPost = (props) => {

  return (
    <div className='editPost'>
      <div className='forms'>
        <h1>Did Something Change?</h1>

        <form>
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
        </form>
      </div>
    </div>
  )
}

export default EditPost