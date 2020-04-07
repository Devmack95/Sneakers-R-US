import React from 'react'

const Accessories = (props) => {

  const { accessories } = props
  console.log(accessories)

  const show = () => {
    return accessories.map((accessory) => {
      return (
        <div className='accessory_box' key={accessory.id}>
          <img src={accessory.image} alt={accessory.name}/>
          <p>{accessory.name}</p>
          <p>{accessory.description}</p>
          <p>${accessory.price}</p>
        </div>
      )
    })
  }

  return (
    <>
      <h1>Accessories Page</h1>
      {show()}
    </>
  )
}

export default Accessories