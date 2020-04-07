import React from 'react'

const Accessories = (props) => {

  const { accessories } = props
  console.log(accessories)

  const show = () => {
    return accessories.map((accessories) => {
      return (
        <div className='accessories_box' key={accessories.id}>
          <img src={accessories.image} alt={accessories.name}/>
          <p>{accessories.name}</p>
          <p>{accessories.description}</p>
          <p>${accessories.price}</p>
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