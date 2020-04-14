import React from 'react'

const Accessories = (props) => {

  const { accessories } = props

  const show = () => {
    return accessories.map((accessory) => {
      return (
        <div className='items-box' key={accessory.id}>
          <img src={accessory.image} alt={accessory.name} />
          <p>{accessory.name}</p>
          <p>{accessory.description}</p>
          <p>${accessory.price}</p>
        </div>
      )
    })
  }

  return (
    <>
      
      <div className='items-container'>
        {show()}
      </div>
      
    </>
  )
}

export default Accessories